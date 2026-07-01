'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: '01', name: 'about', hash: '#about' },
    { id: '02', name: 'skills', hash: '#skills' },
    { id: '03', name: 'projects', hash: '#projects' },
    { id: '04', name: 'blog', hash: '#blog' },
    { id: '05', name: 'contact', hash: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-zinc-950/70 border-zinc-900/80 backdrop-blur-md py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-4xl mx-auto w-full px-6 flex items-center justify-between">
        
        {/* Core System Identity / Logo */}
        <a 
          href="#hero" 
          className="font-mono text-xs font-bold tracking-tight text-zinc-400 hover:text-white transition-colors group"
        >
          <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">root@</span>
          <span>jikky_</span>
        </a>

        {/* Tactical Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6 font-mono text-[11px]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.hash}
              className="text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1 group"
            >
              <span className="text-zinc-700 font-light group-hover:text-zinc-500 transition-colors">
                {link.id}.
              </span>
              <span>{`${link.name}()`}</span>
            </a>
          ))}
        </nav>

        {/* Small Screen / Mobile Layout Handle Indicator */}
        <div className="sm:hidden font-mono text-[10px] text-zinc-600 select-none cursor-pointer hover:text-zinc-400 transition-colors">
          [menu_sys]
        </div>

      </div>
    </header>
  );
}