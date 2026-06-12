import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiWind,
  FiCompass,
  FiCpu,
  FiDownload,
  FiVolume2,
  FiDroplet,
  FiAward,
  FiBriefcase,
  FiClock,
  FiActivity,
  FiChevronRight,
  FiTool,
  FiMapPin
} from "react-icons/fi";
import EnquiryButton from "@/components/common/EnquiryButton";
import DownloadButton from "@/components/common/DownloadButton";

// Custom styles for scroll indicator and custom styling hooks
const LocalStyles = () => (
  <style>{`
    @keyframes subtleHero {
      from { transform: scale(1.08) translateY(0); }
      to { transform: scale(1) translateY(0); }
    }
    .tostem-hero-img {
      animation: subtleHero 10s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      filter: brightness(0.4);
    }
    .backdrop-blur-premium {
      backdrop-filter: blur(12px);
      background-color: rgba(250, 246, 236, 0.75);
    }
    .testing-pillar-card {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .testing-pillar-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(184, 144, 42, 0.08);
      border-color: rgba(184, 144, 42, 0.4);
    }
    .product-portfolio-card {
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .product-portfolio-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 22px 45px rgba(0, 0, 0, 0.04);
    }
  `}</style>
);

const ALL_SYSTEMS = [
  {
    id: "grants",
    name: "GRANTS Collection",
    badge: "Flagship Ultra-Luxury Tier",
    type: "Top-of-the-Line",
    desc: "TOSTEM's absolute topmost profile series, engineered for architectural masterpieces and high-end luxury villas. It redefines the boundaries of living spaces with an innovative hidden-sash design and ultra-slim meeting stiles. This tier maximizes glass surface areas to deliver sweeping, unobstructed panoramic views while maintaining the highest structural and wind-load stability available.",
    img: "/images/grants/grants.avif",
    links: [
      { label: "Explore GRANTS Specs", href: "/products/tostem/grants" },
      { label: "Explore GRANTS Plus Specs", href: "/products/tostem/grants-plus" }
    ]
  },
  {
    id: "atis",
    name: "ATIS SERIES",
    badge: "Mid-Range Architectural Tier",
    type: "Design & Innovation",
    desc: "The perfect sweet spot between high-end aesthetics and everyday practicality. Awarded prestigious global accolades (including the Red Dot and iF Design Awards), ATIS is built around a minimalist design where all functional components, hinges, and hardware are fully concealed within smooth, slim frames. It features TOSTEM's proprietary Invisible Insect Screen for 20% better ventilation.",
    img: "/images/atis/atis.avif",
    links: [
      { label: "Explore ATIS Specs", href: "/products/tostem/atis" },
      { label: "Explore ATIS Plus Specs", href: "/products/tostem/atis-plus" }
    ]
  },
  {
    id: "we",
    name: "WE SERIES",
    badge: "The Foundation Tier",
    type: "Everyday Quality & Scale",
    desc: "TOSTEM's highly accessible entry tier, designed to bring legendary Japanese factory precision to mass-market residential compounds, commercial mid-rises, and budget-conscious developments. Despite its competitive pricing, the WE series never compromises on core performance, offering robust functionality, smooth rolling operations, and tested weather protection.",
    img: "/images/we 70/we.avif",
    links: [
      { label: "Explore WE 70 Specs", href: "/products/tostem/we-70" },
      { label: "Explore WE Plus Specs", href: "/products/tostem/we-plus" }
    ]
  },
  {
    id: "airflow",
    name: "AIRFLOW SYSTEMS",
    badge: "Integrated Natural Ventilation",
    type: "Specialty System",
    desc: "A specialized boutique ventilation system designed to introduce constant, fresh air circulation throughout a luxury home without compromising security. It utilizes unique vertical sliding glass panels built seamlessly inside the main doors that operate while the frame remains securely locked.",
    img: "/images/giesta-airflow/giesta-airflow.avif",
    links: [
      { label: "Explore Airflow Specs", href: "/products/tostem/giesta-airflow" }
    ]
  },
  {
    id: "giesta",
    name: "GIESTA",
    badge: "High-Security Premium Entrance Doors",
    type: "Specialty System",
    desc: "High-end structural main entrance doors that perfectly wrap an insulated structural steel core in sophisticated wood-pattern or sleek metallic finishes. Equipped with user-friendly heavy-duty handles, multi-point locking systems, and advanced thermal seals to block exterior desert heat at the property's main entry point.",
    img: "/images/giesta/giesta.avif",
    links: [
      { label: "Explore GIESTA Specs", href: "/products/tostem/giesta" }
    ]
  }
];

