import React from 'react';
import Link from 'next/link';

interface ShowcaseCardProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

export default function ShowcaseCard({ id, title, description, imageUrl, projectLink }: ShowcaseCardProps) {
  // Placeholder image logic if none provided
  const displayImage = imageUrl || "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800";

  const content = (
    <>
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={displayImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Link Badge */}
        <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <svg className="w-4 h-4 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-4 flex-grow flex flex-col">
        <div className="space-y-2">
          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#00e5ff] transition-colors">
            {title || "Project Title"}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
            {description || "Provide a compelling description of your design solution or case study."}
          </p>
        </div>

        {projectLink && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg w-fit">
            <svg className="w-3 h-3 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-[9px] text-gray-500 font-bold truncate max-w-[150px] uppercase tracking-widest">{projectLink}</span>
          </div>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-[10px] font-black text-[#4c5fd5] uppercase tracking-[0.2em]">View Project</span>
          <div className="h-px flex-grow mx-4 bg-white/5 group-hover:bg-[#4c5fd5]/20 transition-colors"></div>
          <span className="text-white/20 group-hover:text-[#00e5ff] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-[#4c5fd5]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"></div>
    </>
  );

  const containerClassName = "group relative block bg-white/3 border border-white/10 rounded-3xl overflow-hidden hover:border-[#4c5fd5]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(76,95,213,0.15)] flex flex-col h-full";

  if (id) {
    return (
      <Link href={`/showcase/${id}`} className={containerClassName}>
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClassName}>
      {content}
    </div>
  );
}
