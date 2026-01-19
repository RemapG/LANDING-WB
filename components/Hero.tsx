import React from 'react';
import { HERO_DATA } from '../data';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      
      {/* Enhanced Background Decor & Brighter Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Central Intense Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#ccff00]/[0.06] blur-[180px] rounded-full"></div>
        
        {/* Bright Animated Corner Glow - TOP LEFT */}
        <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-[#ccff00]/[0.15] rounded-full blur-[140px] animate-pulse duration-[4000ms]"></div>
        
        {/* Bright Accent Glow - BOTTOM RIGHT */}
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-purple-600/[0.08] rounded-full blur-[140px] animate-pulse duration-[6000ms]"></div>

        {/* Sharp High-Light Glow */}
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-[#ccff00]/[0.1] rounded-full blur-[100px]"></div>
      </div>

      {/* Subtle Grid Overlay for depth */}
      <div className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block py-1 px-4 bg-[#ccff00] text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8 animate-bounce shadow-[0_0_30px_rgba(204,255,0,0.5)]">
            Top Tier Sound Only
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-accent font-bold leading-[0.85] tracking-tighter mb-8 md:mb-12">
            <span className="block drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{HERO_DATA.titleLine1}</span>
            <span className="text-outline block transition-all duration-700 hover:tracking-widest cursor-default">{HERO_DATA.titleLine2}</span>
            <span className="block text-[#ccff00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">{HERO_DATA.titleLine3}</span>
          </h1>

          <div className="max-w-xl text-base md:text-xl text-white/60 mb-10 md:mb-14 font-medium lowercase px-4 leading-relaxed tracking-tight backdrop-blur-[2px]">
            {HERO_DATA.subtitle}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 sm:px-0">
            <a href="#contact" className="px-10 md:px-14 py-5 bg-[#ccff00] text-black font-accent font-bold text-xs md:text-sm hover:scale-105 transition-all uppercase tracking-widest shadow-[0_15px_40px_rgba(204,255,0,0.3)] hover:shadow-[0_20px_50px_rgba(204,255,0,0.5)]">
              СВЯЗАТЬСЯ С НАМИ
            </a>
            <a href="#portfolio" className="px-10 md:px-14 py-5 border border-white/20 text-white font-accent font-bold text-xs md:text-sm hover:bg-white hover:text-black transition-all backdrop-blur-md">
              НАШИ РАБОТЫ
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10 py-3 md:py-5 bg-black/60 backdrop-blur-xl">
        <div className="marquee font-accent text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] text-white/30 italic font-bold">
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
          <span>MIXING • MASTERING • RECORDING • PRODUCTION • SOUND DESIGN • SONGWRITING • </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;