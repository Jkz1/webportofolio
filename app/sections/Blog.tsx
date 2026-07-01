export default function Blog() {
  const posts = [
    {
      id: '01',
      title: 'Advanced Concurrency Patterns in Go',
      excerpt: 'Orchestrating complex background worker cycles using context propagation, select channel multiplexing, and isolated goroutine lifecycles.',
      date: '2026-05-12',
      readTime: '6 min',
      slug: '#',
    },
    {
      id: '02',
      title: 'Optimizing Next.js Dynamic Bundle Slashes',
      excerpt: 'Strategies to systematically identify code bloat, decouple heavy interactive libraries, and enforce tight runtime delivery boundaries.',
      date: '2026-04-28',
      readTime: '4 min',
      slug: '#',
    },
  ];

  return (
    <section id="blog" className="relative py-28 bg-zinc-950 text-zinc-100 px-6 border-t border-zinc-900 overflow-hidden">
      
      {/* DECORATION: Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent)] opacity-70 pointer-events-none" />

      {/* DECORATION: CAD Blueprint Corner Plus Markers */}
      <div className="absolute bottom-12 left-12 font-mono text-[10px] text-zinc-800 select-none">+</div >
      <div className="absolute bottom-12 right-12 font-mono text-[10px] text-zinc-800 select-none">+</div >

      <div className="relative max-w-4xl mx-auto w-full z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="space-y-1 shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">04 / Publications</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Writing</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        {/* Clean, Horizontal Row Feed with Left Blueprint Line Indicator */}
        <div className="divide-y divide-zinc-900 border-l border-zinc-900 relative pl-6 md:pl-8 space-y-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4 transition-all duration-200"
            >
              {/* DECORATION: Left node tracker block aligned on the border axis */}
              <div className="absolute left-0 -translate-x-[29px] md:-translate-x-[37px] top-[14px] first:top-2 w-2 h-2 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-zinc-500 group-hover:bg-zinc-100 transition-all duration-300" />

              {/* Left Content Area */}
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors duration-200">
                  <a href={post.slug} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Right Column Signature Call Trigger */}
              <div className="text-[11px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 pt-1 flex items-center gap-1 group/link">
                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  read_article()
                </span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Navigation Footer Block Trigger */}
        <div className="mt-14 pt-8 border-t border-zinc-900/60 flex justify-start relative">
          <div className="absolute top-0 left-0 text-[8px] font-mono text-zinc-800 -translate-y-3 select-none">
            // log_volume_index
          </div>
          <a
            href="/blog"
            className="px-5 py-2 bg-zinc-900/40 text-zinc-300 font-mono text-xs font-medium rounded-md border border-zinc-800/80 backdrop-blur-sm hover:bg-zinc-800/50 hover:text-white hover:border-zinc-600 transition-all duration-200"
          >
            view_all_posts()
          </a>
        </div>

      </div>
    </section>
  );
}