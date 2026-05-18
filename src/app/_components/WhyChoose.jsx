import React from 'react';
import Link from 'next/link';

const WHY_CHOOSE_ITEMS = [
  {
    title: "Japanese Tech",
    desc: "World-class pre-fabricated aluminium systems with Japanese precision."
  },
  {
    title: "Local Mastery",
    desc: "Engineered for Saudi Arabia's unique architectural and climatic conditions."
  }
];

const WhyChoose = () => {
  return (
    <section className="relative min-h-screen w-full flex justify-center items-center overflow-hidden py-12 lg:py-16" id="why-choose">
      <div className="main-container flex flex-col justify-between relative z-10 py-4">
        
        {/* Top Part: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center flex-1 min-h-0">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center reveal">
            <span className="text-[#8A939E] uppercase text-[0.7rem] mb-2 flex items-center gap-3">
              OUR VALUE
              <span className="block w-[30px] h-[0.5px] bg-[#8A939E]"></span>
            </span>
            
            <h2 className="font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-6">
              Why Choose <br />
              <span className="text-[#8A939E]">Prestige Creations</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {WHY_CHOOSE_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full border border-[#8A939E]/20 flex items-center justify-center shrink-0 group-hover:bg-[#8A939E] group-hover:text-white transition-all duration-500">
                    <span className="text-[#8A939E] group-hover:text-white text-[0.65rem] font-medium">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#111] mb-1 uppercase tracking-[0.2em] font-medium">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#666] leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/why-prestige" className="px-10 py-4 bg-[#111] text-white uppercase transition-all duration-400 hover:bg-[#8A939E] w-fit text-[0.7rem] no-underline">
              Read More
            </Link>
          </div>

          {/* Image Content (Wide Rectangular Architectural Style) */}
          <div className="relative reveal lg:ml-auto group w-full lg:max-w-[680px]">
            <div className="relative aspect-[3/2] w-full mx-auto overflow-hidden shadow-2xl">
              <img 
                src="/images/interior_hero_main_1778838710819.png" 
                alt="Precision Engineering" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              
              {/* Technical Watermark */}
              <div className="absolute top-4 right-4 text-[0.5rem] uppercase tracking-[0.3em] text-white/40 vertical-text" style={{ writingMode: 'vertical-rl' }}>
                Prestige Engineering — 2026
              </div>
            </div>
            
            {/* Offset gold border */}
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-[#8A939E]/20 pointer-events-none -z-10 transition-transform duration-500 group-hover:scale-[1.02]"></div>
            
            {/* Decorative L-shaped corners */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-[#8A939E]/40"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-[#8A939E]/40"></div>
            
            {/* Minimal Badge */}
            <div className="absolute -bottom-2 left-6 bg-[#8A939E] text-white py-3 px-6 shadow-xl transform -translate-y-1/2">
               <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold">Certified Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;