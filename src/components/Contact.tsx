"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import AnimateIn from "@/components/ui/AnimateIn";

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.17 8.17 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function Contact() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  const contactButtons = [
    {
      icon: <WhatsAppIcon />,
      label: t(i18n.contact.whatsappLabel),
      value: t(i18n.contact.whatsappNumber),
      href: t(i18n.contact.whatsappLink),
      color: "#25D366",
      bg: "rgba(37,211,102,0.08)",
      border: "rgba(37,211,102,0.25)",
      glow: "rgba(37,211,102,0.2)",
    },
    {
      icon: <PhoneIcon />,
      label: t(i18n.contact.phoneLabel),
      value: t(i18n.contact.phoneNumber),
      href: `tel:${t(i18n.contact.phoneNumber).replace(/\s/g, "")}`,
      color: "#00F5C4",
      bg: "rgba(0,245,196,0.08)",
      border: "rgba(0,245,196,0.25)",
      glow: "rgba(0,245,196,0.2)",
    },
    {
      icon: <EmailIcon />,
      label: t(i18n.contact.emailLabel),
      value: t(i18n.contact.emailValue),
      href: `mailto:${t(i18n.contact.emailValue)}`,
      color: "#4DA6FF",
      bg: "rgba(0,119,255,0.08)",
      border: "rgba(0,119,255,0.25)",
      glow: "rgba(0,119,255,0.2)",
    },
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      handle: "@peakautomations",
      href: "https://instagram.com/peakautomations",
      color: "#f472b6",
      bg: "rgba(236,72,153,0.08)",
      border: "rgba(236,72,153,0.2)",
    },
    {
      icon: <TikTokIcon />,
      label: "TikTok",
      handle: "@peakautomations",
      href: "https://tiktok.com/@peakautomations",
      color: "#ffffff",
      bg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.12)",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      handle: "Peak Automations",
      href: "https://linkedin.com/company/peakautomations",
      color: "#4DA6FF",
      bg: "rgba(0,119,255,0.08)",
      border: "rgba(0,119,255,0.2)",
    },
  ];

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: "#0D1526" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
          >
            {t(i18n.contact.label)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-5 tracking-tight">
            {t(i18n.contact.headline)}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t(i18n.contact.subhead)}
          </p>
        </AnimateIn>

        {/* Contact buttons */}
        <motion.div
          className="flex flex-col gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {contactButtons.map((btn) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-5 rounded-2xl px-7 py-5 group"
              style={{ background: btn.bg, border: `1px solid ${btn.border}` }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 30px ${btn.glow}`,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: btn.bg, color: btn.color, border: `1px solid ${btn.border}` }}
              >
                {btn.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {btn.label}
                </div>
                <div className="font-bold text-lg tracking-wide" style={{ color: "#ffffff" }}>{btn.value}</div>
              </div>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-all" style={{ color: "rgba(255,255,255,0.35)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t(i18n.contact.followUs)}
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>
        </AnimateIn>

        {/* Social links */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-3 rounded-2xl px-4 py-5 text-center group"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
              whileHover={{
                scale: 1.05,
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
              whileTap={{ scale: 0.96 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
              >
                {s.icon}
              </div>
              <div>
                <div className="text-white font-bold text-sm">{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.handle}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
