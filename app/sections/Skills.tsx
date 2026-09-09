export default function Skills() {
  const skillNodes = [
    {
      index: '01',
      category: 'languages_runtime',
      skills: ['Dart', 'PHP', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Go Lang', 'Python'],
    },
    {
      index: '02',
      category: 'frameworks_libraries',
      skills: ['Next.js', 'React.js', 'Express.js', 'Flutter', 'Laravel', 'Filament', 'Tailwind CSS'],
    },
    {
      index: '03',
      category: 'database_tooling',
      skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Git / GitHub', 'Midtrans Integration'],
    },
  ];

  return (
    <section id="skills" className="relative py-28 bg-zinc-950 text-zinc-100 px-6 border-t border-zinc-900 overflow-hidden">

      {/* DECORATION: Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent)] opacity-70 pointer-events-none" />

      {/* DECORATION: CAD Blueprint Corner Plus Markers */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-zinc-800 select-none">+</div >
      <div className="absolute top-12 right-12 font-mono text-[10px] text-zinc-800 select-none">+</div >

      <div className="relative max-w-4xl mx-auto w-full z-10">

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="space-y-1 shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">02 / Capabilities</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
          </div>
          <div className="h-px w-full bg-linear-to-r from-zinc-800 to-transparent" />
        </div>

        {/* Dynamic Skill Grid Node Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillNodes.map((node) => (
            <div
              key={node.category}
              className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-sm relative group hover:border-zinc-600 transition-all duration-300 shadow-xl shadow-black/20"
            >
              {/* DECORATION: Top Right Technical Category Label */}
              <div className="absolute top-0 right-4 -translate-y-1/2 px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-500 rounded tracking-tighter uppercase group-hover:border-zinc-600 group-hover:text-zinc-400 transition-colors">
                {`sys_${node.index}`}
              </div>

              {/* Header Title with Custom Code Prefix */}
              <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-6 flex items-center gap-2">
                <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors font-normal">//</span>
                {node.category}
              </h3>

              {/* Skills Items Grid Layout */}
              <div className="flex flex-wrap gap-2">
                {node.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800/60 text-zinc-400 rounded hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}