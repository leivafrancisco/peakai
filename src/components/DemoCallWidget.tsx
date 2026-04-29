"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const TOKEN_URLS: Record<string, string> = {
  es: "https://n8n-n8n.nhuls8.easypanel.host/webhook/sonrisa-dental/web-call-token",
  en: "https://n8n-n8n.nhuls8.easypanel.host/webhook/sonrisa-dental/web-call-token", // reemplazá con el webhook del agente en inglés
};

type CallState = "idle" | "loading" | "active" | "ended" | "error";

export default function DemoCallWidget() {
  const { lang } = useLang();
  const [state, setState] = useState<CallState>("idle");
  const clientRef = useRef<import("retell-client-js-sdk").RetellWebClient | null>(null);

  const t = (es: string, en: string) => (lang === "es" ? es : en);

  const statusText: Record<CallState, string> = {
    idle:    t("Probá a Ale, nuestra recepcionista IA", "Try Ale, our AI receptionist"),
    loading: t("Conectando...", "Connecting..."),
    active:  t("Hablando con Ale ·  Toca para colgar", "Talking with Ale · Tap to hang up"),
    ended:   t("¡Llamada finalizada! Hasta pronto 👋", "Call ended! See you soon 👋"),
    error:   t("No se pudo conectar. Intentá de nuevo.", "Couldn't connect. Try again."),
  };

  useEffect(() => {
    return () => { clientRef.current?.stopCall(); };
  }, []);

  const startCall = async () => {
    setState("loading");
    try {
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const client = new RetellWebClient();
      clientRef.current = client;

      client.on("call_started", () => setState("active"));
      client.on("call_ended",   () => setState("ended"));
      client.on("error",        () => setState("error"));

      const res = await fetch(TOKEN_URLS[lang] ?? TOKEN_URLS.es);
      const { access_token } = await res.json();
      await client.startCall({ accessToken: access_token });
    } catch {
      setState("error");
    }
  };

  const stopCall = () => {
    clientRef.current?.stopCall();
    setState("ended");
  };

  const handleClick = () => {
    if (state === "active")       stopCall();
    else if (state !== "loading") startCall();
  };

  const isLoading = state === "loading";
  const isActive  = state === "active";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="mt-10 flex flex-col items-center"
    >
      {/* Card */}
      <div
        className="relative flex items-center gap-5 rounded-2xl px-6 py-5 shadow-xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          maxWidth: 440,
          width: "100%",
        }}
      >
        {/* Glow when active */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                boxShadow: "0 0 40px rgba(0,245,196,0.18)",
                border: "1px solid rgba(0,245,196,0.35)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={handleClick}
          disabled={isLoading}
          whileHover={!isLoading ? { scale: 1.06 } : {}}
          whileTap={!isLoading ? { scale: 0.94 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg focus:outline-none"
          style={{
            background: isActive
              ? "linear-gradient(135deg, #ef4444, #dc2626)"
              : isLoading
              ? "rgba(255,255,255,0.1)"
              : "linear-gradient(135deg, #00F5C4, #00C9A7)",
            boxShadow: isActive
              ? "0 0 24px rgba(239,68,68,0.45)"
              : isLoading
              ? "none"
              : "0 0 24px rgba(0,245,196,0.4)",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          aria-label={isActive ? "Colgar" : "Llamar"}
        >
          {/* Pulse ring when active */}
          {isActive && (
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{ background: "rgba(239,68,68,0.35)" }}
            />
          )}

          {isLoading ? (
            <motion.svg
              className="w-7 h-7 text-white/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              fill="none" viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20" />
            </motion.svg>
          ) : isActive ? (
            /* End-call icon */
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.47 1.66C2.8 1.66 1 3.53 1 5.27c0 1.63.7 3.12 1.63 4.43C5.28 13.27 10.73 18.72 14.3 21.37c1.31.93 2.8 1.63 4.43 1.63 1.74 0 3.61-1.8 3.61-3.47 0-.78-.41-1.52-1.04-1.95l-3.57-2.39c-.63-.42-1.44-.37-2.02.12l-1.19 1.01c-.35.3-.87.28-1.2-.04l-4.62-4.62c-.32-.33-.34-.85-.04-1.2l1.01-1.19c.49-.58.54-1.39.12-2.02L7.41 4.68c-.43-.63-1.17-1.02-1.95-1.02z"/>
            </svg>
          ) : (
            /* Phone icon */
            <svg className="w-7 h-7 text-[#080E1A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          )}
        </motion.button>

        {/* Text content */}
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-bold text-sm">Ale</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ background: "rgba(0,245,196,0.12)", color: "#00F5C4" }}
            >
              {t("Recepcionista IA · Demo", "AI Receptionist · Demo")}
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={state}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {statusText[state]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Live indicator */}
        <div className="flex-shrink-0 flex items-center gap-1.5">
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: isActive ? "#00F5C4" : "rgba(255,255,255,0.2)" }}
            animate={isActive ? { opacity: [1, 0.3, 1] } : {}}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="text-xs font-semibold" style={{ color: isActive ? "#00F5C4" : "rgba(255,255,255,0.25)" }}>
            {isActive ? "LIVE" : ""}
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
        {t("Demo real · Clínica Dental Sonrisa", "Live demo · Sonrisa Dental Clinic")}
      </p>
    </motion.div>
  );
}
