"use client";

import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import Logo from "@/components/Logo";

export default function Footer() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: "#080E1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="block mb-5">
              <Logo size={0.5} />
            </a>
            <p className="text-slate-600 max-w-sm mb-6 text-sm leading-relaxed">
              {t(i18n.footer.description)}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", color: "#4a5568" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", color: "#4a5568" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t(i18n.footer.quickLinks)}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#agents", label: t(i18n.nav.agents) },
                { href: "#how-it-works", label: t(i18n.nav.howItWorks) },
                { href: "#why-us", label: t(i18n.nav.whyUs) },
                { href: "#contact", label: t(i18n.nav.contact) },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-300 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t(i18n.footer.services)}
            </h4>
            <ul className="space-y-3">
              {[
                t(i18n.footer.callAgent),
                t(i18n.footer.chatAgent),
                t(i18n.footer.leadAgent),
                t(i18n.footer.demo),
              ].map((label, i) => (
                <li key={i}>
                  <a href="#agents" className="text-slate-600 hover:text-slate-300 transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-sm">
            &copy; {new Date().getFullYear()} Peak Automations. {t(i18n.footer.rights)}
          </p>
          <p className="text-slate-700 text-sm">
            {t(i18n.footer.madeWith)} <span style={{ color: "#00F5C4" }}>♥</span> {t(i18n.footer.inKetchum)}
          </p>
        </div>
      </div>
    </footer>
  );
}
