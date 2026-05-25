import React from "react";
import { FiGrid, FiColumns, FiTool, FiCalendar } from "react-icons/fi";

const CAPABILITIES = [
    {
        num: "01",
        title: "Aluminium Systems (TOSTEM & ALAMIN)",
        desc: "Supply of certified high-performance thermal and non-thermal aluminium profiles for luxury windows, doors, and structural curtain wall facades.",
        icon: <FiGrid className="w-7 h-7" />,
        badgeClass: "bg-[#E8F0FE] text-[#1A73E8]",
    },
    {
        num: "02",
        title: "Interior Solutions (OZONE)",
        desc: "Premium architectural hardware and minimalist interior glass partitions engineered to create expansive, seamless contemporary spaces.",
        icon: <FiColumns className="w-7 h-7" />,
        badgeClass: "bg-[#F3E8FF] text-[#9333EA]",
    },
    {
        num: "03",
        title: "Custom Fabrication",
        desc: "Tailored architectural configurations engineered and factory-assembled to match complex custom geometries and bespoke project blueprints perfectly.",
        icon: <FiTool className="w-7 h-7" />,
        badgeClass: "bg-[#FCE8E6] text-[#D93025]",
    },
    {
        num: "04",
        title: "End-to-End Project Coordination",
        desc: "Complete management of the supply lifecycle, handling everything from shop drawing technical reviews and strict scheduling to certified on-site installation support.",
        icon: <FiCalendar className="w-7 h-7" />,
        badgeClass: "bg-[#E6F4EA] text-[#137333]",
    },
];

const ExpertiseGrid = () => {
    return (
        <section className="relative overflow-hidden bg-[#FAF6EC] py-10 lg:py-14 text-[#111]">
            
            {/* Background design accents */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: "linear-gradient(#111 1.5px, transparent 1.5px), linear-gradient(90deg, #111 1.5px, transparent 1.5px)",
                    backgroundSize: "50px 50px"
                }}
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-light-gold/5 blur-[160px]" />

            <div className="main-container relative z-10">
                
                {/* Section Header */}
                <div className="mx-auto mb-16 text-center" data-aos="fade-up">
                    <span className="section-label text-light-gold mb-4 sm:mb-5 block tracking-[0.25em]">
                        TECHNICAL CAPABILITIES
                    </span>
                    <h2 className="section-heading text-[#111] mb-5">
                        What We Do
                    </h2>
                    <div className="mx-auto h-[2px] w-12 bg-light-gold" />
                </div>

                {/* 4 Cards in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
                    {CAPABILITIES.map((cap, i) => (
                        <div 
                            key={i}
                            className="bg-white border border-neutral-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-300 group"
                        >
                            {/* Centered Circle Icon Badge */}
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${cap.badgeClass}`}>
                                {cap.icon}
                            </div>

                            {/* Centered copy */}
                            <div className="mt-6">
                                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111] mb-3 group-hover:text-light-gold transition-colors duration-300">
                                    {cap.title}
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                                    {cap.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExpertiseGrid;