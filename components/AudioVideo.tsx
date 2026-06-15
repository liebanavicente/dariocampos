"use client";

import FadeIn from "./FadeIn";

const playlists = [
  {
    platform: "Spotify",
    label: "Escuchar en Spotify",
    description: "Discografía completa y colaboraciones",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    href: "#",
    color: "#1DB954",
  },
  {
    platform: "YouTube",
    label: "Ver en YouTube",
    description: "Conciertos, masterclasses y material audiovisual",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    href: "#",
    color: "#FF0000",
  },
  {
    platform: "SoundCloud",
    label: "Escuchar en SoundCloud",
    description: "Grabaciones, improvisaciones y experimentos sonoros",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M11.56 8.87V17h8.76v-.01c1.48-.11 2.68-1.31 2.68-2.83 0-1.56-1.27-2.83-2.84-2.83-.1 0-.2.01-.3.02-.21-3.39-3.02-6.09-6.46-6.09-1.06 0-2.06.27-2.92.75l.08 2.86zM0 15.47c0 .85.69 1.53 1.54 1.53h1.54V13.94H1.54C.69 13.94 0 14.62 0 15.47zm4.62 1.53h1.54v-5.56H4.62v5.56zm3.08 0H9.24v-7.7H7.7V17zm-4.62 0h1.54V17H3.08v0z" />
      </svg>
    ),
    href: "#",
    color: "#FF5500",
  },
];

export default function AudioVideo() {
  return (
    <section id="audio" className="py-32 md:py-48 lg:py-60 bg-[#0F0D0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[#B8864E]" />
            <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase">
              Audio y vídeo
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-20 md:mb-28">
            <h2
              className="text-[#EDE8DF]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                lineHeight: 0.95,
              }}
            >
              Escuchar
              <br />
              <span className="text-[#B8864E] italic">es empezar</span>
            </h2>
            <p className="text-[#C4B89A] font-light max-w-md" style={{ lineHeight: 1.85 }}>
              La música de Darío Campos disponible en las principales plataformas.
              Desde las grabaciones más íntimas hasta los grandes proyectos.
            </p>
          </div>
        </FadeIn>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {playlists.map((p, i) => (
            <FadeIn key={p.platform} delay={i * 0.1}>
              <a
                href={p.href}
                className="block bg-[#0F0D0A] border border-[#1A1714] p-10 md:p-12 group hover:border-[#B8864E]/30 hover:bg-[#1A1714] transition-all duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.color + "18", color: p.color }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-[#EDE8DF] mb-3 group-hover:text-[#B8864E] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.35rem",
                  }}
                >
                  {p.platform}
                </h3>
                <p className="text-[#6B6358] text-sm font-light mb-8" style={{ lineHeight: 1.85 }}>
                  {p.description}
                </p>
                <span
                  className="text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-colors duration-300"
                  style={{ color: p.color }}
                >
                  {p.label}
                  <span
                    className="h-px inline-block group-hover:w-8 transition-all duration-300"
                    style={{ backgroundColor: p.color, width: "16px" }}
                  />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Video embed placeholder */}
        <FadeIn delay={0.2}>
          <div className="border border-[#1A1714] p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase block mb-6">
                  Último vídeo
                </span>
                <h3
                  className="text-[#EDE8DF] mb-6"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.5rem,3vw,2.25rem)",
                  }}
                >
                  Soleá en concierto
                </h3>
                <p className="text-[#6B6358] text-sm font-light mb-10" style={{ lineHeight: 1.85 }}>
                  Grabación en directo de una soleá de Darío Campos.
                  Un ejemplo del estado actual de su trabajo sobre los palos clásicos del flamenco.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-[#B8864E] border border-[#B8864E]/40 px-8 py-4 hover:bg-[#B8864E] hover:text-[#0C0A08] transition-all duration-300"
                >
                  Ver en YouTube
                  <span className="w-4 h-px bg-current inline-block" />
                </a>
              </div>
              <div className="relative aspect-video bg-[#1A1714] flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "radial-gradient(ellipse at center, #3D2E1A 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full border border-[#B8864E]/40 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#B8864E] ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-[#3D3730] text-xs tracking-widest uppercase">
                    Añadir embed de YouTube
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
