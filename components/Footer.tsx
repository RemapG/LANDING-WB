import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="text-2xl font-black tracking-tighter flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center text-black rotate-45">
                <span className="-rotate-45 font-serif text-lg">W</span>
              </div>
              <span>WOODBAZE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Профессиональное производство музыки. От идеи до чартов. Качество, которое слышно с первых секунд.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <span className="text-[10px] font-bold">VK</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <span className="text-[10px] font-bold">TG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black mb-10 text-white/20">Навигация</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#services" className="text-white/50 hover:text-[#c4a484] transition-colors">Услуги и цены</a></li>
              <li><a href="#portfolio" className="text-white/50 hover:text-[#c4a484] transition-colors">Портфолио</a></li>
              <li><a href="#equipment" className="text-white/50 hover:text-[#c4a484] transition-colors">Оборудование</a></li>
              <li><a href="#about" className="text-white/50 hover:text-[#c4a484] transition-colors">О студии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black mb-10 text-white/20">Контакты</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="text-white">+7 (960) 926-73-85</li>
              <li className="text-white/50">woodbazestudio@gmail.com</li>
              <li className="text-white/50">Кемерово, ул. Карболитовская, 1/3</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black mb-10 text-white/20">Статус</h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase">Студия Свободна</span>
              </div>
              <p className="text-[10px] text-white/40">Ближайшее окно: Сегодня </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} WoodBaze Studio. Made with Noise.
          </p>
          <div className="flex gap-8 text-white/20 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;