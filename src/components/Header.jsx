import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-[2rem] px-8 py-4 flex items-center justify-between gap-12 w-[90%] max-w-5xl ${scrolled ? 'bg-arena/80 backdrop-blur-md shadow-sm border border-cacao/10' : 'bg-transparent'
      }`}>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`font-serif italic text-xl font-bold tracking-wide transition-all hover:scale-105 ${scrolled ? 'text-cacao' : 'text-arena'}`}
      >
        Claudia Heredia
      </button>
      <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-cacao/80">
        <a href="#about" className="hover:text-cacao transition-colors">Trayectoria</a>
        <a href="#services" className="hover:text-cacao transition-colors">Servicios</a>
        <a href="#contact" className="hover:text-cacao transition-colors">Contacto</a>
      </nav>
      <a href="#contact" className="px-6 py-2 bg-rojo text-arena rounded-[2rem] font-sans text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-md">
        Agendar
      </a>
    </header>
  );
}
