import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiDownload,
  FiShield,
  FiCheck,
  FiThermometer,
  FiWind,
  FiActivity,
  FiMapPin,
} from "react-icons/fi";
import EnquiryButton from "@/components/common/EnquiryButton";
import DownloadButton from "@/components/common/DownloadButton";

/* ── Local animation styles ─────────────────────────────────── */
const LocalStyles = () => (
  <style>{`
    @keyframes subtleHero {
      from { transform: scale(1.08) translateY(0); }
      to   { transform: scale(1)    translateY(0); }
    }
    .alamin-hero-img {
      animation: subtleHero 10s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      filter: brightness(0.35);
    }

    /* ── System card hover ── */
    .system-card {
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .system-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 22px 45px rgba(0,0,0,0.06);
    }

    /* ── 9/16 portrait video wrapper ── */
    .video-portrait-wrap {
      position: relative;
      width: 100%;
      /* enforce 9:16 = 56.25% → flip to 177.78% */
      padding-bottom: 177.78%;
      overflow: hidden;
      background: #111;
      flex-shrink: 0;
    }
    .video-portrait-wrap video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* ── On tablet/desktop, cap the portrait column so the card isn't enormous ── */
    @media (min-width: 768px) {
      .system-card-portrait-col {
        /* fixed pixel width keeps the 9:16 ratio manageable */
        width: 220px;
        flex-shrink: 0;
      }
      .video-portrait-wrap {
        /* override percentage padding with a fixed height */
        padding-bottom: 0;
        height: 392px; /* 220 * 16/9 ≈ 392 */
      }
    }

    /* ── Mobile: portrait video fills full width (looks great as a tall card header) ── */
    @media (max-width: 767px) {
      .system-card-portrait-col {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
      }
    }
  `}</style>
);

/* ── System data ─────────────────────────────────────────────── */
const SYSTEMS = [
  {
    id: "sl150",
    name: "SL 150 Slim",
    subtitle: "Minimalist Aesthetics & Panoramic Views",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249486/SL_150_SLIM_-_MINIMALIST_AESTHETICS_PANORAMIC_VIEWS_yiwc4e.mp4",
    desc: "The premier architectural choice for luxury residential layouts. Engineered with ultra-slim sightlines to minimize vertical profile lines, maximizing the glass surface area for sweeping panoramic views without compromising structural or thermal integrity.",
  },
  {
    id: "sl120",
    name: "SL 120",
    subtitle: "Premium Sliding System",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249440/SL_120_-_PREMIUM_SLIDING_SYSTEM_hi66ao.mp4",
    desc: "The versatile, high-end benchmark profile for standard premium sliding windows and doors. Offers exceptionally smooth rolling mechanics, deep profile depths, and robust structural stability under high everyday utilization.",
  },
  {
    id: "sl120g",
    name: "SL 120 Gradual",
    subtitle: "Precision Sealing & Enhanced Stability",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249502/SL_120_GRADUAL_-_PRECISION_SEALING_ENHANCED_STABILITY_ahnwke.mp4",
    desc: "Featuring an optimized multi-tier interlocking frame profile. Designed specifically to step up sealing pressure gradually as the sliding panel closes, providing an incredibly tight lock against fine desert sand and whistling winds.",
  },
  {
    id: "sl120m",
    name: "SL 120 Monorail & SL 130 Monorail",
    subtitle: "Advanced Pressure-Seal Systems",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249477/SL_120_MONORAIL_-_ADVANCED_PRESSURE_SEAL_TECHNOLOGY_v5dyie.mp4",
    desc: "Heavy-duty structural configurations built around a single tracking system. The SL 130 Monorail serves as an executive, heavy-weight pressure door system designed to handle extra-thick double-glazed or laminated glass units for high-exposure building envelopes.",
  },
  {
    id: "cc110",
    name: "CC 110",
    subtitle: "Versatile Casement & Multi-Combination Solutions",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249456/CC_110_-_VERSATILE_CASEMENT_MULI_COMBINATION_SOLUTION_kwbp46.mp4",
    desc: "A highly adaptive casement network supporting side-hung, top-hung, and fixed combination window layouts. Built with deep multi-cavity insulation pockets, making it the primary system specified by consultants for strict energy-insulated structural blueprints.",
  },
  {
    id: "bifold",
    name: "Bifold Doors",
    subtitle: "Executive Solutions for Large-Span Openings",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249493/BIFOLD_DOORS_-_EXECUTIVE_SOLUTIONS_FOR_LARGE_SPAN_OPENINGS_qhb3cu.mp4",
    desc: "The ultimate spatial transition system. Engineered with heavy-duty top and bottom tracking rollers to fold away massive structural spans effortlessly, seamlessly blending grand indoor living zones with exterior luxury patios.",
  },
  {
    id: "liftslide",
    name: "Lift & Slide + Tilt",
    subtitle: "Dual-Function Precision Engineering",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249482/LIFT_SLIDE_TILT_-_DUAL_FUNCTION_PRECISION_ENGINEERING_kg20s1.mp4",
    desc: "A premium mechanical system that pulls double duty: turn the handle to lift the massive panel onto rollers for effortless sliding, or tilt the top inward for secure, draft-free natural ventilation. When dropped, the system seals under its own weight for flawless weather tracking.",
  },
  {
    id: "entrance",
    name: "Premium Entrance Doors",
    subtitle: "Grand Architectural Entries",
    video: "https://res.cloudinary.com/dcqznu0ps/video/upload/v1780249434/PREMIUM_ENTRANCE_DOORS_-_GRAND_ARCHITECTURAL_ENTRIES_nzwflh.mp4",
    desc: "Extra-heavy, insulated thermal entrance profiles built to create imposing, secure, and energy-efficient main entries for luxury private estates and commercial properties.",
  },
];

