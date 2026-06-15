import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dariocampos.vercel.app"),
  title: "Darío Campos — Guitarra Flamenca, Producción Musical | PANORAMA 1526",
  description:
    "Guitarrista flamenco, técnico de sonido y productor musical. Más de veinte años dedicados al arte del sonido. Formado en Jerez de la Frontera. Vinculado a PANORAMA 1526.",
  keywords: [
    "guitarrista flamenco",
    "Darío Campos",
    "guitarra flamenca Alt Empordà",
    "producción musical flamenca",
    "Panorama 1526",
    "técnico de sonido flamenco",
    "acompañamiento cante baile",
    "Jerez de la Frontera guitarra",
    "flamenco contemporáneo",
    "grabación flamenca",
  ],
  openGraph: {
    title: "Darío Campos — Guitarra Flamenca & Producción Musical",
    description:
      "Guitarrista flamenco, técnico de sonido y productor musical con más de dos décadas dedicadas al arte del sonido.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darío Campos — Guitarra Flamenca",
    description:
      "Más de dos décadas dedicadas al arte del sonido. Formado en Jerez. Vinculado a PANORAMA 1526.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
