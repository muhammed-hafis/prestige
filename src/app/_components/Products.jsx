import React from 'react';
import Link from 'next/link';

const HOME_PRODUCTS = [
  {
    id: 'tostem',
    title: 'High-Performance Facades',
    description: 'Premium TOSTEM exterior windows and slim sliding doors engineered for structural strength.',
    img: '/images/home/tostem.jpg',
    linkText: 'View Tostem Collection',
    href: '/products/windows-and-doors'
  },
  {
    id: 'alamin',
    title: 'Thermal Solutions',
    description: 'Insulated ALAMIN window and door profiles designed to block heat and optimize energy efficiency.',
    img: '/images/home/al-amin.webp',
    linkText: 'View Alamin Collection',
    href: '/contact'
  },
  {
    id: 'ozone',
    title: 'Structural Glass',
    description: 'Minimalist OZONE interior partitions and luxury hardware for seamless modern spaces.',
    img: '/images/home/ozone.webp',
    linkText: 'View Ozone Collection',
    href: '/products/interior'
  }
];

// Products.jsx
const Products = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-16 bg-transparent"
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
              <p className="section-label text-light-gold mb-2 sm:mb-3 flex items-center gap-3">
                THE COLLECTION
                <span className="block w-[24px] sm:w-[30px] h-[0.5px] bg-light-gold shrink-0" />
              </p>
              <h2 className="section-heading text-[#111]">
                Architectural <span className="font-serif text-light-gold">Systems</span>
              </h2>
            </div>

            <div className="hidden lg:block text-right pb-2 max-w-xs">
              <p className="section-desc text-[#666]">
                Meticulously engineered systems designed to harmonize with
                contemporary architectural visions.
              </p>
            </div>
          </div>
        </div>

        {/* ── Mobile: 3-column card grid ── */}
        <div className="lg:hidden w-full px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HOME_PRODUCTS.map((product, idx) => (
              <Link
                key={product.id}
                href={product.href}
                className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden group rounded-sm block"
                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={idx * 120}
                data-aos-duration="700"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

                {/* Index */}
                <span className="absolute top-3 left-3 font-sans text-[0.55rem] sm:text-[0.58rem] font-black uppercase tracking-[0.2em] text-light-gold">
                  0{idx + 1}
                </span>

                {/* Title, Description & Link */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="section-subheading text-white mb-1.5 font-bold text-sm sm:text-base">
                    {product.title}
                  </h3>
                  <p className="text-white/80 text-[0.72rem] sm:text-xs leading-relaxed mb-3 line-clamp-2 font-sans font-light">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold uppercase tracking-widest font-black">
                    {product.linkText} →
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
          {HOME_PRODUCTS.map((product, idx) => (
            <Link
              key={product.id}
              href={product.href}
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
                <h3 className="section-subheading text-white mb-4 font-bold">
                  {product.title}
                </h3>

                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 delay-100">
                  <p className="section-desc text-white/70 mb-5 max-w-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[0.75rem] tracking-widest font-bold uppercase text-white transition-colors duration-500 group-hover:text-light-gold">
                      {product.linkText}
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