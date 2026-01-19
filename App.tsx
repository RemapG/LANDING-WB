import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Prices from './components/Prices';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white">
      <Header />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-20 md:py-32 border-b border-white/5">
          <Services />
        </section>

        <section id="prices" className="py-20 md:py-32 bg-[#0a0a0a] border-b border-white/5">
          <Prices />
        </section>

        <section id="team" className="py-20 md:py-32 border-b border-white/5">
          <About />
        </section>

        <section id="portfolio" className="py-20 md:py-32 bg-[#0a0a0a] border-b border-white/5">
          <Portfolio />
        </section>

        <section id="process" className="py-20 md:py-32 border-b border-white/5">
          <Process />
        </section>

        <section id="contact" className="py-20 md:py-32 bg-[#0a0a0a]">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;