import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-cacao text-arena relative overflow-hidden">
      <div className="absolute -left-[20%] top-0 w-1/2 h-full bg-rojo/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div className="about-element">
          <h2 className="font-serif italic text-4xl md:text-5xl text-rojo mb-8">
            Mi Historia
          </h2>
          <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-arena/90 mb-6">
            Soy <strong className="font-normal text-dorado">Claudia Heredia</strong>, conocida como Claudia de Bará Axelú, y hace más de 20 años dedico mi vida a la práctica y enseñanza de la religión Afro-Umbandista, un camino espiritual lleno de sabiduría, protección y transformación.
          </p>
          <p className="font-sans text-lg text-arena/70 leading-relaxed mb-6">
            A lo largo de los años, me formé como hija de Santos, de Caboclo y de Exú. Soy Cacique de Umbanda, Maé de Exú y Maé de Santos. Hoy acompaño a personas que sienten el llamado espiritual y necesitan orientación clara, respeto y contención.
          </p>
          <div className="relative mt-12 p-8 rounded-[2rem] rounded-tl-none bg-gradient-to-br from-rojo/10 to-transparent border border-rojo/20 shadow-lg shadow-rojo/5">
            <Quote className="absolute top-0 left-0 -translate-y-1/2 translate-x-6 w-8 h-8 text-rojo/40 fill-rojo/20" />
            <p className="font-serif italic text-xl md:text-2xl text-arena/90 leading-relaxed">
              "Cada proceso es único, y se respeta tu tiempo, tu energía y tu historia."
            </p>
          </div>
        </div>

        <div className="about-element bg-piedra/10 p-10 rounded-[3rem] border border-arena/10 flex flex-col justify-center relative">
          <h3 className="font-sans text-2xl font-medium mb-4 text-arena">Un camino con guía real</h3>
          <p className="font-sans text-arena/70 mb-8">
            Soy fundadora del templo <span className="text-dorado">“Los Caminos de Bará Axelú”</span>, un lugar donde podés:
          </p>
          <ul className="space-y-4 font-sans text-lg text-arena/80">
            <li className="flex items-start gap-3">
              <span className="text-rojo mt-1">✦</span>
              Encontrar guía espiritual
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rojo mt-1">✦</span>
              Recibir acompañamiento personalizado
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rojo mt-1">✦</span>
              Iniciarte en el camino religioso
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rojo mt-1">✦</span>
              Desarrollar tu conexión espiritual
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
