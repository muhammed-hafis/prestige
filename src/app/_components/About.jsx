import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="relative min-h-screen w-full flex justify-center items-center overflow-hidden py-12 lg:py-16" id="about">
      <div className="main-container flex flex-col justify-between relative z-10 py-4">
        
        {/* Top Part: Image and Heading/Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-12 lg:gap-20 items-center flex-1 min-h-0">
          
          <div className="relative w-full max-w-[420px] aspect-square mx-auto group">
            <div className="relative w-full h-full overflow-hidden shadow-2xl z-10">
              <img 
                src="/images/about-wide.png" 
                alt="Modern Interior" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
            </div>
            
            {/* Offset gold border */}
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-[#8A939E]/20 pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"></div>
            
            {/* Decorative L-shaped corners */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-[#8A939E]/40"></div>

            <div className="absolute -bottom-8 -right-8 w-[55%] aspect-square z-20 group/sub">
              <div className="relative w-full h-full overflow-hidden shadow-xl border-[6px] border-white">
                <img 
                  src="/images/about-detail.png" 
                  alt="Aluminium Detail" 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover/sub:scale-110"
                />
              </div>
              {/* L-shaped corner for sub image */}
              <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-[#8A939E]/40"></div>
            </div>
          </div>


          <div className="flex flex-col justify-center">
            <span className="text-[#8A939E] uppercase text-[0.7rem] mb-2 flex items-center gap-3">
              PRESTIGE
              <span className="block w-[30px] h-[0.5px] bg-[#8A939E]"></span>
            </span>
            
            <h2 className="font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-6">
              Enhance your living with <br />
              <span className="text-[#8A939E] ">Aluminium Doors & Windows</span>
            </h2>
            
            <p className="text-[1.05rem] text-[#555] mb-8 max-w-[600px] ">
              <strong className="text-[#8A939E]">Prestige Creations</strong> is a specialized solutions provider delivering premium architectural aluminium systems and interior solutions across Saudi Arabia. 
              We focus on system-based excellence, combining international quality standards with deep local market understanding. 
              By partnering with global leaders like <strong className="text-[#111]">TOSTEM</strong>, <strong className="text-[#111]">OZONE</strong>, and <strong className="text-[#111]">Al Amin</strong>, we provide certified, high-performance systems that ensure long-term value and precision in every development.
            </p>
            
            <Link href="/about" className="px-10 py-4 bg-[#111] text-white uppercase transition-all duration-400 hover:bg-[#8A939E] w-fit text-[0.7rem] no-underline">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
