import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'УСЛУГИ', id: 'services' },
    { name: 'ЦЕНЫ', id: 'prices' },
    { name: 'КОМАНДА', id: 'team' },
    { name: 'РАБОТЫ', id: 'portfolio' },
    { name: 'ПРОЦЕСС', id: 'process' },
    { name: 'КОНТАКТЫ', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 py-4 border-b border-[#ccff00]/20' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#ccff00] flex items-center justify-center text-black font-black transition-transform group-hover:rotate-90">W</div>
          <span className="font-accent font-bold tracking-tighter text-sm md:text-lg">WOODBAZE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#ccff00] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block px-5 py-2 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all">
            СВЯЗАТЬСЯ
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-center items-center gap-8 p-6 pt-24">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-accent font-bold hover:text-[#ccff00]"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-10 py-4 bg-[#ccff00] text-black font-accent font-bold text-sm uppercase tracking-widest"
          >
            СВЯЗАТЬСЯ С НАМИ
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;