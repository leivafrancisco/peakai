"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Contact() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 transition-all";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <AnimateIn direction="left">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
            >
              {t(i18n.contact.label)}
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-6 tracking-tight leading-tight">
              {t(i18n.contact.headline)}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {t(i18n.contact.subhead)}
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: t(i18n.contact.location),
                  value: t(i18n.contact.locationValue),
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: t(i18n.contact.email),
                  value: "francisco@peakautomations.ai",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: t(i18n.contact.availability),
                  value: t(i18n.contact.availabilityValue),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn direction="right">
          <motion.div
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            whileHover={{ boxShadow: "0 0 40px rgba(0,245,196,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">{t(i18n.contact.formTitle)}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {t(i18n.contact.nameLabel)}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ ...inputStyle, "--tw-ring-color": "#00F5C4" } as React.CSSProperties}
                  placeholder={t(i18n.contact.namePlaceholder)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {t(i18n.contact.emailLabel)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  placeholder={t(i18n.contact.emailPlaceholder)}
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {t(i18n.contact.companyLabel)}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  placeholder={t(i18n.contact.companyPlaceholder)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {t(i18n.contact.messageLabel)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass + " resize-none"}
                  style={inputStyle}
                  placeholder={t(i18n.contact.messagePlaceholder)}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="shimmer-btn w-full px-8 py-4 rounded-xl text-base font-bold"
                style={{
                  background: "linear-gradient(135deg, #00F5C4, #0077FF)",
                  boxShadow: "0 0 30px rgba(0,245,196,0.2)",
                  color: "#080E1A",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(0,245,196,0.4)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {t(i18n.contact.submit)}
              </motion.button>
              <p className="text-center text-slate-600 text-sm">
                {t(i18n.contact.orBook)}{" "}
                <a href="#" style={{ color: "#00F5C4" }} className="font-medium hover:opacity-80 transition-opacity">
                  {t(i18n.contact.onCalendar)}
                </a>
              </p>
            </form>
          </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
