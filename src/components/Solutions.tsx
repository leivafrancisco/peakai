"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import AnimateIn from "@/components/ui/AnimateIn";

/* ── PeakMed logo mark ───────────────────────────────────── */
const PeakMedMark = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
    <defs>
      <linearGradient id="pmBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0077FF" />
        <stop offset="100%" stopColor="#0066DD" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="10" fill="url(#pmBg)" />
    <path d="M8 28L16 12L20 21L32 8" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M16 12L20 21" stroke="#00F5C4" strokeWidth="3.2" strokeLinecap="round" fill="none" />
  </svg>
);

/* ── Feature list ─────────────────────────────────────────── */
const features = [
  { es: "Agenda inteligente con Google Calendar", en: "Smart scheduling with Google Calendar" },
  { es: "Historia clínica electrónica", en: "Electronic health records" },
  { es: "Gestión multi-clínica y multi-rol", en: "Multi-clinic & multi-role management" },
  { es: "Alertas críticas de alergias", en: "Critical allergy alerts" },
  { es: "Turnos express sin legajo previo", en: "Express bookings without prior records" },
  { es: "Panel de control en tiempo real", en: "Real-time control dashboard" },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#00F5C4" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Solutions() {
  const { lang } = useLang();
  const t = (es: string, en: string) => (lang === "es" ? es : en);

  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#060C18" }}>
      {/* Ambient orb */}
      <div className="absolute right-0 top-1/4 -z-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "rgba(0,119,255,0.06)", filter: "blur(120px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="eyebrow mb-4 block">
            {t("Soluciones verticales", "Vertical solutions")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 mb-5 brand-underline">
            {t("Productos listos para operar", "Ready-to-run products")}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mt-6">
            {t(
              "Además de agentes a medida, construimos soluciones SaaS verticales para industrias específicas. Tecnología de clase global, lista desde el primer día.",
              "Beyond custom agents, we build vertical SaaS solutions for specific industries. World-class technology, ready from day one."
            )}
          </p>
        </AnimateIn>

        {/* PeakMed card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden grid lg:grid-cols-2"
          style={{
            background: "linear-gradient(135deg, rgba(0,119,255,0.06) 0%, rgba(0,245,196,0.04) 100%)",
            border: "1px solid rgba(0,119,255,0.18)",
          }}
        >
          {/* Left — copy */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* Brand */}
            <div className="flex items-center gap-3 mb-8">
              <PeakMedMark />
              <div>
                <p className="text-white font-bold text-xl leading-tight">
                  Peak<span style={{ color: "#0077FF" }}>Med</span>
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest mt-0.5"
                  style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.14em" }}>
                  by Innovate with Peak
                </p>
              </div>
              <span
                className="ml-auto text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "rgba(0,245,196,0.1)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.25)" }}
              >
                {t("Disponible", "Available")}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {lang === "es" ? (
                <>Turnos, historias clínicas y{" "}<span className="brand-highlight">Google Calendar</span>, todo en un solo lugar.</>
              ) : (
                <>Scheduling, EHR and{" "}<span className="brand-highlight">Google Calendar</span>, all in one place.</>
              )}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {t(
                "Sistema de gestión médica diseñado para clínicas en Argentina y LATAM. Profesional, inmensamente rápido y listo para operar desde el primer día.",
                "Medical management system designed for clinics in Argentina and LATAM. Professional, blazing fast, and ready to operate from day one."
              )}
            </p>

            {/* Features */}
            <ul className="space-y-2.5 mb-10">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-2.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <CheckIcon />
                  {lang === "es" ? f.es : f.en}
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://peakmed.health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all"
                style={{
                  background: "#0077FF",
                  boxShadow: "0 10px 25px -5px rgba(0,119,255,0.35)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0066DD")}
                onMouseLeave={e => (e.currentTarget.style.background = "#0077FF")}
              >
                {t("Solicitar demo gratuita", "Request a free demo")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://peakmed.health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                style={{
                  color: "#0077FF",
                  border: "2px solid rgba(0,119,255,0.3)",
                  background: "transparent",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#0077FF"; (e.currentTarget as HTMLElement).style.background = "rgba(0,119,255,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,119,255,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {t("Ver funcionalidades", "See features")}
              </a>
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="p-8 lg:p-10 flex items-center justify-center"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
            <div
              className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "#0D1626", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Browser chrome */}
              <div className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 rounded bg-slate-900 border border-slate-800 px-3 py-0.5 text-[11px] text-slate-500">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  panel.peakmed.app
                </div>
                <div className="w-12" />
              </div>

              {/* App content */}
              <div className="flex" style={{ height: 300 }}>
                {/* Sidebar */}
                <div className="w-1/4 px-2 py-4 flex flex-col" style={{ background: "#080E1A", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-1.5 px-2 mb-3">
                    <div className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold text-white" style={{ background: "#0077FF" }}>PM</div>
                    <span className="text-[10px] font-bold text-white">PeakMed</span>
                  </div>
                  {[
                    { label: "Panel", active: true },
                    { label: "Agenda", active: false },
                    { label: "Historias", active: false },
                    { label: "Pacientes", active: false },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-1.5 px-2 py-1 rounded text-[9px] mb-0.5"
                      style={item.active
                        ? { background: "rgba(255,255,255,0.1)", color: "#00F5C4", fontWeight: 600 }
                        : { color: "rgba(255,255,255,0.35)" }}>
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main panel */}
                <div className="flex-1 p-3 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-white">Panel Principal</p>
                    <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-semibold"
                      style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                      <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block"
                        animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
                      Directo
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="text-[8px] font-semibold text-slate-400">Pacientes</p>
                      <p className="text-base font-black" style={{ color: "#0077FF" }}>1,482</p>
                    </div>
                    <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="text-[8px] font-semibold text-slate-400">Turnos hoy</p>
                      <p className="text-base font-black text-white">24 / 28</p>
                    </div>
                  </div>

                  {/* Appointments */}
                  <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-[9px] font-bold text-white mb-2">Próximos turnos</p>
                    <div className="space-y-1.5">
                      {[
                        { name: "Camilo Restrepo", time: "09:30", color: "#0077FF", bg: "rgba(0,119,255,0.1)" },
                        { name: "Sonia Pérez", time: "10:45", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
                        { name: "Carlos Vergara", time: "11:15", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
                      ].map(appt => (
                        <div key={appt.name} className="flex items-center justify-between rounded px-1.5 py-1"
                          style={{ background: appt.bg }}>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: appt.color }} />
                            <p className="text-[8px] font-bold text-white">{appt.name}</p>
                          </div>
                          <span className="text-[7px] font-bold px-1.5 py-0.5 rounded"
                            style={{ color: appt.color, background: `${appt.color}22` }}>
                            {appt.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sync pill */}
                  <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                    style={{ background: "rgba(0,245,196,0.08)", border: "1px solid rgba(0,245,196,0.15)" }}>
                    <svg className="w-3 h-3 flex-shrink-0" fill="#00F5C4" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-[8px] font-semibold" style={{ color: "#00F5C4" }}>
                      Sincronizado con Google Calendar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming soon teaser */}
        <AnimateIn className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            {t("Más soluciones verticales en desarrollo —", "More vertical solutions in development —")}{" "}
            <a href="#contact" className="font-semibold transition-colors" style={{ color: "#00F5C4" }}>
              {t("contanos tu industria", "tell us your industry")}
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
