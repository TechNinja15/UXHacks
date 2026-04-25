export default function BusinessHackathons() {
  const valueProps = [
    { title: 'Product Improvement', desc: 'From minor usability tweaks to major UX overhauls of user flows, conversions, and funnels.' },
    { title: 'Brand Building', desc: 'Engage with our community of 10,000+ designers and showcase your brand as a product leader.' },
    { title: 'Hiring assessments', desc: 'Identify top talent through actual performance on your own product challenges.' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
              Improve your product with the power of <span className="text-[#4c5fd5]">10,000+ minds</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Tap into our global community of designers and PMs to solve your toughest product challenges.
            </p>
            <button className="px-12 py-5 bg-[#4c5fd5] text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_0_40px_rgba(76,95,213,0.3)]">
              Host Your Hackathon
            </button>
          </div>
          <div className="p-12 bg-white/3 border border-white/10 rounded-[50px] relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(76,95,213,0.1),transparent)]"></div>
             <div className="grid grid-cols-2 gap-8 grayscale opacity-40">
                {['IRCTC', 'UpGrad', 'LeadSquared', 'HSBC', 'Zomato', 'Paytm'].map(logo => (
                  <div key={logo} className="h-20 flex items-center justify-center border border-white/5 rounded-2xl text-xl font-black text-white">{logo}</div>
                ))}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="p-12 bg-white/3 border border-white/10 rounded-[40px] space-y-6">
              <div className="w-12 h-12 bg-[#4c5fd5]/10 rounded-xl flex items-center justify-center font-black text-[#4c5fd5]">0{idx + 1}</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest">{prop.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
