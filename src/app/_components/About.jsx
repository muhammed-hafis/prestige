import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6EC]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-stretch lg:min-h-screen flex flex-col lg:flex-none">

        {/* ── Left Column: Image ───────────────────────────────────────────── */}
        {/* Mobile: fixed aspect-ratio height so image never overflows.        */}
        {/* Desktop: full screen height, with vertical padding, unchanged.     */}
        <div
          className="w-full h-[56vw] min-h-[260px] max-h-[480px] lg:h-screen lg:max-h-none lg:min-h-0 py-4 sm:py-5 lg:py-12 order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="relative group w-full h-full overflow-hidden transition-all duration-700 ease-out">
            <img
              src="/images/about-wide.png"
              alt="Modern Interior"
              className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Technical Watermark — hidden on small screens */}
            <div
              className="absolute top-8 right-8 hidden sm:block text-[0.5rem] uppercase tracking-[0.3em] text-white/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Prestige Creations — 2026
            </div>

            {/* Offset gold border */}
            <div className="absolute top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 border border-light-gold/20 pointer-events-none z-20 transition-all duration-700 ease-out group-hover:border-light-gold/50 group-hover:scale-[0.97]" />

            {/* L-shaped corners */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 border-t border-l border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 border-b border-r border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* Badge */}
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 bg-light-gold text-white py-2 px-4 sm:py-3 sm:px-6 shadow-xl z-20 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(197,160,40,0.3)]">
              <p className="font-sans text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.2em] font-bold">
                System Excellence
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Column: Text ───────────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:pl-20 lg:pr-24 py-10 sm:py-14 lg:py-0 order-1 lg:order-2">

          <span
            className="font-sans text-light-gold uppercase text-[0.7rem] mb-3 flex items-center gap-3 tracking-[0.4em] font-black"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            PRESTIGE
            <span className="block w-[30px] h-[0.5px] bg-light-gold" />
          </span>

          <h2
            className="section-heading text-[#111] mb-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Enhance your living with{' '}
            <br className="hidden sm:block" />
            <span className="text-light-gold font-bold">Aluminium Doors &amp; Windows</span>
          </h2>

          <p
            className="section-desc text-[#333] mb-8 max-w-lg"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <strong className="font-black text-light-gold tracking-wide">Prestige Creations</strong>{' '}
            delivers premium architectural aluminium systems across Saudi Arabia. By combining global
            standards with local mastery, we engineer high-performance solutions designed for
            luxurious contemporary living.
          </p>

          <Link
            href="/about"
            className="link-architectural"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>Discover More</span>
            <span className="arrow text-[0.95rem] font-light">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;