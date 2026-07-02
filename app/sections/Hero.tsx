'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center bg-zinc-950 text-zinc-100 px-6 overflow-hidden"
    >
      {/* DECORATION: Seamless Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent)] opacity-70 pointer-events-none" />

      {/* DECORATION: Ambient Dark Gray Glow */}
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

      {/* DECORATION: CAD Blueprint Corner Plus Markers */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-zinc-800 select-none font-light">+</div >
      <div className="absolute top-12 right-12 font-mono text-[10px] text-zinc-800 select-none font-light">+</div >

      <div className="relative max-w-4xl mx-auto w-full z-10">

        {/* Balanced Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">

          {/* Left Columns: Text Content Stack */}
          <div className="md:col-span-2 space-y-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm text-xs text-zinc-400 w-fit cursor-default hover:border-zinc-700 transition-colors duration-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
              <span className="font-mono text-[11px] tracking-tight">Available for freelance & remote roles</span>
            </div>

            {/* Main Header Group */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100">
                Hi, I'm <span className="text-white font-extrabold tracking-tighter">Jikky</span>.
              </h1>

              <div className="flex items-center gap-4">
                <p className="text-2xl sm:text-3xl font-medium text-zinc-400 font-mono tracking-tight shrink-0">
                  Full-Stack Developer
                </p>
                <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-900 to-transparent hidden sm:block" />
              </div>
            </div>

            {/* Short description */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              I architecture efficient, clean, and highly stable applications.
              Specialized in bridging powerful backend systems with fast, minimalist user interfaces.
            </p>

            {/* Tactile Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
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

          {/* Right Column: EXPANDED HERO GRAPHIC (Now proportional) */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <div className="w-full max-w-[240px] aspect-square shrink-0 relative group">
              <div className="absolute top-0 left-0 text-[9px] font-mono text-zinc-600 -translate-y-4 select-none">
                // sys_graphics_render
              </div>

              {/* Outer Container Frame */}
              <div className="w-full h-full rounded-xl bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group-hover:border-zinc-600 transition-all duration-300 shadow-2xl shadow-black/40">
                {/* Crosshair guidelines embedded into the layout background */}
                <div className="absolute inset-4 border border-dashed border-zinc-900/60 font-mono text-[9px] text-zinc-700 flex items-center justify-center select-none group-hover:border-zinc-800 group-hover:text-zinc-500 transition-colors">
                  <img src="/images/2.jpeg" width="240" height="240" alt="Hero Graphic" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>

                {/* Micro tech indicators in frame corners */}
                <div className="absolute bottom-2 right-3 font-mono text-[8px] text-zinc-700 tracking-tighter select-none">
                  LOC: 0x7FFF
                </div>

                {/* <span className="text-5xl text-zinc-700 relative z-10 filter grayscale opacity-30 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  💻
                </span> */}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}