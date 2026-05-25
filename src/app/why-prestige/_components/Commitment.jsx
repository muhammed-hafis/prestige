import React from "react";
import { FiArrowRight, FiShield } from "react-icons/fi";

const Commitment = () => {
    return (
        <section className="relative overflow-hidden bg-[var(--background)] py-10 lg:py-14">
            
            {/* Subtle gold decorative orb glow */}
            <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-light-gold/5 blur-[120px]" />
            <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-light-gold/5 blur-[120px]" />

            <div className="main-container relative z-10">
                
                {/* Commitment block (Light panel) */}
                <div 
                    className="relative mx-auto overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-light-gold/15 bg-white px-6 sm:px-12 lg:px-20 py-12 sm:py-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] mb-14 lg:mb-20"
                    data-aos="fade-up"
                >
                    {/* Corner Accents */}
                    <div className="absolute left-0 top-0 h-8 w-8 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] border-l border-t border-light-gold/30" />
                    <div className="absolute bottom-0 right-0 h-8 w-8 rounded-br-[1.5rem] sm:rounded-br-[2rem] border-b border-r border-light-gold/30" />

                    <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
                        {/* Icon Block */}
                        <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-light-gold/10 text-light-gold shadow-sm">
                            <FiShield className="w-8 h-8" />
                        </div>
                        
                        {/* Text Block */}
                        <div className="flex-1 text-center lg:text-left">
                            <span className="section-label text-light-gold mb-2 block">
                                OUR UNCOMPROMISING COMMITMENT
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111] mb-5 tracking-tight">
                                We Hold the Risk, So You Don't Have To.
                            </h2>
                            <p className="font-sans text-sm sm:text-base text-[#4a4a4a] leading-[1.85] font-light">
                                When you choose Prestige Creations, you are buying peace of mind. Backed by over a decade of regional engineering heritage from our parent group, we take total accountability for your building's envelope. We deliver on-time, on-budget, and to a flawless finish that enhances the luxury profile of your real estate asset.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Block (Dark/Gold high-contrast panel) */}
                <div 
                    className="relative mx-auto overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-light-gold/20 bg-[#111] p-8 sm:p-12 lg:p-16 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {/* Grid Pattern */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, var(--light-gold) 1.5px, transparent 1.5px), linear-gradient(to bottom, var(--light-gold) 1.5px, transparent 1.5px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    {/* Ambient Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-light-gold/15 blur-[80px]" />

                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        
                        <span className="section-label text-light-gold mb-3 block">
                            FEASIBILITY REVIEW
                        </span>

                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                            Eliminate Your Project Risks
                        </h2>

                        <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8 max-w-2xl">
                            Don't let poor fabrication compromise your design. Bring your architectural drawings to our technical desk for a complete structural and thermal feasibility review.
                        </p>

                        <a
                            href="/contact"
                            className="btn-prestige-enquire"
                        >
                            <span>Schedule a Technical System Review</span>
                            <FiArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Commitment;
