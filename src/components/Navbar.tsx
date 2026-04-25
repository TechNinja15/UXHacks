"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="UXHacks Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-black tracking-tighter text-gradient-neon">
            UXHACKS
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {/* Events */}
          <div className="group relative">
            <button className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00e5ff] transition-colors">
              Events
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-black/95 border border-white/10 rounded-xl p-2 backdrop-blur-2xl shadow-2xl">
                <Link href="/events/weekend-hackathons" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Weekend Hackathons</Link>
                <Link href="/events/tgif" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">TGIF Quizzes</Link>
                <Link href="/events/dhh" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Design Hiring (DHH)</Link>
                <Link href="/events/phh" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">PM Hiring (PHH)</Link>
                <Link href="/events" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">All Events</Link>
              </div>
            </div>
          </div>

          {/* Eldorado */}
          <div className="group relative">
            <Link href="/eldorado" className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00e5ff] transition-colors">
              Eldorado
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-black/95 border border-white/10 rounded-xl p-2 backdrop-blur-2xl shadow-2xl">
                <Link href="/eldorado" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Case Study Repository</Link>
                <Link href="/eldorado?filter=free" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Free Solutions</Link>
                <Link href="/eldorado?filter=top" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Top Rated</Link>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="group relative">
            <button className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00e5ff] transition-colors">
              Community
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-black/95 border border-white/10 rounded-xl p-2 backdrop-blur-2xl shadow-2xl">
                <a href="https://forum.uxhack.co/" target="_blank" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Community Forum</a>
                <a href="https://chat.whatsapp.com/Czzbs6pfwzZH67IrkxVFYS" target="_blank" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">WhatsApp Group</a>
                <a href="https://discord.com/invite/cEGS3aEg3E" target="_blank" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Discord Server</a>
              </div>
            </div>
          </div>

          {/* Jobs */}
          <div className="group relative">
            <button className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00e5ff] transition-colors">
              Jobs
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-black/95 border border-white/10 rounded-xl p-2 backdrop-blur-2xl shadow-2xl">
                <Link href="/jobs" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Apply for a Job</Link>
                <Link href="/jobs/post" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Post a Job</Link>
                <Link href="/guidance" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Career Guidance</Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="group relative">
            <button className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00e5ff] transition-colors">
              Resources
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-black/95 border border-white/10 rounded-xl p-2 backdrop-blur-2xl shadow-2xl">
                <Link href="/blog" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Official Blog</Link>
                <a href="https://uxhack.substack.com/" target="_blank" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Newsletter</a>
              </div>
            </div>
          </div>

          {/* For Business */}
          <div className="group relative">
            <button className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00e5ff] transition-colors">
              For Business
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-black/95 border border-white/10 rounded-xl p-2 backdrop-blur-2xl shadow-2xl">
                <Link href="/business/hackathons" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Host Hackathons</Link>
                <Link href="/business/hiring" className="block p-3 text-xs text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-lg transition-all">Hiring Solutions</Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/auth/signup">
          <button className="px-6 py-2 border border-[#4c5fd5] text-[#4c5fd5] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#4c5fd5] hover:text-black transition-all hover:shadow-[0_0_20px_rgba(76,95,213,0.3)]">
            Join Now
          </button>
        </Link>
      </div>
    </nav>
  );
}
