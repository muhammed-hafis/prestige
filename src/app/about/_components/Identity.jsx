const Identity = () => (
    <section className="py-16 lg:py-24 px-4 sm:px-8">
        <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center">

                {/* Text */}
                <div className="reveal order-2 lg:order-1">
                    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-5">
                        Who We Are
                    </p>
                    <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-6 leading-tight">
                        Specialized Architectural <br />
                        <em className="text-[#999]">Solutions for KSA</em>
                    </h2>
                    <div className="space-y-4">
                        <p className="text-[1.05rem] text-[#555] leading-relaxed">
                            Prestige Creations is a specialized solutions company delivering architectural aluminium
                            systems, interior solutions, and project execution services for commercial, residential,
                            and industrial developments in Saudi Arabia.
                        </p>
                        <p className="text-[1.05rem] text-[#777] leading-relaxed">
                            We focus on system-based solutions that combine international quality standards with
                            strong local market understanding. Our approach integrates technical clarity, reliable
                            execution, and compliance-driven delivery.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="w-10 h-px bg-[#8A939E]" />
                        <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[#111]">
                            Compliance-Driven Delivery Since 2026
                        </span>
                    </div>
                </div>

                {/* Image */}
                <div className="relative order-1 lg:order-2 group reveal reveal-d1">
                    <div className="relative aspect-square overflow-hidden shadow-2xl z-10">
                        <img
                            src="/images/interior_hero_main_1778838710819.png"
                            alt="Architecture"
                            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                        />
                    </div>
                    
                    {/* Offset gold border */}
                    <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-[#8A939E]/20 pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"></div>
                    
                    {/* Decorative L-shaped corners */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-[#8A939E]/40"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-[#8A939E]/40"></div>
                </div>

            </div>
        </div>
    </section>
);

export default Identity;