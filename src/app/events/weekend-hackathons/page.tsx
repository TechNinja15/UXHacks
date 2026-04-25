import Link from 'next/link';

export default function WeekendHackathons() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Weekend <span className="text-[#4c5fd5]">Hackathons</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            One screen. One product. One weekend. Use your design chops to improve real-world products and win prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="bg-white/3 border border-white/10 rounded-3xl p-10 space-y-6">
              <h2 className="text-2xl font-black text-white tracking-widest uppercase">The Challenge</h2>
              <p className="text-gray-400">
                Every weekend, we release a new challenge focused on improving a specific screen or flow of a popular product. You have until Monday, 10 AM IST to submit your solution.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-[#4c5fd5]/10 text-[#4c5fd5] text-[10px] font-bold uppercase tracking-widest rounded-full">New every Friday</span>
                <span className="px-4 py-2 bg-[#00e5ff]/10 text-[#00e5ff] text-[10px] font-bold uppercase tracking-widest rounded-full">Deadline: Mon 10AM</span>
              </div>
            </div>

            <div className="bg-white/3 border border-white/10 rounded-3xl p-10 space-y-6">
              <h2 className="text-2xl font-black text-white tracking-widest uppercase">Rules & Submission</h2>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3">
                  <span className="text-[#4c5fd5]">✔</span>
                  Submit a single image (PNG/JPEG) exported from Figma or Adobe XD.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4c5fd5]">✔</span>
                  No hand sketches or wireframes. Functional, high-quality output is prioritized.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4c5fd5]">✔</span>
                  Participation is free for everyone.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#4c5fd5]/5 border border-[#4c5fd5]/20 rounded-3xl p-12 flex flex-col justify-center space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-black text-[#4c5fd5] uppercase tracking-widest mb-2">Weekend Prizes</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Total worth over Rs 5000</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-black/40 rounded-2xl border border-white/5">
                <div>
                  <h4 className="font-black text-white uppercase tracking-wider">Winner</h4>
                  <p className="text-[10px] text-gray-500">Full Eldorado Access + Voucher</p>
                </div>
                <span className="text-[#4c5fd5] font-black text-xl">₹3,000+</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-black/40 rounded-2xl border border-white/5">
                <div>
                  <h4 className="font-black text-white uppercase tracking-wider">Runner Up</h4>
                  <p className="text-[10px] text-gray-500">Partial Eldorado Access + Voucher</p>
                </div>
                <span className="text-[#00e5ff] font-black text-xl">₹2,250+</span>
              </div>
            </div>
            
            <button className="w-full py-5 bg-[#4c5fd5] text-black font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_40px_rgba(76,95,213,0.4)] transition-all">
              Register for Next Hackathon
            </button>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest text-center">Past Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Claude Artifacts Redesign', 'YouTube Music Social', 'Spam Call Alerts', 'Mobile App Onboarding'].map((item, idx) => (
              <div key={idx} className="group p-6 bg-white/2 border border-white/5 rounded-2xl hover:border-[#4c5fd5]/30 transition-all cursor-pointer">
                <div className="aspect-square bg-white/5 rounded-xl mb-6 flex items-center justify-center text-gray-700 font-black text-2xl group-hover:text-[#4c5fd5] transition-colors">
                  {item.split(' ')[0][0]}
                </div>
                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest leading-relaxed">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
