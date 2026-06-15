import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Trayectoria from "@/components/Trayectoria";
import GuitarraFlamenca from "@/components/GuitarraFlamenca";
import ProduccionSonido from "@/components/ProduccionSonido";
import Proyectos from "@/components/Proyectos";
import Testimonios from "@/components/Testimonios";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0C0A08] min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Trayectoria />
      <GuitarraFlamenca />
      <ProduccionSonido />
      <Proyectos />
      <Testimonios />
      <Contact />
      <Footer />
    </main>
  );
}
