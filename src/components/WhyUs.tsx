"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import AnimateIn from "@/components/ui/AnimateIn";
import NumberTicker from "@/components/ui/NumberTicker";

/* ── Social icons ─────────────────────────────────────────── */

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.17 8.17 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const UniversityIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const featureIcons = [
  <svg key="rocket" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="code" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="support" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  <svg key="chart" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  <svg key="argentina" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
  </svg>,
  <svg key="scale" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>,
];

/* ── Reels data ───────────────────────────────────────────── */
const reels: { id: number; embedUrl?: string; title: { es: string; en: string } }[] = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/DXFfxRdkYf6/embed/",
    title: { es: "Reel 1", en: "Reel 1" },
  },
  { id: 2, embedUrl: "https://www.instagram.com/reel/DXNf96RE02Q/embed/", title: { es: "Demo: Agente de Llamadas", en: "Demo: Call Agent" } },
  { id: 3, embedUrl: "https://www.instagram.com/reel/DXKtiDbFTKQ/embed/", title: { es: "Documentos Legales a Bases de datos Vectorial", en: "Legal Documents to Vector Database" } },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function WhyUs() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <section id="why-us" className="py-28" style={{ backgroundColor: "#080E1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ── HEADER ───────────────────────────────────────────── */}
        <AnimateIn className="text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
          >
            {t(i18n.whyUs.label)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-5 tracking-tight">
            {t(i18n.whyUs.headline)}
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t(i18n.whyUs.subhead)}
          </p>
        </AnimateIn>

        {/* ── TEAM CARDS ───────────────────────────────────────── */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {i18n.whyUs.team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative rounded-3xl p-8 overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, rgba(${member.color === "#00F5C4" ? "0,245,196" : "0,119,255"},0.06) 0%, rgba(${member.color === "#00F5C4" ? "0,245,196" : "0,119,255"},0.02) 100%)`,
                border: `1px solid rgba(${member.color === "#00F5C4" ? "0,245,196" : "0,119,255"},0.18)`,
              }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `radial-gradient(circle at 50% 0%, rgba(${member.color === "#00F5C4" ? "0,245,196" : "0,119,255"},0.1), transparent 70%)`,
                }}
              />

              {/* Avatar + name row */}
              <div className="flex items-center gap-5 mb-6 relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex-shrink-0 overflow-hidden"
                  style={{
                    border: `1px solid ${member.color}44`,
                    background: member.photo ? "transparent" : `linear-gradient(135deg, ${member.color}22, ${member.color}44)`,
                  }}
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-xl font-black"
                      style={{ color: member.color }}
                    >
                      {member.initials}
                    </div>
                  )}
                </motion.div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{member.name}</h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: member.color }}>
                    {t(member.role)}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                {t(member.bio)}
              </p>

              {/* Credentials */}
              <div className="flex flex-col gap-2 mb-6 relative z-10">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <UniversityIcon />
                  <span className="font-semibold text-slate-400">{t(member.degree)}</span>
                  <span>·</span>
                  <span style={{ color: member.color }}>{member.university}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <LocationIcon />
                  <span>{member.location}</span>
                  <span className="text-base leading-none">🇦🇷</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full mb-5 relative z-10" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Social links */}
              <div className="flex items-center gap-3 relative z-10">
                {[
                  { href: member.socials.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
                  { href: member.socials.instagram, icon: <InstagramIcon />, label: "Instagram" },
                  { href: member.socials.tiktok, icon: <TikTokIcon />, label: "TikTok" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── STATS ────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {i18n.whyUs.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 300, damping: 15 }}
              className="rounded-2xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              whileHover={{ scale: 1.04, borderColor: "rgba(0,245,196,0.2)", boxShadow: "0 0 20px rgba(0,245,196,0.08)" }}
            >
              <div className="text-4xl font-extrabold mb-1.5">
                <NumberTicker value={stat.value} className="gradient-text" />
              </div>
              <div className="text-slate-500 text-sm">{t(stat.label)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── FEATURES ─────────────────────────────────────────── */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {i18n.whyUs.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 300, damping: 20 }}
              className="group flex gap-4 rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              whileHover={{ borderColor: "rgba(0,245,196,0.15)", background: "rgba(0,245,196,0.02)", x: 4 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,245,196,0.1)", color: "#00F5C4" }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {featureIcons[index]}
              </motion.div>
              <div>
                <h3 className="text-white font-bold mb-1.5 text-sm">{t(feature.title)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t(feature.description)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── REELS ────────────────────────────────────────────── */}
        <div>
          <AnimateIn className="text-center mb-12">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(0,119,255,0.1)", color: "#4DA6FF", border: "1px solid rgba(0,119,255,0.25)" }}
            >
              {t(i18n.whyUs.reelsLabel)}
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
              {t(i18n.whyUs.reelsHeadline)}
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              {t(i18n.whyUs.reelsSubhead)}
            </p>
          </AnimateIn>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {reels.map((reel) => (
              <motion.div
                key={reel.id}
                variants={cardVariants}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "9/16", maxHeight: 540 }}
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                {reel.embedUrl ? (
                  /* ── Instagram embed ── */
                  <iframe
                    src={reel.embedUrl}
                    className="w-full border-0 rounded-2xl"
                    style={{ height: "100%", minHeight: 480 }}
                    scrolling="no"
                    frameBorder={0}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title={t(reel.title)}
                  />
                ) : (
                  /* ── Placeholder card ── */
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-4 relative"
                    style={{
                      background: "linear-gradient(160deg, rgba(0,245,196,0.06) 0%, rgba(0,119,255,0.06) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                    }}
                  >
                    {/* Glow background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,245,196,0.08), transparent 70%)" }}
                    />

                    {/* Play button */}
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: "linear-gradient(135deg, #00F5C4, #0077FF)",
                        boxShadow: "0 0 30px rgba(0,245,196,0.3)",
                      }}
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: reel.id * 0.4 }}
                    >
                      <PlayIcon />
                    </motion.div>

                    {/* Title */}
                    <div className="relative z-10 text-center px-6">
                      <p className="text-white font-semibold text-sm leading-snug mb-1">
                        {t(reel.title)}
                      </p>
                      <p className="text-slate-600 text-xs">{t(i18n.whyUs.reelsEmpty)}</p>
                    </div>

                    {/* Reel # badge */}
                    <div
                      className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full z-10"
                      style={{ background: "rgba(0,245,196,0.12)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
                    >
                      #{reel.id}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social follow CTAs */}
          <AnimateIn className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {[
              {
                icon: <TikTokIcon />,
                label: "@peakai.es",
                href: "https://tiktok.com/@peakai.es",
                color: "#ffffff",
                bg: "rgba(255,255,255,0.06)",
                border: "rgba(255,255,255,0.12)",
              },
              {
                icon: <InstagramIcon />,
                label: "@peakai.es",
                href: "https://www.instagram.com/peakai.es/reels/",
                color: "#f472b6",
                bg: "rgba(236,72,153,0.06)",
                border: "rgba(236,72,153,0.2)",
              },
              {
                icon: <LinkedInIcon />,
                label: "Peak Automations",
                href: "https://linkedin.com/company/peakautomations",
                color: "#4DA6FF",
                bg: "rgba(0,119,255,0.06)",
                border: "rgba(0,119,255,0.2)",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: social.bg, border: `1px solid ${social.border}`, color: social.color }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {social.icon}
                {social.label}
              </motion.a>
            ))}
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
