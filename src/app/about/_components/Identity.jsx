const Identity = () => (
    <section className="py-16 lg:py-24 overflow-hidden bg-[var(--background)] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* Left: Text Content */}
        <div className="w-full lg:w-[48%] px-4 sm:px-8 lg:pl-[8vw] xl:pl-[12vw] lg:pr-8 reveal order-2 lg:order-1">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-5">
                Who We Are
            </p>
            <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-6 leading-[1.2]">
                Specialized Architectural <br />
                <span className="text-[#999] font-normal">Solutions for KSA</span>
            </h2>
            <div className="space-y-4">
                 <p className="font-sans text-sm sm:text-base text-[#4a4a4a] leading-[1.8] font-light">
                    Prestige Creations is a specialized solutions company delivering architectural aluminium
                    systems, interior solutions, and project execution services for commercial, residential,
                    and industrial developments in Saudi Arabia.
                </p>
                 <p className="font-sans text-sm sm:text-base text-[#6a6a6a] leading-[1.8] font-light">
                    We focus on system-based solutions that combine international quality standards with
                    strong local market understanding. Our approach integrates technical clarity, reliable
                    execution, and compliance-driven delivery.
                </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-px bg-light-gold" />
                <span className="font-sans text-[0.72rem] uppercase tracking-[0.3em] font-black text-[#111]">
                    Compliance-Driven Delivery Since 2026
                </span>
            </div>
        </div>

        {/* Right: Image stretching to fit the screen edge */}
        <div className="w-full lg:w-[50%] h-[400px] sm:h-[500px] lg:h-[600px] relative group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] order-1 lg:order-2 reveal reveal-d1">
            <img
                src="/images/interior_hero_main_1778838710819.png"
                alt="Architecture"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            
            {/* Elegant corner overlays */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-white/30 z-10 pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-white/30 z-10 pointer-events-none"></div>
        </div>
    </section>
);

export default Identity;