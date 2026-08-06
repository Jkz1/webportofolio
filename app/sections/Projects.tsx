export default function Projects() {
  const directory = [
    {
      id: '01',
      title: 'Site Watcher Engine',
      description: 'Real-time uptime monitor routing continuous network status alerts. Implemented custom 1-minute tick intervals to execute live service verification.',
      stack: ['Go Lang', 'TypeScript', 'MySQL'],
      liveLink: '#',
      gitLink: 'https://github.com/Jkz1/site-watcher-backend',
    },
    {
      id: '02',
      title: 'Cafe Management API',
      description: 'Comprehensive administrative dashboard tailored for small-scale cafe operations.',
      stack: ['Laravel', 'Filament', 'MySQL'],
      liveLink: '#',
      gitLink: 'https://github.com/Jkz1/my_cafe_backend',
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-zinc-950 text-zinc-100 px-6 border-t border-zinc-900 overflow-hidden">
      
      {/* DECORATION: Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent)] opacity-70 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="space-y-1 shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">03 / Production</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Selected Works</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        {/* Vertical Structural Project Rows */}
        <div className="space-y-12">
          {directory.map((project) => (
            <div 
              key={project.id}
              className="p-6 md:p-8 rounded-xl bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-sm relative group hover:border-zinc-600 transition-all duration-300 shadow-2xl shadow-black/30"
            >
              {/* DECORATION: Corner Blueprint Label block */}
              <div className="absolute top-0 right-6 -translate-y-1/2 px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-500 rounded tracking-tighter uppercase group-hover:border-zinc-600 group-hover:text-zinc-400 transition-colors">
                {`src_build_v${project.id}`}
              </div>

              {/* Title & Scope Index Layout */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {`ID: [0x0${project.id}]`}
                </span>
              </div>

              {/* Content Core Body */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              {/* Technical Stack Array Indicators */}
              <div className="flex flex-wrap gap-1.5 mb-8 border-t border-dashed border-zinc-900 pt-4 group-hover:border-zinc-800/60 transition-colors">
                {project.stack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 bg-zinc-950/50 text-[11px] font-mono border border-zinc-900 text-zinc-500 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Syntax Links */}
              <div className="flex gap-5 font-mono text-xs">
                {/* <a 
                  href={project.liveLink}
                  className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors group/btn"
                >
                  <span className="text-zinc-600 group-hover/btn:text-zinc-400 transition-colors">→</span>
                  <span>live_demo()</span>
                </a> */}
                <a 
                  href={project.gitLink}
                  className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors group/btn"
                >
                  <span className="text-zinc-700 group-hover/btn:text-zinc-500 transition-colors">→</span>
                  <span>source_code()</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}