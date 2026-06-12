import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import EnquiryButton from '@/components/common/EnquiryButton';

const PORTFOLIO_ITEMS = [
  {
    id: 'gallery',
    label: 'SYSTEM REFERENCE GALLERY',
    title: 'System Reference Gallery',
    description: 'A visual showcase of authorized global systems in finished projects, serving as a design and aesthetic reference for your architectural planning.',
    extraText: 'To inspire your next development, this curated showcase highlights iconic international projects outside Saudi Arabia utilizing our authorized global partner systems. See how these advanced profiles perform in real-world premium villas, high-rise towers, and luxury resorts across the globe—offering a proven benchmark for what we assemble and install locally.',
    img: '/images/home/project-reference.avif',
    linkText: 'View Gallery',
    href: '/gallery'
  },
  {
    id: 'lectures',
    label: 'TECHNICAL LECTURES & JOURNAL',
    title: 'Technical Lectures & Journal',
    description: 'Deep dives into the science of thermal break systems, climate engineering, and modern structural design.',
    extraText: 'Our technical journal translates complex international material physics into practical engineering solutions for the Gulf environment. Explore expert lectures covering structural calculations, wind-load resistance, acoustic dampening, and the precise thermal engineering required to fully satisfy the Saudi Building Code (SBC).',
    img: '/images/home/lecture.avif',
    linkText: 'Read Lectures',
    href: '/lectures'
  },
  {
    id: 'verdict',
    label: "THE ARCHITECT'S VERDICT",
    title: "The Architect's Verdict",
    description: 'International Case Studies & Technical Testimonials.',
    extraText: 'By referencing world-class architectural installations across Asia, Europe, and the Americas, our gallery demonstrates how clean minimalist sightlines, hidden-sash geometries, and structural glass walls behave in elite, completed structures. Read direct feedback, case studies, and engineering testimonials from international master architects and consultants who have specified these partner profiles. Learn first-hand why global design firms trust these exact systems to deliver uncompromised structural stability, effortless mechanical rolling, and superior climate control.',
    img: '/images/starecase.jpg',
    linkText: 'Read Case Studies',
    href: ''
  }
];

export default function GlobalPortfolioInsightsPage() {

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
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            GLOBAL PORTFOLIO &amp; INSIGHTS
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            International Standards. <br className="hidden sm:block" />
            <span className="text-light-gold font-serif font-normal">Regional Engineering.</span>
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto mb-5 sm:mb-7" />
        </div>

        {/* Asymmetric Portfolio Items List */}
        <div className="space-y-16 sm:space-y-24">
          {PORTFOLIO_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                {/* Image Block */}
                <Link
                  href={item.href}
                  className={`col-span-1 lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg group ${!isEven ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </Link>

                {/* Text Content Block */}
                <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
                  <span className="font-sans text-light-gold uppercase text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] mb-3 flex items-center gap-2 sm:gap-3 tracking-[0.3em] sm:tracking-[0.4em] font-black">
                    {item.label}
                    <span className="block w-[24px] sm:w-[30px] h-[0.5px] bg-light-gold shrink-0" />
                  </span>
                  <h3 className="section-heading text-[#111] mb-4 sm:mb-6">
                    {item.title}
                  </h3>
                  <p className="section-desc text-[#333] mb-3 font-semibold">
                    {item.description}
                  </p>
                  <p className="section-desc text-[#555] mb-6">
                    {item.extraText}
                  </p>
                  <Link
                    href={item.href}
                    className="link-architectural self-start"
                  >
                    <span>{item.linkText}</span>
                    <span className="arrow text-[0.95rem] font-light">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CALL TO ACTION SECTION ── */}
        <section className="py-16 lg:py-24 mt-16 sm:mt-24 border-t border-light-gold/15">
          <div
            className="relative overflow-hidden rounded-3xl border border-light-gold/25 bg-gradient-to-br from-[#0c0d0f] to-[#16181c] p-8 sm:p-12 lg:p-16"
            data-aos="fade-up"
          >
            {/* Grid background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--light-gold) 1.5px, transparent 1.5px), linear-gradient(to bottom, var(--light-gold) 1.5px, transparent 1.5px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Ambient Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 w-80 h-80 rounded-full bg-light-gold/15 blur-[100px]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-light-gold/5 blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left side text info */}
              <div className="lg:col-span-7 text-left">
                <span className="font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold font-bold uppercase tracking-[0.3em] block mb-4">
                  Integrate Global Standards into Your Project
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Connect with Our Project <br className="hidden sm:block" />
                  Engineering Desk
                </h2>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  Ready to apply these internationally proven architectural systems to your upcoming development in Jeddah, Riyadh, or across the Kingdom? Connect with our project engineering desk for localized structural sizing, wind-load calculations, and profile tier matching.
                </p>
              </div>

              {/* Right side interactive trigger */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 w-full max-w-sm flex flex-col items-stretch text-center backdrop-blur-sm">
                  {/* Checklist */}
                  <div className="text-left space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCheck className="w-4 h-4 text-light-gold shrink-0" />
                      <span className="font-sans text-[0.72rem] uppercase tracking-wider font-semibold">Localized Sizing & Slabs</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCheck className="w-4 h-4 text-light-gold shrink-0" />
                      <span className="font-sans text-[0.72rem] uppercase tracking-wider font-semibold">Wind-load & Climatic Calcs</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCheck className="w-4 h-4 text-light-gold shrink-0" />
                      <span className="font-sans text-[0.72rem] uppercase tracking-wider font-semibold">Profile Tier Customization</span>
                    </div>
                  </div>

                  <EnquiryButton
                    className="w-full bg-light-gold text-white hover:bg-white hover:text-black py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[0.65rem] sm:text-xs shadow-md transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  >
                    Connect with Our Project Engineering Desk →
                  </EnquiryButton>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
