import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-cacao text-arena pt-20 pb-8 px-6 rounded-t-[3rem] mt-[-2rem] relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-serif italic text-3xl md:text-4xl text-rojo mb-6">
          Claudia Heredia de Bara axelú
        </h2>
        <p className="font-sans text-arena/70 max-w-md mb-12">
          Santuario de introspección y bienestar. Pronta en Umbanda, Kimbanda y Nación.
        </p>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-arena/50 mb-16">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Status: Aceptando Consultas
        </div>

        <div className="w-full border-t border-arena/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-arena/40">
          <p>&copy; {new Date().getFullYear()} Claudia Heredia. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-arena transition-colors">Privacidad</a>
            <a href="#" className="hover:text-arena transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
