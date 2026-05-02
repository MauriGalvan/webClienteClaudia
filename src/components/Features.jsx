import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: '',
    title: 'Más de 20 Años',
    description: 'Cuento con una trayectoria sólida guiando caminos y sanando energías con profunda sabiduría.'
  },
  {
    id: '',
    title: 'Confianza y Empatía',
    description: 'Me caracterizo por mi calidad humana, brindando contención y un espacio seguro para cada persona.'
  },
  {
    id: '',
    title: 'Gran Comunidad',
    description: 'Acompaño a muchas personas en sus procesos, brindando guía y apoyo para que encuentren paz y claridad en sus caminos.'
  }
];

export default function Features() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6 bg-arena text-cacao">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans text-3xl md:text-5xl font-light">
            Experiencia que <span className="font-serif italic font-bold text-rojo">Transforma</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card bg-piedra/20 p-10 rounded-[2rem] border border-rojo/10 hover:bg-piedra/30 transition-colors duration-500">
              <span className="font-mono text-rojo text-sm mb-6 block border-b border-rojo/20 pb-4">
                {feature.id}
              </span>
              <h3 className="font-sans text-2xl font-medium mb-4">
                {feature.title}
              </h3>
              <p className="font-sans text-cacao/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
