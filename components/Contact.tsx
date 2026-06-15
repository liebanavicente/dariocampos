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
    <section id="contacto" className="pt-40 md:pt-56 lg:pt-72 pb-32 md:pb-48 lg:pb-60 bg-[#0C0A08] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 65% 35%, #1A1208 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-8 h-px bg-[#D6A85A]" />
            <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase">Contacto</span>
          </div>

          <h2
            className="text-[#F5F1E8] max-w-3xl mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem,5vw,4rem)",
              lineHeight: 1.05,
            }}
          >
            Cada proyecto
            <span className="text-[#D6A85A] italic"> comienza escuchando.</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mt-24 md:mt-28">

          {/* Contact info */}
          <FadeIn direction="left">
            <div className="space-y-14">
              <div>
                <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block mb-5">
                  Teléfono
                </span>
                <a
                  href="tel:+34606524628"
                  className="text-[#F5F1E8] hover:text-[#D6A85A] transition-colors duration-300 block font-light"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem" }}
                >
                  606 524 628
                </a>
              </div>

              <div>
                <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block mb-5">
                  Instagram
                </span>
                <a
                  href="https://instagram.com/dariocamposreber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F1E8] hover:text-[#D6A85A] transition-colors duration-300 block font-light"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "1.35rem" }}
                >
                  @dariocamposreber
                </a>
              </div>

              <div>
                <span className="text-[#D6A85A] text-xs tracking-[0.4em] uppercase block mb-5">
                  Ubicación
                </span>
                <p
                  className="text-[#F5F1E8] font-light mb-2"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "1.35rem" }}
                >
                  PANORAMA 1526
                </p>
                <p className="text-[#BEB7AA] text-sm">Alt Empordà · Catalunya</p>
              </div>

              <div className="pt-10 border-t border-[#2A2520]">
                <p className="text-[#BEB7AA] font-light max-w-xs" style={{ lineHeight: 1.85 }}>
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
                className="flex flex-col items-start justify-center h-full py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-12 h-px bg-[#D6A85A] mb-10" />
                <h3
                  className="text-[#F5F1E8] mb-5"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem" }}
                >
                  Mensaje recibido.
                </h3>
                <p className="text-[#E7E0D2] font-light" style={{ lineHeight: 1.85 }}>
                  Gracias por escribir. Darío responderá en breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[#BEB7AA] text-xs tracking-widest uppercase block mb-3">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#2A2520] text-[#F5F1E8] py-4 text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300 placeholder:text-[#3D3730]"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-[#BEB7AA] text-xs tracking-widest uppercase block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#2A2520] text-[#F5F1E8] py-4 text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300 placeholder:text-[#3D3730]"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#BEB7AA] text-xs tracking-widest uppercase block mb-3">
                    Tipo de proyecto
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0C0A08] border-b border-[#2A2520] text-[#F5F1E8] py-4 text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300"
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
                  <label className="text-[#BEB7AA] text-xs tracking-widest uppercase block mb-3">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-[#2A2520] text-[#F5F1E8] py-4 text-sm outline-none focus:border-[#D6A85A] transition-colors duration-300 resize-none placeholder:text-[#3D3730]"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full py-6 bg-[#D6A85A] text-[#0C0A08] text-xs tracking-[0.35em] uppercase font-semibold hover:bg-[#F0C875] transition-all duration-300 flex items-center justify-center gap-5"
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
