export default function PostJob() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            Post a <span className="text-[#4c5fd5]">Job</span>
          </h1>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map(step => (
              <div key={step} className={`h-1.5 flex-grow rounded-full ${step === 1 ? 'bg-[#4c5fd5]' : 'bg-white/10'}`}></div>
            ))}
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Step 1: Tell us a little about the role</p>
        </div>

        <div className="p-12 bg-white/3 border border-white/10 rounded-[40px] space-y-10">
          <div className="space-y-4">
            <label className="text-xs font-black text-white uppercase tracking-widest">Select Designation</label>
            <select className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-gray-400 outline-none focus:border-[#4c5fd5] transition-all appearance-none">
              <option>Product Designer</option>
              <option>UX Designer</option>
              <option>Product Manager</option>
              <option>UX Researcher</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-white uppercase tracking-widest">Employment Type</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="type" className="w-5 h-5 bg-black/40 border-white/10 checked:bg-[#4c5fd5] text-[#4c5fd5] focus:ring-0" defaultChecked />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors uppercase font-bold tracking-widest">Full-Time</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="type" className="w-5 h-5 bg-black/40 border-white/10 checked:bg-[#4c5fd5] text-[#4c5fd5] focus:ring-0" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors uppercase font-bold tracking-widest">Part-Time / Contract</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-white uppercase tracking-widest">Work Experience Required</label>
            <select className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-gray-400 outline-none focus:border-[#4c5fd5] transition-all appearance-none">
              <option>0 - 2 Years</option>
              <option>3 - 6 Years</option>
              <option>7 - 10 Years</option>
              <option>10+ Years</option>
            </select>
          </div>

          <div className="pt-8">
            <button className="w-full py-5 bg-[#4c5fd5] text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_40px_rgba(76,95,213,0.3)] transition-all">
              Continue to Plans
            </button>
            <p className="text-center mt-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">Trusted by IRCTC, UpGrad, HSBC, and 50+ others.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
