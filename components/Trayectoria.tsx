"use client";

import FadeIn from "./FadeIn";

const milestones = [
  {
    period: "Inicios",
    year: "Primeros años",
    title: "El encuentro con la guitarra",
    description:
      "La guitarra llega a la vida de Darío de la forma en que llegan las cosas que cambian todo: sin avisar, con la urgencia de algo inevitable. Los primeros acordes, la primera llamada de la música como lenguaje propio.",
  },
  {
    period: "Formación",
    year: "Jerez de la Frontera",
    title: "La escuela de los maestros",
    description:
      "Jerez, cuna del flamenco más hondo. Allí donde la tradición se transmite de mano en mano, de oído a oído. Formación junto a los grandes maestros de la guitarra flamenca, aprendiendo que el arte se estudia pero el duende se busca.",
  },
  {
    period: "Escena",
    year: "Dos décadas de directo",
    title: "Acompañamiento al cante y al baile",
    description:
      "El escenario como laboratorio. Años de acompañamiento al cante y al baile, aprendiendo a escuchar antes que a tocar. La guitarra como diálogo, no como monólogo. La comprensión del flamenco desde adentro.",
  },
  {
    period: "Internacional",
    year: "Proyectos nacionales e internacionales",
    title: "El flamenco sin fronteras",
    description:
      "Participación en numerosos proyectos nacionales e internacionales. El flamenco viajando por festivales, teatros y espacios culturales de todo el mundo, confirmando que lo más local es también lo más universal.",
  },
  {
    period: "Producción",
    year: "Evolución hacia el sonido",
    title: "Del instrumento al estudio",
    description:
      "La curiosidad como motor. Del instrumento a la producción, del escenario al estudio. La técnica de sonido como nueva forma de comprender la música: no solo tocarla, sino construirla, darle forma, hacerla perdurar.",
  },
  {
    period: "Presente",
    year: "Alt Empordà · PANORAMA 1526",
    title: "Tradición y contemporaneidad",
    description:
      "Desde Alt Empordà, vinculado a PANORAMA 1526, el trabajo actual conecta el legado flamenco con las nuevas formas de producción musical. Veinte años de experiencia al servicio de una visión contemporánea del arte.",
  },
];

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="bg-[#0F0D0A] py-32 md:py-48 lg:py-60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">
              Formación y trayectoria
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end" style={{ marginBottom: "clamp(4rem, 8vw, 8rem)" }}>
            <h2
              className="text-[#F5F1E8]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,6vw,5rem)",
                lineHeight: 1.05,
              }}
            >
              Veinte años
              <br />
              <span className="text-[#D6A85A] italic">de camino</span>
            </h2>
            <p className="text-[#C4B89A] font-light max-w-md" style={{ lineHeight: 1.9 }}>
              Un recorrido que no es lineal sino circular: volver siempre al origen,
              a las raíces, para poder crecer hacia arriba con más firmeza.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col" style={{ gap: "clamp(2rem, 4vw, 3.5rem)" }}>
          {milestones.map((m, i) => (
            <FadeIn key={m.period} delay={i * 0.07}>
              <div
                className="group bg-[#111009] border border-[#2A2520] hover:border-[#D6A85A]/25 transition-all duration-500"
                style={{ padding: "clamp(1.75rem, 5vw, 3.5rem)" }}
              >
                {/* Period / Year row */}
                <div
                  className="flex items-center gap-6 border-b border-[#2A2520]"
                  style={{ paddingBottom: "clamp(1rem, 2.5vw, 1.5rem)", marginBottom: "clamp(1.25rem, 3vw, 2rem)" }}
                >
                  <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase shrink-0">
                    {m.period}
                  </span>
                  <span className="text-[#9A907F] text-xs tracking-widest uppercase">
                    {m.year}
                  </span>
                </div>

                {/* Content */}
                <div className="md:grid md:grid-cols-[1fr_2fr]" style={{ gap: "clamp(1.5rem, 4vw, 4rem)" }}>
                  <h3
                    className="text-[#F5F1E8] group-hover:text-[#D6A85A] transition-colors duration-400 mb-5 md:mb-0"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.3rem,2.5vw,1.75rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-[#C4B89A] font-light"
                    style={{ lineHeight: 1.95, maxWidth: "620px" }}
                  >
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
