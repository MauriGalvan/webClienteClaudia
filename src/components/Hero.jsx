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
        className="hero-image absolute inset-0 z-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-100"
        style={{ backgroundImage: 'url("/mae.jpeg")' }}
      >
        {/* Un filtro muy suave para que la foto se vea súper nítida y vibrante */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Solo un degradado ligero abajo para anclar el texto principal */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cacao/80 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <h1 className="hero-text text-arena font-sans font-bold text-5xl md:text-7xl leading-tight mb-4 tracking-tight drop-shadow-lg">
          Ile Afroumbandista de
          <span className="font-serif italic font-normal text-6xl md:text-8xl block mt-2 text-rojo drop-shadow-md">los caminos de Bara</span>
        </h1>
        <p className="hero-text text-arena/90 font-sans text-lg md:text-xl max-w-xl mx-auto mt-6 leading-relaxed drop-shadow-md">
          Maé en Santos, Umbanda y Kimbanda.
        </p>
      </div>
    </section>
  );
}
