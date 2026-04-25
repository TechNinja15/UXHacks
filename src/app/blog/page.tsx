export default function Blog() {
  const posts = [
    { title: '2025 Recap at UXHack: A Year of Growth', date: 'Jan 2026', author: 'UXHack Team', category: 'Community' },
    { title: 'Tech Titans Turn the Page: Apple & Microsoft Legacy', date: 'Apr 2025', author: 'Siddharth', category: 'Tech History' },
    { title: 'UXHack 2024: Major Takeaways & Product Wins', date: 'Jan 2025', author: 'UXHack Team', category: 'Platform' },
    { title: 'The Future of AI in Design Workflow', date: 'Dec 2024', author: 'Amrit', category: 'AI & Design' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              The <span className="text-gradient-neon">Blog</span>
            </h1>
            <p className="text-xl text-gray-400">Insights from the world of design and product thinking.</p>
          </div>
          <div className="flex gap-4 pb-2">
            {['All', 'Design', 'Product', 'Community'].map(cat => (
              <button key={cat} className="text-[10px] font-black text-gray-500 hover:text-[#4c5fd5] uppercase tracking-widest transition-colors">{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer space-y-8">
              <div className="aspect-[16/9] bg-white/3 border border-white/10 rounded-[40px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black text-[#4c5fd5] uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#00e5ff] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  A deep dive into the insights and trends that are shaping the design and product management landscape in 2026.
                </p>
                <button className="text-[10px] font-black text-[#4c5fd5] uppercase tracking-[0.2em] border-b border-[#4c5fd5]/20 group-hover:border-[#4c5fd5] transition-all pb-1">Read Article →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
