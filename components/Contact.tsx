import React from 'react';
import { Phone, MapPin, Send, MessageCircle, Globe, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">СВЯЗЬ</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Contact 1 */}
          <div className="p-8 border border-white/10 bg-[#0a0a0a] flex flex-col items-center text-center hover:border-[#ccff00]/30 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ccff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#ccff00] group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <Phone size={32} />
              </div>
              <h3 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold mb-6">Sound Engineer</h3>
              
              <a href="tel:+79609267385" className="block text-2xl font-bold font-accent tracking-tighter hover:text-[#ccff00] transition-colors mb-8 whitespace-nowrap">
                +7 (960) 926-73-85
              </a>

              <div className="mt-auto grid grid-cols-3 gap-2 w-full">
                <a href="https://vk.com/bassman1" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#0077FF] hover:text-white transition-all border border-white/5 hover:border-[#0077FF]/50 group/btn">
                    <Globe size={18} className="group-hover/btn:animate-pulse" />
                    <span className="text-xs font-bold tracking-widest">VK</span>
                </a>
                <a href="https://t.me/+79609267385" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#229ED9] hover:text-white transition-all border border-white/5 hover:border-[#229ED9]/50 group/btn">
                    <Send size={18} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                    <span className="text-xs font-bold tracking-widest">TG</span>
                </a>
                <a href="https://wa.me/79609267385" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#25D366] hover:text-white transition-all border border-white/5 hover:border-[#25D366]/50 group/btn">
                    <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-xs font-bold tracking-widest">WA</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact 2 */}
          <div className="p-8 border border-white/10 bg-[#0a0a0a] flex flex-col items-center text-center hover:border-[#ccff00]/30 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ccff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#ccff00] group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <Phone size={32} />
              </div>
              <h3 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold mb-6">Manager</h3>
              
              <a href="tel:+79515877083" className="block text-2xl font-bold font-accent tracking-tighter hover:text-[#ccff00] transition-colors mb-8 whitespace-nowrap">
                +7 (951) 587-70-83
              </a>

              <div className="mt-auto grid grid-cols-3 gap-2 w-full">
                <a href="https://vk.com/masyany_aa" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#0077FF] hover:text-white transition-all border border-white/5 hover:border-[#0077FF]/50 group/btn">
                    <Globe size={18} className="group-hover/btn:animate-pulse" />
                    <span className="text-xs font-bold tracking-widest">VK</span>
                </a>
                <a href="https://t.me/+79515877083" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#229ED9] hover:text-white transition-all border border-white/5 hover:border-[#229ED9]/50 group/btn">
                    <Send size={18} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                    <span className="text-xs font-bold tracking-widest">TG</span>
                </a>
                <a href="https://wa.me/79515877083" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#25D366] hover:text-white transition-all border border-white/5 hover:border-[#25D366]/50 group/btn">
                    <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-xs font-bold tracking-widest">WA</span>
                </a>
              </div>
            </div>
          </div>

          {/* Studio Info & VK */}
          <div className="p-8 border border-white/10 bg-[#0a0a0a] flex flex-col items-center text-center hover:border-blue-500/30 transition-all group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10 w-full flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <MapPin size={32} />
                </div>
                <h3 className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold mb-6">Локация</h3>
                <p className="text-lg font-bold mb-2 leading-tight">Кемерово,<br/>ул. Карболитовская, 1/3</p>
                <a href="mailto:woodbazestudio@gmail.com" className="text-white/50 hover:text-white transition-colors text-sm break-all mb-8">woodbazestudio@gmail.com</a>
                
                <div className="mt-auto w-full">
                    <a href="#" className="flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-[#0077FF] hover:text-white transition-all border border-white/5 hover:border-[#0077FF]/50 group/btn w-full">
                        <Globe size={20} className="group-hover/btn:animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.2em] font-accent">VKONTAKTE</span>
                    </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;