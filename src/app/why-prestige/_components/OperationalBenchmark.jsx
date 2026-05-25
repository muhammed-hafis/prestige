import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const BENCHMARKS = [
    {
        parameter: "Engineering Base",
        standard: "Simple cutting and joining",
        prestige: "Advanced wind-load, acoustic, and thermal structural calculations.",
    },
    {
        parameter: "Material Integrity",
        standard: "Uncertified or mixed profiles",
        prestige: "Fully traceable, factory-warranted systems (TOSTEM, AL AMEEN, OZONE).",
    },
    {
        parameter: "Workforce Standard",
        standard: "General sub-contracted laborers",
        prestige: "Highly disciplined master technician force trained to strict tolerances.",
    },
    {
        parameter: "Regulatory Risk",
        standard: "Potential Saudi Building Code (SBC) failures",
        prestige: "100% SBC compliant with full ZATCA and commercial transparency.",
    },
];

const OperationalBenchmark = () => {
    return (
        <section className="relative overflow-hidden bg-[var(--background)] py-10 lg:py-14">
            {/* Background Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.01]"
                style={{
                    backgroundImage: "linear-gradient(#111 1.5px, transparent 1.5px), linear-gradient(90deg, #111 1.5px, transparent 1.5px)",
                    backgroundSize: "50px 50px"
                }}
            />
            
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-light-gold/5 blur-[160px]" />

            <div className="main-container relative z-10">
                
                {/* Header */}
                <div className="mx-auto mb-12 sm:mb-16 text-center" data-aos="fade-up">
                    <span className="section-label text-light-gold mb-4 sm:mb-5 block">
                        THE OPERATIONAL BENCHMARK
                    </span>
                    <h2 className="section-heading text-[#111] mb-5">
                        How We Protect Your Investment Compared to Standard Fabricators.
                    </h2>
                    <div className="mx-auto h-[2px] w-12 bg-light-gold" />
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-light-gold/15 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.02)]" data-aos="fade-up">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-light-gold/15 bg-[#111] text-white">
                                <th className="p-6 font-serif text-sm lg:text-base font-semibold tracking-wider w-[25%]">
                                    Operational Parameter
                                </th>
                                <th className="p-6 font-serif text-sm lg:text-base font-semibold tracking-wider text-neutral-400 w-[35%]">
                                    Standard Fabricators
                                </th>
                                <th className="p-6 font-serif text-sm lg:text-base font-semibold tracking-wider text-light-gold w-[40%]">
                                    Prestige Creations
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {BENCHMARKS.map((row, i) => (
                                <tr 
                                    key={i} 
                                    className={`border-b border-light-gold/10 transition-colors duration-200 hover:bg-[#FAF6EC]/30 ${
                                        i === BENCHMARKS.length - 1 ? "border-b-0" : ""
                                    }`}
                                >
                                    {/* Parameter Title */}
                                    <td className="p-6 font-sans text-xs lg:text-sm font-bold text-[#111] tracking-wide uppercase">
                                        {row.parameter}
                                    </td>
                                    
                                    {/* Standard Fabricator Cell */}
                                    <td className="p-6 font-sans text-xs lg:text-sm text-neutral-500 font-light">
                                        <div className="flex items-start gap-2.5">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/5 text-red-500 mt-0.5">
                                                <FiX className="w-3.5 h-3.5" />
                                            </span>
                                            <span>{row.standard}</span>
                                        </div>
                                    </td>
                                    
                                    {/* Prestige Creations Cell */}
                                    <td className="p-6 font-sans text-xs lg:text-sm text-[#111] font-normal bg-light-gold/[0.02]">
                                        <div className="flex items-start gap-2.5">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-light-gold/10 text-light-gold mt-0.5">
                                                <FiCheck className="w-3.5 h-3.5" />
                                            </span>
                                            <span className="font-medium text-[#222]">{row.prestige}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card-Based Stack View */}
                <div className="md:hidden flex flex-col gap-6 max-w-md mx-auto">
                    {BENCHMARKS.map((row, i) => (
                        <div 
                            key={i} 
                            className="rounded-2xl border border-light-gold/15 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.015)]"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                        >
                            {/* Title */}
                            <h3 className="font-serif text-sm font-bold text-[#111] border-b border-light-gold/10 pb-3 mb-4 tracking-wider uppercase">
                                {row.parameter}
                            </h3>

                            {/* Standard Fabricators comparison block */}
                            <div className="mb-4">
                                <span className="font-sans text-[0.62rem] uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                                    Standard Fabricators
                                </span>
                                <div className="flex items-start gap-2 text-neutral-500 text-xs">
                                    <FiX className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>{row.standard}</span>
                                </div>
                            </div>

                            {/* Prestige Creations comparison block */}
                            <div className="bg-light-gold/[0.03] rounded-xl p-3 border border-light-gold/5">
                                <span className="font-sans text-[0.62rem] uppercase tracking-wider text-light-gold font-bold block mb-1">
                                    Prestige Creations
                                </span>
                                <div className="flex items-start gap-2 text-[#111] text-xs font-medium">
                                    <FiCheck className="w-4 h-4 text-light-gold shrink-0 mt-0.5" />
                                    <span>{row.prestige}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OperationalBenchmark;
