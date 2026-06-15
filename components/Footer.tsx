"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0A08] border-t border-[#1A1714] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-14 md:gap-16 mb-20">

          <div>
            <div className="mb-6">
              <span
                className="block text-[#B8864E] text-sm tracking-[0.3em] uppercase mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Darío Campos
              </span>
              <span
                className="block text-[#6B6358] text-xs tracking-[0.5em] uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Panorama 1526
              </span>
            </div>
            <p className="text-[#3D3730] text-xs font-light" style={{ lineHeight: 1.85 }}>
              Guitarrista flamenco, productor musical<br />
              y técnico de sonido.<br />
              Alt Empordà · Catalunya.
            </p>
          </div>

          <div>
            <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase block mb-8">
              Navegación
            </span>
            <nav className="space-y-4">
              {[
                ["Sobre Darío", "#sobre"],
                ["Trayectoria", "#trayectoria"],
                ["Guitarra flamenca", "#guitarra"],
                ["Producción y sonido", "#produccion"],
                ["Proyectos", "#proyectos"],
                ["Audio y vídeo", "#audio"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-xs tracking-widest uppercase text-[#3D3730] hover:text-[#B8864E] transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-[#B8864E] text-xs tracking-[0.4em] uppercase block mb-8">
              Contacto
            </span>
            <div className="space-y-5">
              <a
                href="mailto:dario@panorama1526.com"
                className="block text-[#6B6358] text-sm hover:text-[#B8864E] transition-colors duration-300"
              >
                dario@panorama1526.com
              </a>
              <a
                href="https://instagram.com/dariocamposguitarra"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6B6358] text-sm hover:text-[#B8864E] transition-colors duration-300"
              >
                @dariocamposguitarra
              </a>
              <div className="pt-4 border-t border-[#1A1714]">
                <a
                  href="https://panorama1526.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#3D3730] text-xs tracking-widest uppercase hover:text-[#B8864E] transition-colors duration-300"
                >
                  panorama1526.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1714] gap-4">
          <span className="text-[#2A2520] text-xs tracking-widest uppercase">
            © {year} Darío Campos — Todos los derechos reservados
          </span>
          <span className="text-[#2A2520] text-xs">
            PANORAMA 1526 · Alt Empordà · Catalunya
          </span>
        </div>
      </div>
    </footer>
  );
}
