"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Darío", href: "#sobre" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Guitarra", href: "#guitarra" },
  { label: "Producción", href: "#produccion" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0C0A08]/97 backdrop-blur-md border-b border-[#2A2520]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col"
          >
            <span
              className="font-serif text-sm tracking-[0.25em] text-[#D6A85A] uppercase"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Darío Campos
            </span>
            <span
              className="font-serif text-[10px] tracking-[0.4em] text-[#AFA79A] uppercase group-hover:text-[#F5F1E8] transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Panorama 1526
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-xs tracking-[0.2em] text-[#BEB7AA] uppercase hover:text-[#D6A85A] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav("#contacto")}
              className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-[#D6A85A]/60 text-[#D6A85A] hover:bg-[#D6A85A] hover:text-[#0C0A08] transition-all duration-300"
            >
              Contactar
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <motion.span
              className="block w-6 h-px bg-[#F5F1E8]"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#F5F1E8]"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#F5F1E8]"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0C0A08]/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-2xl tracking-widest uppercase font-serif text-[#F5F1E8] hover:text-[#D6A85A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNav("#contacto")}
              className="mt-4 text-xs tracking-[0.3em] uppercase px-8 py-3 border border-[#D6A85A] text-[#D6A85A] hover:bg-[#D6A85A] hover:text-[#0C0A08] transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Contactar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
