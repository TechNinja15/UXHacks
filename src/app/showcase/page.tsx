import Link from 'next/link';
import ShowcaseCard from '@/components/ShowcaseCard';

export const dynamic = 'force-dynamic';

export default async function ShowcaseWall() {
  const { prisma } = await import("@/lib/prisma");
  
  // Fetch projects from Supabase
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 12 // Limit to 12 most recent projects
  });

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-[#4c5fd5]/10 border border-[#4c5fd5]/20 rounded-full">
                <span className="text-[10px] font-black text-[#4c5fd5] uppercase tracking-widest">Design Spotlight</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Showcase <span className="text-gradient-neon">Wall</span>
              </h1>
              <p className="text-lg text-gray-400">
                Explore the finest work from our community. From case studies to live products, discover how design thinkers solve real-world problems.
              </p>
            </div>
            
            <Link href="/showcase/post">
              <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#00e5ff] transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,229,255,0.3)]">
                Submit Project
              </button>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="reveal active">
                <ShowcaseCard 
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"}
                  projectLink={project.projectLink}
                />
              </div>
            ))}
            
            {/* Empty State / Call to Action */}
            <Link href="/showcase/post" className="border-2 border-dashed border-white/5 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-6 hover:bg-white/3 hover:border-[#4c5fd5]/30 transition-all group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-[#4c5fd5] transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Your Project Here</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">Join 500+ designers and showcase your impact.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
