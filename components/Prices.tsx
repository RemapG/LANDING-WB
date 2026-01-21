import React from 'react';

const prices = [
  { name: 'ЗАПИСЬ ВОКАЛА', price: 'от 2 000 ₽', unit: '/час', best: false },
  { name: 'СВЕДЕНИЕ + МАСТЕРИНГ', price: 'от 8 000 ₽', unit: '/трек', best: true },
  { name: 'АВТОТЮН / ПРАВКА', price: 'от 2 500 ₽', unit: '/вокал', best: false },
  { name: 'ПЕСНЯ ПОД КЛЮЧ', price: 'от 25 000 ₽', unit: '/песня', best: false },
];

const Prices: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-20 text-right flex flex-col items-end">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">ЦЕНЫ</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {prices.map((p, idx) => (
          <div key={idx} className={`p-10 flex flex-col justify-between border ${p.best ? 'border-[#ccff00] bg-[#ccff00]/5' : 'border-white/10'} hover:bg-white/5 transition-all`}>
            <div>
              {p.best && <span className="text-[10px] font-black bg-[#ccff00] text-black px-2 py-1 mb-4 inline-block">POPULAR</span>}
              <h3 className="text-lg font-accent font-bold mb-10 leading-tight">{p.name}</h3>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">{p.price}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{p.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;