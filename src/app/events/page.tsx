import Link from 'next/link';

export default function AllEvents() {
  const events = [
    { title: 'Weekend Hackathons', slug: 'weekend-hackathons', color: '#4c5fd5', desc: 'Weekly design challenges focused on improving a single screen in 48 hours.' },
    { title: 'TGIF Quizzes', slug: 'tgif', color: '#00e5ff', desc: 'The most popular weekly product knowledge quiz for design and product minds.' },
    { title: 'Design Hiring (DHH)', slug: 'dhh', color: '#4c5fd5', desc: 'A elite 48-hour hiring event to identify the top 2% of design talent.' },
    { title: 'PM Hiring (PHH)', slug: 'phh', color: '#00e5ff', desc: 'Specialized strategy and roadmap assessments for high-level PM recruitment.' },
    { title: 'Weekly Challenges', slug: '#', color: '#fff', desc: 'Quick, fun challenges based on trending products in the global tech news.' },
    { title: 'Learning Hackathons', slug: '#', color: '#fff', desc: 'Intensive 2-week problem-solving events with continuous expert feedback.' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Our <span className="text-gradient-neon">Events</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            From quick Friday quizzes to intensive 2-week hackathons. 
            Choose your challenge and start building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="p-10 bg-white/3 border border-white/10 rounded-[40px] flex flex-col justify-between hover:bg-white/5 transition-all group cursor-pointer">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform" style={{ color: event.color }}>
                  {event.title[0]}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">{event.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{event.desc}</p>
              </div>
              
              <Link href={`/events/${event.slug}`} className="mt-12 inline-block text-xs font-black uppercase tracking-widest text-[#00e5ff] border-b border-[#00e5ff]/20 hover:border-[#00e5ff] pb-1 transition-all">
                Learn More & Register →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
