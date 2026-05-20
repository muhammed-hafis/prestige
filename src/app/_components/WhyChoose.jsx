import React from 'react';
import Link from 'next/link';

const WHY_CHOOSE_ITEMS = [
  {
    title: "Japanese Tech",
    desc: "World-class pre-fabricated aluminium systems with Japanese precision."
  },
  {
    title: "Local Mastery",
    desc: "Engineered for Saudi Arabia's unique architectural and climatic conditions."
  }
];

const WhyChoose = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6EC]" id="why-choose">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-stretch lg:min-h-screen">

        {/* ── Left Column: Text — appears below image on mobile, left on desktop ── */}
        <div
          className="flex flex-col justify-center reveal order-2 lg:order-1
                     px-6 sm:px-10 md:px-14 lg:pl-24 lg:pr-20
                     py-10 sm:py-14 lg:py-0"
        >
          <span
            className="font-sans text-light-gold uppercase text-[0.7rem] mb-3 flex items-center gap-3 tracking-[0.4em] font-black"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            OUR VALUE
            <span className="block w-[30px] h-[0.5px] bg-light-gold" />
          </span>

          <h2
            className="font-serif font-semibold text-[#111] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 3.2rem)' }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Why Choose{' '}
            <br className="hidden sm:block" />
            <span className="text-light-gold font-bold">Prestige Creations</span>
          </h2>

          <div className="space-y-5 sm:space-y-6 mb-8">
            {WHY_CHOOSE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 group"
                data-aos="fade-right"
                data-aos-delay={300 + i * 100}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-light-gold/20 flex items-center justify-center shrink-0 group-hover:bg-light-gold group-hover:text-white transition-all duration-500 mt-1">
                  <span className="text-light-gold group-hover:text-white text-[0.65rem] sm:text-[0.7rem] font-bold">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base text-[#111] mb-1 uppercase tracking-[0.2em] font-bold">
                    {item.title}
                  </h3>
                  <p
                    className="font-sans text-[#333] leading-[1.7] font-light max-w-sm"
                    style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.02rem)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/why-prestige"
            className="px-10 py-4 bg-[#111] text-white uppercase transition-all duration-400 hover:bg-light-gold w-fit text-[0.7rem] tracking-[0.25em] font-bold no-underline shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Read More
          </Link>
        </div>

        {/* ── Right Column: Image — appears first on mobile, right on desktop ── */}
        <div
          className="w-full h-[56vw] min-h-[260px] max-h-[480px] lg:h-screen lg:max-h-none lg:min-h-0
                     py-4 sm:py-5 lg:py-12 order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <div className="relative reveal group w-full h-full overflow-hidden transition-all duration-700 ease-out">
            <img
              src="/images/interior_hero_main_1778838710819.png"
              alt="Precision Engineering"
              className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Technical Watermark — hidden on small screens */}
            <div
              className="absolute top-8 right-8 hidden sm:block text-[0.5rem] uppercase tracking-[0.3em] text-white/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Prestige Engineering — 2026
            </div>

            {/* Offset gold border */}
            <div className="absolute top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 border border-light-gold/20 pointer-events-none z-20 transition-all duration-700 ease-out group-hover:border-light-gold/50 group-hover:scale-[0.97]" />

            {/* L-shaped corners */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 border-t border-l border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 border-b border-r border-light-gold/40 z-20 transition-all duration-700 ease-out group-hover:border-light-gold group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* Badge */}
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 bg-light-gold text-white py-2 px-4 sm:py-3 sm:px-6 shadow-xl z-20 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(197,160,40,0.3)]">
              <p className="font-sans text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.2em] font-bold">
                Certified Quality
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;