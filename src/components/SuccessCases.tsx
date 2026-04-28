"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import AnimateIn from "@/components/ui/AnimateIn";

/* ── Icons ───────────────────────────────────────────────── */
const ToothIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 2C9 2 6 4 6 7c0 1.5.5 3 1 4.5C8 14 8 17 9 20c.3 1 .8 2 2 2s1.5-1 2-2c.5-1.5.7-3 1-4.5.3-1.5.5-3 1-4.5.5-1.5 1-3 1-4.5 0-3-2.5-5-4-5z"
    />
  </svg>
);

const CalIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const PhoneTransferIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const SmsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const CancelIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

/* ── Data ────────────────────────────────────────────────── */
const capabilities = [
  {
    icon: <CalIcon />,
    label: { es: "Reservas en Cal.com", en: "Bookings via Cal.com" },
    desc: { es: "Agenda citas directamente en Cal.com según disponibilidad real", en: "Books appointments directly in Cal.com based on real availability" },
  },
  {
    icon: <CalIcon />,
    label: { es: "Sync con Google Calendar", en: "Google Calendar Sync" },
    desc: { es: "Sincroniza y consulta disponibilidad en tiempo real con Google Calendar", en: "Syncs and checks real-time availability with Google Calendar" },
  },
  {
    icon: <CancelIcon />,
    label: { es: "Cancelación de reservas", en: "Appointment cancellation" },
    desc: { es: "Cancela citas existentes sin necesidad de intervención humana", en: "Cancels existing appointments without human intervention" },
  },
  {
    icon: <SearchIcon />,
    label: { es: "Búsqueda de reservas", en: "Appointment lookup" },
    desc: { es: "Encuentra y confirma citas existentes del paciente al instante", en: "Instantly finds and confirms a patient's existing appointments" },
  },
  {
    icon: <PhoneTransferIcon />,
    label: { es: "Transferencia a humano", en: "Human handoff" },
    desc: { es: "Transfiere la llamada a un recepcionista cuando la situación lo requiere", en: "Transfers the call to a receptionist when the situation requires it" },
  },
  {
    icon: <SmsIcon />,
    label: { es: "Confirmación y recordatorio SMS", en: "SMS confirmation & reminder" },
    desc: { es: "Envía confirmación inmediata y recordatorio 24h antes de la cita por SMS", en: "Sends immediate confirmation and 24h reminder SMS before the appointment" },
  },
];

const conversation = [
  { role: "agent", text: { es: "Clínica Dental Sonrisa, ¿en qué le puedo ayudar?", en: "Sonrisa Dental Clinic, how can I help you?" } },
  { role: "patient", text: { es: "Quiero agendar una limpieza dental para el jueves.", en: "I'd like to schedule a dental cleaning for Thursday." } },
  { role: "agent", text: { es: "Perfecto. Tengo disponibilidad el jueves 1 de mayo a las 10:00 y a las 15:30. ¿Cuál prefiere?", en: "Perfect. I have availability on Thursday May 1st at 10:00 AM and 3:30 PM. Which do you prefer?" } },
  { role: "patient", text: { es: "A las 10, por favor.", en: "10 AM, please." } },
  { role: "agent", text: { es: "Listo, cita confirmada para el jueves 1 de mayo a las 10:00. Le enviaré un SMS de confirmación ahora mismo.", en: "Done! Your appointment is confirmed for Thursday May 1st at 10:00 AM. I'll send you a confirmation SMS right now." } },
];

/* ── Component ───────────────────────────────────────────── */
export default function SuccessCases() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => text[lang];

  return (
    <section className="py-28" style={{ backgroundColor: "#060C18" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
          >
            {t({ es: "Caso de Éxito", en: "Success Case" })}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-5 tracking-tight">
            {t({ es: "Agente de llamadas para", en: "Call agent for" })}{" "}
            <span style={{ color: "#00F5C4" }}>
              {t({ es: "Clínica Dental", en: "Dental Clinic" })}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t({
              es: "Un agente que atiende llamadas, gestiona citas y libera a tu recepcionista de tareas repetitivas — las 24 horas, los 7 días de la semana.",
              en: "An agent that handles calls, manages appointments, and frees your receptionist from repetitive tasks — 24/7.",
            })}
          </p>
        </AnimateIn>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,245,196,0.05) 0%, rgba(0,119,255,0.05) 100%)",
            border: "1px solid rgba(0,245,196,0.15)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left — capabilities */}
            <div className="p-8 lg:p-12">
              {/* Industry badge */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,245,196,0.12)", color: "#00F5C4" }}
                >
                  <ToothIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00F5C4" }}>
                    {t({ es: "Industria", en: "Industry" })}
                  </p>
                  <p className="text-white font-bold text-lg leading-tight">
                    {t({ es: "Salud · Odontología", en: "Health · Dentistry" })}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "24/7", label: { es: "Disponible", en: "Available" } },
                  { value: "< 2s", label: { es: "Respuesta", en: "Response" } },
                  { value: "0", label: { es: "Llamadas perdidas", en: "Missed calls" } },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-2xl font-extrabold" style={{ color: "#00F5C4" }}>{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{t(stat.label)}</p>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {t({ es: "Capacidades del agente", en: "Agent capabilities" })}
              </p>
              <div className="space-y-3">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(0,245,196,0.1)", color: "#00F5C4" }}
                    >
                      {cap.icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t(cap.label)}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{t(cap.desc)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — simulated call */}
            <div
              className="p-8 lg:p-12 flex flex-col justify-center"
              style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Phone mockup */}
              <div
                className="rounded-2xl overflow-hidden mx-auto w-full max-w-sm"
                style={{ background: "#0D1626", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Top bar */}
                <div
                  className="flex items-center justify-between px-5 py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,245,196,0.05)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,245,196,0.15)" }}>
                      <PhoneTransferIcon />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{t({ es: "Agente Peak AI", en: "Peak AI Agent" })}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-emerald-400 text-xs font-medium">{t({ es: "En llamada", en: "On call" })}</p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,245,196,0.1)", color: "#00F5C4" }}
                  >
                    Live
                  </span>
                </div>

                {/* Conversation */}
                <div className="p-5 space-y-4">
                  {conversation.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      className={`flex ${msg.role === "patient" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className="max-w-[82%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed"
                        style={
                          msg.role === "agent"
                            ? { background: "rgba(0,245,196,0.1)", color: "rgba(255,255,255,0.9)", borderBottomLeftRadius: 4 }
                            : { background: "rgba(0,119,255,0.2)", color: "rgba(255,255,255,0.85)", borderBottomRightRadius: 4 }
                        }
                      >
                        {t(msg.text)}
                      </div>
                    </motion.div>
                  ))}

                  {/* SMS sent indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 mt-2"
                    style={{ background: "rgba(0,245,196,0.06)", border: "1px solid rgba(0,245,196,0.15)" }}
                  >
                    <span style={{ color: "#00F5C4" }}><CheckIcon /></span>
                    <p className="text-xs" style={{ color: "#00F5C4" }}>
                      {t({ es: "SMS de confirmación enviado", en: "Confirmation SMS sent" })}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Integration badges */}
              <div className="mt-8 flex flex-wrap gap-2 justify-center">
                {[
                  { label: "Cal.com", color: "#00F5C4" },
                  { label: "Google Calendar", color: "#4285F4" },
                  { label: "SMS / Twilio", color: "#F22F46" },
                  { label: t({ es: "Transferencia humana", en: "Human handoff" }), color: "#A78BFA" },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: `${badge.color}15`,
                      color: badge.color,
                      border: `1px solid ${badge.color}30`,
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
