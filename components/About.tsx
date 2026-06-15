"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const stats = [
  { number: "20+", label: "Años en escena" },
  { number: "Jerez", label: "Formación" },
  { number: "∞", label: "Duende" },
];

export default function About() {
  return (
    <section id="sobre" className="py-32 md:py-48 lg:py-60 bg-[#0C0A08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

          {/* Portrait */}
          <FadeIn direction="left" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/dario1.jpg"
                alt="Darío Campos"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/50 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#D6A85A]/15 -z-10" />

            {/* Stats card */}
            <div
              className="absolute -bottom-10 -left-4 md:-left-6 bg-[#1A1714] border border-[#3D3730]"
              style={{ padding: "clamp(1.25rem, 3vw, 2.25rem)" }}
            >
              <div className="flex gap-8 md:gap-12">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-2xl md:text-3xl text-[#D6A85A] mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {s.number}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#9A907F]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.2} className="pt-16 lg:pt-4">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-px bg-[#D6A85A]" />
              <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">
                Sobre Darío
              </span>
            </div>

            <h2
              className="text-[#F5F1E8]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                lineHeight: 1.05,
                marginBottom: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              La guitarra
              <span className="text-[#D6A85A] italic"> como</span>
              <br />
              forma de vida
            </h2>

            <div
              className="text-[#E7E0D2] font-light max-w-xl"
              style={{ lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              <p>
                Hay músicos que tocan la guitarra. Y hay músicos que viven dentro de ella.
                Darío Campos pertenece a la segunda categoría.
              </p>
              <p>
                Formado en Jerez de la Frontera, junto a algunos de los grandes maestros
                del flamenco, aprendió que el duende no se enseña: se busca, se cultiva,
                se sufre. Que la guitarra flamenca es un lenguaje con su propia gramática,
                sus propios silencios, su particular manera de decir lo que no tienen palabras.
              </p>
              <p>
                Más de veinte años sobre los escenarios, acompañando al cante y al baile,
                construyendo puentes entre la tradición más honda y la sensibilidad contemporánea.
                La música no como oficio sino como vocación irreversible.
              </p>
              <p>
                Desde Alt Empordà, vinculado a PANORAMA 1526 como espacio de creación y
                producción, su trabajo conecta el legado flamenco con las nuevas formas
                de entender el sonido.
              </p>
            </div>

            <div
              className="border-t border-[#2A2520]"
              style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)", paddingTop: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              <div className="flex flex-wrap gap-3">
                {[
                  "Guitarra flamenca",
                  "Producción musical",
                  "Técnico de sonido",
                  "Acompañamiento al cante",
                  "Acompañamiento al baile",
                  "Composición",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-[0.15em] uppercase px-4 py-2 border border-[#3D3730] text-[#C4B89A] hover:border-[#D6A85A] hover:text-[#D6A85A] transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