/* ── Main Page Component ─────────────────────────────────────── */
export default function AlAminPage() {

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#111] overflow-x-hidden">
      <LocalStyles />

      {/* ── HERO SECTION ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/home/al-amin.avif"
          alt="ALAMIN Climate-Adaptive Engineering & High-Performance Thermal Barriers"
          className="alamin-hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div
          className="relative z-20 main-container text-center px-4 pt-20 sm:pt-28 md:pt-32"
          data-aos="fade-up"
        >
          <span className="font-sans text-[0.68rem] sm:text-[0.75rem] font-bold text-[#B8902A] tracking-[0.3em] uppercase block mb-4">
            Exclusive Brand Partner
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            ALAMIN Thermal Break Systems:{" "}
            <span className="font-serif font-normal text-light-gold block sm:inline">
              Climate-Engineered Excellence.
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            High-performance, thermal-break aluminium profiles engineered specifically to block Gulf heat
            and fully comply with the Saudi Building Code (SBC).
          </p>
          <div className="w-12 h-[2px] bg-light-gold mx-auto" />
        </div>
      </section>

      {/* ── THERMAL INTELLIGENCE SECTION ── */}
      <section className="py-16 sm:py-24 border-b border-light-gold/10 bg-white/20">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg border border-light-gold/10">

            {/* Left Col: Image */}
            <div className="relative min-h-[280px] sm:min-h-[420px] lg:min-h-0 overflow-hidden" data-aos="fade-right">
              <img
                src="/images/home/lecture.avif"
                alt="Thermal break testing and quality validation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* Right Col: Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-white" data-aos="fade-left">
              <span className="section-label text-light-gold mb-3 block">
                A New Era of Architectural Excellence
              </span>
              <h2 className="section-heading text-[#111] mb-6">
                Thermal Intelligence: The Science of Thermal Break.
              </h2>
              <div className="p-5 bg-light-gold/5 border-l-2 border-light-gold rounded-r-xl mb-6">
                <p className="font-serif text-sm text-neutral-800 leading-relaxed">
                  &quot;By integrating precision-engineered polyamide insulation strips directly into the heart
                  of the aluminium profiles, ALAMIN physically separates the exterior frame from the interior frame.&quot;
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-5">
                In the intense environmental climate of Saudi Arabia, standard aluminium profiles act as
                direct heat conductors, transferring scorching exterior desert temperatures straight into a
                building&apos;s interior. This places a massive, continuous strain on HVAC systems and causes
                indoor energy bills to skyrocket.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                ALAMIN redefines building envelope efficiency through advanced{" "}
                <strong className="font-semibold text-neutral-800">Thermal Break Technology</strong>. This
                thermal barrier cuts heat conduction down to an absolute minimum, ensuring interiors remain
                perfectly insulated, cool, and comfortable while lowering long-term HVAC energy consumption.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── AUTHORIZED SAUDI OPERATIONS ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FAF6EC] border-b border-light-gold/10">
        <div className="main-container px-4 sm:px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <span className="section-label text-light-gold mb-3 block">
              Authorized Saudi Operations
            </span>
            <h2 className="section-heading text-[#111] mb-5">
              Certified Supply &amp; Turnkey{" "}
              <span className="font-serif font-normal text-light-gold">
                Installation Across the Kingdom.
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light max-w-2xl mx-auto mt-4">
              Prestige Creations is the certified dealer and authorized installation partner for AL AMIN
              systems within the Kingdom of Saudi Arabia. We ensure that these highly technical,
              energy-saving configurations are deployed with absolute engineering accuracy.
            </p>
            <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
          </div>

          {/* 3 Pillars Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
            data-aos="fade-up"
          >
            {[
              {
                icon: <FiShield className="w-6 h-6 text-light-gold" />,
                title: "100% SBC Thermal Compliance",
                desc: "Every Al Amin system we supply is structured to meet or exceed the rigorous thermal transmittance (U-value) regulations mandated by the Saudi Building Code (SBC).",
              },
              {
                icon: <FiActivity className="w-6 h-6 text-light-gold" />,
                title: "Certified Master Installation",
                desc: "A thermal break profile is only as good as its seal. Our factory-trained technician force handles all assembly, layout coordination, and on-site installations to ensure airtight, zero-leak field performance.",
              },
              {
                icon: <FiMapPin className="w-6 h-6 text-light-gold" />,
                title: "Seamless Project Supply",
                desc: "Operating from our corporate hubs, we coordinate full material supply, logistics, and certified technical support for residential compounds and major commercial developments in Jeddah, Riyadh, and across the Kingdom.",
              },
            ].map((item, i) => (
              <EnquiryButton
                key={i}
                className={`group relative flex flex-col p-7 sm:p-10 bg-white border border-light-gold/15 rounded-2xl shadow-sm hover:shadow-md hover:border-light-gold/30 transition-all duration-300 items-center text-center cursor-pointer ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold mb-5 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light flex-1">
                  {item.desc}
                </p>
              </EnquiryButton>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURAL SPECIFICATION — SYSTEM CATALOGUE ── */}
      <section id="system-explorer" className="py-12 sm:py-16 lg:py-24 bg-white/40 border-y border-light-gold/10">
        <div className="main-container px-4 sm:px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <span className="section-label text-light-gold mb-3 block">
              The Architectural Specification
            </span>
            <h2 className="section-heading text-[#111] mb-5">
              Certified Engineering Portfolios
            </h2>
            <p className="section-desc text-neutral-500">
              High-exposure exterior layouts engineered for the Gulf climate. Select a system to learn more:
            </p>
            <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
          </div>

          {/* ── System Cards ── */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {SYSTEMS.map((sys, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={sys.id}
                  id={sys.id}
                  className="system-card bg-white border border-light-gold/10 shadow-lg overflow-hidden"
                  data-aos={isEven ? "fade-right" : "fade-left"}
                >
                  {/*
                    ── Layout strategy:
                    Mobile  → stacked: portrait video on top, content below
                    Desktop → side-by-side: portrait video column (fixed ~220 px) + content
                  ── */}
                  <div
                    className={`flex flex-col md:flex-row md:items-stretch ${!isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* ── Portrait Video Column ── */}
                    <div className="system-card-portrait-col">
                      <div className="video-portrait-wrap">
                        <video autoPlay muted loop playsInline>
                          <source src={sys.video} type="video/mp4" />
                        </video>
                        
                      </div>
                    </div>

                    {/* ── Content Column ── */}
                    <div className="flex-1 flex flex-col justify-center p-5 sm:p-7 lg:p-10">
                      <span className="font-sans text-[0.6rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-[#B8902A] font-black mb-2 block">
                        {sys.subtitle}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111] mb-3 sm:mb-4">
                        {sys.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-5 sm:mb-6">
                        {sys.desc}
                      </p>
                      <EnquiryButton
                        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] pb-1 border-b border-[#111]/10 hover:border-light-gold transition-all duration-300 w-fit cursor-pointer"
                      >
                        Request System Specification
                        <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </EnquiryButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── ARCHITECTURAL DOWNLOAD DESK & SUBMITTAL ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FAF6EC]">
        <div className="main-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Left: Download Desk */}
            <div className="lg:col-span-6 flex flex-col justify-between" data-aos="fade-right">
              <div>
                <span className="section-label text-light-gold mb-3 block">
                  Resources
                </span>
                <h2 className="section-heading text-[#111] mb-5">
                  Technical Specification Data Centre
                </h2>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-6 sm:mb-8">
                  Provide your consultants, engineering teams, and main contractors with official technical
                  specifications, profile geometry data sheets, and thermal testing records.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  { name: "ALAMIN Full Systems & Profiles Catalog (PDF)", size: "18.5 MB" },
                  { name: "ALAMIN Technical Data Sheets (PDF)", size: "11.2 MB" },
                  { name: "Saudi Building Code (SBC) Compliance Certificates (PDF)", size: "6.4 MB" },
                ].map((doc, idx) => (
                  <DownloadButton
                    key={idx}
                    docName={doc.name}
                    className="flex items-center justify-between p-4 sm:p-5 bg-white border border-light-gold/15 rounded-xl hover:border-light-gold transition-colors text-left group w-full cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <FiDownload className="w-5 h-5 text-light-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="font-serif text-xs sm:text-sm font-bold text-[#111] block truncate">
                          {doc.name}
                        </span>
                        <span className="font-sans text-[0.58rem] sm:text-[0.62rem] text-neutral-400 uppercase tracking-widest">
                          Download File • {doc.size}
                        </span>
                      </div>
                    </div>
                    <FiArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                  </DownloadButton>
                ))}
              </div>
            </div>

            {/* Right: Technical Submittal CTA */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="bg-[#111] rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden border border-light-gold/25 h-full flex flex-col justify-between min-h-[320px]">

                {/* Background Pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--light-gold) 1.5px, transparent 1.5px), linear-gradient(to bottom, var(--light-gold) 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative z-10">
                  <span className="font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold font-bold uppercase tracking-[0.25em] block mb-3 sm:mb-4">
                    SBC Energy Calculation
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Request an SBC Energy Calculation &amp; Estimation
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6 sm:mb-8">
                    Need to verify the exact U-value compliance of your architectural drawings using Al Amin
                    systems? Submit your floor plans and elevation charts to our technical desks for an
                    immediate structural review.
                  </p>
                </div>

                <div className="relative z-10">
                  <EnquiryButton
                    className="btn-prestige-enquire w-full sm:w-auto"
                  >
                    Initiate Al Amin System Submittal →
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