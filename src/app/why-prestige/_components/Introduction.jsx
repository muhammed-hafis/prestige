const Introduction = () => (
    <section className="py-20 lg:py-28 px-4 sm:px-8 bg-[var(--background)]">
        {/* Framed container */}
        <div className="relative max-w-5xl mx-auto py-14 px-8 sm:px-16 rounded-[2rem] bg-white border border-[#B8902A]/10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden reveal">
            {/* Elegant corner highlights */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#B8902A]/30 rounded-tl-[2rem]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#B8902A]/30 rounded-br-[2rem]" />
            
            {/* Warm background glow */}
            <div className="absolute inset-0 bg-[#FAF5E8]/10 pointer-events-none" />

            <h2 className="relative z-10 font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-12 leading-[1.2] text-center max-w-4xl mx-auto">
                A trusted supplier of{" "}
                <span className="text-light-gold font-normal">aluminium doors and windows</span> in Saudi Arabia.
            </h2>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
                <p className="font-sans text-sm sm:text-base text-[#4a4a4a] leading-[1.8] font-light">
                    Prestige Creations supplies certified aluminium systems from trusted global brands.
                    We focus on delivering the right product for each project, with clear advice and dependable service.
                </p>
                <p className="font-sans text-sm sm:text-base text-[#4a4a4a] leading-[1.8] font-light">
                    We serve developers, contractors, and consultants across Saudi Arabia, helping them get quality
                    systems on time and within the requirements of local building standards.
                </p>
            </div>
        </div>
    </section>
);

export default Introduction;
