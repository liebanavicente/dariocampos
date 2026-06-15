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
            <span className="w-8 h-px bg-[#B8864E]" />
            <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase">
              Producción y sonido
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-20 md:mb-28">
            <h2
              className="text-[#EDE8DF]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                lineHeight: 0.95,
              }}
            >
              El sonido
              <br />
              <span className="text-[#B8864E] italic">como artesanía</span>
            </h2>
            <p className="text-[#C4B89A] font-light max-w-md" style={{ lineHeight: 1.85 }}>
              La producción musical no empieza en el estudio. Empieza en la escucha,
              en la comprensión del proyecto, en la confianza entre artista y productor.
            </p>
          </div>
        </FadeIn>

        {/* Studio photo — full width within container */}
        <FadeIn>
          <div className="relative aspect-[16/7] overflow-hidden mb-20 md:mb-28">
            <Image
              src="/images/dario5.jpg"
              alt="PANORAMA 1526 — estudio de grabación"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/70 via-[#0F0D0A]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span
                className="block text-[#B8864E] text-xs tracking-[0.4em] uppercase mb-2"
              >
                Panorama 1526
              </span>
              <span
                className="text-[#EDE8DF]/70 text-sm font-light tracking-widest uppercase"
              >
                Alt Empordà · Catalunya
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Services list */}
        <div className="space-y-0">
          {servicios.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.08}>
              <div className="group grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-8 md:gap-12 items-start py-12 md:py-16 border-b border-[#1A1714] hover:border-[#B8864E]/20 transition-colors duration-400 cursor-default">
                <span
                  className="text-[#2A2520] text-3xl pt-1 group-hover:text-[#B8864E]/25 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.num}
                </span>
                <div className="max-w-2xl">
                  <h3
                    className="text-[#EDE8DF] mb-5 group-hover:text-[#B8864E] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.25rem,2vw,1.6rem)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#6B6358] font-light" style={{ lineHeight: 1.85 }}>
                    {s.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* PANORAMA 1526 footer note */}
        <FadeIn delay={0.2}>
          <div className="mt-20 md:mt-28 pt-10 border-t border-[#2A2520] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span
                className="block text-[#B8864E] text-sm tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Panorama 1526
              </span>
              <span className="text-[#3D3730] text-xs tracking-widest uppercase">
                Alt Empordà · Catalunya
              </span>
            </div>
            <p className="text-[#6B6358] text-sm font-light max-w-md" style={{ lineHeight: 1.85 }}>
              Espacio de creación, grabación y exploración sonora donde se desarrollan
              los proyectos de producción de Darío Campos.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
