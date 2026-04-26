import LinkPreviewSystem from "@/components/LinkIntelligence/LinkPreviewSystem";
import { Sparkles, Zap, ShieldCheck, Globe } from "lucide-react";

export const metadata = {
  title: "Link Intelligence | UXHacks",
  description: "Advanced link preview and repository analysis system.",
};

export default function LinkIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4c5fd5]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00e5ff]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header Section */}
        <section className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles size={14} className="text-[#00e5ff]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Next-Gen Preview Engine</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none font-outfit">
              Link <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c5fd5] to-[#00e5ff]">Intelligence</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Instantly analyze metadata, scrape GitHub repositories, and preview live websites in a secure, high-fidelity environment.
            </p>
          </div>
        </section>

        {/* Core System */}
        <LinkPreviewSystem />

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="p-8 rounded-3xl bg-white/3 border border-white/10 space-y-4 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#4c5fd5]/10 flex items-center justify-center text-[#4c5fd5] group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">GitHub Scraping</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Deep-fetch README content and repository metadata directly from the GitHub API with optimized caching.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/3 border border-white/10 space-y-4 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">Live Preview</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Sandboxed iframe integration with automatic X-Frame-Options detection to ensure secure browsing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/3 border border-white/10 space-y-4 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">OpenGraph AI</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Intelligent metadata extraction using Cheerio to parse OG tags, Twitter cards, and semantic HTML.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
