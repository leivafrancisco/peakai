"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { i18n, tr } from "@/i18n/translations";
import AnimateIn from "@/components/ui/AnimateIn";

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const LeadsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const agents = [
  {
    key: "call",
    icon: <PhoneIcon />,
    accentColor: "#00F5C4",
    cardStyle: {
      background: "linear-gradient(135deg, rgba(0,245,196,0.06) 0%, rgba(0,245,196,0.02) 100%)",
      border: "1px solid rgba(0,245,196,0.15)",
    },
    hoverGlow: "rgba(0,245,196,0.12)",
    iconStyle: { background: "rgba(0,245,196,0.1)", color: "#00F5C4" },
    tagStyle: { background: "rgba(0,245,196,0.1)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" },
    data: i18n.agents.call,
  },
  {
    key: "chat",
    icon: <ChatIcon />,
    accentColor: "#0077FF",
    cardStyle: {
      background: "linear-gradient(135deg, rgba(0,119,255,0.08) 0%, rgba(0,119,255,0.02) 100%)",
      border: "1px solid rgba(0,119,255,0.2)",
    },
    hoverGlow: "rgba(0,119,255,0.12)",
    iconStyle: { background: "rgba(0,119,255,0.12)", color: "#0077FF" },
    tagStyle: { background: "rgba(0,119,255,0.1)", color: "#4DA6FF", border: "1px solid rgba(0,119,255,0.2)" },
    data: i18n.agents.chat,
  },
  {
    key: "leads",
    icon: <LeadsIcon />,
    accentColor: "#00F5C4",
    cardStyle: {
      background: "linear-gradient(135deg, rgba(0,245,196,0.04) 0%, rgba(0,119,255,0.06) 100%)",
      border: "1px solid rgba(0,119,255,0.15)",
    },
    hoverGlow: "rgba(0,245,196,0.1)",
    iconStyle: { background: "linear-gradient(135deg, rgba(0,245,196,0.15), rgba(0,119,255,0.15))", color: "#00F5C4" },
    tagStyle: { background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" },
    data: i18n.agents.leads,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function Agents() {
  const { lang } = useLang();
  const t = (text: { es: string; en: string }) => tr(text, lang);

  return (
    <section id="agents" className="py-28" style={{ backgroundColor: "#080E1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(0,245,196,0.08)", color: "#00F5C4", border: "1px solid rgba(0,245,196,0.2)" }}
          >
            {t(i18n.agents.label)}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2 mb-5 tracking-tight">
            {t(i18n.agents.headline)}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t(i18n.agents.subhead)}
          </p>
        </AnimateIn>

        {/* Agents Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.key}
              variants={cardVariants}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="group relative rounded-2xl p-8 overflow-hidden cursor-default"
              style={agent.cardStyle}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              {/* Hover glow overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ background: `radial-gradient(circle at 50% 0%, ${agent.hoverGlow}, transparent 70%)` }}
              />

              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6"
                style={agent.tagStyle}
              >
                <span className="w-5 h-5 flex items-center justify-center">{agent.icon}</span>
                {t(agent.data.tag)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {t(agent.data.title)}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t(agent.data.description)}
              </p>

              {/* Divider */}
              <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {agent.data.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <span style={{ color: agent.accentColor }}>
                      <CheckIcon />
                    </span>
                    {t(feature)}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="group/cta inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: agent.accentColor }}
              >
                {t(agent.data.cta)}
                <ArrowIcon />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
