export default function About() {
  return (
    <section id="about" className="relative py-28 bg-zinc-950 text-zinc-100 px-6 overflow-hidden border-t border-zinc-900">
      
      {/* DECORATION: Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent)] opacity-70 pointer-events-none" />

      {/* DECORATION: Geometric Section Border Marker */}
      <div className="absolute top-0 left-12 w-[1px] h-8 bg-zinc-800" />

      <div className="relative max-w-4xl mx-auto w-full">
        
        {/* Section Heading with Minimalist Line Decoration */}
        <div className="flex items-center gap-4 mb-16">
          <div className="space-y-1 shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">01 / Profile</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10 items-center">
          
          {/* Left Column: Focused Bio */}
          <div className="md:col-span-3 space-y-6 text-zinc-400 text-base leading-relaxed relative">
            <p>
              I am a software developer dedicated to building efficient, reliable, and production-ready applications. 
              My approach focuses on clean architecture, optimal system design, and creating interfaces that feel intuitive and responsive.
            </p>
            <p>
              Whether engineering robust backends or fine-tuning interactive web applications, 
              I aim for code that scales and stays highly maintainable over long lifecycles.
            </p>
            <p>
              I focus heavily on remote and freelance collaboration, helping teams transform technical specifications into deployed, high-performance software products.
            </p>
          </div>

          {/* Right Column: PORTRAIT PHOTO PLACEHOLDER */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="w-full max-w-[260px] aspect-[4/5] p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-sm shadow-xl shadow-black/20 hover:border-zinc-600 transition-colors duration-300 relative group">
              
              {/* Technical tag label top-right */}
              <div className="absolute top-0 right-4 -translate-y-1/2 px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-500 rounded tracking-tighter uppercase group-hover:border-zinc-600 group-hover:text-zinc-400 transition-colors">
                sys_portrait
              </div>

              {/* Inner Layout Photo Box */}
              <div className="w-full h-full rounded-md border border-dashed border-zinc-800 flex flex-col items-center justify-center font-mono text-[10px] text-zinc-600 space-y-2 select-none group-hover:border-zinc-700 group-hover:text-zinc-400 transition-all">
                <span className="text-4xl filter grayscale opacity-20 group-hover:opacity-50 transition-opacity">👤</span>
                <span>[01_portrait.png]</span>
                <span className="text-[9px] text-zinc-700">ratio: 4 // 5</span>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}