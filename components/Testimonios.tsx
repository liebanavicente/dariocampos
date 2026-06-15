"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonios = [
  {
    id: 1,
    quote:
      "Tocar con Darío es entender que la guitarra flamenca no acompaña: escucha. Hay músicos que te siguen y músicos que te comprenden. Él es de los segundos.",
    author: "Cantaor flamenco",
    role: "Colaboración en disco",
  },
  {
    id: 2,
    quote:
      "Su trabajo en producción va más allá de la técnica. Tiene un oído para la emoción que es muy difícil de encontrar. Entiende lo que quieres decir incluso antes de que tú lo sepas.",
    author: "Artista flamenco",
    role: "Proyecto de grabación",
  },
  {
    id: 3,
    quote:
      "Lo que distingue a Darío es que nunca deja de ser guitarrista cuando está detrás de la mesa. Eso es un don. El sonido siempre suena a música, no a ingeniería.",
    author: "Bailaora y coreógrafa",
    role: "Espectáculo en directo",
  },
  {
    id: 4,
    quote:
      "Formarse con alguien que conoce los palos desde adentro cambia la perspectiva completamente. No te enseña solo a tocar; te enseña a escuchar el flamenco.",
    author: "Alumno",
    role: "Clases de guitarra flamenca",
  },
];

export default function Testimonios() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 md:py-48 lg:py-60 bg-[#0C0A08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <div className="flex items-center gap-4" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">
              Lo que dicen
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_360px]" style={{ gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>

          {/* Quote */}
          <FadeIn>
            <div className="relative">
              <div
                className="text-[10rem] leading-none text-[#1A1714] absolute -top-10 -left-6 select-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair)" }}
                aria-hidden
              >
                &ldquo;
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ position: "relative", paddingTop: "clamp(2rem, 4vw, 3rem)" }}
                >
                  <blockquote
                    className="text-[#F5F1E8]"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      fontSize: "clamp(1.2rem,2.5vw,1.65rem)",
                      lineHeight: 1.6,
                      maxWidth: "680px",
                      marginBottom: "clamp(2rem, 4vw, 3.5rem)",
                    }}
                  >
                    {testimonios[active].quote}
                  </blockquote>
                  <div className="flex items-center gap-5">
                    <span className="w-8 h-px bg-[#D6A85A]" />
                    <div>
                      <div className="text-[#E7E0D2] text-sm font-medium" style={{ marginBottom: "0.35rem" }}>
                        {testimonios[active].author}
                      </div>
                      <div className="text-[#9A907F] text-xs tracking-widest uppercase">
                        {testimonios[active].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Selector */}
          <FadeIn direction="right" delay={0.15}>
            <div className="border-t border-[#2A2520]">
              {testimonios.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left border-b transition-all duration-300 ${
                    active === i
                      ? "border-[#D6A85A]/30 bg-[#1A1714]/50"
                      : "border-[#2A2520] hover:bg-[#1A1714]/20"
                  }`}
                  style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-xs transition-colors duration-300 mt-1 shrink-0 ${
                        active === i ? "text-[#D6A85A]" : "text-[#3D3730]"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <div
                        className={`text-sm font-medium transition-colors duration-300 ${
                          active === i ? "text-[#F5F1E8]" : "text-[#C4B89A]"
                        }`}
                        style={{ marginBottom: "0.35rem" }}
                      >
                        {t.author}
                      </div>
                      <div className="text-[10px] tracking-widest uppercase text-[#9A907F]">
                        {t.role}
                      </div>
                    </div>
                    {active === i && (
                      <motion.span
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D6A85A] mt-2 flex-shrink-0"
                        layoutId="dot"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
