export default function TGIF() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            TGIF <span className="text-[#00e5ff]">Quizzes</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thank God It's Friday! A fun quiz to test your product knowledge. A new quiz every Friday.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-10 bg-white/3 border border-white/10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-[#00e5ff]/10 transition-colors">#94</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Live Now: Eternal Quest</h2>
              <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
                Test your knowledge on the latest tech giants, design patterns, and product histories. 
                Our 94th edition is officially live.
              </p>
              <button className="px-10 py-4 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
                Play Quiz Now
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/2 border border-white/5 rounded-2xl space-y-4">
                <h4 className="text-sm font-black text-white uppercase tracking-widest">Get Notified</h4>
                <p className="text-xs text-gray-500">Never miss a Friday. Join our notification loops.</p>
                <div className="flex flex-wrap gap-3">
                  {['Telegram', 'WhatsApp', 'LinkedIn'].map(item => (
                    <span key={item} className="px-4 py-2 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:border-[#00e5ff] hover:text-[#00e5ff] cursor-pointer transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-white/2 border border-white/5 rounded-2xl space-y-4">
                <h4 className="text-sm font-black text-white uppercase tracking-widest">Leaderboard</h4>
                <p className="text-xs text-gray-500">Compete with top product minds across India.</p>
                <button className="text-[10px] font-black text-[#00e5ff] uppercase tracking-widest border-b border-[#00e5ff]/30 hover:border-[#00e5ff] transition-all">View All-time Leaders</button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-black text-white uppercase tracking-widest px-4 border-l-4 border-[#00e5ff]">Recent Archive</h3>
            <div className="space-y-4">
              {[
                { id: 93, title: 'Deepseek vs Qwen', category: 'AI Models' },
                { id: 92, title: 'The Stargate Project', category: 'Tech History' },
                { id: 91, title: 'Super Bowl Product UX', category: 'Marketing' },
                { id: 90, title: 'Figma Dev Mode', category: 'Design Tools' }
              ].map((quiz) => (
                <div key={quiz.id} className="p-6 bg-white/2 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-white/5 transition-all cursor-pointer">
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">#{quiz.id} {quiz.title}</h4>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{quiz.category}</p>
                  </div>
                  <span className="text-gray-700 font-black">→</span>
                </div>
              ))}
            </div>
            <button className="w-full py-4 border border-white/10 text-xs font-black text-gray-400 uppercase tracking-widest rounded-xl hover:bg-white/5">View Full Archive</button>
          </div>
        </div>
      </div>
    </main>
  );
}
