import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';


const INSTAGRAM_IDS = [
  'DYbb3iSsmuU',
  'DXXKML7Eh8-',
  'DW6gHGLjAsa',
  'DVycxhejJW-',
  'DVsgxhhDB6A',
  'DXObAFOgWQR',
  'DU5xdKfjBlW'
];

export default function ArchitectsVerdictPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#111] overflow-x-hidden selection:bg-light-gold selection:text-white pt-28 pb-16 sm:pt-36 sm:pb-24 relative">
      {/* Decorative technical grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-light-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-light-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="main-container relative z-10 px-6 sm:px-10 lg:px-16">
        
        {/* Back Link */}
        <div className="mb-8" data-aos="fade-up">
          <Link
            href="/global-portfolio-insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] transition-colors duration-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            TECHNICAL TESTIMONIALS
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            The Architect&apos;s Verdict
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto" />
        </div>


        {/* Instagram Reels Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_IDS.map((id, idx) => (
            <div 
              key={id}
              className="relative w-full h-[580px] rounded-md overflow-hidden bg-white shadow-lg border border-light-gold/15 p-1"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed`}
                title={`Instagram Reel ${idx + 1}`}
                className="w-full h-full border-0 rounded-xl"
                scrolling="no"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
