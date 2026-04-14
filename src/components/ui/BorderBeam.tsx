"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export default function BorderBeam({
  size = 120,
  duration = 4,
  colorFrom = "#00F5C4",
  colorTo = "#0077FF",
  className = "",
}: BorderBeamProps) {
  return (
    <div className={`absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        className="absolute"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 180deg)`,
          borderRadius: "50%",
          filter: "blur(8px)",
          opacity: 0,
        }}
        animate={{
          rotate: [0, 360],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          rotate: { duration, ease: "linear", repeat: Infinity },
          opacity: { duration, ease: "easeInOut", repeat: Infinity },
        }}
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
      />
      <div
        className="absolute inset-[1px] rounded-[inherit]"
        style={{ background: "inherit" }}
      />
    </div>
  );
}
