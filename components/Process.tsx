import React from 'react';

const steps = [
  { num: '01', title: 'БРИФИНГ', desc: 'Обсуждаем идею, референсы и ставим четкую цель.' },
  { num: '02', title: 'СЕССИЯ', num_color: 'text-[#ccff00]', desc: 'Записываем материал в комфортной атмосфере.' },
  { num: '03', title: 'ПОСТ-ПРОД', desc: 'Сведение, тюн и доведение звука до идеала.' },
  { num: '04', title: 'ФИНАЛ', desc: 'Мастеринг и подготовка трека к стримингам.' },
];

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4 leading-tight">КАК МЫ РАБОТАЕМ</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {steps.map((step, idx) => (
          <div key={idx} className="p-10 border border-white/10 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
            <div className={`text-6xl font-accent font-black mb-8 ${step.num_color || 'text-white/5'} group-hover:scale-110 transition-transform duration-500`}>
              {step.num}
            </div>
            <h3 className="text-xl font-accent font-bold mb-4 tracking-tighter">{step.title}</h3>
            <p className="text-sm text-white/40 lowercase leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;