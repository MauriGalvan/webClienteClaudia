import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Configuraciones globales de animación pueden ir aquí
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen">
      <div className="noise-overlay"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Features />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
