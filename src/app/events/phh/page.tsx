export default function PHH() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-block px-6 py-2 bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            PM Recruitment
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            PM <br /> <span className="text-[#00e5ff]">Hiring</span> Hackathon
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The elite recruitment event for Product Managers. Solve strategy, roadmap, and 
            execution challenges to land roles at India's top unicorns.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {[
            { label: 'Participating Companies', val: '10+' },
            { label: 'Average CTC', val: '₹23L' },
            { label: 'Min Experience', val: '2+ Yrs' },
            { label: 'Talent Pool', val: '5k+' }
          ].map(stat => (
            <div key={stat.label} className="p-8 bg-white/3 border border-white/10 rounded-3xl text-center hover:bg-white/5 transition-all">
              <span className="block text-4xl font-black text-white mb-2">{stat.val}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Industries & Roles</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Fintech', desc: 'Payments, Lending, Wealth Management' },
                { name: 'B2B SaaS', desc: 'Enterprise Tools, CRM, ERP' },
                { name: 'E-commerce', desc: 'Direct-to-consumer, Marketplaces' },
                { name: 'EdTech', desc: 'K-12, Higher Ed, Upskilling' }
              ].map(industry => (
                <div key={industry.name} className="p-6 bg-white/2 border border-white/5 rounded-2xl group hover:border-[#00e5ff]/30 transition-all">
                  <h4 className="text-[#00e5ff] font-black uppercase tracking-wider mb-1">{industry.name}</h4>
                  <p className="text-sm text-gray-500">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 bg-gradient-to-br from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/20 rounded-[40px] space-y-8">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest">Registration Status</h3>
            <p className="text-gray-400">
              Registrations for the current edition of PHH are closed. We are currently processing the assessments for Phase 2.
            </p>
            <div className="space-y-4">
              <input type="email" placeholder="Enter your email" className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-white outline-none focus:border-[#00e5ff] transition-all" />
              <button className="w-full py-5 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_0_40px_rgba(0,229,255,0.2)]">
                Notify Me for PHH 2026
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
