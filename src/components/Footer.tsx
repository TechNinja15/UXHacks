import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-black tracking-tighter text-gradient-neon">
            UXHACKS
          </Link>
          <p className="text-sm text-gray-400 max-w-xs">
            Building the world's most active community of design thinkers and product leaders.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/eldorado" className="hover:text-[#4c5fd5] transition-colors">Eldorado Repository</Link></li>
            <li><Link href="/events/weekend-hackathons" className="hover:text-[#4c5fd5] transition-colors">Weekend Hackathons</Link></li>
            <li><Link href="/events/dhh" className="hover:text-[#4c5fd5] transition-colors">Design Hiring</Link></li>
            <li><Link href="/jobs" className="hover:text-[#4c5fd5] transition-colors">Job Board</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Resources</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/blog" className="hover:text-[#4c5fd5] transition-colors">Official Blog</Link></li>
            <li><a href="https://uxhack.substack.com/" className="hover:text-[#4c5fd5] transition-colors">Newsletter</a></li>
            <li><Link href="/guidance" className="hover:text-[#4c5fd5] transition-colors">Career Guidance</Link></li>
            <li><Link href="/business/hackathons" className="hover:text-[#4c5fd5] transition-colors">For Businesses</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/privacy" className="hover:text-[#4c5fd5] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#4c5fd5] transition-colors">Terms of Use</Link></li>
            <li><Link href="/contact" className="hover:text-[#4c5fd5] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          © 2026 UXHacks Modern Neon Edition. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-[#00e5ff] transition-colors text-xs uppercase tracking-widest">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-[#00e5ff] transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
          <a href="#" className="text-gray-600 hover:text-[#00e5ff] transition-colors text-xs uppercase tracking-widest">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
