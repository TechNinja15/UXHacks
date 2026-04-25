export default function DHH() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-block px-6 py-2 bg-[#4c5fd5]/10 text-[#4c5fd5] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Hiring Event
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Design <br /> <span className="text-[#4c5fd5]">Hiring</span> Hackathon
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Helping companies identify quality design talent through skill matching, 
            real-world assessments, and instant feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-white/3 border border-white/10 rounded-[40px] space-y-8 hover:border-[#4c5fd5]/20 transition-all">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest">For Candidates</h2>
            <p className="text-gray-400">
              Stop sending boring resumes. Showcase your skills on actual design problems and get matched with startups that value quality over quantity.
            </p>
            <ul className="space-y-4">
              {['Direct Matching with Startups', 'Skill-based Evaluations', 'Portfolio Feedback', 'Hiring Leaderboards'].map(item => (
                <li key={item} className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-[#4c5fd5] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 border border-[#4c5fd5] text-[#4c5fd5] font-black uppercase tracking-widest rounded-2xl hover:bg-[#4c5fd5] hover:text-black transition-all">
              Notify Me for Next Edition
            </button>
          </div>

          <div className="p-12 bg-[#4c5fd5]/5 border border-[#4c5fd5]/20 rounded-[40px] space-y-8 hover:bg-[#4c5fd5]/10 transition-all">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest">For Companies</h2>
            <p className="text-gray-400">
              The fastest way to hire senior designers. We source, assess, and recommend the top 2% of talent based on actual performance, not just portfolios.
            </p>
            <div className="space-y-6 pt-4">
              <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                <h4 className="text-xs font-black text-[#4c5fd5] uppercase tracking-widest mb-1">Time to Hire</h4>
                <p className="text-2xl font-black text-white">Under 2 Weeks</p>
              </div>
              <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                <h4 className="text-xs font-black text-[#4c5fd5] uppercase tracking-widest mb-1">Talent Quality</h4>
                <p className="text-2xl font-black text-white">Top 2% Assessed</p>
              </div>
            </div>
            <button className="w-full py-5 bg-[#4c5fd5] text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(76,95,213,0.2)]">
              Partner with Us
            </button>
          </div>
        </div>

        <div className="text-center space-y-12">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Trusted by the best in tech</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
            {/* Mock logos */}
            <div className="text-2xl font-black text-white">GOOGLE</div>
            <div className="text-2xl font-black text-white">PAYTM</div>
            <div className="text-2xl font-black text-white">ZOMATO</div>
            <div className="text-2xl font-black text-white">HSBC</div>
            <div className="text-2xl font-black text-white">CRED</div>
          </div>
        </div>
      </div>
    </main>
  );
}
