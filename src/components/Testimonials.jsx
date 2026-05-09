import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, CheckCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "María G.",
    date: "Ayer",
    text: "Maé, quería agradecerle infinitamente. Las puertas se me están abriendo en el trabajo y siento una paz que hace mucho no sentía. Bendiciones.",
  },
  {
    name: "Carlos R.",
    date: "Hace 2 días",
    text: "Hola Claudia, el trabajo de limpieza en mi local fue un éxito. Las ventas volvieron a subir esta semana. Estoy muy agradecido.",
  },
  {
    name: "Lucía M.",
    date: "La semana pasada",
    text: "No tengo palabras. Mi relación estaba perdida y gracias a su guía y sus trabajos pudimos reencontrarnos y sanar. Gracias de corazón.",
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 px-6 bg-cacao text-arena relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-rojo/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arena/5 border border-arena/10 text-arena/60 mb-6 font-mono text-sm">
            <MessageCircle size={16} />
            <span>Mensajes Reales</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-light">
            Historias de <span className="font-serif italic font-bold text-rojo">Clientes</span>
          </h2>
          <p className="font-sans text-arena/70 max-w-xl mx-auto mt-6">
            Lo que dicen las personas que han confiado en mi guía espiritual y trabajos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card flex flex-col h-full">
              <div className="bg-arena/10 border border-arena/20 p-6 rounded-[2rem] rounded-tr-sm relative flex-grow">
                <p className="font-sans text-arena/90 leading-relaxed mb-4">
                  "{test.text}"
                </p>
                <div className="flex justify-between items-end mt-auto text-arena/50 text-xs font-mono">
                  <span>{test.date}</span>
                  <CheckCheck size={16} className="text-rojo/80" />
                </div>
              </div>
              <div className="mt-4 pl-4 border-l-2 border-rojo/30">
                <p className="font-sans font-medium text-arena">{test.name}</p>
                <p className="font-sans text-xs text-arena/50">Vía WhatsApp</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
