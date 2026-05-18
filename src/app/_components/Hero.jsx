import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-center text-white z-10 pb-10">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
          style={{ 
            backgroundImage: "linear-gradient(to bottom, rgba(0, 200, 255, 0.1), rgba(0, 0, 0, 0.5)), url('/images/hero.png')" 
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="main-container px-8 text-center z-20 relative">
        <h1 className="mb-10 animate-fade-up">
          <span className="block text-[clamp(1.2rem,2.5vw,2rem)] text-white/90 mb-4 tracking-wide [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
            Experience our premium system
          </span>
          <span className="block text-[clamp(1.8rem,5vw,3.8rem)] uppercase text-[#8A939E] [text-shadow:0_5px_15px_rgba(0,0,0,0.9),0_20px_60px_rgba(0,0,0,0.5)]">
            Aluminium doors & windows
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px] opacity-0 animate-fade-in [animation-delay:1.5s] z-20">
        <div className="w-[26px] h-[45px] border-2 border-[#8A939E]/50 rounded-[20px] relative">
          <div className="w-[4px] h-[10px] bg-[#8A939E] rounded-[2px] absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-wheel"></div>
        </div>
        <span className="text-[0.75rem] uppercase text-[#8A939E] ">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
