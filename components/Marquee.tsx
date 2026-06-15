"use client";

import { motion } from "framer-motion";

const items = [
  "Guitarra flamenca",
  "✦",
  "Producción musical",
  "✦",
  "Técnico de sonido",
  "✦",
  "Acompañamiento al cante",
  "✦",
  "Acompañamiento al baile",
  "✦",
  "Jerez de la Frontera",
  "✦",
  "PANORAMA 1526",
  "✦",
  "Alt Empordà",
  "✦",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-8 border-y border-[#1A1714]/60 bg-[#0F0D0A]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-[11px] tracking-[0.3em] uppercase shrink-0 ${
              item === "✦" ? "text-[#B8864E]" : "text-[#2A2520]"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
