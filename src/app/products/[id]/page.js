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
    .reveal { opacity:0; transform:translateY(22px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal.in { opacity:1; transform:none; }
    .reveal-d1 { transition-delay:.15s; }
    .reveal-d2 { transition-delay:.28s; }
    .nav-scrolled { background:rgba(240,244,248,.95); backdrop-filter:blur(16px); border-bottom:1px solid rgba(184,144,42,.15); }
    .nav-top .logo-lnk  { color:#fff; }
    .nav-scrolled .logo-lnk { color:#111; }
    .nav-top .nav-lnk   { color:rgba(255,255,255,.55); }
    .nav-scrolled .nav-lnk { color:#555; }
    .nav-lnk:hover { color:#B8902A !important; }
    .nav-cta-lnk { border:1px solid rgba(184,144,42,.5); color:#B8902A; transition:all .25s; }
    .nav-cta-lnk:hover { background:#B8902A; color:#fff; }
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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Nav ───────────────────────────────────────────────────── */
const Nav = () => {
  const scrolled = useScrolled();
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-16 px-8 lg:px-16 transition-all duration-300 ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <Link href="/" className="logo-lnk text-[1.2rem] font-serif tracking-widest uppercase no-underline transition-colors duration-300">
        Prestige
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/#products" className="nav-lnk hidden md:block text-xs font-bold uppercase tracking-widest no-underline">Products</Link>
        <Link href="/#about"    className="nav-lnk hidden md:block text-xs font-bold uppercase tracking-widest no-underline">About</Link>
        <Link href="/contact"  className="nav-cta-lnk text-xs font-bold uppercase tracking-widest no-underline px-6 py-2.5 rounded-full">Enquire</Link>
      </div>
    </nav>
  );
};

/* ── Hero ──────────────────────────────────────────────────── */
const Hero = ({ category }) => {
  const words = category.title.split(" ");
  const head  = words.slice(0, -1).join(" ");
  const tail  = words.slice(-1)[0];
  
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: 480 }}>
      <img
        src={category.heroImg || category.img}
        alt={category.title}
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75))" }} />

      {/* Breadcrumb */}
      <nav className="absolute top-24 left-8 lg:left-16 flex items-center gap-2">
        <Link href="/" className="text-[.72rem] uppercase tracking-widest no-underline hover:text-[#B8902A] transition-colors" style={{ color: "rgba(255,255,255,.5)" }}>Home</Link>
        <span className="text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <span className="text-[.72rem] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.5)" }}>Products</span>
        <span className="text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <span className="text-[.72rem] uppercase tracking-widest" style={{ color: "#B8902A" }}>{category.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="absolute inset-0 flex flex-col items-start justify-end px-8 lg:px-16 pb-16">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B8902A] mb-4">
          <span className="block w-8 h-px bg-[#B8902A]" />
          Premium Architectural Series
        </p>
        <h1 className="font-bold text-white mb-6 leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
          {head} <span className="font-normal" style={{ color: "#B8902A" }}>{tail}</span>
        </h1>
        {category.description && (
          <p className="text-[1rem] sm:text-[1.1rem] max-w-2xl leading-relaxed text-white/70">
            {category.description}
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 right-8 lg:right-16 flex flex-col items-center gap-2">
        <div className="scroll-ln w-px h-14" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,.3),transparent)" }} />
        <span className="vert-text text-[.62rem] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.4)" }}>Scroll</span>
      </div>
    </div>
  );
};

/* ── CTA ───────────────────────────────────────────────────── */
const CTASection = ({ label }) => (
  <section className="relative overflow-hidden py-24 sm:py-32 px-8 lg:px-16 bg-[#111]">
    <div className="absolute inset-0 pointer-events-none opacity-5"
      style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "28px 28px" }} />
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <p className="text-[#B8902A] text-xs font-bold uppercase tracking-[6px] mb-4">CONSULTATION</p>
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
        Interested in our premium {label}?
      </h2>
      <p className="text-white/60 text-[1rem] leading-relaxed max-w-xl mx-auto mb-10">
        Speak with our specialists to review technical parameters, configurations, and pricing options tailored precisely to your vision.
      </p>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <Link href="/contact"
          className="text-xs font-bold uppercase tracking-widest bg-[#B8902A] text-white px-10 py-4.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Enquire Now
        </Link>
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#B8902A] transition-colors no-underline">
          Return Home
        </Link>
      </div>
    </div>
  </section>
);

export default function ProductCategoriesPage() {
  const { id } = useParams();
  const category = productCategories.find((c) => c.id === id);
  useReveal();

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
      <Nav />
      <Hero category={category} />

      {/* Series Grid Section */}
      <section className="py-24 sm:py-32">
        <div className="main-container">
          
          {/* Header */}
          <div className="text-center mb-20 max-w-2xl mx-auto reveal">
            <span className="inline-flex items-center gap-3 text-[#B8902A] uppercase text-[0.65rem] tracking-[6px] font-bold mb-4">
              <span className="w-8 h-px bg-[#B8902A]"></span>
              SYSTEM SERIES
              <span className="w-8 h-px bg-[#B8902A]"></span>
            </span>
            <h2 className="font-bold text-4xl sm:text-5xl text-[#111] leading-tight tracking-tight mt-2">
              Select a Collection
            </h2>
            <div className="w-12 h-[2px] bg-[#B8902A] mx-auto mt-6"></div>
          </div>

          {/* Series Cards - Beautiful Cardless Editorial Layout (Same category in one row) */}
          <div className="flex flex-col gap-24">
            {(() => {
              const chunked = [];
              for (let i = 0; i < category.series.length; i += 2) {
                chunked.push(category.series.slice(i, i + 2));
              }
              return chunked.map((pair, rowIdx) => (
                <div key={rowIdx} className="flex flex-col gap-8">
                  {/* Subtle Category Title and Divider Line */}
                  {pair[0] && (
                    <div className="flex items-center gap-6 pl-1 reveal">
                      <span className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[#B8902A]">
                        {pair[0].name.split(" ")[0]} Collection
                      </span>
                      <div className="flex-1 h-[1px] bg-black/[0.06]" />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                    {pair.map((item, idx) => {
                      const overallIdx = rowIdx * 2 + idx;
                      const mainImg = item.img || category.img;
                      const linkUrl = `/products/${category.id}/${item.id || item.name.toLowerCase().replace(/\s+/g, '-')}`;

                      return (
                        <div
                          key={overallIdx}
                          className="flex flex-col reveal"
                          style={{ transitionDelay: `${idx * 0.1}s` }}
                        >
                          {/* Image Container - Borderless, elegant zoom effect */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-black/5 rounded-[3px] group">
                            <img
                              src={mainImg}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[0.58rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-[2px]">
                              Series 0{overallIdx + 1}
                            </div>
                          </div>

                          {/* Typographic details sitting naturally in whitespace */}
                          <h3 className="font-sans font-bold text-2xl text-[#111] mt-6 mb-1 tracking-tight">
                            {item.name} <span className="font-light text-[#888]">{item.seriesLabel || "Series"}</span>
                          </h3>
                          
                          {item.tagline && (
                            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#B8902A] font-bold mb-4">
                              {item.tagline}
                            </p>
                          )}
                          
                          <p className="text-[#555] text-[0.92rem] leading-relaxed mb-6 max-w-lg">
                            {item.description}
                          </p>

                          {/* Underline-only Explore Link */}
                          <Link
                            href={linkUrl}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] pb-1 border-b border-black/15 hover:border-[#B8902A] transition-all duration-300 w-fit"
                          >
                            Explore Specifications <span className="text-[0.95rem] font-light">→</span>
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