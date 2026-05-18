const AboutHero = () => (
    <section
        className="relative pt-36 pb-20 px-4 sm:px-8 overflow-hidden"
    >
        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:radial-gradient(#8A939E_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

        <div className="main-container text-center relative z-10">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-5">
                The Company
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#111] mb-6 tracking-tight">
                About Prestige
            </h1>
            <div className="w-10 h-0.5 bg-[#8A939E] mx-auto mb-7" />
            <p className="text-base sm:text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
                Specialized solutions delivering architectural excellence and
                compliance-driven delivery across Saudi Arabia.
            </p>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A939E]/20 to-transparent" />
    </section>
);

export default AboutHero;
