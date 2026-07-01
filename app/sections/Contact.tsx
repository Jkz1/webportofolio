'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API form routing
    console.log('Dispatching dynamic packet:', formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-950 text-zinc-100 px-6 border-t border-zinc-900 overflow-hidden">
      
      {/* DECORATION: Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent)] opacity-70 pointer-events-none" />

      {/* DECORATION: Ambient Dark Gray Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-zinc-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* DECORATION: CAD Blueprint Corner Plus Markers */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-zinc-800 select-none">+</div >
      <div className="absolute top-12 right-12 font-mono text-[10px] text-zinc-800 select-none">+</div >

      <div className="relative max-w-4xl mx-auto w-full z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="space-y-1 shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">05 / Communication</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">Get In Touch</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        {/* Structural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
          
          {/* Left Side: Directory Details */}
          <div className="lg:col-span-2 space-y-4 font-mono text-xs">
            {[
              { label: 'client_routing', title: 'Email', value: 'jjikky3@gmail.com', link: 'mailto:jjikky3@gmail.com' },
              { label: 'node_location', title: 'Location', value: 'Indonesia', link: null },
              { label: 'system_availability', title: 'Status', value: 'Available for core contracts', link: null },
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="p-4 rounded-lg bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-sm space-y-1.5 hover:border-zinc-600 transition-all duration-300 relative group shadow-xl shadow-black/10"
              >
                {/* DECORATION: Micro technical tag for alignment */}
                <div className="absolute top-0 right-4 -translate-y-1/2 px-1.5 py-0.5 bg-zinc-950 border border-zinc-900 text-[8px] font-mono text-zinc-600 rounded tracking-tighter uppercase group-hover:border-zinc-700 group-hover:text-zinc-500 transition-colors">
                  {`meta_0${index + 1}`}
                </div>

                <span className="text-[10px] text-zinc-600 block group-hover:text-zinc-500 transition-colors">{`// ${item.label}`}</span>
                <h3 className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider group-hover:text-zinc-300 transition-colors">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-zinc-300 hover:text-white block transition-colors">{item.value}</a>
                ) : (
                  <p className="text-zinc-300">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Underlined Action Input Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-800 text-zinc-100 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors rounded-none placeholder-zinc-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-800 text-zinc-100 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors rounded-none placeholder-zinc-700"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="subject" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Project Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-zinc-800 text-zinc-100 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors rounded-none placeholder-zinc-700"
                placeholder="Inquiry / System Design Architecture"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-zinc-800 text-zinc-100 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none rounded-none placeholder-zinc-700"
                placeholder="Describe your tech stack goals or scope parameters..."
              />
            </div>

            {/* Inline Messaging States & Submit CTA */}
            <div className="space-y-4 pt-2 relative">
              {/* DECORATION: Tiny baseline file comment */}
              <div className="absolute top-0 right-0 text-[8px] font-mono text-zinc-800 -translate-y-4 select-none hidden sm:block">
                // stream_io_ready
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-2.5 bg-zinc-100 text-zinc-950 font-mono text-xs font-bold rounded-md hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all duration-200 transform active:scale-[0.98] disabled:opacity-50"
              >
                {status === 'sending' ? 'dispatching_packet...' : 'submit_inquiry()'}
              </button>

              {status === 'success' && (
                <p className="text-xs font-mono text-emerald-500 animate-fade-in">
                  ✓ Packet transmission successful. I will respond via email shortly.
                </p>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}