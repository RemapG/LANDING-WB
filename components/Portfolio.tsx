import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { Play, Pause, AudioLines, Disc } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async (idx: number, url: string) => {
    if (!audioRef.current) return;

    // Helper to safely play
    const safePlay = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Play failed:", error);
        setIsPlaying(false);
        // Don't alert immediately on interrupt errors, as they are common during rapid switching
      }
    };

    if (playingIdx === idx) {
      // Toggle current track
      if (audioRef.current.paused) {
        await safePlay();
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      // Play new track
      // Pause previous
      audioRef.current.pause();
      setIsPlaying(false);
      
      // Update state for UI immediately
      setPlayingIdx(idx);
      
      // Set source
      audioRef.current.src = url;
      audioRef.current.load();
      
      // Play
      await safePlay();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      // Only reset time if metadata is loaded to avoid "The operation is not supported"
      if (audioRef.current.readyState > 0) {
        audioRef.current.currentTime = 0;
      }
    }
    setPlayingIdx(null);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current && Number.isFinite(time)) {
      // Safe seek
      if (audioRef.current.readyState > 0) {
        audioRef.current.currentTime = time;
        setCurrentTime(time);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleGlobalPlay = async () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (e) {
          console.error("Global play error", e);
        }
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-6 relative pb-24 md:pb-0">
      <audio 
        ref={audioRef} 
        crossOrigin="anonymous"
        onEnded={() => { setIsPlaying(false); }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="hidden"
        preload="metadata"
      />

      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-8xl font-accent font-bold mb-4">РАБОТЫ</h2>
        <div className="w-20 h-1 bg-[#ccff00]"></div>
      </div>

      <div className="flex flex-col border-t border-white/10">
        {PORTFOLIO_DATA.map((work, idx) => (
          <div 
            key={idx} 
            onClick={() => togglePlay(idx, work.audioUrl)}
            className={`group relative flex items-center justify-between p-6 md:p-10 border-b border-white/10 hover:bg-[#ccff00]/5 transition-all cursor-pointer ${playingIdx === idx ? 'bg-white/[0.02]' : ''}`}
          >
            <div className="flex items-center gap-6 md:gap-12 w-full">
               {/* Number */}
               <div className="hidden md:block text-white/20 font-accent font-bold text-xl md:text-2xl w-8 group-hover:text-[#ccff00] transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
               </div>

               {/* Play Button */}
               <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-300 ${playingIdx === idx ? 'border-[#ccff00] bg-[#ccff00] text-black scale-105' : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'}`}>
                  {playingIdx === idx && isPlaying ? (
                    <Pause size={24} fill="currentColor" />
                  ) : (
                    <Play size={24} fill="currentColor" className="ml-1" />
                  )}
               </div>

               {/* Track Info */}
               <div className="flex flex-col justify-center grow">
                  <h3 className={`text-xl md:text-4xl font-accent font-bold uppercase transition-colors leading-tight ${playingIdx === idx ? 'text-[#ccff00]' : 'text-white group-hover:text-[#ccff00]'}`}>
                    {work.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/40 font-bold tracking-[0.2em] mt-2 uppercase group-hover:text-white/60 transition-colors">
                    {work.artist || 'WOODBAZE'}
                  </p>
               </div>

               {/* Status Indicator (Desktop) */}
               <div className="hidden md:flex items-center gap-4 text-white/20 shrink-0">
                  {playingIdx === idx ? (
                     <div className="flex items-center gap-3 text-[#ccff00]">
                         <span className="text-xs font-bold tracking-widest animate-pulse">NOW PLAYING</span>
                         <AudioLines className="animate-pulse" />
                     </div>
                  ) : (
                     <div className="flex items-center gap-3 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 duration-300">
                        <span className="text-xs font-bold tracking-widest">LISTEN DEMO</span>
                        <Disc className="group-hover:rotate-90 transition-transform duration-500" />
                     </div>
                  )}
               </div>
            </div>
          </div>
        ))}
      </div>

      {playingIdx !== null && (
        <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-[#ccff00] z-[1000] py-4 md:py-6 px-6 animate-slide-up shadow-[0_-20px_60px_rgba(0,0,0,1)]">
          <div className="container mx-auto flex items-center gap-4 md:gap-10">
            
            {/* Play & Stop Controls */}
            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              <button 
                onClick={(e) => { e.stopPropagation(); toggleGlobalPlay(); }}
                className="w-10 h-10 md:w-14 md:h-14 bg-[#ccff00] rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] text-black"
              >
                {isPlaying ? (
                  <Pause size={20} fill="currentColor" />
                ) : (
                  <Play size={20} fill="currentColor" className="ml-1" />
                )}
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); stopAudio(); }}
                className="w-10 h-10 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white"
                title="Stop"
              >
                <div className="w-4 h-4 bg-current rounded-sm"></div>
              </button>
            </div>

            {/* Timeline */}
            <div className="flex flex-col flex-grow gap-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex flex-col truncate pr-4">
                  <span className="text-[#ccff00] font-accent font-bold text-[10px] md:text-xs uppercase tracking-tighter truncate">
                    {PORTFOLIO_DATA[playingIdx].title}
                  </span>
                  <span className="text-white/30 text-[9px] md:text-[10px] font-bold uppercase tracking-widest truncate">
                    {PORTFOLIO_DATA[playingIdx].artist || 'WOODBAZE'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] md:text-xs font-mono text-white/40 min-w-[35px] tabular-nums">{formatTime(currentTime)}</span>
                <div className="relative flex-grow h-6 flex items-center group/slider">
                  <input 
                    type="range" 
                    min="0" 
                    max={duration || 0} 
                    value={currentTime} 
                    onChange={handleSeek}
                    className="w-full h-1 bg-zinc-800 accent-[#ccff00] rounded-full appearance-none cursor-pointer hover:h-1.5 transition-all z-10"
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-[#ccff00] pointer-events-none rounded-full group-hover/slider:h-1.5 transition-all"
                    style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-white/40 min-w-[35px] tabular-nums">{formatTime(duration)}</span>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex items-center shrink-0">
              <button 
                onClick={(e) => { e.stopPropagation(); stopAudio(); }}
                className="text-white/20 hover:text-white transition-colors p-2"
                title="Закрыть"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #ccff00;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(204,255,0,0.6);
          border: 2px solid black;
          transition: transform 0.2s;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.4);
        }
      `}} />
    </div>
  );
};

export default Portfolio;