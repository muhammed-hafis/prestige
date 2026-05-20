"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { productCategories } from "../../../_data/products";
import Link from "next/link";
import { FiWind, FiDroplet, FiShield, FiVolumeX } from "react-icons/fi";

/* ── Custom Keyframes & Style Blocks ──────────────────────── */
const Keyframes = () => (
  <style>{`
    @keyframes heroZoom { from{transform:scale(1.06)} to{transform:scale(1)} }
    @keyframes scrollLine {
      0%  {opacity:0;transform:scaleY(0);transform-origin:top}
      50% {opacity:1;transform:scaleY(1)}
      100%{opacity:0;transform:scaleY(0);transform-origin:bottom}
    }
    .hero-img  { animation:heroZoom 9s cubic-bezier(.16,1,.3,1) forwards; filter:brightness(.9); }
    .scroll-ln { animation:scrollLine 2.2s ease-in-out infinite; }
    .reveal { opacity:0; transform:translateY(20px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal.in { opacity:1; transform:none; }
    .nav-scrolled { background:rgba(240,244,248,.95); backdrop-filter:blur(16px); border-bottom:1px solid rgba(184,144,42,.15); }
    .nav-top .logo-lnk  { color:#fff; }
    .nav-scrolled .logo-lnk { color:#111; }
    .nav-top .nav-lnk   { color:rgba(255,255,255,.55); }
    .nav-scrolled .nav-lnk { color:#555; }
    .nav-lnk:hover { color:#B8902A !important; }
    .nav-cta-lnk { border:1px solid var(--light-gold); color:var(--light-gold); transition:all .25s; }
    .nav-cta-lnk:hover { background:var(--light-gold); color:#fff; }
    .vert-text { writing-mode:vertical-rl; }
  `}</style>
);

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

const COLOR_HEX = {
  "NATURAL WHITE": "#FFFFFF",
  "NATURAL SILVER": "#E0E3E6",
  "SHINE GRAY": "#A6A9AA",
  "AUTUMN BROWN": "#4F443F",
  "DUSK GRAY": "#3A3D40",
  "NATURAL BLACK": "#1A1A1D",
  "WHITE": "#FFFFFF",
  "BLACK": "#000000",
};

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
const Hero = ({ category, series }) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "65vh", minHeight: 460 }}>
      <img
        src={series.img}
        alt={series.name}
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.75))" }} />

      {/* Breadcrumbs */}
      <nav className="absolute top-24 left-8 lg:left-16 flex items-center gap-2">
        <Link href="/" className="text-[.72rem] uppercase tracking-widest no-underline hover:text-[#B8902A] transition-colors" style={{ color: "rgba(255,255,255,.5)" }}>Home</Link>
        <span className="text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <span className="text-[.72rem] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.5)" }}>Products</span>
        <span className="text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <Link href={`/products/${category.id}`} className="text-[.72rem] uppercase tracking-widest no-underline hover:text-[#B8902A] transition-colors" style={{ color: "rgba(255,255,255,.5)" }}>{category.title}</Link>
        <span className="text-[.72rem]" style={{ color: "rgba(255,255,255,.2)" }}>/</span>
        <span className="text-[.72rem] uppercase tracking-widest" style={{ color: "#B8902A" }}>{series.name}</span>
      </nav>

      {/* Hero Header */}
      <div className="absolute inset-0 flex flex-col items-start justify-end px-8 lg:px-16 pb-16">
        <p className="font-sans flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#B8902A] mb-3">
          <span className="block w-8 h-px bg-[#B8902A]" />
          PREMIUM ARCHITECTURAL SPECIFICATION
        </p>
        <h1 className="font-serif font-semibold text-white mb-4 leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
          {series.name} <span className="font-serif font-normal text-white/50">{series.seriesLabel || "Series"}</span>
        </h1>
        {series.tagline && (
          <p className="font-sans text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#B8902A] max-w-3xl leading-relaxed">
            {series.tagline}
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 right-8 lg:right-16 flex flex-col items-center gap-2">
        <div className="scroll-ln w-px h-14" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,.3),transparent)" }} />
        <span className="font-sans vert-text text-[.62rem] uppercase tracking-widest font-black" style={{ color: "rgba(255,255,255,.4)" }}>Scroll</span>
      </div>
    </div>
  );
};

