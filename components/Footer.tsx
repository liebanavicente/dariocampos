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
                className="block text-[#D6A85A] text-sm tracking-[0.3em] uppercase mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Darío Campos
              </span>
              <span
                className="block text-[#AFA79A] text-xs tracking-[0.5em] uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Panorama 1526
              </span>
            </div>
            <p className="text-[#BEB7AA] text-xs font-light" style={{ lineHeight: 1.85 }}>
              Guitarrista flamenco, productor musical<br />
              y técnico de sonido.<br />
              Alt Empordà · Catalunya.
            </p>
          </div>

          <div>
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block mb-8">
              Navegación
            </span>
            <nav className="space-y-4">
              {[
                ["Sobre Darío", "#sobre"],
                ["Trayectoria", "#trayectoria"],
                ["Guitarra flamenca", "#guitarra"],
                ["Producción y sonido", "#produccion"],
                ["Proyectos", "#proyectos"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-xs tracking-widest uppercase text-[#BEB7AA] hover:text-[#D6A85A] transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block mb-8">
              Contacto
            </span>
            <div className="space-y-5">
              <a
                href="tel:+34606524628"
                className="block text-[#BEB7AA] text-sm hover:text-[#D6A85A] transition-colors duration-300"
              >
                606 524 628
              </a>
              <a
                href="https://instagram.com/dariocamposreber"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#BEB7AA] text-sm hover:text-[#D6A85A] transition-colors duration-300"
              >
                @dariocamposreber
              </a>
              <div className="pt-4 border-t border-[#1A1714]">
                <a
                  href="https://panorama1526.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#AFA79A] text-xs tracking-widest uppercase hover:text-[#D6A85A] transition-colors duration-300"
                >
                  panorama1526.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1714] gap-4">
          <span className="text-[#AFA79A] text-xs tracking-widest uppercase">
            © {year} Darío Campos — Todos los derechos reservados
          </span>
          <span className="text-[#AFA79A] text-xs">
            PANORAMA 1526 · Alt Empordà · Catalunya
          </span>
        </div>
      </div>
    </footer>
  );
}
