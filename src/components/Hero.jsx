import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.hero-image-container', {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.4
      });
      gsap.from('.hero-image', {
        scale: 1.1,
        duration: 2,
        ease: 'power2.out',
        delay: 0.4
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-cacao pt-28 pb-12 lg:pt-0 lg:pb-0">
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left mt-8 lg:mt-0">
          <div className="hero-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-arena/20 bg-arena/5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-arena animate-pulse"></span>
            <span className="text-arena/90 text-xs tracking-widest uppercase font-mono">Consultas Abiertas</span>
          </div>

          <h1 className="hero-text text-arena font-sans font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
            Guía Espiritual
            <span className="font-serif italic font-normal text-rojo block mt-2 text-5xl md:text-6xl lg:text-7xl">
              Claudia Heredia
            </span>
          </h1>

          <p className="hero-text text-arena/80 font-sans text-lg max-w-md leading-relaxed mb-10">
            Guía espiritual y trabajos personalizados para el amor, la prosperidad, la protección y la apertura de caminos. Más de 20 años acompañando procesos con seriedad, respeto y confidencialidad.
          </p>

          <div className="hero-text">
            <button
              onClick={handleScrollToContact}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-rojo text-arena rounded-[2rem] overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-rojo/20"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 font-sans font-medium tracking-wide">Agendar Consulta</span>
              <Calendar className="relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image-container w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-arena/10 shadow-2xl">
          <div
            className="hero-image absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/mae.jpeg")' }}
          >
            {/* Subtle overlay for better blending with the "Quiet Ritual" mood */}
            <div className="absolute inset-0 bg-cacao/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cacao/40 to-transparent"></div>
          </div>
        </div>

      </div>

      {/* Subtle Noise Overlay (global texture as per skill.md) */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.03]">
        <svg className="h-full w-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </section>
  );
}
