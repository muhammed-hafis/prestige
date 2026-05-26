"use client";
import React, { useState, useEffect } from "react";
import { productCategories } from "../../../_data/products";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

/* ── Custom Keyframes & Style Blocks ──────────────────────── */
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
    .vert-text { writing-mode:vertical-rl; }
    .scrollbar-none::-webkit-scrollbar { display: none; }
    .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

const COLOR_HEX = {
  "NATURAL WHITE": "#FFFFFF",
  "NATURAL SILVER": "#E0E3E6",
  "SHINE GRAY": "#A6A9AA",
  "AUTUMN BROWN": "#4F443F",
  "DUSK GRAY": "#3A3D40",
  "NATURAL BLACK": "#1A1A1D",
  "WHITE": "#FFFFFF",
  "BLACK": "#000000",
  "TURIN PINE": "#B58C5D",
  "CREA MOCHA": "#5A453A",
  "CREA RUSK": "#8C6A53",
  "TEAK": "#A87C43",
  "POLISH SILVER": "#D6D9DB",
  "SILKY WHITE": "#F3F4F6",
  "MATTE BLACK": "#111111",
  "ANODIZED BRONZE": "#6F5E4E",
  "BL-LX-G": "#050505",
  "BM": "#1C1C1C",
  "PHANTOM GREY": "#565759",
  "TAN BRASS": "#75674D",
  "VBL-B": "#94774B",
  "VINTAGE BRASS BRUSH": "#BCA274",
  "ROSE GOLD LUXE BRUSH": "#B78472",
};

/* ── Hero ──────────────────────────────────────────────────── */
const Hero = ({ category, series }) => {
  return (
    <div className="relative w-full h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      <img
        src={series.img}
        alt={series.name}
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />


      {/* Hero Header */}
      <div className="relative z-20 main-container text-center px-4 pt-20 sm:pt-28 md:pt-32 h-full flex flex-col justify-center items-center" data-aos="fade-up">
        <span className="font-sans text-[0.68rem] sm:text-[0.75rem] font-bold text-[#B8902A] tracking-[0.3em] uppercase block mb-4">
          PREMIUM ARCHITECTURAL SPECIFICATION
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          {series.name}{" "}
          <span className="font-serif font-normal text-light-gold block sm:inline">
            {series.seriesLabel || "Series"}
          </span>
        </h1>
        {series.tagline && (
          <p className="font-sans text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            {series.tagline}
          </p>
        )}
        <div className="w-12 h-[2px] bg-light-gold mx-auto" />
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-9 right-8 lg:right-16 flex-col items-center gap-2 z-20">
        <div className="scroll-ln w-px h-14" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,.3),transparent)" }} />
        <span className="font-sans vert-text text-[.62rem] uppercase tracking-widest font-black" style={{ color: "rgba(255,255,255,.4)" }}>Scroll</span>
      </div>
    </div>
  );
};

