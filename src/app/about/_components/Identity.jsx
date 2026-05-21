const Identity = () => (
    <section className="bg-[var(--background)] overflow-hidden py-14 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 px-5 sm:px-8 md:px-12 lg:pl-[7vw] xl:pl-[10vw] lg:pr-10 order-2 lg:order-1" data-aos="fade-right">

                <p className="mb-4 sm:mb-5 section-label text-light-gold">
                    Who We Are
                </p>

                <h2 className="mb-5 sm:mb-6 section-heading text-[#111]">
                    Specialized Architectural <br className="hidden sm:block" />
                    <span className="text-[#999] font-normal">
                        Solutions for KSA
                    </span>
                </h2>

                <div className="space-y-4">
                    <p className="font-sans text-sm sm:text-[15px] lg:text-base text-[#4a4a4a] leading-[1.9] font-light">
                        Prestige Creations is a specialized solutions company delivering
                        architectural aluminium systems, interior solutions, and project
                        execution services for commercial, residential, and industrial
                        developments in Saudi Arabia.
                    </p>

                    <p className="font-sans text-sm sm:text-[15px] lg:text-base text-[#6a6a6a] leading-[1.9] font-light">
                        We focus on system-based solutions that combine international
                        quality standards with strong local market understanding. Our
                        approach integrates technical clarity, reliable execution, and
                        compliance-driven delivery.
                    </p>
                </div>

                {/* Bottom Label */}
                <div className="mt-7 sm:mt-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                    <div className="w-8 sm:w-10 h-px bg-light-gold shrink-0" />

                    <span className="font-sans text-[0.62rem] sm:text-[0.72rem] uppercase tracking-[0.22em] sm:tracking-[0.3em] font-black text-[#111] leading-relaxed">
                        Compliance-Driven Delivery Since 2026
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
);

export default Identity;