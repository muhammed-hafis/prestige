import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiWind,
  FiCompass,
  FiCpu,
  FiThermometer,
  FiLayers
} from "react-icons/fi";
import EnquiryButton from "@/components/common/EnquiryButton";

const BRANDS = [
  {
    id: "tostem",
    name: "TOSTEM (Japan)",
    tagline: "Automated Japanese Factory Precision & Ultra-Slim Design.",
    desc: "TOSTEM is a premier global aluminium brand celebrated for its uncompromising Japanese engineering, exceptional structural performance, and minimalist aesthetics. Sourced as factory-prefabricated components, these systems guarantee absolute dimensional accuracy and zero on-site fabrication errors.",
    img: "/images/home/tostem.avif",
    logo: "/partners/tostem-logo.avif",
    linkText: "Explore the TOSTEM Portfolio & Systems",
    href: "/products/tostem",
    icon: <FiCpu className="w-8 h-8 text-light-gold" />,
    specs: [
      { label: "Primary Application", val: "Luxury modern villas, premium residential compounds, and high-end commercial facades." },
      { label: "Core Systems", val: "Ultra-slim sliding doors, low-profile tracks, and high-security casement configurations." },
      { label: "The Technical Edge", val: "Exceptional wind-load resistance and high-velocity sandstorm protection." }
    ]
  },
  {
    id: "alamin",
    name: "ALAMIN (Regional)",
    tagline: "Climate-Adaptive Engineering & High-Performance Thermal Barriers.",
    desc: "ALAMIN is a regional system specialized in high-performance aluminium profiles engineered specifically to combat the extreme environmental demands of the Gulf climate.",
    img: "/images/home/al-amin.webp",
    logo: "/partners/al-amin.avif",
    linkText: "Explore the ALAMIN Portfolio & Systems",
    href: "/products/alamin",
    icon: <FiThermometer className="w-8 h-8 text-light-gold" />,
    specs: [
      { label: "Primary Application", val: "Energy-efficient residential properties, large-scale commercial developments, and strict code-compliant infrastructure." },
      { label: "Core Systems", val: "Advanced Insulated Thermal Break doors, windows, and structural curtain wall facades." },
      { label: "The Technical Edge", val: "Built using advanced polyamide insulation strip technology that physically blocks exterior heat transfer and aligns 100% with Saudi Building Code (SBC) U-value mandates." }
    ]
  },
  {
    id: "ozone",
    name: "OZONE (International)",
    tagline: "Premium Structural Glass Hardware & Minimalist Interior Luxury.",
    desc: "OZONE is a premier international brand specializing in architectural structural glass fittings and minimalist interior partitions. It is designed for modern spaces that demand expansive, light-filled spatial flows without visible, heavy vertical framing.",
    img: "/images/home/ozone.webp",
    logo: "/partners/ozone-logo.avif",
    linkText: "Explore the OZONE Portfolio & Systems",
    href: "/products/ozone",
    icon: <FiLayers className="w-8 h-8 text-light-gold" />,
    specs: [
      { label: "Primary Application", val: "Luxury office layouts, corporate fit-outs, luxury villa interiors, and frameless safety balustrades." },
      { label: "Core Systems", val: "Minimalist interior glass partitions, sliding glass walls, and heavy-duty hydraulic floor springs." },
      { label: "The Technical Edge", val: "Engineered from high-grade, certified materials for heavy-frequency operation with integrated hydraulic soft-close dampening." }
    ]
  }
];

const STANDARDS = [
  {
    title: "SBC Ready",
    desc: "Full data transparency and certified compliance submittals for the Saudi Building Code.",
    icon: <FiShield className="w-6 h-6 text-light-gold" />
  },
  {
    title: "Weather Isolation",
    desc: "High-compression EPDM rubber gaskets that eliminate whistling wind noises, dust penetration, and rainwater leaks.",
    icon: <FiWind className="w-6 h-6 text-light-gold" />
  },
  {
    title: "Supply Chain Traceability",
    desc: "100% genuine products with traceable factory origins—absolutely zero local imitations or mixed profiles.",
    icon: <FiCompass className="w-6 h-6 text-light-gold" />
  }
];

