"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, User, Clock, Loader2 } from 'lucide-react';
import { postComment } from '@/app/actions/postComment';

interface Comment {
  id: string;
  content: string;
  authorName: string | null;
  createdAt: Date;
}

interface CommentSectionProps {
  projectId: string;
  initialComments: Comment[];
}

export default function CommentSection({ projectId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    try {
      const result = await postComment(projectId, newComment, authorName || "Anonymous");
      if (result.success) {
        // Optimistically update UI (though revalidatePath will handle refresh on SSR)
        const optimisticComment = {
          id: Math.random().toString(),
          content: newComment,
          authorName: authorName || "Anonymous",
          createdAt: new Date()
        };
        setComments([optimisticComment, ...comments]);
        setNewComment('');
        setAuthorName('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#4c5fd5]/10 rounded-xl border border-[#4c5fd5]/20">
          <MessageSquare size={18} className="text-[#4c5fd5]" />
        </div>
        <h2 className="text-sm font-black text-white uppercase tracking-widest">Community Feedback</h2>
        <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{comments.length}</span>
      </div>

      {/* Post Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white/3 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-1">Your Name</label>
            <div className="relative">
              <User size={12} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text"
                placeholder="Anonymous"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-gray-700 outline-none focus:border-[#4c5fd5]/40 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-1">Comment</label>
          <textarea 
            rows={3}
            placeholder="What do you think about this project?"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-xs text-white placeholder:text-gray-700 outline-none focus:border-[#4c5fd5]/40 transition-all resize-none"
          />
        </div>

        <div className="flex justify-end">
          <button 
            type="submit"
            disabled={isSubmitting || !newComment.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-[#4c5fd5] hover:bg-[#00e5ff] text-black font-black text-[10px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:scale-95"
          >
            {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            Post Comment
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        <AnimatePresence>
          {comments.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center opacity-40">
               <MessageSquare size={32} className="mb-4 text-gray-600" />
               <p className="text-[10px] font-bold uppercase tracking-widest">No comments yet. Be the first!</p>
            </div>
          ) : (
            comments.map((comment, idx) => (
              <motion.div 
                key={comment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-white/3 border border-white/10 rounded-2xl space-y-3 group hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#4c5fd5]/20 flex items-center justify-center">
                      <User size={12} className="text-[#4c5fd5]" />
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-tight">{comment.authorName}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Clock size={10} />
                    <span className="text-[9px] font-bold">{new Date(comment.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium pl-8">{comment.content}</p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
