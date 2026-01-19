import React from 'react';

const serviceList = [
  { title: 'RECORDING', icon: '🎤', items: ['Хип-хоп', 'Поп', 'Рок', 'Подкасты'] },
  { title: 'POST-PROD', icon: '🎚️', items: ['Сведение', 'Мастеринг', 'Тюн вокала'] },
  { title: 'MUSIC', icon: '🎹', items: ['Битмейкинг', 'Аранжировка', 'Сонграйтинг'] },
  { title: 'AD/VIDEO', icon: '🎬', items: ['Саунд-дизайн', 'Диктор', 'Озвучка'] },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">УСЛУГИ</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceList.map((s, idx) => (
          <div key={idx} className="p-8 border border-white/5 hover:border-[#ccff00]/50 bg-[#0a0a0a] transition-all group">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
            <h3 className="text-xl md:text-2xl font-accent font-bold mb-6 text-[#ccff00]">{s.title}</h3>
            <ul className="space-y-3">
              {s.items.map((item, i) => (
                <li key={i} className="text-white/40 text-sm uppercase tracking-widest font-bold">
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;