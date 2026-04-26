"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

interface MetadataCardProps {
  title: string;
  description: string;
  image: string | null;
  favicon: string;
  url: string;
}

export default function MetadataCard({ title, description, image, favicon, url }: MetadataCardProps) {
  const hostname = new URL(url).hostname;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#4c5fd5]/40 transition-all group shadow-2xl relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4c5fd5]/5 to-[#00e5ff]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      {image ? (
        <div className="h-64 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
        </div>
      ) : (
        <div className="h-64 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1a1a1a] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4c5fd5_0,transparent_50%)]" />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <Globe size={32} className="text-[#4c5fd5]/50" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-[8px] font-black text-[#4c5fd5] uppercase tracking-[0.3em]">No Preview Image</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{hostname}</p>
            </div>
          </div>
          {/* Animated Glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00e5ff]/5 blur-[80px] rounded-full animate-pulse" />
        </div>
      )}
      
      <div className="p-10 space-y-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center p-1.5 border border-white/10">
              <img src={favicon} alt="favicon" className="w-full h-full object-contain" onError={(e) => (e.currentTarget.src = "/favicon.ico")} />
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{hostname}</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Website
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight line-clamp-2 leading-none font-outfit">
            {title}
          </h3>
          <p className="text-gray-400 line-clamp-3 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-white/5">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-xs font-black text-[#00e5ff] uppercase tracking-[0.2em] hover:gap-4 transition-all"
          >
            Visit Experience <ExternalLink size={14} />
          </a>
          
          <Globe size={20} className="text-white/10 group-hover:text-[#4c5fd5]/40 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}
