"use client";

import React, { useState } from 'react';
import { ExternalLink, ShieldAlert, Maximize2, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LivePreviewProps {
  url: string;
  blocksIframe?: boolean;
}

export default function LivePreview({ url, blocksIframe }: LivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically detect sites that block iframes if the flag isn't explicitly set
  const shouldBypass = blocksIframe || 
                       url.includes('github.com') || 
                       url.includes('vercel.app') || 
                       url.includes('figma.com') ||
                       url.includes('behance.net');

  return (
    <div className="relative w-full aspect-video md:aspect-[16/10] bg-black/40 rounded-3xl border border-white/10 overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/10 flex items-center justify-between px-6 z-10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="ml-4 px-3 py-1 bg-white/5 rounded-lg text-[10px] font-mono text-gray-400 border border-white/5 truncate max-w-[200px] md:max-w-md">
            {url}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              const iframe = document.querySelector('iframe') as HTMLIFrameElement;
              if (iframe) {
                setIsLoading(true);
                iframe.src = url;
              }
            }}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <RotateCw size={14} />
          </button>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
          >
            <span className="hidden md:inline">Open Original</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="pt-12 h-full w-full relative">
        {shouldBypass ? (
          <>
            <AnimatePresence>
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-8 h-8 border-2 border-[#00e5ff]/20 border-t-[#00e5ff] rounded-full animate-spin" />
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Bypassing Restrictions...</span>
                </motion.div>
              )}
            </AnimatePresence>
            <iframe 
              src={`/api/proxy?url=${encodeURIComponent(url)}`} 
              className="w-full h-full bg-white"
              onLoad={() => setIsLoading(false)}
            />
            {/* Warning Overlay */}
            <div className="absolute bottom-4 right-4 z-30">
              <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md rounded-lg flex items-center gap-2 text-[8px] font-black text-yellow-500 uppercase tracking-widest">
                <ShieldAlert size={10} />
                Proxy Mode Active
              </div>
            </div>
          </>
        ) : (
          <>
            <AnimatePresence>
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-8 h-8 border-2 border-[#00e5ff]/20 border-t-[#00e5ff] rounded-full animate-spin" />
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Connecting Securely...</span>
                </motion.div>
              )}
            </AnimatePresence>
            <iframe 
              src={url} 
              className="w-full h-full bg-white"
              onLoad={() => setIsLoading(false)}
            />
          </>
        )}
      </div>
      
      <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl" />
    </div>
  );
}
