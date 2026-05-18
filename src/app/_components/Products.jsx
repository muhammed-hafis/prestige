import React from 'react';
import Link from 'next/link';
import { productCategories } from '../_data/products';

const Products = () => {
  return (
    <section
      className="relative min-h-screen w-full flex justify-center items-center overflow-hidden py-12 lg:py-16"
      id="products"
    >

      <div className="main-container relative z-10 px-8 flex flex-col flex-1 min-h-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-6 shrink-0">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase text-[#8A939E] mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-[#8A939E]"></span>
              Selection
            </p>
            <h2 className="font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] ">
              Explore our <em className="" style={{ color: "#8A939E" }}>Pillars</em>
            </h2>
          </div>
          <div className="hidden lg:block text-right pb-2">
            <p className="text-[1.05rem] text-[#666] max-w-xs">
              Meticulously engineered systems designed to harmonize with contemporary architectural visions.
            </p>
          </div>

        </div>

        {/* Perspective Panels — fills remaining viewport height */}
        <div
          className="flex flex-col lg:flex-row gap-4 lg:gap-2"
          style={{ height: "clamp(320px, calc(100dvh - 280px), 680px)" }}
        >
          {productCategories.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="relative flex-1 overflow-hidden rounded-2xl lg:rounded-none lg:first:rounded-l-2xl lg:last:rounded-r-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group hover:flex-[2.5]"
            >
              {/* Background Image with Zoom */}
              <img
                src={product.img}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Vertical Index Marker */}
              <div className="absolute top-8 left-8 overflow-hidden">
                <span className="text-[1rem] text-[#8A939E] block translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  COLLECTION 0{idx + 1}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-semibold text-[clamp(1.8rem,3.5vw,3.2rem)] text-white mb-4">
                  {product.title}
                </h3>

                {/* Hidden description revealed on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 delay-100">
                  <p className="text-[1.15rem] text-white/70 mb-6 max-w-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-6 group/btn">
                    <span className="text-[1.15rem] uppercase text-white ">View Collection</span>
                    <div className="w-10 h-px bg-[var(--background)]/40 group-hover/btn:w-16 group-hover/btn:bg-[#8A939E] transition-all"></div>
                  </div>
                </div>

                {/* Mobile/Default hint */}
                <div className="lg:hidden group-hover:hidden flex items-center gap-4 mt-3">
                  <span className="text-[.85rem] text-white/50 uppercase">Tap to explore</span>
                  <div className="w-4 h-px bg-[var(--background)]/20"></div>
                </div>
              </div>

              {/* Side Border (Desktop only) */}
              <div className="absolute inset-y-12 right-0 w-px bg-[var(--background)]/10 hidden lg:block group-last:hidden"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;