const TESTING_PILLARS = [
  {
    title: "Wind Pressure Resistance",
    subtitle: "ASTM E330 / JIS",
    metric: "800 Pa - 2000 Pa",
    desc: "Proven to safely withstand extreme positive and negative wind loads. These profiles will not rattle, vibrate, or bend under intense desert sandstorms or high-altitude pressures.",
    icon: <FiActivity className="w-6 h-6 text-light-gold" />
  },
  {
    title: "Water Tightness",
    subtitle: "ASTM E300 / JIS",
    metric: "150 Pa - 300 Pa",
    desc: "Engineered with steeply sloped tracks and patented One-Way Non-Returnable Drainage Valves. Allows water to escape instantly without blowing back inside under storm pressures.",
    icon: <FiDroplet className="w-6 h-6 text-light-gold" />
  },
  {
    title: "Air Tightness",
    subtitle: "ASTM E283 / JIS",
    metric: "8 - 10.7 m³/h",
    desc: "Minimizes uncontrolled air infiltration down to a tight envelope. Blocks hot desert dust, fine sand particles, and moisture to drastically lower HVAC energy loads.",
    icon: <FiWind className="w-6 h-6 text-light-gold" />
  },
  {
    title: "Acoustic Insulation",
    subtitle: "ASTM E90 / JIS T-1",
    metric: "-25 Decibels",
    desc: "Reduces external ambient noise by up to 25 Decibels using standard single glass, creating a serene environment. Scales even higher with double-glazed or laminated glass.",
    icon: <FiVolume2 className="w-6 h-6 text-light-gold" />
  }
];

const ADVANTAGES = [
  {
    title: "TEXGUARD Surface & Colour Protection",
    desc: "TOSTEM’s patented anodizing coating process. An electronic clear-coat layer protects the aluminium profiles from scorching desert heat, harsh UV radiation, and high coastal humidity. It prevents colour fading and scratching, maintaining its rich colour gloss and surface lustre for up to 40 years."
  },
  {
    title: "Zero Bottom-Frame Screws (No Wall Seepage)",
    desc: "Traditional installations require drilling screws straight through the bottom frame, creating hidden entry pathways for water to seep into walls. TOSTEM utilizes a proprietary Snap-Fit Levelling Plate System on the window sill. The window frame snaps perfectly into place, completely eliminating bottom frame punctures."
  },
  {
    title: "High-Endurance EPDM Nano-Gaskets",
    desc: "Standard windows rely on cheap brush piles that degrade over time. TOSTEM utilizes long-lasting, factory-moulded EPDM Nano-Gaskets at every corner intersection, ensuring airtight and watertight seals that never decay."
  }
];