export default function ProductsLandingPage() {

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#111] overflow-x-hidden pt-28 md:pt-40 lg:pt-36">

      {/* ── HERO ── */}
      <section className="py-10 lg:py-14">
        <div className="main-container text-center" data-aos="fade-up">
          <span className="section-label text-light-gold mb-4 sm:mb-5 block tracking-[0.25em]">
            PRESTIGE BRAND PARTNERS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#111]">
            Genuine Systems. <span className="font-serif font-normal text-light-gold">Traceable Sourcing.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
            Select a Brand to View Full Technical Catalogues.
          </p>
          <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
        </div>
      </section>

      {/* ── BRAND LIST ── */}
      <section className="py-10 lg:py-14">
        <div className="main-container flex flex-col gap-16 lg:gap-24">
          {BRANDS.map((brand, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={brand.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                {/* Image Block */}
                <Link
                  href={brand.href}
                  className={`col-span-1 lg:col-span-6 relative rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] group ${!isEven ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  {/* Brand logo overlay inside image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 z-10">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="h-full w-auto object-contain brightness-0 invert opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    />
                  </div>
                </Link>

                <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#111] uppercase tracking-wide mb-5">
                    {brand.name}
                  </span>

                  <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-800 mb-4 leading-snug">
                    {brand.tagline}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    {brand.desc}
                  </p>

                  {/* Specific Bullet points */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {brand.specs.map((spec, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-light-gold/10 flex items-center justify-center mt-0.5 text-light-gold flex-shrink-0">
                          <FiCheck className="w-3.5 h-3.5" />
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-normal font-light">
                          <strong className="font-semibold text-neutral-800">{spec.label}:</strong> {spec.val}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Brand Link */}
                  <Link
                    href={brand.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] pb-1 border-b border-neutral-800/10 hover:border-light-gold transition-all duration-300 w-fit"
                  >
                    {brand.linkText}
                    <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── THE PRESTIGE SPECIFICATION STANDARD ── */}
      <section className="py-10 lg:py-14 bg-white/40 border-y border-light-gold/10">
        <div className="main-container">

          {/* Header */}
          <div className="mx-auto mb-16 text-center max-w-3xl" data-aos="fade-up">
            <span className="section-label text-light-gold mb-4 sm:mb-5 block tracking-[0.25em]">
              THE PRESTIGE SPECIFICATION STANDARD
            </span>
            <h2 className="section-heading text-[#111] mb-5">
              Engineering Excellence Across All Systems.
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-500 leading-relaxed font-light">
              Regardless of the brand option you select for your development, Prestige Creations guarantees absolute technical compliance across our entire portfolio:
            </p>
            <div className="mx-auto h-[2px] w-12 bg-light-gold mt-6" />
          </div>

          {/* Grid standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up">
            {STANDARDS.map((std, i) => (
              <div
                key={i}
                className="bg-white border border-light-gold/15 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(197,160,40,0.05)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-light-gold/10 flex items-center justify-center mb-6">
                  {std.icon}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3">
                  {std.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CALL TO ACTION SECTION ── */}
      <section className="py-16 lg:py-20">
        <div className="main-container">
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-light-gold/25 bg-gradient-to-br from-[#0c0d0f] to-[#16181c] p-8 sm:p-12 lg:p-16"
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
                  BLUEPRINTS & DRAWINGS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Request System Blueprints <br className="hidden sm:block" />
                  &amp; Shop Drawings
                </h2>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  Need immediate assistance deciding which system fits your architectural drawings? Consult with our engineering desks in Jeddah to schedule a technical comparison review.
                </p>
              </div>

              {/* Right side interactive trigger */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 w-full max-w-sm flex flex-col items-stretch text-center backdrop-blur-sm">
                  {/* Subtle checklist */}
                  <div className="text-left space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCheck className="w-4 h-4 text-light-gold shrink-0" />
                      <span className="font-sans text-[0.72rem] uppercase tracking-wider font-semibold">CAD &amp; PDF Specifications</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCheck className="w-4 h-4 text-light-gold shrink-0" />
                      <span className="font-sans text-[0.72rem] uppercase tracking-wider font-semibold">SBC Thermal Compliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCheck className="w-4 h-4 text-light-gold shrink-0" />
                      <span className="font-sans text-[0.72rem] uppercase tracking-wider font-semibold">Structural Calculations</span>
                    </div>
                  </div>

                  <EnquiryButton
                    className="w-full bg-light-gold text-white hover:bg-white hover:text-black py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[0.65rem] sm:text-xs shadow-md transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  >
                    Consult with Engineering Desk →
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
