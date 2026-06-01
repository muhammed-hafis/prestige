import React from 'react';
import Link from 'next/link';

const DISCOVER_ITEMS = [
  {
    id: 'gallery',
    label: 'SYSTEM REFERENCE GALLERY',
    title: 'System Reference Gallery',
    description: 'A visual showcase of authorized global systems in finished projects, serving as a design and aesthetic reference for your architectural planning.',
    img: '/images/home/project-reference.avif',
    linkText: 'View Gallery',
    href: '/gallery'
  },
  {
    id: 'lectures',
    label: 'TECHNICAL LECTURES & JOURNAL',
    title: 'Technical Lectures & Journal',
    description: 'Deep dives into the science of thermal break systems, climate engineering, and modern structural design.',
    img: '/images/home/lecture.avif',
    linkText: 'Read Lectures',
    href: '/lectures'
  }
];

const Discover = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-transparent" id="discover">
      <div className="main-container px-3 sm:px-5 md:px-7 lg:pl-24 lg:pr-20 relative z-10">
        
        {/* ── Header ── */}
        <div
          className="max-w-3xl mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <p className="font-sans text-light-gold uppercase text-[0.62rem] sm:text-[0.7rem] mb-3 flex items-center gap-3 tracking-[0.4em] font-black">
            DISCOVER
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
              <Link
                href={item.href}
                className="relative block aspect-[16/10] overflow-hidden bg-black/5 rounded-[3px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </Link>

              {/* Tag / Category Label */}
              <span className="font-sans text-light-gold uppercase text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] mt-6 mb-3 flex items-center gap-2 sm:gap-3 tracking-[0.3em] sm:tracking-[0.4em] font-black">
                {item.label}
                <span className="block w-[24px] sm:w-[30px] h-[0.5px] bg-light-gold shrink-0" />
              </span>

              {/* Title */}
              <h3 className="section-subheading text-[#111] mb-3 group-hover:text-light-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="section-desc text-[#333] mb-6 max-w-xl">
                {item.description}
              </p>

              {/* CTA Link */}
              <Link
                href={item.href}
                className="link-architectural self-start mt-auto"
              >
                <span>{item.linkText}</span>
                <span className="arrow text-[0.95rem] font-light">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Discover;
