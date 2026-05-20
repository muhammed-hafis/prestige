import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FAF6EC]" id="about">
      {/* Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-stretch min-h-screen">
        
        {/* Left Column: Image with vertical padding */}
        <div className="w-full h-[60vh] lg:h-screen py-6 lg:py-12" data-aos="fade-right" data-aos-duration="900">
          <div className="relative reveal group w-full h-full overflow-hidden transition-all duration-700 ease-out">
            <img 
              src="/images/about-wide.png" 
              alt="Modern Interior" 
              className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            
            {/* Technical Watermark */}
            <div className="absolute top-8 right-8 text-[0.5rem] uppercase tracking-[0.3em] text-white/40 vertical-text" style={{ writingMode: 'vertical-rl' }}>
              Prestige Creations — 2026
            </div>
            
            {/* Offset gold border (Inset for screen-bleed design) */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-light-gold/20 pointer-events-none z-20 transition-all duration-700 ease-out group-hover:border-light-gold/50 group-hover:scale-[0.97]"></div>
            
            {/* Decorative L-shaped corners (Inset for screen-bleed design) */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:translate-x-1 group-hover:translate-y-1"></div>
            
            {/* Minimal Badge */}
            <div className="absolute bottom-8 left-8 bg-light-gold text-white py-3 px-6 shadow-xl z-20 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(197,160,40,0.3)]">
               <p className="font-sans text-[0.6rem] uppercase tracking-[0.2em] font-bold">System Excellence</p>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:pl-20 lg:pr-24 py-12 lg:py-0 reveal">
          <span className="font-sans text-light-gold uppercase text-[0.7rem] mb-3 flex items-center gap-3 tracking-[0.4em] font-black" data-aos="fade-left" data-aos-delay="100">
            PRESTIGE
            <span className="block w-[30px] h-[0.5px] bg-light-gold"></span>
          </span>
          
          <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] leading-[1.1] mb-6" data-aos="fade-left" data-aos-delay="200">
            Enhance your living with <br />
            <span className="text-light-gold font-bold">Aluminium Doors & Windows</span>
          </h2>
          
          <p className="font-sans text-base md:text-[1.12rem] lg:text-[1.2rem] text-[#333] leading-[1.8] font-light mb-8 max-w-lg" data-aos="fade-left" data-aos-delay="300">
            <strong className="font-black text-light-gold tracking-wide">Prestige Creations</strong> delivers premium architectural aluminium systems across Saudi Arabia. By combining global standards with local mastery, we engineer high-performance solutions designed for luxurious contemporary living.
          </p>
          
          <Link href="/about" className="px-10 py-4 bg-[#111] text-white uppercase transition-all duration-400 hover:bg-light-gold w-fit text-[0.7rem] tracking-[0.25em] font-bold no-underline shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0" data-aos="fade-up" data-aos-delay="400">
            Discover More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
