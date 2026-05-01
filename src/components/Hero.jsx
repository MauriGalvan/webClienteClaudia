import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.hero-image', {
        scale: 1.05,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-cacao">
      {/* Background Image */}
      <div
        className="hero-image absolute inset-0 z-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-50 mix-blend-screen"
        style={{ backgroundImage: 'url("/claudia.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cacao/30 via-transparent to-cacao"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <span className="hero-text font-mono text-rojo uppercase tracking-[0.2em] mb-6 block text-sm">
          Guía Espiritual
        </span>
        <h1 className="hero-text text-arena font-sans font-bold text-5xl md:text-7xl leading-tight mb-4 tracking-tight">
          Ile Afroumbandista de
          <span className="font-serif italic font-normal text-6xl md:text-8xl block mt-2 text-rojo">los caminos de Bara</span>
        </h1>
        <p className="hero-text text-arena/80 font-sans text-lg md:text-xl max-w-xl mx-auto mt-6 leading-relaxed">
          Claudia Heredia de Bara axelú.<br /> Pronta en Umbanda, Kimbanda y Santos.
        </p>
      </div>
    </section>
  );
}
