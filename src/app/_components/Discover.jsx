import React from 'react';
import Link from 'next/link';

const DISCOVER_ITEMS = [
  {
    id: 'gallery',
    label: 'SYSTEM REFERENCE GALLERY',
    title: 'System Reference Gallery',
    description: 'A visual showcase of authorized global systems in finished projects, serving as a design and aesthetic reference for your architectural planning.',
    img: '/images/about-wide.png',
    linkText: 'View Gallery',
    href: '/why-prestige'
  },
  {
    id: 'lectures',
    label: 'TECHNICAL LECTURES & JOURNAL',
    title: 'Technical Lectures & Journal',
    description: 'Deep dives into the science of thermal break systems, climate engineering, and modern structural design.',
    img: '/images/blog_premium_energy.png',
    linkText: 'Read Lectures',
    href: '/news-blogs'
  }
];

const Discover = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-transparent" id="discover">
      <div className="main-container px-6 sm:px-10 md:px-14 lg:pl-24 lg:pr-20 relative z-10">
        
        {/* ── Header ── */}
        <div
          className="max-w-3xl mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <p className="font-sans text-light-gold uppercase text-[0.62rem] sm:text-[0.7rem] mb-3 flex items-center gap-3 tracking-[0.4em] font-black">
            GLOBAL PORTFOLIO & INSIGHTS
            <span className="block w-[24px] sm:w-[30px] h-[0.5px] bg-light-gold shrink-0" />
          </p>
          <h2 className="section-heading text-[#111]">
            International Standards. <br className="hidden sm:block" />
            <span className="text-light-gold font-serif font-normal">Regional Engineering</span>
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {DISCOVER_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Image Container with zoom effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/5 rounded-[3px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Tag / Category Label */}
              <span className="font-sans text-[0.58rem] sm:text-[0.62rem] tracking-[0.25em] text-light-gold font-black uppercase mt-6 mb-2">
                {item.label}
              </span>

              {/* Title */}
              <h3 className="font-serif font-semibold text-xl sm:text-2xl text-[#111] mb-3 group-hover:text-light-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[#555] text-[0.88rem] sm:text-[0.95rem] leading-relaxed mb-6 font-light max-w-xl">
                {item.description}
              </p>

              {/* CTA Link */}
              <Link
                href={item.href}
                className="font-sans inline-flex items-center gap-1.5 sm:gap-2 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-widest text-[#111] hover:text-light-gold pb-1.5 border-b border-black/15 hover:border-light-gold transition-all duration-300 w-fit mt-auto"
              >
                {item.linkText} <span className="text-[0.9rem] sm:text-[0.95rem] font-light">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Discover;
