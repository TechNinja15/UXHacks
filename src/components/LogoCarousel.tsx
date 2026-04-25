"use client";

export default function LogoCarousel() {
  const companies = [
    { name: "Google", domain: "google.com" },
    { name: "Netflix", domain: "netflix.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Flipkart", domain: "flipkart.com" },
    { name: "Uber", domain: "uber.com" },
    { name: "Zomato", domain: "zomato.com" },
    { name: "Curefit", domain: "cure.fit" },
    { name: "Cred", domain: "cred.club" },
    { name: "Policybazaar", domain: "policybazaar.com" },
    { name: "PhonePe", domain: "phonepe.com" },
    { name: "Groww", domain: "groww.in" },
    { name: "Notion", domain: "notion.so" },
    { name: "Figma", domain: "figma.com" },
    { name: "Clubhouse", domain: "clubhouse.com" },
    { name: "Airtel", domain: "airtel.in" },
    { name: "Ather", domain: "atherenergy.com" },
    { name: "Royal Enfield", domain: "royalenfield.com" },
    { name: "Licious", domain: "licious.in" },
    { name: "IRCTC", domain: "irctc.co.in" }
  ];

  // Double the array for seamless looping
  const displayCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] mb-4">
          Featured in our Case Studies & Hackathons
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden mask-fade-x pause-on-hover">
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center">
          {displayCompanies.map((company, idx) => (
            <div 
              key={idx} 
              className="mx-16 group transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#00e5ff]/50 transition-all">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=64`} 
                  alt={company.name}
                  className="h-12 w-12 opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${company.name}&background=4c5fd5&color=fff`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