export default function OzoneSeriesDetailsPage({ params }) {
  const { seriesId } = React.use(params);

  const category = productCategories.find((c) => c.id === "ozone");
  const series = category?.series.find((s) => s.id === seriesId);
  const tabKeys = series?.configurations ? Object.keys(series.configurations) : [];

  const [activeTab, setActiveTab] = useState(tabKeys[0] || "DOOR");

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#999]">
        Category not found
      </div>
    );
  }

  if (!series) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-[#f0f4f8]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#999]">Series not found</span>
        <Link href="/products/ozone" className="text-xs font-bold uppercase tracking-widest text-[#B8902A] underline">
          Back to {category.title}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1a1a1a] overflow-x-hidden">
      <Keyframes />
      <Hero category={category} series={series} />

      {/* Technical catalog section */}
      <section className="py-20 lg:py-24">
        <div className="main-container">

          {/* Header Title */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-heading text-[#222] uppercase">
              Product Information
            </h2>
            <div className="w-16 h-[2px] bg-[#B8902A] mx-auto mt-4" />
          </div>

          {/* COLOR SECTION ONLY */}
          <div className="w-full mb-20" data-aos="fade-up">
            <h3 className="font-sans text-xs font-black tracking-widest text-[#666] uppercase mb-4 text-center">
              Available Colors & Finishes
            </h3>
            <div className="bg-[#f1f3f5] rounded-[4px] p-4 sm:p-8 lg:p-10">
              <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 w-full">
                {series.colors.map((colorName, idx) => {
                  const upperName = colorName.toUpperCase();
                  const colorHex = COLOR_HEX[upperName] || "#E2E8F0";
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[4.5rem] md:h-[4.5rem] bg-white border border-black/10 rounded-[2px] p-0.5 sm:p-1 flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.04)] mb-2 sm:mb-3">
                        <div
                          className="w-full h-full rounded-[1px] border border-black/5"
                          style={{ backgroundColor: colorHex }}
                        />
                      </div>
                      <span className="font-sans text-[0.58rem] sm:text-[0.62rem] font-black tracking-wider text-[#444] text-center uppercase leading-tight max-w-[70px] md:max-w-[80px]">
                        {colorName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CONFIGURATIONS CATALOGUE */}
          {tabKeys.length > 0 && (
            <div className="mb-20 border-t border-[#e2e8f0] pt-16" data-aos="fade-up">

              {/* Catalogue Section Header */}
              <div className="text-center mb-12">
                <h3 className="font-sans text-[0.75rem] font-black tracking-[0.25em] text-[#B8902A] uppercase mb-3">
                  Sash Options & Designs
                </h3>
                <h2 className="section-heading text-[#222] uppercase">
                  Product Configurations Catalogue
                </h2>
              </div>

              {/* Segment Toggle (only if multiple tabs) */}
              {tabKeys.length > 1 && (
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
              )}

              {/* Premium Cards Grid */}
              {(series.configurations[activeTab] || []).length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                  {(series.configurations[activeTab] || []).map((cfg, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col bg-white border border-[#e2e8f0]/80 rounded-[6px] p-3.5 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(184,144,42,0.06)] hover:-translate-y-1 hover:border-[#B8902A]/40"
                    >
                      {/* Image container */}
                      <div className="relative aspect-[4/4] w-full bg-white rounded-[4px] overflow-hidden flex items-center justify-center p-0 transition-colors duration-500">
                        <img
                          src={cfg.image}
                          alt={cfg.name}
                          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Number badge */}
                        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[0.55rem] sm:text-[0.6rem] font-mono text-[#B8902A] bg-[#B8902A]/10 px-1.5 sm:px-2 py-0.5 rounded-[2px]">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="flex flex-col mt-3 sm:mt-4">
                        <h4 className="font-sans text-[0.72rem] sm:text-[0.8rem] font-black uppercase tracking-wider text-[#111] group-hover:text-[#B8902A] transition-colors duration-300">
                          {cfg.name}
                        </h4>
                        <p className="font-sans text-[0.65rem] sm:text-[0.7rem] leading-relaxed text-[#666] mt-1.5 sm:mt-2 font-light">
                          {cfg.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white border border-[#e2e8f0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed font-light">
                    Technical drawings and detailed system configurations for this series are available upon request. Please contact our design and specification desk for consultation.
                  </p>
                </div>
              )}

            </div>
          )}

          {/* Quick back link */}
          <div className="text-center" data-aos="fade-up">
            <Link
              href="/products/ozone"
              className="font-sans inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8902A] hover:underline"
            >
              ← Back to {category.title} collection
            </Link>
          </div>

        </div>
      </section>

      {/* Luxury Footer Consultation */}
      <section className="relative overflow-hidden py-20 px-8 lg:px-16 bg-[#0c0d0f] text-center" data-aos="fade-up">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-[#B8902A] text-xs font-black uppercase tracking-[4px] mb-3">Begin Specification</p>
          <h2 className="section-heading text-white mb-5">
            Build with the {series.name}
          </h2>
          <p className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed mb-8 max-w-md mx-auto font-light">
            Speak directly with our technical advisers to integrate Ozone Stealth architectural systems into your blueprints.
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
