"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import AnimateIn from "@/components/ui/AnimateIn";

export default function HowItWorks() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <section id="how-it-works" className="py-28" style={{ backgroundColor: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,119,255,0.1)", color: "#4DA6FF", border: "1px solid rgba(0,119,255,0.25)" }}
          >
            {t(i18n.howItWorks.label)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-5 tracking-tight">
            {t(i18n.howItWorks.headline)}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t(i18n.howItWorks.subhead)}
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,196,0.3), rgba(0,119,255,0.3), transparent)" }}
          />

          {i18n.howItWorks.steps.map((step, index) => (
            <AnimateIn key={index} delay={index * 0.15} className="relative flex flex-col items-center text-center">
              {/* Step number */}
              <motion.div
                className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 30px rgba(0,245,196,0.2)",
                  borderColor: "rgba(0,245,196,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <span className="text-4xl font-black gradient-text">{step.number}</span>
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">{t(step.title)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{t(step.description)}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