export default function SeriesDetailsPage() {
  const { id, seriesId } = useParams();
  const [activeTab, setActiveTab] = useState("WINDOW");
  useReveal();

  const category = productCategories.find((c) => c.id === id);
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#999]">
        Category not found
      </div>
    );
  }

  const series = category.series.find((s) => s.id === seriesId);
  if (!series) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-[#f0f4f8]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#999]">Series not found</span>
        <Link href={`/products/${category.id}`} className="text-xs font-bold uppercase tracking-widest text-[#B8902A] underline">
          Back to {category.title}
        </Link>
      </div>
    );
  }

  // Determine available tabs
  const tabKeys = series.configurations ? Object.keys(series.configurations) : [];

  // Determine composite catalog image based on active tab
  const compositeImage = activeTab === "WINDOW" ? "/images/grants-plus-window-matrix.png" : "/images/grants-plus-door-matrix.png";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1a1a1a] overflow-x-hidden">
      <Keyframes />
      <Nav />
      <Hero category={category} series={series} />

      {/* Technical catalog section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header Title */}
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-[clamp(1.6rem,3vw,3.2rem)] font-semibold tracking-widest text-[#222] uppercase">
              Product Information
            </h2>
            <div className="w-16 h-[2px] bg-[#B8902A] mx-auto mt-4" />
          </div>

          {/* TWO COLUMN GRID: SPECIFICATIONS & COLOR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 reveal">
            
            {/* Left Column: Specifications */}
            <div className="flex flex-col">
              <h3 className="font-sans text-xs font-black tracking-widest text-[#666] uppercase mb-4 pl-1">
                Specifications
              </h3>
              <div className="flex-1 bg-[#f1f3f5] rounded-[4px] p-8 lg:p-10 flex flex-col justify-start">
                <span className="font-sans text-sm font-bold uppercase tracking-widest text-[#222] mb-8 block">
                  {series.name} {series.seriesLabel || "Series"}
                </span>

                <div className="flex flex-col gap-6">
                  {Object.entries(series.specs || {}).map(([key, lines], i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 sm:gap-4 pb-6 border-b border-[#e2e8f0]/60 last:border-0 last:pb-0">
                      <span className="font-sans text-[0.72rem] font-bold uppercase tracking-widest text-[#555] leading-relaxed">
                        {key}
                      </span>
                      <div className="font-sans flex flex-col text-[0.78rem] text-[#222] leading-relaxed font-light">
                        {lines.map((ln, idx) => (
                          <span key={idx}>{ln}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Colors */}
            <div className="flex flex-col">
              <h3 className="font-sans text-xs font-black tracking-widest text-[#666] uppercase mb-4 pl-1">
                Color
              </h3>
              <div className="flex-1 bg-[#f1f3f5] rounded-[4px] p-8 lg:p-10 flex flex-col justify-start">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-y-8 gap-x-4">
                  {series.colors.map((colorName, idx) => {
                    const upperName = colorName.toUpperCase();
                    const colorHex = COLOR_HEX[upperName] || "#E2E8F0";
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-[4.5rem] h-[4.5rem] bg-white border border-black/10 rounded-[2px] p-1 flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.04)] mb-3">
                          <div
                            className="w-full h-full rounded-[1px] border border-black/5"
                            style={{ backgroundColor: colorHex }}
                          />
                        </div>
                        <span className="font-sans text-[0.62rem] font-black tracking-wider text-[#444] text-center uppercase leading-tight max-w-[80px]">
                          {colorName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Performances Panel Row */}
          <div className="reveal mb-24">
            <h3 className="font-sans text-xs font-black tracking-widest text-[#666] uppercase mb-4 pl-1">
              Performances
            </h3>
            <div className="bg-white border border-[#e2e8f0] rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.015)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#e2e8f0]">
                {/* Wind Pressure */}
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="text-[#B8902A] mb-4">
                    <FiWind className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <span className="font-sans text-[0.72rem] font-bold uppercase tracking-widest text-[#222] mb-6">
                    Wind Pressure
                  </span>
                  <div className="w-full flex flex-col text-[0.68rem] text-left gap-3.5 px-2">
                    {(series.performanceDetails?.['WIND PRESSURE'] || []).map((row, i) => (
                      <div key={i} className="flex justify-between items-start gap-4">
                        <span className="font-sans font-bold text-[#666] uppercase tracking-wider leading-relaxed">
                          {row.label}
                        </span>
                        <div className="flex flex-col items-end text-right">
                          <span className="font-sans font-bold text-[#111]">{row.value}</span>
                          {row.sub && <span className="font-sans text-[0.58rem] text-[#888] font-light">{row.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Water Tightness */}
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="text-[#B8902A] mb-4">
                    <FiDroplet className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <span className="font-sans text-[0.72rem] font-bold uppercase tracking-widest text-[#222] mb-6">
                    Water Tightness
                  </span>
                  <div className="w-full flex flex-col text-[0.68rem] text-left gap-3.5 px-2">
                    {(series.performanceDetails?.['WATER TIGHTNESS'] || []).map((row, i) => (
                      <div key={i} className="flex justify-between items-start gap-4">
                        <span className="font-sans font-bold text-[#666] uppercase tracking-wider leading-relaxed">
                          {row.label}
                        </span>
                        <div className="flex flex-col items-end text-right">
                          <span className="font-sans font-bold text-[#111]">{row.value}</span>
                          {row.sub && <span className="font-sans text-[0.58rem] text-[#888] font-light">{row.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Air Tightness */}
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="text-[#B8902A] mb-4">
                    <FiShield className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <span className="font-sans text-[0.72rem] font-bold uppercase tracking-widest text-[#222] mb-6">
                    Air Tightness
                  </span>
                  <div className="w-full flex flex-col text-[0.68rem] text-left gap-3.5 px-2">
                    {(series.performanceDetails?.['AIR TIGHTNESS'] || []).map((row, i) => (
                      <div key={i} className="flex justify-between items-start gap-4">
                        <span className="font-sans font-bold text-[#666] uppercase tracking-wider leading-relaxed">
                          {row.label}
                        </span>
                        <div className="flex flex-col items-end text-right">
                          <span className="font-sans font-bold text-[#111]">{row.value}</span>
                          {row.sub && <span className="font-sans text-[0.58rem] text-[#888] font-light">{row.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Noise Insulation */}
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="text-[#B8902A] mb-4">
                    <FiVolumeX className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <span className="font-sans text-[0.72rem] font-bold uppercase tracking-widest text-[#222] mb-6">
                    Noise Insulation
                  </span>
                  <div className="w-full flex flex-col text-[0.68rem] text-left gap-3.5 px-2">
                    {(series.performanceDetails?.['NOISE INSULATION'] || []).map((row, i) => (
                      <div key={i} className="flex justify-between items-start gap-4">
                        <span className="font-sans font-bold text-[#666] uppercase tracking-wider leading-relaxed">
                          {row.label}
                        </span>
                        <div className="flex flex-col items-end text-right">
                          <span className="font-sans font-bold text-[#111]">{row.value}</span>
                          {row.sub && <span className="font-sans text-[0.58rem] text-[#888] font-light">{row.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* UNIFIED ARCHITECTURAL COLLAGE CATALOGUE (Instead of separate product showcase cards) */}
          {tabKeys.length > 0 && (
            <div className="reveal mb-20 border-t border-[#e2e8f0] pt-16">
              
              {/* Catalogue Section Header */}
              <div className="text-center mb-12">
                <h3 className="font-sans text-[0.75rem] font-black tracking-[0.25em] text-[#B8902A] uppercase mb-3">
                  Sash Options & Designs
                </h3>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,3.2rem)] font-semibold tracking-tight text-[#222] uppercase">
                  Product Configurations Catalogue
                </h2>
              </div>

              {/* Segment Toggle */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-[#f1f3f5] p-1 rounded-full border border-black/5">
                  {tabKeys.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`font-sans px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                        activeTab === tab
                          ? "bg-white text-[#B8902A] shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                          : "text-[#666] hover:text-black"
                      }`}
                    >
                      {tab}S
                    </button>
                  ))}
                </div>
              </div>

              {/* Unified Splitted View: Composite Canvas on Left, Beautiful Index Legend on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* LEFT COLUMN: THE COMPOSITE ARCHITECTURAL CANVAS (Unified Montage showing multiple designs in one image) */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[560px] overflow-hidden bg-white border border-[#e2e8f0] rounded-[6px] p-0 shadow-[0_6px_20px_rgba(0,0,0,0.02)] flex flex-col justify-center items-center group">
                    
                    {/* Top small label */}
                    <div className="font-sans absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[0.58rem] font-black uppercase tracking-widest px-3.5 py-2 rounded-[2px] z-10">
                      Unified {activeTab} Design Composition
                    </div>

                    <img
                      src={compositeImage}
                      alt={`TOSTEM ${activeTab} configurations collage`}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </div>

                {/* RIGHT COLUMN: ARCHITECTURAL INDEX LEGEND (List explanation of options) */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="bg-white border border-[#e2e8f0] rounded-[6px] p-8 lg:p-10 shadow-[0_6px_20px_rgba(0,0,0,0.02)] h-[400px] lg:h-[560px] flex flex-col">
                    <span className="font-sans text-xs font-black tracking-[0.25em] text-[#B8902A] mb-6 block">
                      Legend & Sash Guide
                    </span>

                    <div className="flex flex-col gap-5 flex-1 overflow-y-auto pr-2 scrollbar-thin">
                      {(series.configurations[activeTab] || []).map((cfg, idx) => (
                        <div
                          key={idx}
                          className="group/item flex flex-col pb-3 border-b border-black/[0.04] last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[0.62rem] font-mono text-[#B8902A] bg-[#B8902A]/10 px-2 py-0.5 rounded-[2px]">
                              0{idx + 1}
                            </span>
                            <span className="font-sans text-[0.78rem] font-bold uppercase tracking-wider text-[#111] transition-colors duration-300 group-hover/item:text-[#B8902A]">
                              {cfg.name}
                            </span>
                          </div>
                          
                          <p className="font-sans text-[0.68rem] leading-relaxed text-[#666] m-0 pl-7 font-light">
                            {cfg.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* Quick back link showroom */}
          <div className="text-center reveal">
            <Link
              href={`/products/${category.id}`}
              className="font-sans inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8902A] hover:underline"
            >
              ← Back to {category.title} collection
            </Link>
          </div>

        </div>
      </section>

      {/* Luxury Footer Consultation */}
      <section className="relative overflow-hidden py-20 px-8 lg:px-16 bg-[#0c0d0f] text-center">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-[#B8902A] text-xs font-black uppercase tracking-[4px] mb-3">Begin Specification</p>
          <h2 className="font-serif text-white text-[clamp(1.6rem,3vw,3.2rem)] font-semibold mb-5 tracking-tight">
            Build with the {series.name}
          </h2>
          <p className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed mb-8 max-w-md mx-auto font-light">
            Speak directly with our technical advisers to integrate our precision Japanese architectural systems into your blueprints.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link href="/contact" className="btn-prestige-enquire">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
