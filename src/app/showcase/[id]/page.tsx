import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Share2, Info } from 'lucide-react';
import LivePreview from '@/components/LinkIntelligence/LivePreview';
import CommentSection from '@/components/LinkIntelligence/CommentSection';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProjectDetails({ params }: PageProps) {
  const { prisma } = await import("@/lib/prisma");
  const { id } = await params;

  // Fetch project with comments
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      comments: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Immersive Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10 px-6 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/showcase" className="p-2 hover:bg-white/5 rounded-xl transition-colors group">
              <ArrowLeft size={20} className="text-gray-400 group-hover:text-white" />
            </Link>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="space-y-0.5">
              <h1 className="text-sm font-black uppercase tracking-widest text-white leading-none">{project.title}</h1>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{project.type || 'WEBSITE'}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={project.projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[#00e5ff] transition-all transform hover:-translate-y-0.5"
            >
              <ExternalLink size={14} />
              Open Original
            </a>
            <button className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-gray-400 hover:text-white">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow pt-[72px] flex flex-col lg:flex-row overflow-hidden">
        {/* Live Preview Container (Full Screen) */}
        <div className="w-full lg:w-[70%] h-[60vh] lg:h-[calc(100vh-72px)] bg-black border-r border-white/5">
          <LivePreview url={project.projectLink} />
        </div>

        {/* Sidebar (Info & Comments) */}
        <aside className="w-full lg:w-[30%] h-auto lg:h-[calc(100vh-72px)] overflow-y-auto custom-scrollbar bg-[#0d0d0d]">
          <div className="p-8 space-y-12">
            {/* Project Info */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#00e5ff]/10 rounded-xl border border-[#00e5ff]/20">
                  <Info size={18} className="text-[#00e5ff]" />
                </div>
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Project Intent</h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                  Published {new Date(project.createdAt).toLocaleDateString()}
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-[#4c5fd5] uppercase tracking-widest">
                  {project.type || 'UX/UI'}
                </span>
              </div>
            </section>

            <div className="h-px bg-white/5 w-full"></div>

            {/* Comments Section */}
            <CommentSection 
              projectId={project.id} 
              initialComments={project.comments.map(c => ({
                ...c,
                createdAt: new Date(c.createdAt) // Ensure it's a Date object
              }))} 
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
