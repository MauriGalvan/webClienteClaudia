import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 md:px-8 py-4 flex items-center justify-between w-[90%] max-w-5xl ${scrolled ? 'bg-arena/90 backdrop-blur-md shadow-sm border border-cacao/10' : 'bg-transparent'
      }`}>
      <div className="flex items-center gap-4 w-full justify-between relative">

        {/* Name / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-serif italic text-xl font-bold tracking-wide transition-all hover:scale-105 ${scrolled || mobileMenuOpen ? 'text-cacao' : 'text-arena'} drop-shadow-sm`}
        >
          Claudia Heredia
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-cacao/80">
          <a href="#about" className="hover:text-cacao transition-colors">Trayectoria</a>
          <a href="#services" className="hover:text-cacao transition-colors">Servicios</a>
          <a href="#testimonials" className="hover:text-cacao transition-colors">Testimonios</a>
          <a href="#faq" className="hover:text-cacao transition-colors">Preguntas Frecuentes</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Agendar Button - Restored for mobile */}
          <a href="#contact" className="inline-flex px-4 py-2 md:px-6 md:py-2 bg-rojo text-arena rounded-[2rem] font-sans text-xs md:text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-md">
            Contactame
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-cacao' : 'text-arena'} drop-shadow-sm`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-cacao' : 'text-arena'} drop-shadow-sm`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 mt-4 w-full bg-arena/95 backdrop-blur-lg rounded-[2rem] shadow-2xl border border-cacao/10 p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-cacao/80 text-center">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-cacao transition-colors py-3 border-b border-cacao/5">Trayectoria</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-cacao transition-colors py-3 border-b border-cacao/5">Servicios</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-cacao transition-colors py-3 border-b border-cacao/5">Testimonios</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-cacao transition-colors py-3">Preguntas Frecuentes</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-cacao transition-colors py-3">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}
