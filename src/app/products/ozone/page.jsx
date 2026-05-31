import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiDownload,
  FiShield,
  FiSliders,
  FiRefreshCw,
  FiChevronsRight,
  FiMaximize2,
  FiRotateCw,
  FiActivity,
  FiCheck,
  FiTool,
  FiMapPin,
  FiPackage,
  FiChevronRight,
} from "react-icons/fi";
import EnquiryButton from "@/components/common/EnquiryButton";
import DownloadButton from "@/components/common/DownloadButton";
import { productCategories } from "../../_data/products";

/* ── Local animation styles ─────────────────────────────────── */
const LocalStyles = () => (
  <style>{`
    @keyframes subtleHero {
      from { transform: scale(1.06) translateY(0); }
      to   { transform: scale(1)    translateY(0); }
    }
    .ozone-hero-img {
      animation: subtleHero 10s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      filter: brightness(0.38);
    }
    .img-card {
      transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .img-card-wrap:hover .img-card {
      transform: scale(1.04);
    }
    .sys-nav-item {
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `}</style>
);

/* ── System catalogue data ──────────────────────────────────── */
const OPERATIONS = [
  {
    num: "01",
    title: "Bespoke Space Engineering",
    desc: "Every track profile, perimeter frame line, and structural partition grid is custom-tailored to seamlessly accommodate your interior clearances up to 3.5 meters in height.",
    icon: FiSliders,
    highlight: "Up to 3.5 m clearance",
  },
  {
    num: "02",
    title: "Certified Master Installation",
    desc: "We do not rely on standard laborers. Our internal force of specialized technicians manages all millimetric track levelling, concealed hydraulic floor spring pocketing, and glass alignment to guarantee a flawless, rattle-free finish.",
    icon: FiTool,
    highlight: "In-house specialists only",
  },
  {
    num: "03",
    title: "National Corporate Project Delivery",
    desc: "From high-end commercial spaces at Emaar Square, Jeddah, to luxury office hubs and private villas across Riyadh and the Western Region, we provide complete turnkey delivery.",
    icon: FiMapPin,
    highlight: "Jeddah · Riyadh · KSA",
  },
];

const SYSTEM_UI_METADATA = {
  "single-double": {
    icon: FiSliders,
    type: "Sliding Systems",
    badge: "Minimalist Sliders"
  },
  "synchronised": {
    icon: FiRefreshCw,
    type: "Sliding Systems",
    badge: "Symmetric Sliders"
  },
  "telescopic": {
    icon: FiChevronsRight,
    type: "Sliding Systems",
    badge: "Space-Saving Sliders"
  },
  "pocket": {
    icon: FiMaximize2,
    type: "Sliding Systems",
    badge: "Concealed Sliders"
  },
  "sliding-folding": {
    icon: FiActivity,
    type: "Sliding Systems",
    badge: "Movable Partition Walls"
  },
  "floor-spring": {
    icon: FiShield,
    type: "Swing & Pivot",
    badge: "Pivot Entrances"
  },
  "swing-closer": {
    icon: FiSliders,
    type: "Swing & Pivot",
    badge: "Casement Entrances"
  },
  "revolving": {
    icon: FiRotateCw,
    type: "Revolving Systems",
    badge: "Dramatic Entry Statement"
  }
};

const ozoneCategory = productCategories.find((c) => c.id === "ozone");
const ozoneSeries = ozoneCategory ? ozoneCategory.series : [];

