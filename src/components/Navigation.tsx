"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import Logo from "@/components/Logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080E1A]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#">
            <Logo size={0.55} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#agents" className="text-slate-300 hover:text-white transition-colors text-base font-medium">
              {t(i18n.nav.agents)}
            </a>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors text-base font-medium">
              {t(i18n.nav.services)}
            </a>
            <a href="#industries" className="text-slate-300 hover:text-white transition-colors text-base font-medium">
              {t(i18n.nav.industries)}
            </a>
            <a href="#why-us" className="text-slate-300 hover:text-white transition-colors text-base font-medium">
              {t(i18n.nav.whyUs)}
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-base font-medium">
              {t(i18n.nav.contact)}
            </a>

            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLang("es")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  lang === "es"
                    ? "bg-[#0077FF] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="text-base leading-none">🇦🇷</span>
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  lang === "en"
                    ? "bg-[#0077FF] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="text-base leading-none">🇺🇸</span>
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 shadow-lg"
              style={{ background: "linear-gradient(135deg, #00F5C4, #0077FF)" }}
            >
              {t(i18n.nav.cta)}
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${
                  lang === "es" ? "bg-[#0077FF] text-white" : "text-slate-400"
                }`}
              >
                🇦🇷
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${
                  lang === "en" ? "bg-[#0077FF] text-white" : "text-slate-400"
                }`}
              >
                🇺🇸
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#080E1A]/95 border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            {[
              { href: "#agents", label: t(i18n.nav.agents) },
              { href: "#services", label: t(i18n.nav.services) },
              { href: "#industries", label: t(i18n.nav.industries) },
              { href: "#why-us", label: t(i18n.nav.whyUs) },
              { href: "#contact", label: t(i18n.nav.contact) },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-300 hover:text-white font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white px-5 py-2.5 rounded-lg font-semibold text-center"
              style={{ background: "linear-gradient(135deg, #00F5C4, #0077FF)" }}
            >
              {t(i18n.nav.cta)}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
