"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Search, Link as LinkIcon, Loader2, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PreviewInputProps {
  onUrlDetect: (url: string) => void;
  isLoading: boolean;
}

export default function PreviewInput({ onUrlDetect, isLoading }: PreviewInputProps) {
  const [value, setValue] = useState("");

  const handleUrlDetect = useCallback((input: string) => {
    try {
      // Basic URL regex
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const match = input.match(urlRegex);
      if (match && match[0]) {
        onUrlDetect(match[0]);
      }
    } catch (e) {
      // Silently ignore invalid URL attempts
    }
  }, [onUrlDetect]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setValue(newVal);
    handleUrlDetect(newVal);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pastedData = e.clipboardData.getData('text');
    handleUrlDetect(pastedData);
  };

  return (
    <div className="relative group max-w-2xl mx-auto w-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#4c5fd5] to-[#00e5ff] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-focus-within:opacity-60" />
      
      <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl flex items-center p-2 shadow-2xl">
        <div className="pl-4 pr-3 text-gray-500">
          <LinkIcon size={18} />
        </div>
        
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onPaste={handlePaste}
          placeholder="Paste link to analyze..."
          className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-600 flex-grow py-3 text-sm font-medium outline-none"
        />

        <div className="flex items-center gap-2 pr-2">
          {value && (
            <button 
              onClick={() => setValue("")}
              className="p-2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
          
          <button 
            disabled={isLoading || !value}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
              ${isLoading 
                ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-95'
              }
            `}
          >
            {isLoading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Analyzing
              </>
            ) : (
              'Analyze'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
