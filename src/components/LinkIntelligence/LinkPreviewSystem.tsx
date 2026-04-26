"use client";

import React, { useState } from 'react';
import PreviewInput from './PreviewInput';
import MetadataCard from './MetadataCard';
import ReadmeReport from './ReadmeReport';
import LivePreview from './LivePreview';
import { fetchLinkPreview } from '@/app/actions/linkPreview';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Globe, AlertCircle, Layout, Globe2 } from 'lucide-react';

export default function LinkPreviewSystem() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'live'>('preview');

  const handleUrlDetect = async (url: string) => {
    setIsLoading(true);
    setViewMode('preview');
    try {
      const result = await fetchLinkPreview(url);
      setData(result);
    } catch (error) {
      setData({ error: "Failed to analyze link" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <PreviewInput onUrlDetect={handleUrlDetect} isLoading={isLoading} />

      <AnimatePresence mode="wait">
        {data && !isLoading && (
          <motion.div
            key={data.url || 'error'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-5xl mx-auto"
          >
            {data.error ? (
              <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="text-red-500" size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-black uppercase tracking-tight">Analysis Failed</h3>
                  <p className="text-sm text-gray-500">{data.error}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Mode Toggle */}
                {data.type === 'website' && (
                  <div className="flex justify-center">
                    <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex items-center gap-1 backdrop-blur-xl">
                      <button
                        onClick={() => setViewMode('preview')}
                        className={`
                          flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                          ${viewMode === 'preview' ? 'bg-white text-black shadow-xl' : 'text-gray-500 hover:text-white'}
                        `}
                      >
                        <Layout size={14} />
                        Metadata View
                      </button>
                      <button
                        onClick={() => setViewMode('live')}
                        className={`
                          flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                          ${viewMode === 'live' ? 'bg-white text-black shadow-xl' : 'text-gray-500 hover:text-white'}
                        `}
                      >
                        <Globe2 size={14} />
                        Live Site
                      </button>
                    </div>
                  </div>
                )}

                {/* Content View */}
                <div className="grid grid-cols-1 gap-8">
                  {data.type === 'github' ? (
                    <ReadmeReport 
                      owner={data.owner} 
                      repo={data.repo} 
                      readmeHtml={data.readmeHtml} 
                      url={data.url} 
                    />
                  ) : (
                    viewMode === 'preview' ? (
                      <div className="max-w-2xl mx-auto w-full">
                        <MetadataCard 
                          title={data.title} 
                          description={data.description} 
                          image={data.image} 
                          favicon={data.favicon} 
                          url={data.url} 
                        />
                      </div>
                    ) : (
                      <LivePreview url={data.url} blocksIframe={data.blocksIframe} />
                    )
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 gap-6"
          >
            <div className="relative">
              <div className="w-16 h-16 border-2 border-[#00e5ff]/20 rounded-full" />
              <div className="w-16 h-16 border-t-2 border-[#00e5ff] rounded-full animate-spin absolute top-0 left-0" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">Parsing Intelligence</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Scanning metadata, headers & protocols...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