/* ── Alternating system catalogue (Tostem style) ─────────────── */
function SystemCatalogue() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {ozoneSeries.map((series, idx) => {
        const isEven = idx % 2 === 0;
        const meta = SYSTEM_UI_METADATA[series.id] || {
          icon: FiSliders,
          type: "Sliding Systems",
          badge: series.seriesLabel || "Minimalist Sliders"
        };
        const Icon = meta.icon;

        return (
          <div
            key={series.id}
            className="product-portfolio-card grid grid-cols-1 md:grid-cols-12 md:gap-14 bg-white border border-light-gold/10 shadow-lg items-stretch overflow-hidden"
            data-aos={isEven ? "fade-right" : "fade-left"}
          >
            {/* Image Block */}
            <div className={`col-span-1 md:col-span-6 relative aspect-[16/11] md:aspect-auto md:h-full overflow-hidden bg-neutral-100 ${!isEven ? "md:order-2" : ""}`}>
              <img
                src={series.img}
                alt={series.name}
                className="w-full h-full object-cover object-bottom transition-transform duration-[1.5s] hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#111]/80 backdrop-blur-md border border-light-gold/30 text-white text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-sm">
                {meta.type}
              </div>
            </div>

            {/* Content Block */}
            <div className={`col-span-1 md:col-span-6 flex flex-col justify-center p-6 sm:p-8 md:p-10 ${isEven ? "md:pl-0" : "md:pr-0"}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-light-gold/10 border border-light-gold/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-light-gold" />
                </div>
                <span className="font-sans text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-[#B8902A] font-black">
                  {meta.badge}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111] mb-4">
                {series.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-6 font-light">
                {series.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/products/ozone/${series.id}`}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] pb-1 border-b border-[#111]/10 hover:border-light-gold transition-all duration-300 w-fit"
                >
                  Explore Specs
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}

/* ── Main Page Component ─────────────────────────────────────── */
export default function OzonePage() {

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#111] overflow-x-hidden">
      <LocalStyles />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/home/ozone.webp"
          alt="OZONE Stealth Series Minimalist Glass Partitions"
          className="ozone-hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 main-container text-center px-4 pt-20 sm:pt-28 md:pt-32" data-aos="fade-up">
          <span className="font-sans text-[0.68rem] sm:text-[0.75rem] font-bold text-[#B8902A] tracking-[0.3em] uppercase block mb-4">
            Exclusive Brand Partner
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            OZONE Stealth Series:{" "}
            <span className="font-serif font-normal text-light-gold block sm:inline">
              Minimalist Framed Glass Partition Systems.
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Drawing inspiration from the unseen and unheard—ultra-slim aluminium framing engineered for invisible movement, acoustic isolation, and seamless interior architecture.
          </p>
          <div className="w-12 h-[2px] bg-light-gold mx-auto" />
        </div>
      </section>

      {/* ── THE ART OF INVISIBLE ARCHITECTURE ── */}
      <section className="py-16 sm:py-24 border-b border-light-gold/10 bg-white/20">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg border border-light-gold/10">

            {/* Left Col: Image */}
            <div className="relative min-h-[280px] sm:min-h-[420px] lg:min-h-0 overflow-hidden" data-aos="fade-right">
              <img
                src="/images/ozone-stealth.jpeg"
                alt="OZONE Stealth Concept"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* Right Col: Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-white" data-aos="fade-left">
              <span className="section-label text-light-gold mb-3 block">
                The Stealth Concept
              </span>
              <h2 className="section-heading text-[#111] mb-6">
                The Art of Invisible Architecture.
              </h2>
              <div className="p-5 bg-light-gold/5 border-l-2 border-light-gold rounded-r-xl mb-6">
                <p className="font-serif text-sm text-neutral-800 leading-relaxed">
                  &quot;Defining the Stealth Concept: Unseen, Unheard, Unmatched.&quot;
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-5">
                &quot;Stealth&quot; refers to the quality of not being easily visible or detectable. Inspired by the unseen and unheard, the Ozone Stealth Series utilizes ultra-slim aluminium framing and minimalist hardware to replace bulky traditional partitions, maximizing glass surfaces to fill high-end corporate and luxury residential spaces with natural light and unobstructed views.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-5">
                Engineered for a flawless physical experience, the systems feature advanced Soft-Open and Soft-Close mechanisms that cushion panel movement perfectly for a smooth, fluid, and noiseless operation.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                This performance is delivered through two core configurations: <strong className="font-semibold text-neutral-800">Stealth Slide</strong>, featuring ultra-low-profile, top-hung tracking networks that require zero bottom tracks to keep luxury marble, stone, or hardwood flooring completely flush and unbroken; and <strong className="font-semibold text-neutral-800">Stealth Swing</strong>, offering bespoke hinge and pivot door systems optimized for high-frequency daily operation while maintaining the exact same slim frame lines to ensure absolute aesthetic continuity across the interior layout.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── AUTHORIZED SAUDI OPERATIONS ── */}
      <section className="py-16 sm:py-24 bg-[#FAF6EC] border-b border-light-gold/10">
        <div className="main-container">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
            <span className="font-sans text-[0.68rem] sm:text-[0.75rem] font-bold text-[#B8902A] tracking-[0.3em] uppercase block mb-3">
              Authorized Saudi Operations
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111] leading-tight">
              Certified Supply &amp; Turnkey{" "}
              <span className="font-serif font-normal text-light-gold">
                Interior Installation.
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light max-w-2xl mx-auto mt-4">
              Prestige Creations is the certified dealer and authorized systems installer for OZONE Stealth Architecture within the Kingdom of Saudi Arabia. We bridge the gap between premium global manufacturing and localized site perfection:
            </p>
            <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up">
            {OPERATIONS.map((op, idx) => {
              const Icon = op.icon;
              return (
                <EnquiryButton
                  key={op.num}
                  className="group relative flex flex-col p-8 sm:p-10 bg-white border border-light-gold/15 rounded-2xl shadow-sm hover:shadow-md hover:border-light-gold/30 transition-all duration-300 items-center text-center cursor-pointer"
                >
                  {/* Icon at top center */}
                  <div className="w-16 h-16 rounded-full bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-light-gold" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3">
                    {op.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light flex-1">
                    {op.desc}
                  </p>
                </EnquiryButton>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SYSTEM SPECIFICATIONS CATALOGUE ── */}
      <section className="py-16 sm:py-24 bg-[#FAF6EC] border-y border-light-gold/10">
        <div className="main-container">
          {/* Section header */}
          <div className="mb-14 sm:mb-16" data-aos="fade-up">
            <span className="section-label text-light-gold mb-3 block">
              System Specifications
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="section-heading text-[#111]">
                The Complete Interior{" "}
                <span className="font-serif font-normal text-light-gold">Architectural Catalogue</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light max-w-xs sm:text-right">
                Sliders, Swings &amp; Revolving Systems — engineered for millimetric luxury.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-light-gold mt-6" />
          </div>

          {/* Two-panel catalogue */}
          <SystemCatalogue />
        </div>
      </section>

      {/* ── ARCHITECTURAL DOWNLOAD DESK ── */}
      <section className="py-16 sm:py-24 bg-white/30 border-t border-light-gold/10">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Download Desk */}
            <div className="lg:col-span-6 flex flex-col justify-between" data-aos="fade-right">
              <div>
                <span className="section-label text-light-gold mb-3 block">Resources</span>
                <h2 className="section-heading text-[#111] mb-5">
                  Architectural Download Desk
                </h2>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-8">
                  Access Complete CAD Layouts, Section Drawings, and Catalogues. Provide your interior designers, project consultants, and commercial fit-out sub-contractors with official certified technical documentation.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { name: "OZONE Stealth Systems Catalog (PDF)", size: "12.4 MB" },
                  { name: "Ozone Stealth Technical Specifications & Sections (PDF)", size: "8.2 MB" },
                  { name: "Ozone Stealth Mechanical Testing Certificates (PDF)", size: "4.5 MB" },
                ].map((doc, idx) => (
                  <DownloadButton
                    key={idx}
                    docName={doc.name}
                    className="flex items-center justify-between p-5 bg-white border border-light-gold/15 rounded-xl hover:border-light-gold transition-colors text-left group w-full cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <FiDownload className="w-5 h-5 text-light-gold group-hover:scale-110 transition-transform shrink-0" />
                      <div>
                        <span className="font-serif text-sm font-bold text-[#111] block">{doc.name}</span>
                        <span className="font-sans text-[0.62rem] text-neutral-400 uppercase tracking-widest">
                          Download File • {doc.size}
                        </span>
                      </div>
                    </div>
                    <FiArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </DownloadButton>
                ))}
              </div>
            </div>

            {/* Right: RCP CTA */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="bg-[#111] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-light-gold/25 h-full flex flex-col justify-between min-h-[360px]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--light-gold) 1.5px, transparent 1.5px), linear-gradient(to bottom, var(--light-gold) 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-light-gold/8 blur-[80px]" />
                <div className="relative z-10">
                  <span className="font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold font-bold uppercase tracking-[0.25em] block mb-4">
                    Technical Design Desk
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                    Request a Reflected Ceiling Plan (RCP) &amp; Space Estimation
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-8">
                    Specifying interior glass walls or a 360° revolving door for a premium commercial workspace or luxury villa layout? Submit your interior plans and ceiling heights to our technical desks in Jeddah or Riyadh for customized frame layouts and millimetric estimations.
                  </p>
                </div>
                <div className="relative z-10">
                  <EnquiryButton className="btn-prestige-enquire w-full sm:w-auto">
                    Initiate Ozone Stealth Partition Technical Review →
                  </EnquiryButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
