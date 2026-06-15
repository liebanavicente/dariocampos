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
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-28 lg:pb-36 w-full"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.div
            className="flex items-center gap-5 mb-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="w-10 h-px bg-[#B8864E]" />
            <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase">
              Guitarra · Producción · Sonido
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-[#EDE8DF] mb-8"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(4.5rem,13vw,10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            DARÍO
            <span className="block text-[#B8864E]">CAMPOS</span>
          </motion.h1>

          <motion.p
            className="text-[#C4B89A] text-xl md:text-2xl font-light max-w-xl mb-14 leading-relaxed"
            style={{ letterSpacing: "0.01em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            Guitarra flamenca, producción musical y más de dos décadas dedicadas al arte del sonido.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95 }}
          >
            <button
              onClick={() => handleScroll("#trayectoria")}
              className="group px-10 py-5 bg-[#B8864E] text-[#0C0A08] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#D4A86A] transition-all duration-300 flex items-center gap-4"
            >
              Ver trayectoria
              <span className="w-4 h-px bg-[#0C0A08] group-hover:w-8 transition-all duration-300 inline-block" />
            </button>
            <button
              onClick={() => handleScroll("#contacto")}
              className="px-10 py-5 border border-[#EDE8DF]/25 text-[#EDE8DF] text-xs tracking-[0.25em] uppercase hover:border-[#B8864E] hover:text-[#B8864E] transition-all duration-300"
            >
              Contactar
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 right-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[#6B6358] text-[9px] tracking-[0.35em] uppercase rotate-90 mb-3">
            Scroll
          </span>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-[#B8864E] to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0C0A08] to-transparent pointer-events-none" />
    </section>
  );
}
