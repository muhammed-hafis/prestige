import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6EC]" id="about">
      <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] md:min-h-screen">

        {/* ── Left Column: Image ───────────────────────────────────────────── */}
        {/* Mobile: natural aspect ratio, no overflow.                         */}
        {/* md+: full viewport height, vertically padded.                      */}
        <div
          className="w-full order-2 md:order-1 md:h-screen py-4 sm:py-6 md:py-12"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          {/* Aspect-ratio box: 4:3 on mobile, full height on md+ */}
          <Link
            href="/about"
            className="relative group block w-full h-[75vw] sm:h-[60vw] md:h-full overflow-hidden transition-all duration-700 ease-out"
          >
            <img
              src="/images/home/about-us.avif"
              alt="Modern Interior"
              className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Technical Watermark — hidden on small screens */}
            <div
              className="absolute top-6 right-6 hidden md:block text-[0.5rem] uppercase tracking-[0.3em] text-white/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Prestige Creations — 2026
            </div>

            {/* Offset gold border */}
            <div className="absolute top-2 left-2 right-2 bottom-2 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 border border-light-gold/20 pointer-events-none z-20 transition-all duration-700 ease-out group-hover:border-light-gold/50 group-hover:scale-[0.97]" />

            {/* L-shaped corners */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t border-l border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b border-r border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-light-gold text-white py-1.5 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 shadow-xl z-20 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(197,160,40,0.3)]">
              <p className="font-sans text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold whitespace-nowrap">
                System Excellence
              </p>
            </div>
          </Link>
        </div>

        {/* ── Right Column: Text ───────────────────────────────────────────── */}
        <div className="flex flex-col justify-center order-1 md:order-2 px-3 sm:px-5 md:px-7 lg:pl-16 lg:pr-20 xl:pl-20 xl:pr-24 py-10 sm:py-12 md:py-0">

          <span
            className="font-sans text-light-gold uppercase text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] mb-3 flex items-center gap-2 sm:gap-3 tracking-[0.3em] sm:tracking-[0.4em] font-black"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            PRESTIGE CREATIONS COMPANY
            <span className="block w-[24px] sm:w-[30px] h-[0.5px] bg-light-gold shrink-0" />
          </span>

          <h2
            className="section-heading text-[#111] mb-4 sm:mb-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Luxury Design. <br className="hidden sm:block" />
            <span className="text-light-gold font-bold">High Performance</span>
          </h2>

          <p
            className="section-desc text-[#333] mb-6 sm:mb-8 max-w-lg text-sm sm:text-base leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <strong className="font-black text-light-gold tracking-wide">Prestige Creations</strong>{' '}
            delivers premium architectural aluminium systems across Saudi Arabia. By combining global
            standards — including{' '}
            <strong className="font-semibold text-black">TOSTEM</strong> exteriors,{' '}
            <strong className="font-semibold text-black">ALAMIN</strong> thermal systems, and{' '}
            <strong className="font-semibold text-black">OZONE</strong> interiors — with our local
            mastery, we engineer high-performance solutions designed for luxurious contemporary
            living and the regional climate.
          </p>

          <Link
            href="/about"
            className="link-architectural self-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>The Prestige Creations Story</span>
            <span className="arrow text-[0.95rem] font-light">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;