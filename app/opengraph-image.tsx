import { ImageResponse } from "next/og";

export const alt = "Darío Campos — Guitarra Flamenca & Producción Musical";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0A08",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        <img
          src="https://dariocampos.vercel.app/images/dario3.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Gradients */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(12,10,8,0.92) 0%, rgba(12,10,8,0.65) 60%, rgba(12,10,8,0.35) 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.2) 50%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Top eyebrow */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: "#D6A85A",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#D6A85A",
              fontSize: 13,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontFamily: "serif",
              display: "flex",
            }}
          >
            Guitarra · Producción · Sonido
          </span>
        </div>

        {/* Main content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          {/* Title */}
          <div
            style={{
              fontSize: 100,
              fontFamily: "serif",
              color: "#F5F1E8",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              marginBottom: 28,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>DARÍO</span>
            <span style={{ color: "#D6A85A" }}>CAMPOS</span>
          </div>

          {/* Description */}
          <div
            style={{
              color: "#BEB7AA",
              fontSize: 20,
              fontFamily: "sans-serif",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: 540,
              marginBottom: 44,
              display: "flex",
            }}
          >
            Guitarrista flamenco, productor musical y más de dos décadas dedicadas al arte del sonido.
          </div>

          {/* Footer line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 32, height: 1, background: "#D6A85A", display: "flex" }} />
            <span
              style={{
                color: "#AFA79A",
                fontSize: 12,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                display: "flex",
              }}
            >
              PANORAMA 1526 · Alt Empordà
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
