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

        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">
              Guitarra flamenca
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end" style={{ marginBottom: "clamp(4rem, 8vw, 8rem)" }}>
            <h2
              className="text-[#F5F1E8]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                lineHeight: 1.05,
              }}
            >
              El arte
              <br />
              <span className="text-[#D6A85A] italic">que no envejece</span>
            </h2>
            <p className="text-[#C4B89A] font-light max-w-md" style={{ lineHeight: 1.9 }}>
              El flamenco no se aprende en los libros. Se aprende escuchando, viéndolo,
              viviéndolo. Y se transmite de la misma manera: de persona a persona,
              de emoción a emoción.
            </p>
          </div>
        </FadeIn>

      </div>

      {/* Full-width atmospheric image */}
      <FadeIn>
        <div className="relative overflow-hidden" style={{ height: "clamp(340px, 65vh, 720px)", marginBottom: "clamp(4rem, 8vw, 8rem)" }}>
          <Image
            src="/images/dario4.jpg"
            alt="Darío Campos — guitarra flamenca al aire libre"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08]/80 via-[#0C0A08]/40 to-[#0C0A08]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/40 to-[#0C0A08]/65" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-[#D6A85A] text-xs tracking-[0.5em] uppercase mb-6">
                Cante · Baile · Concierto
              </p>
              <p
                className="text-[#F5F1E8]/85 italic max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.1rem,3vw,1.8rem)", lineHeight: 1.5 }}
              >
                &ldquo;La guitarra flamenca es el idioma más difícil y más libre del mundo&rdquo;
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Modalidades */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          {modalidades.map((m, i) => (
            <FadeIn key={m.num} delay={i * 0.07}>
              <div
                className="group bg-[#111009] border border-[#2A2520] hover:border-[#D6A85A]/25 transition-all duration-400 cursor-default"
                style={{ padding: "clamp(1.75rem, 5vw, 3.5rem)" }}
              >
                <div
                  className="grid"
                  style={{ gridTemplateColumns: "clamp(56px, 8vw, 96px) 1fr", gap: "clamp(1.25rem, 3vw, 3rem)", alignItems: "start" }}
                >
                  <span
                    className="text-[#3D3730] group-hover:text-[#D6A85A]/30 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.5rem,4vw,3rem)", lineHeight: 1 }}
                  >
                    {m.num}
                  </span>
                  <div>
                    <h3
                      className="text-[#F5F1E8] group-hover:text-[#D6A85A] transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "clamp(1.25rem,2vw,1.6rem)",
                        marginBottom: "clamp(0.75rem, 2vw, 1.25rem)",
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
