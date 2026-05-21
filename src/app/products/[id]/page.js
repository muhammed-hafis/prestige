"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { productCategories } from "../../_data/products";
import Link from "next/link";

/* ── Custom Premium Keyframe styles ───────────────────────── */
const Keyframes = () => (
  <style>{`
    @keyframes heroZoom { from{transform:scale(1.06)} to{transform:scale(1)} }
    @keyframes scrollLine {
      0%  {opacity:0;transform:scaleY(0);transform-origin:top}
      50% {opacity:1;transform:scaleY(1)}
      100%{opacity:0;transform:scaleY(0);transform-origin:bottom}
    }
    .hero-img  { animation:heroZoom 9s cubic-bezier(.16,1,.3,1) forwards; filter:brightness(.95); }
    .scroll-ln { animation:scrollLine 2.2s ease-in-out infinite; }
    .nav-scrolled { background:rgba(240,244,248,.95); backdrop-filter:blur(16px); border-bottom:1px solid rgba(184,144,42,.15); }
    .nav-top .logo-lnk  { color:#fff; }
    .nav-scrolled .logo-lnk { color:#111; }
    .nav-top .nav-lnk   { color:rgba(255,255,255,.55); }
    .nav-scrolled .nav-lnk { color:#555; }
    .nav-lnk:hover { color:#B8902A !important; }
    .nav-cta-lnk { border:1px solid var(--light-gold); color:var(--light-gold); transition:all .25s; }
    .nav-cta-lnk:hover { background:var(--light-gold); color:#fff; }
    .vert-text { writing-mode:vertical-rl; }
    .series-card-hover { transition:all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
    .series-card-hover:hover { transform:translateY(-6px); }
  `}</style>
);

/* ── Hooks ─────────────────────────────────────────────────── */
function useScrolled(px = 60) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const fn = () => setS(window.scrollY > px);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [px]);
  return s;
}


/* ── Hero ──────────────────────────────────────────────────── */
const Hero = ({ category }) => {
  const words = category.title.split(" ");
  const head  = words.slice(0, -1).join(" ");
  const tail  = words.slice(-1)[0];
  
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 60vh, 600px)" }}>
      <img
        src={category.heroImg || category.img}
        alt={category.title}
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75))" }} />

      {/* Breadcrumb */}
      <nav className="absolute top-28 sm:top-32 lg:top-36 left-5 sm:left-8 lg:left-16 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <Link href="/" className="font-sans text-[0.6rem] sm:text-[.72rem] uppercase tracking-widest no-underline hover:text-[#B8902A] transition-colors" style={{ color: "rgba(255,255,255,.5)" }}>Home</Link>
        <span className="text-[0.6rem] sm:text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <span className="font-sans text-[0.6rem] sm:text-[.72rem] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.5)" }}>Products</span>
        <span className="text-[0.6rem] sm:text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <span className="font-sans text-[0.6rem] sm:text-[.72rem] uppercase tracking-widest" style={{ color: "#B8902A" }}>{category.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="absolute inset-0 flex flex-col items-start justify-end px-5 sm:px-8 lg:px-16 pb-8 sm:pb-12 lg:pb-16" data-aos="fade-up">
        <p className="font-sans flex items-center gap-2 sm:gap-3 text-[0.6rem] sm:text-xs font-black uppercase tracking-[0.25em] text-[#B8902A] mb-2 sm:mb-4">
          <span className="block w-5 sm:w-8 h-px bg-[#B8902A]" />
          Premium Architectural Series
        </p>
        <h1 className="page-heading text-white mb-3 sm:mb-6">
          {head} <span className="font-serif font-normal" style={{ color: "#B8902A" }}>{tail}</span>
        </h1>
        {category.description && (
          <p className="font-sans text-[0.85rem] sm:text-[1rem] max-w-2xl leading-relaxed text-white/70 font-light">
            {category.description}
          </p>
        )}
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hidden sm:flex absolute bottom-9 right-8 lg:right-16 flex-col items-center gap-2">
        <div className="scroll-ln w-px h-14" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,.3),transparent)" }} />
        <span className="font-sans vert-text text-[.62rem] uppercase tracking-widest font-black" style={{ color: "rgba(255,255,255,.4)" }}>Scroll</span>
      </div>
    </div>
  );
};

