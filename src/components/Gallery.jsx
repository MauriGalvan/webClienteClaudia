import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "WhatsApp Image 2026-05-01 at 01.32.55.jpeg",
  "WhatsApp Image 2026-05-01 at 01.34.26.jpeg",
  "mae.jpeg",
  "WhatsApp Image 2026-05-01 at 01.36.40 (1).jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.08 (1).jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.08.jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.10.jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.11 (1).jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.11.jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.14.jpeg",
  "WhatsApp Image 2026-05-01 at 01.45.15.jpeg",
  "WhatsApp Image 2026-05-01 at 01.47.26 (1).jpeg",
  "WhatsApp Image 2026-05-01 at 01.47.26 (2).jpeg",
  "WhatsApp Image 2026-05-01 at 01.47.26 (3).jpeg",
  "WhatsApp Image 2026-05-01 at 01.47.26.jpeg",
  "bara.jpeg",
  "claudia.png"
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.gallery-element', {
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

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-piedra/10 text-cacao relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center gallery-element flex flex-col items-center">
          <h2 className="font-serif italic text-4xl md:text-5xl text-rojo mb-4">Nuestro Templo</h2>
          <p className="font-sans text-cacao/70 max-w-xl mx-auto">Un vistazo de lo que es nuestro Ile de mae Claudia de Bara axelú.</p>
        </div>

        <div className="relative gallery-element">
          {/* Botón Izquierda */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-arena text-cacao p-3 rounded-full shadow-lg hover:scale-110 transition-transform hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Contenedor del Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[280px] h-[380px] md:w-[320px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-xl border border-cacao/10"
              >
                <img
                  src={`/${img}`}
                  alt={`Templo ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                  loading="lazy"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>

          {/* Botón Derecha */}
          <button
            onClick={scrollRight}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-arena text-cacao p-3 rounded-full shadow-lg hover:scale-110 transition-transform hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Lightbox Overlay */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" 
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-arena hover:text-rojo transition-colors p-2" 
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>
            <img 
              src={`/${selectedImage}`} 
              alt="Templo Ampliado" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
