import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Contact Prestige" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="main-container relative z-10 text-center px-4 sm:px-8 reveal">
        <span className="text-[#8A939E] uppercase text-[0.7rem] mb-4 flex items-center justify-center gap-3 tracking-[0.4em]">
          <span className="block w-[30px] h-[0.5px] bg-[#8A939E]"></span>
          Get In Touch
          <span className="block w-[30px] h-[0.5px] bg-[#8A939E]"></span>
        </span>
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-white tracking-tight uppercase">
          Contact <span className="text-[#8A939E]">Us</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
