"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { LogOut, User, LayoutGrid, Settings, ChevronDown } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  links: NavLink[];
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Events', links: [
      { name: 'Weekend Hackathons', href: '/events/weekend-hackathons' },
      { name: 'TGIF Quizzes', href: '/events/tgif' },
      { name: 'Design Hiring (DHH)', href: '/events/dhh' },
      { name: 'PM Hiring (PHH)', href: '/events/phh' },
      { name: 'All Events', href: '/events' },
    ]},
    { name: 'Eldorado', links: [
      { name: 'Case Study Repository', href: '/eldorado' },
      { name: 'Free Solutions', href: '/eldorado?filter=free' },
      { name: 'Top Rated', href: '/eldorado?filter=top' },
    ]},
    { name: 'Showcase', links: [
      { name: 'View Wall', href: '/showcase' },
      { name: 'Submit Project', href: '/showcase/post' },
    ]},
    { name: 'Community', links: [
      { name: 'Community Forum', href: 'https://forum.uxhack.co/', external: true },
      { name: 'WhatsApp Group', href: 'https://chat.whatsapp.com/Czzbs6pfwzZH67IrkxVFYS', external: true },
      { name: 'Discord Server', href: 'https://discord.com/invite/cEGS3aEg3E', external: true },
    ]},
    { name: 'Jobs', links: [
      { name: 'Apply for a Job', href: '/jobs' },
      { name: 'Post a Job', href: '/jobs/post' },
      { name: 'Career Guidance', href: '/guidance' },
    ]},
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="UXHacks Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-black tracking-tighter text-gradient-neon">
            UXHACKS
          </span>
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="group relative">
              <button className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#00e5ff] transition-colors">
                {item.name}
                <ChevronDown size={10} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-black/95 border border-white/10 rounded-2xl p-2 backdrop-blur-2xl shadow-2xl">
                  {item.links.map((link) => (
                    link.external ? (
                      <a key={link.name} href={link.href} target="_blank" className="block p-3 text-[10px] font-bold text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-xl transition-all uppercase tracking-widest">{link.name}</a>
                    ) : (
                      <Link key={link.name} href={link.href} className="block p-3 text-[10px] font-bold text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-xl transition-all uppercase tracking-widest">{link.name}</Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {status === "authenticated" ? (
            <div className="group relative">
              <button className="flex items-center gap-3 pl-2 py-2 pr-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group">
                {session.user?.image ? (
                  <img src={session.user.image} alt="User" className="w-7 h-7 rounded-full border border-white/20" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4c5fd5] to-[#00e5ff] flex items-center justify-center text-[10px] font-black text-black uppercase">
                    {session.user?.name?.[0] || "U"}
                  </div>
                )}
                <span className="text-[10px] font-black text-white uppercase tracking-widest hidden md:inline">{session.user?.name?.split(' ')[0]}</span>
              </button>
              
              <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-black/95 border border-white/10 rounded-2xl p-2 backdrop-blur-2xl shadow-2xl space-y-1">
                  <div className="px-4 py-3 border-b border-white/5 mb-2">
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Signed in as</p>
                    <p className="text-[10px] font-bold text-white truncate">{session.user?.email}</p>
                  </div>
                  
                  <Link href="/profile" className="flex items-center gap-3 p-3 text-[10px] font-black text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-xl transition-all uppercase tracking-widest">
                    <User size={14} />
                    My Profile
                  </Link>
                  <Link href="/dashboard" className="flex items-center gap-3 p-3 text-[10px] font-black text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-xl transition-all uppercase tracking-widest">
                    <LayoutGrid size={14} />
                    Project Dashboard
                  </Link>
                  <Link href="/settings" className="flex items-center gap-3 p-3 text-[10px] font-black text-gray-400 hover:bg-white/5 hover:text-[#4c5fd5] rounded-xl transition-all uppercase tracking-widest">
                    <Settings size={14} />
                    Account Settings
                  </Link>
                  
                  <div className="h-px bg-white/5 my-2"></div>
                  
                  <button 
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-3 p-3 text-[10px] font-black text-red-400 hover:bg-red-500/10 rounded-xl transition-all uppercase tracking-widest"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/auth/signup">
              <button className="px-6 py-2 border border-[#4c5fd5] text-[#4c5fd5] text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#4c5fd5] hover:text-black transition-all hover:shadow-[0_0_20px_rgba(76,95,213,0.3)]">
                Join Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
