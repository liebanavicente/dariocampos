"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const modalidades = [
  {
    num: "01",
    title: "Acompañamiento al cante",
    description:
      "La guitarra que escucha. El arte de sostener una voz, de darle tierra bajo los pies, de anticipar sin adelantarse. El acompañamiento al cante es la forma más exigente y más hermosa de entender la guitarra flamenca.",
  },
  {
    num: "02",
    title: "Acompañamiento al baile",
    description:
      "Diálogo entre el sonido y el cuerpo. La guitarra que marca el tiempo y lo detiene, que impulsa y frena, que convierte la música en movimiento y el movimiento en música. Décadas de experiencia junto a bailaoras y bailaores.",
  },
  {
    num: "03",
    title: "Concierto",
    description:
      "La guitarra en primer plano. Piezas propias e interpretaciones del repertorio flamenco clásico y contemporáneo. Un recorrido musical que va desde las formas más tradicionales hasta las propuestas más personales.",
  },
  {
    num: "04",
    title: "Grabación y composición",
    description:
      "El estudio como extensión del escenario. Grabación de guitarra para discos, proyectos audiovisuales y producciones propias. Creación de piezas para guitarra sola, formaciones de flamenco y proyectos de producción musical.",
  },
];

export default function GuitarraFlamenca() {
  return (
    <section id="guitarra" className="py-32 md:py-48 lg:py-60 bg-[#0C0A08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#B8864E]" />
            <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase">
              Guitarra flamenca
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
              El arte
              <br />
              <span className="text-[#B8864E] italic">que no envejece</span>
            </h2>
            <p className="text-[#C4B89A] font-light max-w-md" style={{ lineHeight: 1.85 }}>
              El flamenco no se aprende en los libros. Se aprende escuchando, viéndolo,
              viviéndolo. Y se transmite de la misma manera: de persona a persona,
              de emoción a emoción.
            </p>
          </div>
        </FadeIn>

      </div>

      {/* Full-width atmospheric image */}
      <FadeIn>
        <div className="relative h-[65vh] min-h-[400px] overflow-hidden mb-24 md:mb-32">
          <Image
            src="/images/dario4.jpg"
            alt="Darío Campos — guitarra flamenca al aire libre"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08]/75 via-[#0C0A08]/30 to-[#0C0A08]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/40 to-[#0C0A08]/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-[#B8864E] text-xs tracking-[0.5em] uppercase mb-5">
                Cante · Baile · Concierto
              </p>
              <p
                className="text-[clamp(1.1rem,3vw,1.8rem)] text-[#EDE8DF]/70 italic max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-playfair)", lineHeight: 1.4 }}
              >
                &ldquo;La guitarra flamenca es el idioma más difícil y más libre del mundo&rdquo;
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Modalidades */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-0">
          {modalidades.map((m, i) => (
            <FadeIn key={m.num} delay={i * 0.07}>
              <div className="group grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-8 md:gap-12 items-start py-12 md:py-14 border-b border-[#1A1714] hover:border-[#B8864E]/20 transition-colors duration-400 cursor-default">
                <span
                  className="text-[#2A2520] text-3xl pt-1 group-hover:text-[#B8864E]/25 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {m.num}
                </span>
                <div className="max-w-2xl">
                  <h3
                    className="text-[#EDE8DF] mb-5 group-hover:text-[#B8864E] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.25rem,2vw,1.6rem)",
                    }}
                  >
                    {m.title}
                  </h3>
                  <p className="text-[#6B6358] font-light" style={{ lineHeight: 1.85 }}>
                    {m.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
