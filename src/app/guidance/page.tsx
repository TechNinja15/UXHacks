export default function Guidance() {
  const services = [
    { title: 'CV Review', desc: 'Instant feedback on keywords, improvement areas, and personalized suggestions for your design CV.', cost: 'Start Free' },
    { title: 'Portfolio Review', desc: 'Get an instant benchmark score, identify improvement areas, and see how you rank against top designers.', cost: 'Start Free' },
    { title: 'Mock Interview', desc: 'On-demand 30-60 min sessions with industry experts, post-interview feedback and a session recording.', cost: '₹999' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-8">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Career <span className="text-[#00e5ff]">Guidance</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get 1-on-1 feedback from UXHack mentors to fast-track your product career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div key={idx} className="p-12 bg-white/3 border border-white/10 rounded-[40px] space-y-10 flex flex-col justify-between hover:border-[#00e5ff]/30 transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-[#00e5ff]/10 flex items-center justify-center text-3xl font-black text-[#00e5ff]">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-t border-white/5 pt-8">
                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Starting at</span>
                  <span className="text-xl font-black text-white">{service.cost}</span>
                </div>
                <button className="w-full py-4 border border-[#00e5ff] text-[#00e5ff] font-black uppercase tracking-widest rounded-xl hover:bg-[#00e5ff] hover:text-black transition-all">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-16 bg-white/3 border border-white/10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Still Unsure?</h2>
            <p className="text-gray-400">Join our next free webinar on "Building a Design Portfolio that Lands High-Paying Remote Jobs".</p>
          </div>
          <button className="px-12 py-5 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.2)]">
            Reserve Your Spot
          </button>
        </div>
      </div>
    </main>
  );
}
