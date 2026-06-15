"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const categories = [
  "Todos",
  "Flamenco contemporáneo",
  "Directo",
  "Colaboraciones",
  "Producciones",
];

const projects = [
  {
    id: 1,
    title: "Tierra adentro",
    category: "Flamenco contemporáneo",
    year: "2022–2023",
    description:
      "Proyecto de creación propia que explora los límites entre el flamenco y la música de cámara contemporánea. Guitarra flamenca, chelo y voz.",
    role: "Dirección artística · Guitarra · Arreglos",
    image: "/images/dario2.jpg",
  },
  {
    id: 2,
    title: "Raíces · Festival Internacional",
    category: "Directo",
    year: "2019–presente",
    description:
      "Participación continuada en el festival, tanto como guitarrista solista como en acompañamiento a cantaores y bailaoras de referencia del panorama flamenco actual.",
    role: "Guitarra flamenca · Acompañamiento",
    image: "/images/dario4.jpg",
  },
  {
    id: 3,
    title: "La voz del cante",
    category: "Colaboraciones",
    year: "2021",
    description:
      "Colaboración en el disco de un cantaor de referencia del flamenco contemporáneo. Guitarras, arreglos y producción ejecutiva.",
    role: "Guitarra · Arreglos · Producción",
    image: "/images/dario3.jpg",
  },
  {
    id: 4,
    title: "Archivo sonoro del flamenco",
    category: "Producciones",
    year: "2020–presente",
    description:
      "Proyecto de documentación y producción de grabaciones de músicos de flamenco. Registro, preservación y difusión de repertorio tradicional y de autor.",
    role: "Producción · Técnico de sonido · Dirección",
    image: "/images/dario5.jpg",
  },
];

export default function Proyectos() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="proyectos" className="py-32 md:py-48 lg:py-60 bg-[#0C0A08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">Proyectos</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end" style={{ marginBottom: "clamp(3rem, 6vw, 6rem)" }}>
            <h2
              className="text-[#F5F1E8]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                lineHeight: 1.05,
              }}
            >
              Trabajo
              <br />
              <span className="text-[#D6A85A] italic">y memoria</span>
            </h2>
            <p className="text-[#C4B89A] font-light max-w-md" style={{ lineHeight: 1.9 }}>
              Cada proyecto es una pregunta que solo puede responderse tocando.
              Un archivo en construcción permanente.
            </p>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1}>
          <div
            className="flex flex-wrap gap-3 border-b border-[#2A2520]"
            style={{ marginBottom: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-[0.2em] uppercase px-5 py-3 transition-all duration-300 ${
                  active === cat
                    ? "bg-[#D6A85A] text-[#0C0A08] font-semibold"
                    : "text-[#C4B89A] hover:text-[#F5F1E8] border border-[#3D3730] hover:border-[#C4B89A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-[#111009] hover:bg-[#1A1714] transition-colors duration-500 cursor-default overflow-hidden border border-[#2A2520] hover:border-[#D6A85A]/20"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111009]/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
                  <div
                    className="flex justify-between items-start"
                    style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}
                  >
                    <span className="text-[#D6A85A] text-xs tracking-[0.3em] uppercase">
                      {project.category}
                    </span>
                    <span className="text-[#9A907F] text-xs">{project.year}</span>
                  </div>
                  <h3
                    className="text-[#F5F1E8] group-hover:text-[#D6A85A] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.3rem,2.5vw,1.75rem)",
                      lineHeight: 1.2,
                      marginBottom: "clamp(0.75rem, 2vw, 1.25rem)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#C4B89A] font-light"
                    style={{ lineHeight: 1.9, marginBottom: "clamp(1.25rem, 3vw, 2rem)" }}
                  >
                    {project.description}
                  </p>
                  <div className="border-t border-[#2A2520]" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#9A907F]">
                      {project.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
