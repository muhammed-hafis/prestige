import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function ArchitectsVerdictPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#111] overflow-x-hidden selection:bg-light-gold selection:text-white pt-28 pb-16 sm:pt-36 sm:pb-24 relative flex flex-col justify-center items-center">
      {/* Decorative technical grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      <div className="main-container relative z-10 px-6 sm:px-10 lg:px-16 w-full max-w-xl text-center flex flex-col items-center">
        {/* Back Link */}
        <div className="mb-12" data-aos="fade-up">
          <Link
            href="/global-portfolio-insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] transition-colors duration-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>

        <div data-aos="fade-up" className="flex flex-col items-center">
          <span className="font-sans text-[0.62rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#B8902A] mb-4">
            The Architect&apos;s Verdict
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#111] mb-6 tracking-wide">
            Coming Soon
          </h1>
          <div className="w-8 h-[1px] bg-light-gold/60 mb-6" />
          <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light tracking-wide max-w-sm">
            Technical testimonials and verdicts from regional architects are currently being compiled.
          </p>
        </div>
      </div>
    </div>
  );
}
