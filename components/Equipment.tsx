import React from 'react';

const Equipment: React.FC = () => {
  const gears = [
    { brand: 'Universal Audio', model: 'Apollo x8p', category: 'Interface' },
    { brand: 'Neumann', model: 'U87 Ai', category: 'Microphone' },
    { brand: 'Genelec', model: '8351B', category: 'Monitors' },
    { brand: 'SSL', model: 'Fusion', category: 'Analog Processor' },
    { brand: 'Warm Audio', model: 'WA-2A', category: 'Compressor' },
    { brand: 'Manley', model: 'Voxbox', category: 'Preamp' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Только Топовое Железо</h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Мы не идем на компромиссы в вопросах качества. В нашем арсенале — легендарные аналоговые приборы и передовые цифровые решения для идеального звука.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {gears.map((g, i) => (
              <div key={i} className="border-l-2 border-[#c4a484] pl-6 py-2">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{g.category}</p>
                <p className="font-bold text-white">{g.brand}</p>
                <p className="text-sm text-white/60">{g.model}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1559732277-7453b141e3a1?q=80&w=800&auto=format&fit=crop" 
            alt="Analog gear rack" 
            className="rounded-2xl shadow-[0_0_50px_rgba(196,164,132,0.1)]"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c4a484] flex items-center justify-center rounded-xl p-4 text-center">
            <span className="text-black font-black text-xs uppercase leading-tight">Analog Soul Inside</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;