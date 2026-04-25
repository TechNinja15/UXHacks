import Link from 'next/link';

export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(76,95,213,0.1)_0%,transparent_60%)]"></div>
      
      <div className="w-full max-w-md bg-white/3 border border-white/10 rounded-[40px] p-10 md:p-12 backdrop-blur-2xl shadow-2xl space-y-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Join <span className="text-[#4c5fd5]">UXHacks</span></h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Start your product journey today</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white outline-none focus:border-[#4c5fd5] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white outline-none focus:border-[#4c5fd5] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">I am a...</label>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="p-3 border border-[#4c5fd5] bg-[#4c5fd5]/10 text-[#4c5fd5] text-[10px] font-black uppercase tracking-widest rounded-xl">Designer</button>
              <button type="button" className="p-3 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-xl hover:border-white/30">PM / Hiring</button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white outline-none focus:border-[#4c5fd5] transition-all"
            />
          </div>

          <button className="w-full py-5 bg-[#4c5fd5] text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(76,95,213,0.4)] transition-all">
            Create Account
          </button>
        </form>

        <div className="text-center pt-4">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
            Already have an account? <Link href="/auth/signin" className="text-[#00e5ff] hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
