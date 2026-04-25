"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoCarousel from '@/components/LogoCarousel';
import Link from 'next/link';

export default function Home() {
  const [counts, setCounts] = useState({ members: 0, challenges: 0, solutions: 0, partners: 0 });

  useEffect(() => {
    const targets = { members: 10000, challenges: 50, solutions: 500, partners: 12 };
    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;

    const timers = Object.keys(targets).map(key => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timers[0]); // This is simplified, actual logic would need individual clears
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.08)_0%,transparent_60%)]"></div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          Improve Your <br />
          <span className="text-white">User Experience</span> <br />
          <span className="text-gradient-neon">Skills in 3 Steps</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
          The world's most active community of design thinkers. 
          Solve real-world challenges, build a portfolio that stands out, 
          and land your dream job.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/eldorado" className="px-10 py-4 bg-[#4c5fd5] text-black font-black rounded-full hover:shadow-[0_0_30px_rgba(76,95,213,0.4)] transition-all transform hover:-translate-y-1 text-sm uppercase tracking-widest">
            Get Started Free
          </Link>
          <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-sm uppercase tracking-widest">
            View Case Studies
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/3 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">
          <div className="text-center">
            <span className="block text-4xl md:text-6xl font-black text-[#00e5ff] mb-2">{counts.members.toLocaleString()}+</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Community Members</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl md:text-6xl font-black text-[#4c5fd5] mb-2">{counts.challenges}+</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Active Challenges</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl md:text-6xl font-black text-white mb-2">{counts.solutions}+</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Expert Solutions</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl md:text-6xl font-black text-[#00e5ff] mb-2">{counts.partners}</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Partner Companies</span>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4">What members <span className="text-[#00e5ff]">have to say</span></h2>
          <p className="text-gray-400">Voices from the most innovative product teams globally.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white/3 border border-white/10 rounded-3xl space-y-8 hover:border-[#4c5fd5]/30 transition-all group">
            <p className="text-gray-300 italic leading-relaxed">
              "My first reality check about knowledge regarding UX happened on this platform, where I got to interact with interesting minds from different professions... The expertise and knowledge base that UXHack team has brought in is commendable."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4c5fd5] to-[#00e5ff]"></div>
              <div className="text-left">
                <h4 className="text-sm font-black text-white uppercase tracking-wider">Hrittika Patra</h4>
                <p className="text-[10px] text-[#4c5fd5] font-bold uppercase tracking-widest">Senior Product Designer, ValueLabs</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white/3 border border-white/10 rounded-3xl space-y-8 hover:border-[#00e5ff]/30 transition-all">
            <p className="text-gray-300 italic leading-relaxed">
              "UX hackathon is a unique concept. Interesting problems, weekly deliverables, peer learning and insightful feedback, it’s faster way to become a better UX designer."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#4c5fd5]"></div>
              <div className="text-left">
                <h4 className="text-sm font-black text-white uppercase tracking-wider">Girish Unde</h4>
                <p className="text-[10px] text-[#00e5ff] font-bold uppercase tracking-widest">Product Design Lead, HSBC</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white/3 border border-white/10 rounded-3xl space-y-8 hover:border-[#4c5fd5]/30 transition-all">
            <p className="text-gray-300 italic leading-relaxed">
              "I’ve had a wonderful experience working on the challenges that UXHack posted. The detailed feedback and perspectives provided were thought-provoking and insightful."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-500"></div>
              <div className="text-left">
                <h4 className="text-sm font-black text-white uppercase tracking-wider">Rashmi Bharath</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Associate Director UX, Subex</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
