import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

const Introduction = () => (
    <section className="bg-[var(--background)] py-10 lg:py-14 overflow-hidden relative">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{
                backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }}
        />

        <div className="main-container relative z-10">
            {/* Header */}
            <div className="mx-auto mb-12 sm:mb-16 text-center" data-aos="fade-up">
                <span className="section-label text-light-gold mb-4 sm:mb-5 block">
                    THE ARCHITECTURAL PROBLEM VS. THE PRESTIGE SOLUTION
                </span>
                <h2 className="section-heading text-[#111] mb-5">
                    Why Premium Projects Cannot Rely on <br className="hidden md:inline" />
                    <span className="text-light-gold font-normal">Standard Fabricators?</span>
                </h2>
                <div className="mx-auto h-[2px] w-12 bg-light-gold mb-6" />
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* The Problem Card */}
                <div 
                    className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-red-500/10 bg-white p-8 sm:p-10 lg:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.015)] transition-all duration-300 hover:border-red-500/20 group"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    {/* Background Soft Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-500/[0.02] blur-xl" />
                    
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/5 text-red-500">
                            <FiAlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="font-sans text-[0.62rem] uppercase tracking-wider text-red-500 font-bold block">
                                The Commodity Approach
                            </span>
                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111]">
                                The Architectural Problem
                            </h3>
                        </div>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light">
                        Most fabricators treat aluminium and doors as a simple commodity. For elite luxury villas and high-rise developments in Saudi Arabia, that approach leads to structural deflection, visible gaps, whistling wind noises, and massive HVAC energy bills.
                    </p>
                </div>

                {/* The Solution Card */}
                <div 
                    className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-light-gold/20 bg-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(197,160,40,0.04)] transition-all duration-500 hover:border-light-gold/40 hover:shadow-[0_25px_60px_rgba(197,160,40,0.08)] group"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    {/* Background Gold Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-light-gold/[0.04] blur-xl group-hover:bg-light-gold/[0.08] transition-colors duration-500" />
                    
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-gold/10 text-light-gold group-hover:bg-light-gold group-hover:text-white transition-all duration-500">
                            <FiCheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="font-sans text-[0.62rem] uppercase tracking-wider text-light-gold font-bold block">
                                Specialized Engineering Authority
                            </span>
                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111]">
                                The Prestige Solution
                            </h3>
                        </div>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#333] leading-relaxed font-light">
                        Prestige Creations operates as a specialized engineering authority. We bridge the gap between complex architectural concepts and real-world structural durability.
                    </p>
                </div>

            </div>
        </div>
    </section>
);

export default Introduction;