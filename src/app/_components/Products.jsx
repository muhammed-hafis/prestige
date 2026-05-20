import React from 'react';
import Link from 'next/link';
import { productCategories } from '../_data/products';

// Products.jsx
const Products = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-16"
      id="products"
    >
      <div className="w-full relative z-10 flex flex-col flex-1 min-h-0">

        {/* ── Header ── */}
        <div className="main-container px-4 sm:px-8">
          <div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 sm:mb-8 md:mb-10 gap-3 lg:gap-6 shrink-0"
            data-aos="fade-up"
          >
            <div className="max-w-2xl">
              <p className="font-sans text-[0.62rem] sm:text-[0.7rem] uppercase text-light-gold mb-2 sm:mb-3 flex items-center gap-3 font-black tracking-[0.35em]">
                <span className="w-5 sm:w-8 h-px bg-light-gold" />
                Our Selection
              </p>
              <h2
                className="font-serif font-semibold text-[#111] leading-[1.1]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 3.2rem)' }}
              >
                Explore our{' '}
                <span className="font-serif text-light-gold">Pillars</span>
              </h2>
            </div>

            <div className="hidden lg:block text-right pb-2 max-w-xs">
              <p className="font-sans text-[1rem] text-[#666] font-light leading-relaxed">
                Meticulously engineered systems designed to harmonize with
                contemporary architectural visions.
              </p>
            </div>
          </div>
        </div>

        {/* ── Mobile: 2-column card grid ── */}
        <div className="lg:hidden main-container px-4 sm:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {productCategories.map((product, idx) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="relative aspect-[3/4] overflow-hidden group rounded-sm"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Index */}
                <span className="absolute top-2.5 left-2.5 font-sans text-[0.48rem] sm:text-[0.58rem] font-black uppercase tracking-[0.2em] text-light-gold">
                  0{idx + 1}
                </span>

                {/* Title */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3
                    className="font-serif font-semibold text-white leading-tight mb-1"
                    style={{ fontSize: 'clamp(0.78rem, 3.5vw, 1rem)' }}
                  >
                    {product.title}
                  </h3>
                  <span className="font-sans text-[0.48rem] sm:text-[0.56rem] text-white/50 uppercase tracking-widest font-bold">
                    Tap to explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Desktop: Cinematic horizontal panels ── */}
        <div
          className="hidden lg:flex flex-row w-full group/board gap-1"
          style={{ height: 'clamp(300px, 45vw, 680px)' }}
        >
          {productCategories.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group group-hover/board:grayscale-[40%] hover:!grayscale-0 group-hover/board:brightness-50 hover:!brightness-110"
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={idx * 120}
              data-aos-duration="700"
            >
              <img
                src={product.img}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Index marker */}
              <div className="absolute top-8 left-8 overflow-hidden">
                <span className="font-sans font-bold tracking-widest text-[0.65rem] text-light-gold block translate-y-full group-hover:translate-y-0 transition-transform duration-500 whitespace-nowrap">
                  COLLECTION 0{idx + 1}
                </span>
              </div>

              {/* Content block */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3
                  className="font-serif font-semibold text-white leading-tight mb-4"
                  style={{ fontSize: 'clamp(1rem, 2vw, 2.8rem)' }}
                >
                  {product.title}
                </h3>

                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 delay-100">
                  <p className="font-sans text-[1rem] text-white/70 mb-5 max-w-sm font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[0.75rem] tracking-widest font-bold uppercase text-white transition-colors duration-500 group-hover:text-light-gold">
                      View Collection
                    </span>
                    <svg
                      className="w-5 h-5 text-white/40 transform transition-all duration-500 group-hover:translate-x-3 group-hover:text-light-gold"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="square" strokeLinejoin="miter"
                        strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Side divider */}
              <div className="absolute inset-y-12 right-0 w-px bg-white/10 last:hidden" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;