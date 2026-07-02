export default function Footer() {
  const socialEndpoints = [
    { target: 'GitHub', endpoint: 'https://github.com/jkz1' },
    { target: 'LinkedIn', endpoint: 'https://www.linkedin.com/in/jikky-jikky-61603a30b' },
  ];

  return (
    <footer className="relative bg-zinc-950 text-zinc-100 px-6 pb-12 pt-6 border-t border-zinc-900/60 overflow-hidden">
      
      {/* DECORATION: Subtle footer blueprint anchor line */}
      <div className="max-w-4xl mx-auto w-full border-t border-dashed border-zinc-900/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Side: System Metadata */}
        <div className="font-mono text-[10px] text-zinc-600 text-center sm:text-left space-y-1">
          <p>{`// core_runtime_compiled_2026`}</p>
          <p>© {new Date().getFullYear()} Jikky. All rights initialized.</p>
        </div>

        {/* Right Side: Network Targets Array */}
        <div className="flex gap-6 font-mono text-[11px]">
          {socialEndpoints.map((item) => (
            <a
              key={item.target}
              href={item.endpoint}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-all group"
            >
              <span className="text-zinc-700 group-hover:text-zinc-500 transition-colors">@</span>
              <span>{item.target.toLowerCase()}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}