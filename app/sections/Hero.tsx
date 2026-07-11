'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [showCursor2, setShowCursor2] = useState(false);
  const [isIgnited, setIsIgnited] = useState(false);

  useEffect(() => {
    const txt1 = "Hi, I'm Jikky.";
    const txt2 = "Full-Stack Developer";
    
    let idx1 = 0;
    let idx2 = 0;

    // Phase 1: Type Line 1
    let line1str = '';
    let line2str = '';
    const typeLine1 = setInterval(() => {
      line1str = line1str +  txt1.charAt(idx1);
      setLine1(line1str);
      idx1++;
      if (idx1 >= txt1.length) {
        setIsIgnited(true); // Trigger the ignition effect after line 1 is complete
        clearInterval(typeLine1);
        
        // Phase 2: Start Line 2 after a brief pause
        setTimeout(() => {
          setShowCursor2(true); // Activate the blinking cursor for line 2
          const typeLine2 = setInterval(() => {
            line2str = line2str + txt2.charAt(idx2);
            setLine2(line2str);
            idx2++;
            if (idx2 >= txt2.length) {
              clearInterval(typeLine2);
            }
          }, 60); // Speed of line 2 typing
        }, 400);
      }
    }, 70); // Speed of line 1 typing

    return () => clearInterval(typeLine1);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center bg-zinc-950 text-zinc-100 px-6 overflow-hidden"
    >
      {/* DECORATION: Seamless Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent)] opacity-70 pointer-events-none" />

      {/* DECORATION: Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-140 h-140 bg-zinc-900/20 rounded-full blur-[130px] pointer-events-none" />

      {/* DECORATION: CAD Blueprint Corner Plus Markers */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-zinc-800 select-none font-light">+</div >
      <div className="absolute top-12 right-12 font-mono text-[10px] text-zinc-800 select-none font-light">+</div >

      <div className="relative max-w-4xl mx-auto w-full z-10">
        <div className="max-w-2xl space-y-6">
          
          {/* Main Header Group */}
          <div className="space-y-4">
            {/* Line 1: Name */}
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100 font-mono min-h-12 sm:min-h-18">
              {line1}
              {!showCursor2 && (
                <span className="inline-block w-0.75 h-10 sm:h-13.75 ml-1 bg-zinc-100 animate-[pulse_0.8s_infinite] translate-y-1" />
              )}
            </h1>
            
            {/* Line 2: Subtitle & Trace Line */}
            <div className="flex items-center gap-4 h-10">
              <p className="text-xl sm:text-2xl font-semibold text-zinc-400 font-mono tracking-tight shrink-0 min-h-8">
                {showCursor2 && <span className="text-zinc-600 mr-2 font-normal">{`>`}</span>}
                {line2}
                {showCursor2 && (
                  <span className="inline-block w-2.5 h-4.5 sm:h-5.5 ml-1 bg-zinc-400 animate-[pulse_0.8s_infinite] translate-y-0.5" />
                )}
              </p>

              {/* SYSTEM TRACE LINE - Expands smoothly after typing finishes */}
              <div className="relative flex-1 hidden sm:block h-px overflow-hidden">
                <div 
                  className="absolute inset-0 bg-linear-to-r from-zinc-700 via-zinc-800 to-transparent transition-all duration-800 ease-in-out origin-left"
                  style={{ transform: isIgnited ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </div>
            </div>
          </div>

          {/* Availability Badge - Fades in at the end */}
          <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm text-xs text-zinc-400 cursor-default hover:border-zinc-700 transition-all duration-700 delay-200 ${
            isIgnited ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
            <span className="font-mono text-[11px] tracking-tight text-zinc-300">STATUS: ready_for_contracts</span>
          </div>

          {/* Description - Fades in at the end */}
          <p className={`text-base sm:text-lg text-zinc-400 leading-relaxed transition-all duration-700 delay-500 ${
            isIgnited ? 'opacity-100' : 'opacity-0'
          }`}>
            I am a full-stack developer dedicated to building efficient, scalable, and cross-platform applications. Backed by a strong foundation in software engineering, I specialize in turning complex technical requirements into intuitive, high-performance digital products for international teams.
          </p>

          {/* Tactile Buttons - Fades in at the end */}
          <div className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 delay-700 ${
            isIgnited ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}>
            <a
              href="#projects"
              className="px-6 py-2.5 bg-zinc-100 text-zinc-950 font-mono text-xs font-bold rounded-md hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all duration-200 transform active:scale-[0.98]"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-zinc-900/40 text-zinc-300 font-mono text-xs font-semibold rounded-md border border-zinc-800 backdrop-blur-sm hover:bg-zinc-800/50 hover:text-white hover:border-zinc-600 transition-all duration-200 transform active:scale-[0.98]"
            >
              get_in_touch()
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}