/* ── CTA ───────────────────────────────────────────────────── */
const CTASection = ({ label }) => (
  <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-16 bg-[#111]">
    <div className="absolute inset-0 pointer-events-none opacity-5"
      style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "28px 28px" }} />
    <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="fade-up">
      <p className="font-sans text-[#B8902A] text-[0.6rem] sm:text-xs font-black uppercase tracking-[0.3em] mb-3 sm:mb-4">CONSULTATION</p>
      <h2 className="section-heading text-white mb-4 sm:mb-6">
        Interested in our premium {label}?
      </h2>
      <p className="section-desc text-white/60 max-w-xl mx-auto mb-8 sm:mb-10">
        Speak with our specialists to review technical parameters, configurations, and pricing options tailored precisely to your vision.
      </p>
      <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
        <Link href="/contact" className="btn-prestige-enquire">
          Enquire Now
        </Link>
        <Link href="/" className="font-sans text-xs font-bold uppercase tracking-widest text-white/50 hover:text-light-gold transition-colors no-underline">
          Return Home
        </Link>
      </div>
    </div>
  </section>
);

export default function ProductCategoriesPage({ params }) {
  const { id } = React.use(params);
  const category = productCategories.find((c) => c.id === id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#999]">
        Category not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1a1a1a] overflow-x-hidden">
      <Keyframes />
      <Hero category={category} />

      {/* Series Grid Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="main-container px-4 sm:px-8">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 lg:mb-20 max-w-2xl mx-auto" data-aos="fade-up">
            <span className="font-sans inline-flex items-center gap-2 sm:gap-3 text-[#B8902A] uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[4px] sm:tracking-[6px] font-black mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-px bg-[#B8902A]"></span>
              SYSTEM SERIES
              <span className="w-6 sm:w-8 h-px bg-[#B8902A]"></span>
            </span>
            <h2 className="section-heading text-[#111] tracking-tight mt-2">
              Select a Collection
            </h2>
            <div className="w-10 sm:w-12 h-[2px] bg-[#B8902A] mx-auto mt-4 sm:mt-6"></div>
          </div>

          {/* Series Cards - Beautiful Cardless Editorial Layout (Same category in one row) */}
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24">
            {(() => {
              const chunked = [];
              for (let i = 0; i < category.series.length; i += 2) {
                chunked.push(category.series.slice(i, i + 2));
              }
              return chunked.map((pair, rowIdx) => (
                <div key={rowIdx} className="flex flex-col gap-6 sm:gap-8">
                  {/* Subtle Category Title and Divider Line */}
                  {pair[0] && (
                    <div className="flex items-center gap-4 sm:gap-6 pl-1" data-aos="fade-up">
                      <span className="font-sans text-[0.62rem] sm:text-[0.72rem] font-black uppercase tracking-[0.3em] text-[#B8902A]">
                        {pair[0].name.split(" ")[0]} Collection
                      </span>
                      <div className="flex-1 h-[1px] bg-black/[0.06]" />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
                    {pair.map((item, idx) => {
                      const overallIdx = rowIdx * 2 + idx;
                      const mainImg = item.img || category.img;
                      const linkUrl = `/products/${category.id}/${item.id || item.name.toLowerCase().replace(/\s+/g, '-')}`;

                      return (
                        <div
                          key={overallIdx}
                          className="flex flex-col"
                          data-aos="fade-up"
                          data-aos-delay={idx * 150}
                        >
                          {/* Image Container - Borderless, elegant zoom effect */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-black/5 rounded-[3px] group">
                            <img
                              src={mainImg}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                            <div className="font-sans absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[0.58rem] font-black uppercase tracking-widest px-3 py-1.5 rounded-[2px]">
                              Series 0{overallIdx + 1}
                            </div>
                          </div>

                          {/* Typographic details sitting naturally in whitespace */}
                          <h3 className="font-serif font-semibold text-lg sm:text-2xl text-[#111] mt-4 sm:mt-6 mb-1 tracking-tight">
                            {item.name} <span className="font-serif font-normal text-[#888]">{item.seriesLabel || "Series"}</span>
                          </h3>
                          
                          {item.tagline && (
                            <p className="font-sans text-[0.6rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-[#B8902A] font-black mb-2 sm:mb-4">
                              {item.tagline}
                            </p>
                          )}
                          
                          <p className="font-sans text-[#555] text-[0.85rem] sm:text-[0.92rem] leading-relaxed mb-4 sm:mb-6 max-w-lg font-light">
                            {item.description}
                          </p>

                          {/* Underline-only Explore Link */}
                          <Link
                            href={linkUrl}
                            className="font-sans inline-flex items-center gap-1.5 sm:gap-2 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] pb-1 border-b border-black/15 hover:border-[#B8902A] transition-all duration-300 w-fit"
                          >
                            Explore Specifications <span className="text-[0.9rem] sm:text-[0.95rem] font-light">→</span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      <CTASection label={category.title} />
    </div>
  );
}