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
    <div className="overflow-hidden py-8 border-y border-[#2A2520] bg-[#111009]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-[11px] tracking-[0.3em] uppercase shrink-0 ${
              item === "✦" ? "text-[#D6A85A]" : "text-[#BEB7AA]"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
