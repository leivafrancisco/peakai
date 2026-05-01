"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const URLS = {
  nueva_sesion: "https://n8n-n8n.nhuls8.easypanel.host/webhook/sonrisa-dental/chat/nueva-sesion",
  mensaje:      "https://n8n-n8n.nhuls8.easypanel.host/webhook/sonrisa-dental/chat/mensaje",
};

type Role = "agent" | "user";
interface Message { id: number; text: string; role: Role }

export default function ChatWidget() {
  const { lang } = useLang();
  const t = (es: string, en: string) => (lang === "es" ? es : en);

  const [open,    setOpen]    = useState(false);
  const [chatId,  setChatId]  = useState<string | null>(null);
  const [msgs,    setMsgs]    = useState<Message[]>([]);
  const [input,   setInput]   = useState("");
  const [busy,    setBusy]    = useState(false);
  const [typing,  setTyping]  = useState(false);
  const [inited,  setInited]  = useState(false);
  const [error,   setError]   = useState(false);
  const [unread,  setUnread]  = useState(0);

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef    = useRef<HTMLTextAreaElement>(null);
  const idCounter   = useRef(0);

  const addMsg = (text: string, role: Role) => {
    idCounter.current += 1;
    setMsgs(prev => [...prev, { id: idCounter.current, text, role }]);
  };

  const scrollBottom = () => {
    setTimeout(() => {
      messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
    }, 50);
  };

  useEffect(() => { scrollBottom(); }, [msgs, typing]);

  /* Open → init session once, focus input */
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    setUnread(0);
    if (!inited) initSession();
  }, [open]);

  const initSession = async () => {
    setInited(true);
    setTyping(true);
    try {
      const res  = await fetch(URLS.nueva_sesion);
      const data = await res.json();
      setChatId(data.chat_id);
      setTyping(false);
      if (data.greeting) addMsg(data.greeting, "agent");
    } catch {
      setTyping(false);
      setError(true);
    }
  };

  const sendMessage = async () => {
    const content = input.trim();
    if (!content || busy || !chatId) return;

    setBusy(true);
    setInput("");
    addMsg(content, "user");
    setTyping(true);

    try {
      const res  = await fetch(URLS.mensaje, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ chat_id: chatId, content }),
      });
      const data = await res.json();
      setTyping(false);
      if (data.response) {
        addMsg(data.response, "agent");
        if (!open) setUnread(u => u + 1);
      }
    } catch {
      setTyping(false);
      addMsg(t("Lo siento, ocurrió un error. Intentá de nuevo.", "Sorry, an error occurred. Try again."), "agent");
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: "min(420px, calc(100vw - 32px))",
              height: "min(560px, calc(100vh - 120px))",
              background: "#0D1626",
              border: "1px solid rgba(0,245,196,0.2)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
              style={{ background: "rgba(0,245,196,0.07)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(0,245,196,0.15)" }}
              >
                🦷
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Ale · Sonrisa Dental</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {t("Recepcionista virtual", "Virtual receptionist")}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesRef}
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
              style={{ scrollbarWidth: "none" }}
            >
              {error ? (
                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {t("Error al conectar. Recargá la página.", "Connection error. Reload the page.")}
                </p>
              ) : msgs.length === 0 && !typing ? (
                <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {t("Iniciando conversación...", "Starting conversation...")}
                </p>
              ) : null}

              {msgs.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] px-4 py-2.5 text-sm leading-relaxed"
                    style={
                      msg.role === "agent"
                        ? {
                            background: "rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.88)",
                            borderRadius: "18px 18px 18px 4px",
                          }
                        : {
                            background: "linear-gradient(135deg, #00F5C4, #00C9A7)",
                            color: "#080E1A",
                            fontWeight: 500,
                            borderRadius: "18px 18px 4px 18px",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div
                      className="px-4 py-3 flex gap-1.5 items-center"
                      style={{ background: "rgba(255,255,255,0.07)", borderRadius: "18px 18px 18px 4px" }}
                    >
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{ background: "rgba(255,255,255,0.4)" }}
                          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div
              className="flex items-end gap-3 px-4 py-3 flex-shrink-0"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={e => {
                  setInput(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = Math.min(e.target.scrollHeight, 80) + "px";
                }}
                onKeyDown={handleKey}
                disabled={busy || !chatId || error}
                placeholder={t("Escribí tu mensaje...", "Write your message...")}
                className="flex-1 resize-none rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.88)",
                  maxHeight: 80,
                  scrollbarWidth: "none",
                }}
              />
              <button
                onClick={sendMessage}
                disabled={busy || !chatId || !input.trim() || error}
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #00F5C4, #00C9A7)",
                  opacity: !chatId || !input.trim() || busy || error ? 0.4 : 1,
                  cursor: !chatId || !input.trim() || busy || error ? "not-allowed" : "pointer",
                }}
              >
                <svg className="w-4 h-4 text-[#080E1A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: open
            ? "rgba(255,255,255,0.12)"
            : "linear-gradient(135deg, #00F5C4, #00C9A7)",
          boxShadow: open ? "none" : "0 0 28px rgba(0,245,196,0.4)",
          border: open ? "1px solid rgba(255,255,255,0.15)" : "none",
        }}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {/* Pulse ring when closed */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ background: "rgba(0,245,196,0.3)" }}
          />
        )}

        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5"
              style={{ color: "rgba(255,255,255,0.7)" }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0,  opacity: 1 }}
              exit={{    rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-[#080E1A]"
              fill="currentColor" viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        <AnimatePresence>
          {unread > 0 && !open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{    scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "#ef4444" }}
            >
              {unread}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