export default function TostemPage() {

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#111] overflow-x-hidden">
      <LocalStyles />

      {/* ── HERO SECTION ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/home/tostem.avif"
          alt="TOSTEM Pre-Engineered Systems"
          className="tostem-hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-20 main-container text-center px-4 pt-20 sm:pt-28 md:pt-32" data-aos="fade-up">
          <span className="font-sans text-[0.68rem] sm:text-[0.75rem] font-bold text-[#B8902A] tracking-[0.3em] uppercase block mb-4">
            Exclusive Brand Partner
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            TOSTEM Aluminium Systems: <span className="font-serif font-normal text-light-gold block sm:inline">Japanese Pre-Engineered Perfection.</span>
          </h1>
          <p className="font-sans text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            The global benchmark for ultra-slim profiles, factory-controlled precision, century-long engineering heritage, and ultimate weather resistance.
          </p>
          <div className="w-12 h-[2px] bg-light-gold mx-auto" />
        </div>
      </section>

      {/* ── HERITAGE SECTION ── */}
      <section className="py-16 sm:py-24 border-b border-light-gold/10 bg-white/20">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg border border-light-gold/10">

            {/* Left Col: Image */}
            <div className="relative min-h-[280px] sm:min-h-[420px] lg:min-h-0 overflow-hidden" data-aos="fade-right">
              <img
                src="/images/tostem-benchmark.avif"
                alt="Raising the Global Benchmark — TOSTEM"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* Right Col: Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-white" data-aos="fade-left">
              <span className="section-label text-light-gold mb-3 block">
                Raising the Global Benchmark
              </span>
              <h2 className="section-heading text-[#111] mb-6">
                A Century of Architectural Brilliance.
              </h2>
              <div className="p-5 bg-light-gold/5 border-l-2 border-light-gold rounded-r-xl mb-6">
                <p className="font-serif text-sm text-neutral-800 leading-relaxed">
                  &quot;Over 100 years of LIXIL global innovation, bringing millimetric accuracy directly from automated factory beds to Saudi Arabia&apos;s finest estates.&quot;
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-5">
                Sourced through the global network of LIXIL Japan, TOSTEM stands at the pinnacle of architectural innovation with a legacy spanning over a century. For more than 100 years, TOSTEM has continually redefined how the world interacts with aluminium opening systems, earning the absolute trust of leading international architects, master developers, and luxury estate owners.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                Unlike standard systems that are cut, modified, and manually pieced together by local workshops, TOSTEM profiles are <strong className="font-semibold text-neutral-800">100% Pre-Engineered</strong>. Every window and door is designed, extruded, machined, and quality-tested in an automated factory environment to exact millimetric dimensions before arriving at your site.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ── SAUDI OPERATIONS SECTION ── */}
      <section className="py-16 sm:py-24 bg-[#FAF6EC] border-b border-light-gold/10">
        <div className="main-container">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
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
              Prestige Creations is the certified dealer and authorized systems partner for TOSTEM within the Kingdom of Saudi Arabia. We bridge the gap between Japanese factory pre-engineering and localized site execution.
            </p>
            <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up">
            
            {/* Sourcing */}
            <EnquiryButton
              className="group relative flex flex-col p-8 sm:p-10 bg-white border border-light-gold/15 rounded-2xl shadow-sm hover:shadow-md hover:border-light-gold/30 transition-all duration-300 items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                <FiAward className="w-6 h-6 text-light-gold" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3">
                Authorized Supply Sourcing
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light flex-1">
                Every TOSTEM window, door, and profile we supply is sourced 100% genuine and direct from official manufacturing plants, complete with traceable factory origins and warranties.
              </p>
            </EnquiryButton>

            {/* Installation */}
            <EnquiryButton
              className="group relative flex flex-col p-8 sm:p-10 bg-white border border-light-gold/15 rounded-2xl shadow-sm hover:shadow-md hover:border-light-gold/30 transition-all duration-300 items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                <FiTool className="w-6 h-6 text-light-gold" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3">
                Certified Master Installation
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light flex-1">
                We do not rely on third-party sub-contractors. Your systems are deployed and installed exclusively by our highly trained force of technicians.
              </p>
            </EnquiryButton>

            {/* Mobility */}
            <EnquiryButton
              className="group relative flex flex-col p-8 sm:p-10 bg-white border border-light-gold/15 rounded-2xl shadow-sm hover:shadow-md hover:border-light-gold/30 transition-all duration-300 items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                <FiMapPin className="w-6 h-6 text-light-gold" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3">
                National Project Mobility
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light flex-1">
                Backed by our technical hubs and operational frameworks, we execute supply and installation for luxury villas and major commercial projects across KSA.
              </p>
            </EnquiryButton>

          </div>
        </div>
      </section>

      {/* ── PRODUCT PORTFOLIO ── */}
      <section className="py-16 sm:py-24 bg-white/40 border-y border-light-gold/10">
        <div className="main-container">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
            <span className="section-label text-light-gold mb-3 block">
              Product Portfolio
            </span>
            <h2 className="section-heading text-[#111] mb-5">
              The Architectural Hierarchy
            </h2>
            <p className="section-desc text-neutral-500">
              From flagship ultra-luxury profiles to high-value architectural engineering collections. Select a series to view specifications:
            </p>
            <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
          </div>

          {/* All Systems Cards */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {ALL_SYSTEMS.map((series, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={series.id}
                  className="product-portfolio-card grid grid-cols-1 lg:grid-cols-12 lg:gap-14 bg-white border border-light-gold/10 shadow-lg items-stretch overflow-hidden"
                  data-aos={isEven ? "fade-right" : "fade-left"}
                >
                  
                  {/* Image Block */}
                  <div className={`col-span-1 lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-neutral-100 ${!isEven ? "lg:order-2" : ""}`}>
                    <img
                      src={series.img}
                      alt={series.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                    />
                  </div>

                  {/* Content Block */}
                  <div className={`col-span-1 lg:col-span-6 flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${isEven ? "lg:pl-0" : "lg:pr-0"}`}>
                    <span className="font-sans text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-[#B8902A] font-black mb-2 block">
                      {series.badge}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111] mb-4">
                      {series.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-6">
                      {series.desc}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {series.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] pb-1 border-b border-[#111]/10 hover:border-light-gold transition-all duration-300 w-fit"
                        >
                          {link.label}
                          <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FOUR PILLARS OF TESTING ── */}
      <section className="py-16 sm:py-24 bg-[#FAF6EC]">
        <div className="main-container">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
            <span className="section-label text-light-gold mb-3 block">
              Rigorous Lab Validation
            </span>
            <h2 className="section-heading text-[#111] mb-5">
              The Four Pillars of Testing
            </h2>
            <p className="section-desc text-neutral-500 max-w-2xl mx-auto">
              TOSTEM systems undergo rigorous physical laboratory testing inside state-of-the-art testing centres in Japan and Thailand to exceed the highest global certification benchmarks, including <strong className="font-semibold text-neutral-800">ASTM E330 / JIS</strong> and <strong className="font-semibold text-neutral-800">ASTM E300 / JIS</strong>:
            </p>
            <div className="w-12 h-[2px] bg-light-gold mx-auto mt-6" />
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" data-aos="fade-up">
            {TESTING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="testing-pillar-card bg-white border border-light-gold/10 rounded-2xl p-6 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.015)]"
              >
                <div className="w-12 h-12 rounded-full bg-light-gold/10 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-2">
                  {pillar.title}
                </h3>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.68rem] font-bold uppercase tracking-wider bg-light-gold/10 text-[#B8902A] border border-light-gold/20 shadow-[0_2px_10px_rgba(184,144,42,0.05)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-light-gold animate-pulse" />
                    {pillar.subtitle}
                  </span>
                </div>
                
                <div className="my-4 py-2 border-y border-neutral-100 flex items-center justify-between">
                  <span className="font-sans text-[0.62rem] uppercase tracking-wider text-neutral-400">Tested Load</span>
                  <span className="font-sans text-sm font-black text-[#B8902A]">{pillar.metric}</span>
                </div>

                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light flex-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADVANCED MATERIAL ADVANTAGES ── */}
      <section className="py-16 sm:py-24 bg-white/30 border-y border-light-gold/10">
        <div className="main-container">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14" data-aos="fade-up">
            <div className="lg:col-span-7">
              <span className="section-label text-light-gold mb-3 block">
                Advanced Material Advantages
              </span>
              <h2 className="section-heading text-[#111]">
                Proprietary Innovations Exclusive to TOSTEM.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                Developed inside proprietary laboratories, these design benefits set pre-engineered TOSTEM frames apart from typical custom-built local systems.
              </p>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white border border-light-gold/10 rounded-2xl p-8 relative shadow-sm"
              >
                <span className="absolute top-6 right-6 font-serif text-3xl font-black text-light-gold/15">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-4 pr-8">
                  {adv.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── VIDEO SHOWCASE ── */}
      <section className="relative w-full h-[60vh] sm:h-[80vh] lg:h-screen bg-black overflow-hidden border-b border-light-gold/10" data-aos="fade-in">
        <video
          src="/tostem.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full h-full object-cover"
          playsInline
        />
      </section>

      {/* ── ARCHITECTURAL DOWNLOAD DESK & SUBMITTAL ── */}
      <section className="py-16 sm:py-24 bg-[#FAF6EC]">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Download Desk */}
            <div className="lg:col-span-6 flex flex-col justify-between" data-aos="fade-right">
              <div>
                <span className="section-label text-light-gold mb-3 block">
                  Resources
                </span>
                <h2 className="section-heading text-[#111] mb-5">
                  Architectural Download Desk
                </h2>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-8">
                  Provide your design teams, consultants, and contractors with official certified documentation straight from TOSTEM’s international engineering desk.
                </p>
              </div>

              {/* Downloads list */}
              <div className="flex flex-col gap-4">
                
                <DownloadButton
                  docName="TOSTEM Architectural Systems Brochure"
                  className="flex items-center justify-between p-5 bg-white border border-light-gold/15 rounded-xl hover:border-light-gold transition-colors text-left group w-full cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <FiDownload className="w-5 h-5 text-light-gold group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-serif text-sm font-bold text-[#111] block">
                        TOSTEM Architectural Systems Brochure (PDF)
                      </span>
                      <span className="font-sans text-[0.62rem] text-neutral-400 uppercase tracking-widest">
                        Official Catalog • 12.4 MB
                      </span>
                    </div>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </DownloadButton>

                <DownloadButton
                  docName="TOSTEM Technical Catalogues"
                  className="flex items-center justify-between p-5 bg-white border border-light-gold/15 rounded-xl hover:border-light-gold transition-colors text-left group w-full cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <FiDownload className="w-5 h-5 text-light-gold group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-serif text-sm font-bold text-[#111] block">
                        TOSTEM Technical Catalogues (PDF)
                      </span>
                      <span className="font-sans text-[0.62rem] text-neutral-400 uppercase tracking-widest">
                        Full Specifications • 24.8 MB
                      </span>
                    </div>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </DownloadButton>

                <DownloadButton
                  docName="TOSTEM Materials & Performance Certificates"
                  className="flex items-center justify-between p-5 bg-white border border-light-gold/15 rounded-xl hover:border-light-gold transition-colors text-left group w-full cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <FiDownload className="w-5 h-5 text-light-gold group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-serif text-sm font-bold text-[#111] block">
                        TOSTEM Materials & Performance Certificates (PDF)
                      </span>
                      <span className="font-sans text-[0.62rem] text-neutral-400 uppercase tracking-widest">
                        Certified Lab Testing • 8.1 MB
                      </span>
                    </div>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </DownloadButton>

              </div>
            </div>

            {/* Right: Technical Submittal Call-To-Action */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="bg-[#111] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-light-gold/25 h-full flex flex-col justify-between">
                
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
                  <span className="font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold font-bold uppercase tracking-[0.25em] block mb-4">
                    Design Desk Consultation
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                    Request a Technical System Submittal
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-8">
                    Ready to specify TOSTEM for your project? Submit your architectural drawings directly to our engineering desk in Jeddah or Riyadh for customized wind-load calculations, profile sizing, and configuration recommendations.
                  </p>
                </div>

                <div className="relative z-10">
                  <EnquiryButton
                    className="btn-prestige-enquire w-full sm:w-auto"
                  >
                    Initiate TOSTEM Technical Submittal →
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
