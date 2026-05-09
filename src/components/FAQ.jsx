import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "¿Es necesario que vaya de forma presencial?",
    answer: "No es estrictamente necesario. Muchos de mis trabajos y consultas se pueden realizar a distancia con la misma efectividad. Dependiendo de tu situación particular, evaluaremos qué es lo mejor."
  },
  {
    question: "¿Esto es magia negra?",
    answer: "No. Mis trabajos se basan en la sanación, apertura de caminos y limpieza de energías estancadas utilizando el respeto y las enseñanzas de mis entidades espirituales. Buscamos siempre la luz y el equilibrio."
  },
  {
    question: "¿Cuánto tarda en verse un resultado?",
    answer: "Cada proceso es único. Algunas personas ven cambios inmediatos en su energía en los primeros días, mientras que otros procesos más profundos requieren su tiempo de maduración. Lo importante es tener fe y paciencia."
  },
  {
    question: "¿Se mantiene mi privacidad?",
    answer: "Absolutamente. Todas las consultas, problemas y trabajos realizados se mantienen bajo la más estricta confidencialidad. Tu privacidad y confianza son sagradas para mí."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-32 px-6 bg-arena text-cacao relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-5xl font-light mb-4">
            Preguntas <span className="font-serif italic font-bold text-rojo">Frecuentes</span>
          </h2>
          <p className="font-sans text-cacao/70 max-w-xl mx-auto">
            Aclaramos tus dudas para que puedas dar el primer paso con total tranquilidad.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item border border-cacao/10 rounded-[1.5rem] overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-piedra/20' : 'bg-transparent'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-piedra/10 transition-colors"
                >
                  <span className="font-sans font-medium text-lg text-cacao">{faq.question}</span>
                  <ChevronDown 
                    className={`text-rojo transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="font-sans text-cacao/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
