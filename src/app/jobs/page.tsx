export default function Jobs() {
  const jobs = [
    { role: 'Product Designer', company: 'GwayERP', loc: 'Chennai', type: 'Full-time' },
    { role: 'UX Designer', company: 'PriceSenz', loc: 'Remote', type: 'Contract' },
    { role: 'Principal Product Manager', company: 'MontyCloud', loc: 'Bengaluru', type: 'Full-time' },
    { role: 'Product Design Manager', company: 'Intuit', loc: 'Bengaluru', type: 'Full-time' },
    { role: 'UX Lead', company: 'HSBC', loc: 'Pune', type: 'Full-time' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              Job <span className="text-[#4c5fd5]">Board</span>
            </h1>
            <p className="text-xl text-gray-400">68+ Active roles for top product and design talent.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-[#4c5fd5] hover:bg-white/10 transition-all">Job Posts</button>
            <button className="px-6 py-3 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all">Social Feed</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters */}
          <div className="w-full lg:w-72 flex-shrink-0 space-y-10">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Location</h4>
              <div className="space-y-3">
                {['Remote', 'Bengaluru', 'Chennai', 'Pune', 'Gurgaon'].map(loc => (
                  <label key={loc} className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-300 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded bg-white/5 border-white/10 text-[#4c5fd5] focus:ring-0" />
                    {loc}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Role Type</h4>
              <div className="space-y-3">
                {['Product Designer', 'UX Designer', 'Product Manager', 'UX Researcher'].map(role => (
                  <label key={role} className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-300 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded bg-white/5 border-white/10 text-[#00e5ff] focus:ring-0" />
                    {role}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="flex-grow space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="p-8 bg-white/3 border border-white/10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-[#4c5fd5]/30 transition-all">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#4c5fd5] transition-colors">{job.role}</h3>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                    {job.company} <span className="mx-2 text-gray-700">•</span> {job.loc}
                  </p>
                </div>
                <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{job.type}</span>
                  <button className="px-8 py-3 bg-[#4c5fd5]/10 text-[#4c5fd5] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#4c5fd5] hover:text-black transition-all">Apply Now</button>
                </div>
              </div>
            ))}
            <button className="w-full py-6 text-gray-600 font-black uppercase tracking-widest text-xs hover:text-white transition-all">Load More Listings</button>
          </div>
        </div>
      </div>
    </main>
  );
}
