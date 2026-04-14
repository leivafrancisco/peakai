"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import AnimateIn from "@/components/ui/AnimateIn";

const serviceIcons = [
  <svg key="ai" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2M12 3v4m0 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>,
  <svg key="workflow" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  <svg key="consulting" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="integrations" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg key="analytics" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="support" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
];

const tagColors = [
  { bg: "rgba(0,245,196,0.1)", color: "#00F5C4", border: "rgba(0,245,196,0.25)" },
  { bg: "rgba(0,119,255,0.1)", color: "#4DA6FF", border: "rgba(0,119,255,0.25)" },
  { bg: "rgba(139,92,246,0.1)", color: "#a78bfa", border: "rgba(139,92,246,0.25)" },
  { bg: "rgba(0,245,196,0.1)", color: "#00F5C4", border: "rgba(0,245,196,0.25)" },
  { bg: "rgba(0,119,255,0.1)", color: "#4DA6FF", border: "rgba(0,119,255,0.25)" },
  { bg: "rgba(236,72,153,0.1)", color: "#f472b6", border: "rgba(236,72,153,0.25)" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function ServicesSection() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <section id="services" className="py-28" style={{ backgroundColor: "#080E1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
          >
            {t(i18n.services.label)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-5 tracking-tight max-w-3xl mx-auto">
            {t(i18n.services.headline)}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t(i18n.services.subhead)}
          </p>
        </AnimateIn>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {i18n.services.items.map((item, index) => {
            const tc = tagColors[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group relative rounded-2xl p-7 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{
                  y: -5,
                  borderColor: `${tc.border}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: tc.bg, color: tc.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {serviceIcons[index]}
                  </motion.div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}
                  >
                    {t(item.tag)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{t(item.title)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t(item.description)}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${tc.bg}, transparent 70%)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
