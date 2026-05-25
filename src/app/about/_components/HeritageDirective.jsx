import React from "react";
import { FiTarget, FiEye, FiCompass, FiAward, FiShield } from "react-icons/fi";

const HeritageDirective = () => (
    <div className="bg-[var(--background)] overflow-hidden">
        {/* SECTION 1: OUR HERITAGE */}
        <section className="py-10 lg:py-14">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 px-5 sm:px-8 md:px-12 lg:pl-[7vw] xl:pl-[10vw] lg:pr-10 order-2 lg:order-1" data-aos="fade-right">

                    <p className="mb-4 sm:mb-5 section-label text-light-gold uppercase tracking-[0.25em] font-bold">
                        OUR HERITAGE
                    </p>

                    <h2 className="section-heading text-[#111] mb-4 sm:mb-6">
                        A Decade of <br className="hidden sm:block" />
                        <span className="text-light-gold font-bold">
                            Engineering Mastery
                        </span>
                    </h2>

                    <div className="space-y-5">
                        <p className="font-sans text-sm sm:text-[15px] lg:text-base text-[#4a4a4a] leading-[1.9] font-light">
                            Prestige Creations Operates as the strategic division of an established industrial group with over 10 years of proven manufacturing excellence, bringing deep technical heritage to the Saudi market. Our group has successfully executed high-spec systems for hundreds of landmark developments—ranging from private luxury villas to expansive commercial and healthcare infrastructure.
                        </p>

                        <p className="font-sans text-sm sm:text-[15px] lg:text-base text-[#6a6a6a] leading-[1.9] font-light">
                            By merging this 10-year track record with localized market expertise, we provide Saudi developers, architects, and main contractors with absolute precision, structural safety, and seamless project execution.
                        </p>
                    </div>

                    {/* Bottom Label */}
                    <div className="mt-7 sm:mt-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                        <div className="w-8 sm:w-10 h-px bg-light-gold shrink-0" />
                        <span className="font-sans text-[0.62rem] sm:text-[0.72rem] uppercase tracking-[0.22em] sm:tracking-[0.3em] font-black text-[#111] leading-relaxed">
                            Deep Technical Heritage in KSA
                        </span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
                    <div className="relative group overflow-hidden h-[280px] sm:h-[420px] md:h-[520px] lg:h-[650px]">
                        <img
                            src="/images/interior_hero_main_1778838710819.png"
                            alt="Architecture"
                            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                        />
                        {/* Soft Overlay */}
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                        {/* Elegant Corners */}
                        <div className="absolute top-5 left-5 sm:top-6 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-white/30 z-10 pointer-events-none" />
                        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-white/30 z-10 pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>

        {/* SECTION 2: OUR DIRECTIVE (Vision, Mission & Core Principles) */}
        <section className="py-10 lg:py-14 bg-[#FAF6EC]/25 relative">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] [background-image:radial-gradient(var(--light-gold)_0.8px,transparent_0.8px)] [background-size:24px_24px]" />
            
            <div className="main-container px-5 sm:px-8 lg:px-10 relative z-10 max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16" data-aos="fade-up">
                    <p className="mb-4 sm:mb-5 section-label text-light-gold uppercase tracking-[0.25em] font-bold">
                        OUR DIRECTIVE
                    </p>
                    <h2 className="section-heading text-[#111] mb-4 sm:mb-6">
                        Vision, Mission & <br className="hidden sm:block" />
                        <span className="text-light-gold font-bold">Core Principles.</span>
                    </h2>
                    <div className="w-10 h-0.5 bg-light-gold mx-auto mt-6"></div>
                </div>

                {/* Vision and Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20 sm:mb-24 max-w-5xl mx-auto">
                    
                    {/* Mission Card (01) */}
                    <div className="group relative pt-4 pb-8 px-3" data-aos="fade-right">
                        {/* Colored border/background wrapper */}
                        <div className="absolute inset-x-0 bottom-0 top-10 bg-[#B8902A] rounded-[1.8rem] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-md" />
                        
                        {/* Flared Bottom Tab */}
                        <div 
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#B8902A] text-white text-xs font-sans font-bold tracking-[0.2em] px-6 py-1.5 shadow-md flex items-center justify-center min-w-[70px] group-hover:-translate-y-1 transition-transform duration-500" 
                            style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
                        >
                            01
                        </div>

                        {/* Inner White Card */}
                        <div className="relative z-10 bg-white rounded-[1.5rem] p-8 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-[#B8902A]/10 text-center flex flex-col items-center min-h-[360px] md:min-h-[380px] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_rgba(184,144,42,0.1)]">
                            {/* Target Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#B8902A] text-[#B8902A] bg-[#FAF5E8] transition-all duration-700 ease-out group-hover:rotate-[360deg] group-hover:bg-[#B8902A] group-hover:text-white shadow-inner">
                                <FiTarget className="w-8 h-8" />
                            </div>
                            
                            <h3 className="font-serif text-lg sm:text-xl text-[#111] font-bold mb-4 uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-[#B8902A]">
                                The Mission
                            </h3>
                            
                            <p className="font-sans text-sm sm:text-[15px] text-[#555] leading-[1.8] font-light max-w-sm">
                                To translate ambitious architectural concepts into structurally flawless, climate-optimized realities through internationally certified, factory-prefabricated systems and a strict, compliance-driven framework.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card (02) */}
                    <div className="group relative pt-4 pb-8 px-3" data-aos="fade-left">
                        {/* Colored border/background wrapper (Blue) */}
                        <div className="absolute inset-x-0 bottom-0 top-10 bg-[#2E5E8A] rounded-[1.8rem] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-md" />
                        
                        {/* Flared Bottom Tab */}
                        <div 
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#2E5E8A] text-white text-xs font-sans font-bold tracking-[0.2em] px-6 py-1.5 shadow-md flex items-center justify-center min-w-[70px] group-hover:-translate-y-1 transition-transform duration-500" 
                            style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
                        >
                            02
                        </div>

                        {/* Inner White Card */}
                        <div className="relative z-10 bg-white rounded-[1.5rem] p-8 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-[#2E5E8A]/10 text-center flex flex-col items-center min-h-[360px] md:min-h-[380px] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_rgba(46,94,138,0.15)]">
                            {/* Lightbulb Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#2E5E8A] text-[#2E5E8A] bg-blue-50/50 transition-all duration-700 ease-out group-hover:rotate-[360deg] group-hover:bg-[#2E5E8A] group-hover:text-white shadow-inner">
                                <FiEye className="w-8 h-8" />
                            </div>
                            
                            <h3 className="font-serif text-lg sm:text-xl text-[#111] font-bold mb-4 uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-[#2E5E8A]">
                                The Vision
                            </h3>
                            
                            <p className="font-sans text-sm sm:text-[15px] text-[#555] leading-[1.8] font-light max-w-sm">
                                To be the premier technical authority and trusted engineering partner for high-performance architectural envelopes in Saudi Arabia—setting the national benchmark for luxury design, structural precision, and climate-adaptive architecture.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* SECTION 3: CORE PRINCIPLES */}
        <section className="py-10 lg:py-14 bg-white relative overflow-hidden">
            <div className="main-container px-5 sm:px-8 lg:px-10 relative z-10 max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24" data-aos="fade-up">
                    <p className="mb-4 sm:mb-5 section-label text-light-gold uppercase tracking-[0.25em] font-bold">
                        Foundational Values
                    </p>
                    <h2 className="section-heading text-[#111] mb-4 sm:mb-6">
                        Core <span className="text-light-gold font-bold">Principles</span>
                    </h2>
                    <div className="w-10 h-0.5 bg-light-gold mx-auto mt-6"></div>
                </div>

                {/* Grid Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-12 md:gap-8 relative z-10">
                        
                        {/* Card 1: Engineering Precision */}
                        <div className="group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="0">
                            {/* Circle Icon */}
                            <div className="w-24 h-24 rounded-full border border-[#B8902A]/20 bg-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.03)] group-hover:shadow-[0_15px_30px_rgba(184,144,42,0.15)] transition-all duration-500 group-hover:scale-105">
                                <div className="w-18 h-18 rounded-full border border-dashed border-[#B8902A]/15 flex items-center justify-center bg-[#FAF5E8]/40 text-[#B8902A]">
                                    <FiCompass className="w-8 h-8" />
                                </div>
                            </div>
                            {/* Text Content */}
                            <div className="mt-6 max-w-xs">
                                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] uppercase tracking-wider mb-3 transition-colors duration-300 group-hover:text-[#B8902A]">
                                    Engineering Precision
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-[#666] leading-[1.7] font-light">
                                    Every profile is calculated to exact wind-load and structural tolerances.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Architectural Synergy */}
                        <div className="group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
                            {/* Circle Icon */}
                            <div className="w-24 h-24 rounded-full border border-[#2E5E8A]/20 bg-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.03)] group-hover:shadow-[0_15px_30px_rgba(46,94,138,0.15)] transition-all duration-500 group-hover:scale-105">
                                <div className="w-18 h-18 rounded-full border border-dashed border-[#2E5E8A]/15 flex items-center justify-center bg-blue-50/30 text-[#2E5E8A]">
                                    <FiAward className="w-8 h-8" />
                                </div>
                            </div>
                            {/* Text Content */}
                            <div className="mt-6 max-w-xs">
                                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] uppercase tracking-wider mb-3 transition-colors duration-300 group-hover:text-[#2E5E8A]">
                                    Architectural Synergy
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-[#666] leading-[1.7] font-light">
                                    Acting as a technical extension of the architect's office to protect design intent.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: National Compliance */}
                        <div className="group flex flex-col items-center text-center col-span-2 md:col-span-1" data-aos="fade-up" data-aos-delay="200">
                            {/* Circle Icon */}
                            <div className="w-24 h-24 rounded-full border border-[#B8902A]/20 bg-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.03)] group-hover:shadow-[0_15px_30px_rgba(184,144,42,0.15)] transition-all duration-500 group-hover:scale-105">
                                <div className="w-18 h-18 rounded-full border border-dashed border-[#B8902A]/15 flex items-center justify-center bg-[#FAF5E8]/40 text-[#B8902A]">
                                    <FiShield className="w-8 h-8" />
                                </div>
                            </div>
                            {/* Text Content */}
                            <div className="mt-6 max-w-xs">
                                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] uppercase tracking-wider mb-3 transition-colors duration-300 group-hover:text-[#B8902A]">
                                    National Compliance
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-[#666] leading-[1.7] font-light">
                                    Complete alignment with the Saudi Building Code (SBC) and regulatory mandates.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default HeritageDirective;
