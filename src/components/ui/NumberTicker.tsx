"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: string;
  className?: string;
}

function extractNumber(val: string): { prefix: string; number: number; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: val };
  const num = parseFloat(match[2].replace(/,/g, ""));
  return { prefix: match[1], number: isNaN(num) ? 0 : num, suffix: match[3] };
}

export default function NumberTicker({ value, className = "" }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { prefix, number, suffix } = extractNumber(value);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 60, stiffness: 100 });

  useEffect(() => {
    if (inView) motionVal.set(number);
  }, [inView, number, motionVal]);

  useEffect(() => {
    return springVal.on("change", (v) => {
      if (ref.current) {
        const rounded = number % 1 === 0 ? Math.round(v) : v.toFixed(1);
        ref.current.textContent = `${prefix}${rounded}${suffix}`;
      }
    });
  }, [springVal, prefix, suffix, number]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
