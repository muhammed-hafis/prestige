import React from 'react';
import Link from 'next/link';
import { productCategories } from '../_data/products';

// Products.jsx
const Products = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center overflow-hidden
                 py-8 sm:py-14 lg:py-12"
      id="products"
    >
      <div className="w-full relative z-10 flex flex-col flex-1 min-h-0">

        {/* ── Header ── */}
        <div className="main-container px-4 sm:px-5 md:px-8">
          <div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end
                       mb-4 sm:mb-6 md:mb-8 gap-2 lg:gap-6 shrink-0"
            data-aos="fade-up"
          >
            <div className="max-w-2xl">
              <p className="text-[0.62rem] sm:text-[0.7rem] uppercase text-light-gold
                            mb-2 sm:mb-3 md:mb-4 flex items-center gap-3 sm:gap-4
                            font-sans font-bold tracking-widest">
                <span className="w-5 sm:w-8 h-px bg-light-gold" />
                Selection
              </p>
              <h2
                className="font-serif font-semibold text-[#111]"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 3.2rem)' }}
              >
                Explore our{' '}
                <span className="font-serif text-light-gold">Pillars</span>
              </h2>
            </div>

            <div className="hidden lg:block text-right pb-2">
              <p className="font-sans text-[1.05rem] text-[#666] max-w-xs font-light leading-relaxed">
                Meticulously engineered systems designed to harmonize with
                contemporary architectural visions.
              </p>
            </div>
          </div>
        </div>

        {/* ── Panels ── */}
        {/*
          Mobile:  flex-row, fixed height — portrait cards side by side
          Desktop: same flex-row, fills viewport height
        */}
        <div
          className="flex flex-row w-full group/board"
          style={{ height: 'clamp(200px, 45vw, 680px)' }}
        // ↑ on phones ~200-260px tall; on wide screens up to 680px
        // Original used calc(100dvh-200px) — keep that on lg+ if preferred:
        // lg: height = calc(100dvh - 200px), capped at 680px
        >
          {productCategories.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="
                relative flex-1 overflow-hidden cursor-pointer
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                group
                group-hover/board:grayscale-[40%]  hover:!grayscale-0
                group-hover/board:brightness-50    hover:!brightness-110
              "
              data-aos="zoom-in"
              data-aos-delay={idx * 120}
              data-aos-duration="700"
            >
              {/* Background image */}
              <img
                src={product.img}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-[1.5s] group-hover:scale-110"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/30
                              group-hover:bg-black/10 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t
                              from-black/90 via-black/20 to-transparent" />

              {/* Index marker */}
              <div className="absolute top-2 left-2 sm:top-6 sm:left-6 lg:top-8 lg:left-8 overflow-hidden">
                <span className="font-sans font-bold tracking-widest
                                 text-[0.5rem] sm:text-[0.65rem] lg:text-[1rem]
                                 text-light-gold block
                                 translate-y-full group-hover:translate-y-0
                                 transition-transform duration-500 whitespace-nowrap">
                  {/* Hide "COLLECTION" text on very small screens */}
                  <span className="hidden sm:inline">COLLECTION </span>
                  0{idx + 1}
                </span>
              </div>

              {/* Content block */}
              <div className="absolute
                              bottom-2 left-2 right-2
                              sm:bottom-6 sm:left-6 sm:right-6
                              lg:bottom-8 lg:left-8 lg:right-8">

                <h3
                  className="font-serif font-semibold text-white leading-tight
                             mb-1 sm:mb-2 lg:mb-4"
                  style={{ fontSize: 'clamp(0.7rem, 2vw, 2.8rem)' }}
                >
                  {product.title}
                </h3>

                {/* Hover-reveal description — desktop only */}
                <div className="hidden lg:block max-h-0 overflow-hidden
                                group-hover:max-h-40
                                transition-all duration-700 delay-100">
                  <p className="font-sans text-[1.05rem] text-white/70
                                mb-5 max-w-sm font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[0.8rem] tracking-widest font-bold
                                     uppercase text-white transition-colors duration-500
                                     group-hover:text-light-gold">
                      View Collection
                    </span>
                    <svg
                      className="w-5 h-5 text-white/40 transform transition-all duration-500
                                 group-hover:translate-x-3 group-hover:text-light-gold"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="square" strokeLinejoin="miter"
                        strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Mobile CTA label */}
                <div className="lg:hidden flex items-center gap-1.5 mt-1">
                  <span className="font-sans font-bold tracking-widest
                                   text-[0.48rem] sm:text-[0.6rem]
                                   text-white/50 uppercase whitespace-nowrap">
                    Tap to explore
                  </span>
                  {/* Arrow — visible on sm only */}
                  <svg className="hidden sm:block w-3 h-3 text-white/40"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeWidth={2}
                      d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </div>
              </div>

              {/* Side divider */}
              <div className="absolute inset-y-4 sm:inset-y-8 lg:inset-y-12
                              right-0 w-px bg-white/10 last:hidden" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;