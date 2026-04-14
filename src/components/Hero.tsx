"use client";

import { motion, type Easing } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import NumberTicker from "@/components/ui/NumberTicker";

const EASE: Easing = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ width: 4, height: 4, background: "#00F5C4", ...style }}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 2,
    }}
  />
);

const particles = Array.from({ length: 12 }, (_, i) => ({
  left: `${8 + i * 8}%`,
  top: `${15 + (i % 4) * 20}%`,
  opacity: 0.4 + (i % 3) * 0.2,
}));

export default function Hero() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#080E1A" }}
    >
      {/* ── Background image ───────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "60% center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── Dark overlay (0.45 opacity — lighter so image breathes) */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(8, 14, 26, 0.45)" }}
      />

      {/* ── Gradient orbs (subtle, over the image) ─────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#00F5C4", opacity: 0.08 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#0077FF", opacity: 0.08 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* ── Floating particles ──────────────────────────────── */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* ── Grid pattern ────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main content ────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center px-4 py-2 rounded-full border mb-8"
          style={{ borderColor: "rgba(0,245,196,0.3)", background: "rgba(0,245,196,0.08)" }}
        >
          <motion.span
            className="w-2 h-2 rounded-full mr-2"
            style={{ background: "#00F5C4" }}
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="text-sm font-medium" style={{ color: "#00F5C4" }}>
            {t(i18n.hero.badge)}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-[1.05] tracking-tight"
        >
          {t(i18n.hero.headline1)}
          <br />
          <motion.span
            className="inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(90deg, #00F5C4, #0077FF, #00F5C4)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t(i18n.hero.headline2)}
          </motion.span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t(i18n.hero.subhead)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            className="shimmer-btn w-full sm:w-auto text-white px-8 py-4 rounded-xl text-lg font-bold"
            style={{
              background: "linear-gradient(135deg, #00F5C4, #0077FF)",
              boxShadow: "0 0 40px rgba(0,245,196,0.3)",
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 60px rgba(0,245,196,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t(i18n.hero.cta1)}
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-lg font-semibold border"
            style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.08)" }}
            whileHover={{
              borderColor: "rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.14)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t(i18n.hero.cta2)}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: t(i18n.hero.stat1Value), label: t(i18n.hero.stat1Label) },
            { value: t(i18n.hero.stat2Value), label: t(i18n.hero.stat2Label) },
            { value: t(i18n.hero.stat3Value), label: t(i18n.hero.stat3Label) },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold">
                <NumberTicker value={stat.value} className="gradient-text" />
              </div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom fade to site background ──────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #080E1A 40%, transparent)" }}
      />

      {/* ── Tagline — bottom-left ────────────────────────────── */}
      <motion.div
        className="absolute bottom-16 left-0 z-20 px-6 sm:px-10 lg:px-16 max-w-sm sm:max-w-md"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.9, ease: EASE }}
      >
        {/* Gradient backdrop for legibility */}
        <div
          className="absolute inset-0 -m-3 sm:-m-4 rounded-xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(8,14,26,0.72) 0%, rgba(8,14,26,0.4) 60%, transparent 100%)",
            filter: "blur(2px)",
          }}
        />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#F5ECD7",
            lineHeight: 1.35,
            letterSpacing: "0.01em",
            position: "relative",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          You focus on the business.
          <br />
          We handle the rest.
        </p>
      </motion.div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
