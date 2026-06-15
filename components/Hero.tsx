"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/images/dario3.jpg"
          alt="Darío Campos — Guitarra flamenca"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-[#0C0A08]/55 to-[#0C0A08]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08]/65 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#0C0A08]/15" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
        style={{ opacity, paddingBottom: "clamp(5rem, 10vw, 9rem)" }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-5"
            style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="w-10 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">
              Guitarra · Producción · Sonido
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-serif text-[#F5F1E8]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.6rem,9vw,7rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "clamp(1.75rem, 4vw, 3rem)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            DARÍO
            <span className="block text-[#D6A85A]">CAMPOS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[#E7E0D2] font-light max-w-xl"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              lineHeight: 1.85,
              marginBottom: "clamp(2.5rem, 6vw, 5rem)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            Guitarra flamenca, producción musical y más de dos décadas dedicadas al arte del sonido.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap"
            style={{ gap: "clamp(1rem, 2vw, 2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95 }}
          >
            <button
              onClick={() => handleScroll("#trayectoria")}
              className="group px-10 py-5 bg-[#D6A85A] text-[#0C0A08] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#F0C875] transition-all duration-300 flex items-center gap-4"
            >
              Ver trayectoria
              <span className="w-4 h-px bg-[#0C0A08] group-hover:w-8 transition-all duration-300 inline-block" />
            </button>
            <button
              onClick={() => handleScroll("#contacto")}
              className="px-10 py-5 border border-[#F5F1E8]/60 text-[#F5F1E8] text-xs tracking-[0.25em] uppercase hover:border-[#D6A85A] hover:text-[#D6A85A] transition-all duration-300"
            >
              Contactar
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 right-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[#9A907F] text-[9px] tracking-[0.35em] uppercase rotate-90 mb-3">
            Scroll
          </span>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-[#D6A85A] to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0C0A08] to-transparent pointer-events-none" />
    </section>
  );
}
