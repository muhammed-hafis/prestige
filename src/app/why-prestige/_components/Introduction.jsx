import React from 'react';
import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

const Introduction = () => (
    <section className="bg-[var(--background)] py-16 lg:py-20 overflow-hidden relative">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{
                backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }}
        />

        <div className="main-container relative z-10">
            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Image Column */}
                <div className="lg:col-span-5" data-aos="fade-right">
                    <div className="relative group overflow-hidden bg-white">
                        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                            <img
                                src="/images/quality-check.avif"
                                alt="Prestige Creations Quality Check & Engineering"
                                className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-[1.03]"
                            />
                            {/* Subtle dark-to-transparent overlay at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                     
                    </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-center" data-aos="fade-left">
                    <span className="section-label text-light-gold mb-4 block">
                        THE ARCHITECTURAL PROBLEM VS. THE PRESTIGE SOLUTION
                    </span>
                    <h2 className="section-heading text-[#111] mb-6 leading-tight">
                        Why Premium Projects Cannot Rely on <span className="text-light-gold font-normal block sm:inline">Standard Fabricators?</span>
                    </h2>
                    <div className="w-12 h-0.5 bg-light-gold mb-8" />

                    <div className="space-y-6">
                        {/* The Problem Card */}
                        <div className="relative overflow-hidden rounded-2xl border border-red-500/10 bg-white p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-red-500/20 group">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-500/[0.015] blur-xl" />
                            
                            <div className="flex gap-5 items-start">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/5 text-red-500 mt-0.5">
                                    <FiAlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="font-sans text-[0.62rem] uppercase tracking-wider text-red-500 font-bold block mb-1">
                                        The Commodity Approach
                                    </span>
                                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-2.5">
                                        The Architectural Problem
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#666] leading-relaxed font-light">
                                        Most fabricators treat aluminium and doors as a simple commodity. For elite luxury villas and high-rise developments in Saudi Arabia, that approach leads to structural deflection, visible gaps, whistling wind noises, and massive HVAC energy bills.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Solution Card */}
                        <div className="relative overflow-hidden rounded-2xl border border-light-gold/20 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(197,160,40,0.02)] transition-all duration-500 hover:border-light-gold/45 hover:shadow-[0_25px_60px_rgba(197,160,40,0.06)] group">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-light-gold/[0.03] blur-xl group-hover:bg-light-gold/[0.06] transition-colors duration-500" />
                            
                            <div className="flex gap-5 items-start">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-light-gold/10 text-light-gold group-hover:bg-light-gold group-hover:text-white transition-all duration-500 mt-0.5">
                                    <FiCheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="font-sans text-[0.62rem] uppercase tracking-wider text-light-gold font-bold block mb-1">
                                        Specialized Engineering Authority
                                    </span>
                                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-2.5">
                                        The Prestige Solution
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#444] leading-relaxed font-light">
                                        Prestige Creations operates as a specialized engineering authority. We bridge the gap between complex architectural concepts and real-world structural durability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Introduction;