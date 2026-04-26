"use client";

import Link from 'next/link';
import ShowcaseForm from '@/components/ShowcaseForm';

export default function PostProject() {
  return (
    <main className="min-h-screen flex flex-col">
      
      <section className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs / Back Link */}
          <Link href="/showcase" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors mb-12">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Wall
          </Link>

          <div className="mb-20 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Post Your <span className="text-[#4c5fd5]">Impact</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Fill in the details below to share your project with the UXHacks community. 
              The live preview on the right shows exactly how it will look.
            </p>
          </div>

          <ShowcaseForm />
        </div>
      </section>
    </main>
  );
}
