"use client";
import React, { useEffect, useState } from 'react';

const HERO_IMAGES = [
  "/images/hero/slider1.avif",
  "/images/hero/slider2.avif",
  "/images/hero/slider3.avif",
  "/images/hero/slider4.avif",
  "/images/hero/slider5.avif"
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevActiveIndex, setPrevActiveIndex] = useState(null);
  const [showText, setShowText] = useState(false);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        setPrevActiveIndex(prevIndex);
        return (prevIndex + 1) % HERO_IMAGES.length;
      });
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);

  // Text initial fade-in delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-[#09090a] select-none">
      {/* Dynamic Style block for Ken Burns Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.10); }
        }
        .ken-burns-active {
          animation: kenburns 6500ms ease-out forwards;
        }
      `}} />

      {/* Carousel Images */}
      {HERO_IMAGES.map((imgSrc, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={imgSrc}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={imgSrc}
              alt={`Prestige Hero Slide ${idx + 1}`}
              className={`w-full h-full object-cover ${isActive || idx === prevActiveIndex ? 'ken-burns-active' : ''}`}
            />
            {/* Soft dark overlay on each slide */}
            <div className="absolute inset-0 bg-black/45 z-[1]" />
          </div>
        );
      })}

      {/* Brand content and text overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-20 px-3 sm:px-5 lg:px-8 text-center pointer-events-none">
        <div
          className="w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-6xl mx-auto transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
          style={{
            opacity: showText ? 1 : 0,
            transform: showText ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
            willChange: 'opacity, transform',
          }}
        >
          <h1 className="mb-0 flex flex-col items-center gap-1 sm:gap-2">
            <span
              className="block font-sans font-light tracking-widest text-white/95 whitespace-normal sm:whitespace-nowrap"
              style={{
                fontSize: 'clamp(0.65rem, 1.8vw, 1.1rem)',
                lineHeight: 1.25,
                letterSpacing: '0.15em',
                textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              Experience our premium system
            </span>
            <span
              className="block font-serif font-bold uppercase text-light-gold whitespace-normal sm:whitespace-nowrap"
              style={{
                fontSize: 'clamp(1.2rem, 3.5vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                textShadow: '0 4px 12px rgba(0,0,0,0.95), 0 8px 32px rgba(0,0,0,0.8), 0 20px 80px rgba(0,0,0,0.6), 0 0 120px rgba(180,140,60,0.25)',
              }}
            >
              Aluminium doors &amp; windows
            </span>
          </h1>
        </div>
      </div>

      {/* Navigation Indicators (Bullets) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === activeIndex
                ? 'w-8 bg-light-gold'
                : 'w-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;