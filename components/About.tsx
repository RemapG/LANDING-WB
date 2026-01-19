import React from 'react';
import { TEAM_DATA } from '../data';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">КОМАНДА WOODBAZE</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
        {TEAM_DATA.map((member, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-zinc-900 flex items-center justify-center transition-all duration-700 border border-white/5 shadow-2xl">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-accent font-bold mb-1 group-hover:text-[#ccff00] transition-colors">{member.name}</h3>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase font-bold">{member.role}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-10 border border-white/5 bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="max-w-2xl text-lg text-white/60 lowercase italic text-center md:text-left">
          "мы собрали лучших фанатов своего дела. в woodbaze нет случайных людей, только те, кто живет музыкой 24/7."
        </p>
        <div className="flex gap-10">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">10+</div>
            <div className="text-[10px] text-white/30 font-black uppercase tracking-widest">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">1К+</div>
            <div className="text-[10px] text-white/30 font-black uppercase tracking-widest">Проектов</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;