import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.contact-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const location = e.target.location.value;
    const query = e.target.query.value;

    const whatsappNumber = "5491130119590";

    const message = `Hola Maé Claudia.\n\nMis datos son:\n*Nombre:* ${name}\n*Teléfono:* ${phone}\n*Lugar:* ${location}\n\n*Consulta:*\n${query}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-arena text-cacao">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center contact-element">
          <h2 className="font-serif italic text-4xl md:text-5xl mb-4">AGENDA TU CONSULTA</h2>
          <p className="font-sans text-cacao/70 max-w-xl mx-auto">Déjanos tus datos para tu consulta.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-piedra/10 p-8 md:p-12 rounded-[3rem] border border-cacao/5 contact-element">
          {/* Formulario */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-cacao/60 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-cacao/20 pb-2 font-sans text-lg focus:outline-none focus:border-cacao transition-colors placeholder:text-cacao/30"
                  placeholder="Escribe tu nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-widest text-cacao/60 mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full bg-transparent border-b border-cacao/20 pb-2 font-sans text-lg focus:outline-none focus:border-cacao transition-colors placeholder:text-cacao/30"
                  placeholder="Escribe tu número de teléfono"
                />
              </div>

              <div>
                <label htmlFor="location" className="block font-mono text-xs uppercase tracking-widest text-cacao/60 mb-2">¿De qué lugar nos contactas?</label>
                <input
                  type="text"
                  id="location"
                  required
                  className="w-full bg-transparent border-b border-cacao/20 pb-2 font-sans text-lg focus:outline-none focus:border-cacao transition-colors placeholder:text-cacao/30"
                  placeholder="Ciudad o país"
                />
              </div>

              <div>
                <label htmlFor="query" className="block font-mono text-xs uppercase tracking-widest text-cacao/60 mb-2">Consulta</label>
                <textarea
                  id="query"
                  required
                  rows="3"
                  className="w-full bg-transparent border-b border-cacao/20 pb-2 font-sans text-lg focus:outline-none focus:border-cacao transition-colors placeholder:text-cacao/30 resize-none"
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-8 bg-rojo text-arena py-4 rounded-[2rem] font-sans font-medium hover:scale-[1.03] transition-transform duration-300 shadow-md"
              >
                Solicitar Consulta
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-cacao/10 font-sans text-cacao/80">
              <p className="mb-3 flex items-center gap-2">
                <strong className="font-medium text-cacao">Teléfono:</strong>
                <a href="tel:1130119590" className="hover:text-cacao transition-colors">1130119590</a>
              </p>
              <p className="flex items-center gap-2">
                <strong className="font-medium text-cacao">Facebook:</strong>
                <a href="https://www.facebook.com/claudia.heredia.39904181" target="_blank" rel="noopener noreferrer" className="hover:text-cacao underline decoration-cacao/30 underline-offset-4 transition-colors">
                  Claudia De Bara axelu
                </a>
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="h-[400px] w-full rounded-[2rem] overflow-hidden bg-piedra/30">
            {/* Mapa de IlE de mae Claudia de Bara agelu */}
            <iframe
              src="https://maps.google.com/maps?q=IlE%20de%20mae%20Claudia%20de%20Bara%20agelu&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Claudia Heredia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
