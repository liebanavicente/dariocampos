"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section
      id="contacto"
      className="bg-[#0C0A08] relative overflow-hidden"
      style={{ paddingTop: "clamp(6rem, 14vw, 14rem)", paddingBottom: "clamp(4rem, 10vw, 10rem)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 65% 35%, #1A1208 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">Contacto</span>
          </div>

          <h2
            className="text-[#F5F1E8] max-w-3xl"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem,5vw,4rem)",
              lineHeight: 1.1,
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            Cada proyecto
            <span className="text-[#D6A85A] italic"> comienza escuchando.</span>
          </h2>
        </FadeIn>

        <div
          className="grid lg:grid-cols-2"
          style={{ gap: "clamp(3rem, 8vw, 8rem)", marginTop: "clamp(4rem, 8vw, 8rem)" }}
        >

          {/* Contact info */}
          <FadeIn direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2.5rem, 5vw, 4rem)" }}>
              <div>
                <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block" style={{ marginBottom: "1.25rem" }}>
                  Teléfono
                </span>
                <a
                  href="tel:+34606524628"
                  className="text-[#F5F1E8] hover:text-[#D6A85A] transition-colors duration-300 block font-light"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
                >
                  606 524 628
                </a>
              </div>

              <div>
                <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block" style={{ marginBottom: "1.25rem" }}>
                  Instagram
                </span>
                <a
                  href="https://instagram.com/dariocamposreber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F1E8] hover:text-[#D6A85A] transition-colors duration-300 block font-light"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
                >
                  @dariocamposreber
                </a>
              </div>

              <div>
                <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block" style={{ marginBottom: "1.25rem" }}>
                  Ubicación
                </span>
                <p
                  className="text-[#F5F1E8] font-light"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", marginBottom: "0.5rem" }}
                >
                  PANORAMA 1526
                </p>
                <p className="text-[#9A907F] text-sm">Alt Empordà · Catalunya</p>
              </div>

              <div className="border-t border-[#2A2520]" style={{ paddingTop: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                <p className="text-[#C4B89A] font-light max-w-xs" style={{ lineHeight: 1.95 }}>
                  Para conciertos, grabaciones, producciones, colaboraciones o cualquier
                  consulta profesional. Se responden todos los mensajes.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" delay={0.15}>
            {status === "sent" ? (
              <motion.div
                className="flex flex-col items-start justify-center h-full"
                style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-12 h-px bg-[#D6A85A]" style={{ marginBottom: "2.5rem" }} />
                <h3
                  className="text-[#F5F1E8]"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1.25rem" }}
                >
                  Mensaje recibido.
                </h3>
                <p className="text-[#C4B89A] font-light" style={{ lineHeight: 1.9 }}>
                  Gracias por escribir. Darío responderá en breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 4vw, 3rem)" }}>
                <div className="grid md:grid-cols-2" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                  <div>
                    <label className="text-[#9A907F] text-xs tracking-widest uppercase block" style={{ marginBottom: "1rem" }}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#2A2520] text-[#F5F1E8] text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300 placeholder:text-[#3D3730]"
                      style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-[#9A907F] text-xs tracking-widest uppercase block" style={{ marginBottom: "1rem" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#2A2520] text-[#F5F1E8] text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300 placeholder:text-[#3D3730]"
                      style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#9A907F] text-xs tracking-widest uppercase block" style={{ marginBottom: "1rem" }}>
                    Tipo de proyecto
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0C0A08] border-b border-[#2A2520] text-[#F5F1E8] text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300"
                    style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                  >
                    <option value="" className="bg-[#0C0A08]">Selecciona una opción</option>
                    <option value="concierto" className="bg-[#0C0A08]">Concierto</option>
                    <option value="grabacion" className="bg-[#0C0A08]">Grabación de guitarra</option>
                    <option value="produccion" className="bg-[#0C0A08]">Producción musical</option>
                    <option value="tecnico" className="bg-[#0C0A08]">Técnico de sonido</option>
                    <option value="acompanamiento" className="bg-[#0C0A08]">Acompañamiento al cante / baile</option>
                    <option value="colaboracion" className="bg-[#0C0A08]">Colaboración artística</option>
                    <option value="otro" className="bg-[#0C0A08]">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="text-[#9A907F] text-xs tracking-widest uppercase block" style={{ marginBottom: "1rem" }}>
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-[#2A2520] text-[#F5F1E8] text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300 resize-none placeholder:text-[#3D3730]"
                    style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <div style={{ paddingTop: "0.5rem" }}>
                  <button
                    type="submit"
                    className="group w-full bg-[#D6A85A] text-[#0C0A08] text-xs tracking-[0.35em] uppercase font-semibold hover:bg-[#F0C875] transition-all duration-300 flex items-center justify-center gap-5"
                    style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
                  >
                    Enviar mensaje
                    <span className="w-6 h-px bg-[#0C0A08] group-hover:w-10 transition-all duration-300 inline-block" />
                  </button>
                </div>
              </form>
            )}
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
