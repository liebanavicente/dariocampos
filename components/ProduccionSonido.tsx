"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const servicios = [
  {
    num: "01",
    title: "Producción musical",
    description:
      "Participación activa en el desarrollo musical: arreglos, estructura, identidad sonora. Producción entendida como colaboración creativa, no como servicio técnico. El productor que escucha antes de proponer.",
  },
  {
    num: "02",
    title: "Grabación",
    description:
      "Captura de guitarra flamenca y otros instrumentos con la cadena de señal más adecuada para cada proyecto. La grabación como acto interpretativo, no solo técnico.",
  },
  {
    num: "03",
    title: "Mezcla y arreglos",
    description:
      "Mezcla con enfoque musical. El resultado no es una suma de pistas sino una experiencia cohesionada. Arreglos que potencian la idea original sin traicionarla.",
  },
  {
    num: "04",
    title: "Técnico de sonido en directo",
    description:
      "Experiencia en conciertos, festivales y espectáculos de flamenco. La técnica al servicio de la música, invisible cuando funciona bien.",
  },
];

export default function ProduccionSonido() {
  return (
    <section id="produccion" className="bg-[#0F0D0A] py-32 md:py-48 lg:py-60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">
              Producción y sonido
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-20 md:mb-28">
            <h2
              className="text-[#F5F1E8]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                lineHeight: 0.95,
              }}
            >
              El sonido
              <br />
              <span className="text-[#D6A85A] italic">como artesanía</span>
            </h2>
            <p className="text-[#E7E0D2] font-light max-w-md" style={{ lineHeight: 1.85 }}>
              La producción musical no empieza en el estudio. Empieza en la escucha,
              en la comprensión del proyecto, en la confianza entre artista y productor.
            </p>
          </div>
        </FadeIn>

        {/* Studio photo */}
        <FadeIn>
          <div className="relative aspect-[16/7] overflow-hidden mb-24 md:mb-32">
            <Image
              src="/images/dario5.jpg"
              alt="PANORAMA 1526 — estudio de grabación"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/70 via-[#0F0D0A]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="block text-[#D6A85A] text-xs tracking-[0.4em] uppercase mb-2">
                Panorama 1526
              </span>
              <span className="text-[#F5F1E8]/80 text-sm font-light tracking-widest uppercase">
                Alt Empordà · Catalunya
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Services list */}
        <div className="space-y-5 md:space-y-6">
          {servicios.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.08}>
              <div className="group grid grid-cols-[64px_1fr] md:grid-cols-[96px_1fr] gap-6 md:gap-10 p-8 md:p-10 bg-[#0C0A08] hover:bg-[#111009] border border-[#2A2520] hover:border-[#D6A85A]/30 transition-all duration-400 cursor-default">
                <span
                  className="text-[#3D3730] text-3xl md:text-4xl pt-1 group-hover:text-[#D6A85A]/30 transition-colors duration-300 leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.num}
                </span>
                <div>
                  <h3
                    className="text-[#F5F1E8] mb-4 group-hover:text-[#D6A85A] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.25rem,2vw,1.6rem)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#BEB7AA] font-light max-w-2xl" style={{ lineHeight: 1.9 }}>
                    {s.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* PANORAMA 1526 footer note */}
        <FadeIn delay={0.2}>
          <div className="mt-24 md:mt-32 pt-12 border-t border-[#2A2520] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span
                className="block text-[#D6A85A] text-sm tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Panorama 1526
              </span>
              <span className="text-[#AFA79A] text-xs tracking-widest uppercase">
                Alt Empordà · Catalunya
              </span>
            </div>
            <p className="text-[#BEB7AA] text-sm font-light max-w-md" style={{ lineHeight: 1.85 }}>
              Espacio de creación, grabación y exploración sonora donde se desarrollan
              los proyectos de producción de Darío Campos.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
