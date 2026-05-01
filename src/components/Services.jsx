import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, HeartHandshake, Key, Home, HandHeart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: 'Jogada de Búzios', icon: Sparkles, desc: 'Lectura profunda para orientar tu destino y revelar verdades ocultas.' },
  { name: 'Unión de Parejas', icon: HeartHandshake, desc: 'Restauración de vínculos amorosos y armonización sentimental.' },
  { name: 'Apertura de Caminos', icon: Key, desc: 'Desbloqueo energético para atraer prosperidad y éxito en tus proyectos.' },
  { name: 'Limpieza de Negocios y Casas', icon: Home, desc: 'Purificación de espacios para eliminar negatividad estancada.' },
  { name: 'Ayuda Espiritual', icon: HandHeart, desc: 'Acompañamiento integral para superar obstáculos y encontrar la paz.' }
];

export default function Services() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.service-item');
      items.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 bg-cacao text-arena relative overflow-hidden">
      {/* Abstract background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rojo/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="font-serif italic text-4xl md:text-6xl text-rojo mb-4">Servicios</h2>
          <p className="font-mono text-sm tracking-widest text-arena/60 uppercase">Realizo todo tipo de trabajo espiritual.</p>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div key={index} className="service-item group flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-[2rem] bg-arena/5 hover:bg-arena/10 border border-arena/10 transition-colors duration-500 cursor-default">
                <div className="p-4 bg-rojo/20 rounded-full text-rojo group-hover:scale-110 transition-transform duration-500 w-fit">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-medium mb-2">{svc.name}</h3>
                  <p className="font-sans text-arena/70">{svc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
