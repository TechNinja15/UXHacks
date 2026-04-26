"use client";

import React, { useState, useEffect, useCallback } from 'react';
import ShowcaseCard from './ShowcaseCard';
import { fetchLinkPreview } from '@/app/actions/linkPreview';
import MetadataCard from './LinkIntelligence/MetadataCard';
import ReadmeReport from './LinkIntelligence/ReadmeReport';
import LivePreview from './LinkIntelligence/LivePreview';
import { Loader2, Globe2, Layout, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { publishProject } from '@/app/actions/publishProject';
import { useRouter } from 'next/navigation';

export default function ShowcaseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectLink: ''
  });

  const [previewData, setPreviewData] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'live'>('preview');
  const [errors, setErrors] = useState({
    projectLink: '',
    submit: ''
  });

  const handlePublish = async () => {
    setIsPublishing(true);
    setErrors(prev => ({ ...prev, submit: '' }));
    
    try {
      const result = await publishProject({
        ...formData,
        type: previewData?.type?.toUpperCase() || 'WEBSITE'
      });

      if (result.success) {
        alert("Project Published Successfully!");
        router.push('/showcase');
      } else {
        setErrors(prev => ({ ...prev, submit: result.error || 'Failed to publish' }));
      }
    } catch (err) {
      setErrors(prev => ({ ...prev, submit: 'An unexpected error occurred' }));
    } finally {
      setIsPublishing(false);
    }
  };

  const validateUrl = (url: string) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleFetchPreview = useCallback(async (url: string) => {
    if (!url || !validateUrl(url)) {
      setPreviewData(null);
      return;
    }

    setIsAnalyzing(true);
    setPreviewData(null);
    try {
      const result = await fetchLinkPreview(url);
      setPreviewData(result);
      
      // Auto-fill form if fields are empty
      if (result.type === 'website' && !result.error) {
        setFormData(prev => ({
          ...prev,
          title: prev.title || result.title || '',
          description: prev.description || result.description || '',
          imageUrl: prev.imageUrl || result.image || ''
        }));
      } else if (result.type === 'github' && !result.error) {
        setFormData(prev => ({
          ...prev,
          title: prev.title || `${result.owner}/${result.repo}`,
        }));
      }
    } catch (error) {
      console.error("Preview error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  // Debounced preview fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.projectLink && validateUrl(formData.projectLink)) {
        handleFetchPreview(formData.projectLink);
      } else {
        setPreviewData(null);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData.projectLink, handleFetchPreview]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'projectLink') {
      if (value && !validateUrl(value)) {
        setErrors(prev => ({ ...prev, projectLink: 'Please enter a valid URL (e.g., https://...)' }));
      } else {
        setErrors(prev => ({ ...prev, projectLink: '' }));
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 space-y-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="text-xs font-black text-white uppercase tracking-widest block">Project Title</label>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Fintech App Redesign"
              className="w-full p-5 bg-white/3 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 outline-none focus:border-[#4c5fd5] transition-all font-medium"
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-white uppercase tracking-widest block">Project Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your design process and impact..."
              className="w-full p-5 bg-white/3 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 outline-none focus:border-[#4c5fd5] transition-all resize-none font-medium"
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-white uppercase tracking-widest block">Thumbnail Image URL</label>
            <input 
              type="text" 
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              className="w-full p-5 bg-white/3 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 outline-none focus:border-[#4c5fd5] transition-all font-medium"
            />
          </div>

          <div className="space-y-4 relative group">
            <label className="text-xs font-black text-white uppercase tracking-widest block flex items-center justify-between">
              Project Link (Live / Behance / Figma)
              {isAnalyzing && <span className="flex items-center gap-1.5 text-[#00e5ff] lowercase font-bold tracking-normal"><Loader2 size={12} className="animate-spin" /> analyzing...</span>}
            </label>
            <input 
              type="text" 
              name="projectLink"
              value={formData.projectLink}
              onChange={handleChange}
              placeholder="https://..."
              className={`w-full p-5 bg-white/3 border rounded-2xl text-white placeholder:text-gray-600 outline-none transition-all font-medium ${errors.projectLink ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#4c5fd5]'}`}
            />
            {errors.projectLink && <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mt-2">{errors.projectLink}</p>}
          </div>
        </div>

        <button 
          onClick={handlePublish}
          disabled={isPublishing || !formData.title || !formData.projectLink}
          className="w-full py-5 bg-[#4c5fd5] disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_40px_rgba(76,95,213,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
        >
          {isPublishing ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Publishing...
            </>
          ) : (
            'Publish to Showcase'
          )}
        </button>
        {errors.submit && <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest text-center mt-4">{errors.submit}</p>}
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-32 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isAnalyzing ? 'bg-yellow-400' : 'bg-[#00e5ff]'}`}></span>
            <h2 className="text-xs font-black text-[#00e5ff] uppercase tracking-widest">
              {previewData ? 'Intelligence Preview' : 'Card Preview'}
            </h2>
          </div>

          {previewData && previewData.type === 'website' && !previewData.error && (
            <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex items-center gap-1 backdrop-blur-xl">
              <button
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === 'preview' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                <Layout size={12} />
                Meta
              </button>
              <button
                onClick={() => setViewMode('live')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === 'live' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                <Globe2 size={12} />
                Live
              </button>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {previewData && !isAnalyzing ? (
              <motion.div
                key="link-preview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full"
              >
                {previewData.error ? (
                  <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 flex flex-col items-center gap-4 text-center">
                    <AlertCircle className="text-red-500" size={24} />
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{previewData.error}</p>
                  </div>
                ) : (
                  <div className="transform scale-[0.95] origin-top">
                    {previewData.type === 'github' ? (
                      <ReadmeReport {...previewData} />
                    ) : (
                      viewMode === 'preview' ? (
                        <MetadataCard 
                          title={formData.title || previewData.title}
                          description={formData.description || previewData.description}
                          image={formData.imageUrl || previewData.image}
                          favicon={previewData.favicon}
                          url={previewData.url}
                        />
                      ) : (
                        <LivePreview url={previewData.url} blocksIframe={previewData.blocksIframe} />
                      )
                    )}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="card-preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4c5fd5] to-[#00e5ff] rounded-[40px] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
                <div className="relative transform scale-[0.95] origin-top">
                  <ShowcaseCard {...formData} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-6 bg-white/3 border border-white/10 rounded-2xl">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] leading-relaxed">
              {previewData 
                ? "Showing intelligent intelligence preview based on your project link. This helps viewers understand your work before clicking."
                : "This is how your project will appear on the main showcase wall. Ensure your thumbnail is high quality."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
