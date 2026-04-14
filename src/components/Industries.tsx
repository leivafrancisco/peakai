"use client";

import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";

export default function Industries() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <section id="industries" className="py-28" style={{ backgroundColor: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,119,255,0.1)", color: "#4DA6FF", border: "1px solid rgba(0,119,255,0.25)" }}
          >
            {t(i18n.industries.label)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-5 tracking-tight">
            {t(i18n.industries.headline)}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t(i18n.industries.subhead)}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {i18n.industries.items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Emoji */}
              <div className="text-4xl mb-4">{item.emoji}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">{t(item.title)}</h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{t(item.description)}</p>

              {/* Stats badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(0,245,196,0.08)",
                  color: "#00F5C4",
                  border: "1px solid rgba(0,245,196,0.2)",
                }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {t(item.stats)}
              </div>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 100%, rgba(0,119,255,0.07), transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
