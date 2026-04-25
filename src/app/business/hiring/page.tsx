export default function BusinessHiring() {
  const steps = [
    { title: 'Sourcing', desc: 'Finding the best candidates tailored to your specific role requirements.' },
    { title: 'Assessments', desc: 'Evaluating candidates on actual design problems relevant to your industry.' },
    { title: 'Interviews', desc: 'Deep dive into design skills and experience with our expert panel.' },
    { title: 'Selection', desc: 'Delivering the best profiles for your team to finalize.' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-8">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Find the right <br /> <span className="text-[#00e5ff]">Product Designer</span> <br /> in just 2 weeks
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hassle-free hiring. We source, screen, and evaluate design talent so you only meet the top 2%.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-2xl">Book Discovery Call</button>
            <button className="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/5">Start Hiring</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
          {steps.map((step, idx) => (
            <div key={idx} className="p-10 bg-white/3 border border-white/10 rounded-[35px] space-y-6 relative group hover:border-[#00e5ff]/30 transition-all">
              <span className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-[#00e5ff]/10 transition-colors">0{idx + 1}</span>
              <h3 className="text-xl font-black text-white uppercase tracking-widest">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-16">
          <h4 className="text-xs font-bold text-gray-600 uppercase tracking-[0.4em]">Trusted by companies globally</h4>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale max-w-5xl mx-auto">
             {['Deloitte', 'HDFC', 'Steady Rabbit', 'TransBnk', 'Scogo', 'Newton School', 'Fractal', 'Contify'].map(name => (
               <div key={name} className="text-xl font-black text-white">{name}</div>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
}
