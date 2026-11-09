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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10 items-start">

          {/* Left Column: Focused Bio */}
          <div className="lg:col-span-3 space-y-6 text-zinc-400 text-base leading-relaxed relative">
            <p>
              I am a full-stack developer dedicated to building efficient, reliable, and production-ready applications. My approach focuses on clean architecture, optimal system design, and creating intuitive, cross-platform interfaces
            </p>
            <p>
              Whether I am structuring robust backend databases or refining interactive frontends, my goal is to engineer scalable, maintainable solutions built for long-term success.
            </p>
            <p>
              I focus on remote and freelance collaboration, helping teams transform technical specifications into deployed, high-performance software products.
            </p>
          </div>

          {/* Right Column: Technical Profile Summary */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-sm shadow-xl shadow-black/20">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">system_profile</span>
                <span className="text-[10px] font-mono text-emerald-500">online</span>
              </div>
              <dl className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600">{"// focus"}</dt>
                  <dd className="text-zinc-300 text-right">full-stack systems</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600">{"// workflow"}</dt>
                  <dd className="text-zinc-300 text-right">remote / freelance</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600">{"// location"}</dt>
                  <dd className="text-zinc-300 text-right">Indonesia</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}