const Hero = () => (
    <section className="relative overflow-hidden bg-[var(--background)] px-5 sm:px-8 pt-28 md:pt-44 lg:pt-36 pb-16 lg:pb-20">

        {/* Subtle radial dots backdrop */}
        <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage:
                    "radial-gradient(#B8902A 0.5px,transparent 0.5px)",
                backgroundSize: "28px 28px",
            }}
        />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#B8902A]/5 blur-[80px]" />

        <div className="main-container relative z-10 text-center">

            {/* Label */}
            <p className="section-label text-light-gold mb-4 sm:mb-5" data-aos="fade-down">
                Why Prestige
            </p>

            {/* Heading */}
            <h1 className="section-heading text-[#111] mb-3 sm:mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="100">
                WHY PRESTIGE
            </h1>

            {/* Subheading */}
            <p className="font-serif text-lg sm:text-xl lg:text-2xl text-light-gold font-medium mb-6" data-aos="fade-up" data-aos-delay="150">
                The Choice Between a Product and an Engineered Solution
            </p>

            {/* Divider */}
            <div className="mx-auto mb-6 sm:mb-7 h-[2px] w-8 sm:w-10 bg-light-gold" data-aos="zoom-in" data-aos-delay="200" />

            {/* Description */}
            <p className="section-desc text-[#4a4a4a] px-1 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                We don’t just sell aluminium and glass. We eliminate the structural, thermal, and compliance risks that compromise luxury developments.
            </p>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gold/20 to-transparent" />
    </section>
);

export default Hero;