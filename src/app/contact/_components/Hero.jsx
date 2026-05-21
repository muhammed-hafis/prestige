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
      
      <div className="main-container relative z-10 text-center px-4 sm:px-8" data-aos="fade-up">
        <span className="section-label text-light-gold mb-4 flex items-center justify-center gap-3">
          <span className="block w-[30px] h-[0.5px] bg-light-gold"></span>
          Get In Touch
          <span className="block w-[30px] h-[0.5px] bg-light-gold"></span>
        </span>
        <h1 className="page-heading text-white uppercase">
          Contact <span className="text-light-gold">Us</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
