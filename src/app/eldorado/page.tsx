"use client";

import { useState } from 'react';

export default function Eldorado() {
  const [activeSkill, setActiveSkill] = useState('all');

  const stats = [
    { label: 'Solutions', val: '500+' },
    { label: 'Challenges', val: '50+' },
    { label: 'Discussions', val: '30+' },
    { label: 'Members', val: '1k+' }
  ];

  const caseStudies = [
    { company: 'Cred', color: '#fff', skill: 'growth', desc: 'Feature-X for engagement optimization.' },
    { company: 'Figma', color: '#A259FF', skill: 'retention', desc: 'Community-driven growth through analysis.' },
    { company: 'Netflix', color: '#E50914', skill: 'acquisition', desc: 'Improving first-time user conversion.' },
    { company: 'Uber', color: '#fff', skill: 'onboarding', desc: 'Comprehensive mobile app UX audit.' },
    { company: 'Zomato', color: '#CB202D', skill: 'monetization', desc: 'Strategic redesign for food delivery.' },
    { company: 'WhatsApp', color: '#25D366', skill: 'activation', desc: 'Privacy policy communication improvements.' }
  ];

  const filteredStudies = activeSkill === 'all' 
    ? caseStudies 
    : caseStudies.filter(s => s.skill === activeSkill);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-8">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            EL<span className="text-[#4c5fd5]">DORADO</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your best resource to discover top solutions from all product, design & UX case studies.
          </p>
          <div className="flex justify-center gap-8 md:gap-20 py-10 bg-white/3 rounded-[40px] border border-white/10 max-w-4xl mx-auto">
            {stats.map(stat => (
              <div key={stat.label}>
                <span className="block text-3xl font-black text-[#00e5ff]">{stat.val}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'growth', 'retention', 'acquisition', 'gamification', 'onboarding', 'monetization', 'activation'].map(skill => (
              <button 
                key={skill}
                onClick={() => setActiveSkill(skill)}
                className={`px-6 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeSkill === skill ? 'bg-[#4c5fd5] border-[#4c5fd5] text-black shadow-[0_0_20px_rgba(76,95,213,0.3)]' : 'border-white/10 text-gray-500 hover:border-[#4c5fd5]/50'}`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, idx) => (
              <div key={idx} className="bg-white/3 border border-white/10 rounded-3xl overflow-hidden group hover:border-[#4c5fd5]/30 transition-all flex flex-col">
                <div className="h-48 bg-black flex items-center justify-center font-black text-4xl relative overflow-hidden" style={{ color: study.color }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  {study.company}
                </div>
                <div className="p-8 space-y-4 flex-grow">
                  <span className="text-[10px] font-black text-[#4c5fd5] uppercase tracking-widest">{study.skill}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{study.company}: Product Case</h3>
                  <p className="text-sm text-gray-500">{study.desc}</p>
                </div>
                <div className="p-8 pt-0">
                  <button className="text-xs font-black text-[#00e5ff] uppercase tracking-widest border-b border-[#00e5ff]/20 hover:border-[#00e5ff] pb-1 transition-all">View Solution Preview →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-12 bg-gradient-to-br from-[#4c5fd5]/10 to-transparent border border-[#4c5fd5]/20 rounded-[50px] text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest">Get Full Access</h2>
          <p className="text-gray-400">Unlock 500+ expert solutions and recorded product discussions with industry leaders.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-5 bg-[#4c5fd5] text-black font-black uppercase tracking-widest rounded-2xl">View Pricing Plans</button>
            <button className="px-12 py-5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/5">View Sample Free Solution</button>
          </div>
        </div>
      </div>
    </main>
  );
}
