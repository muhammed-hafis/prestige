const Hero = () => (
    <section className="relative overflow-hidden bg-[var(--background)] px-5 sm:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">

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
            <p className="section-label text-light-gold mb-4 sm:mb-5">
                Why Choose Us
            </p>

            {/* Heading */}
            <h1 className="section-heading text-[#111] mb-5 sm:mb-6 tracking-tight">
                Why{" "}
                <span className="text-light-gold font-medium">
                    Prestige
                </span>
            </h1>

            {/* Divider */}
            <div className="mx-auto mb-6 sm:mb-7 h-[2px] w-8 sm:w-10 bg-light-gold" />

            {/* Description */}
            <p className="section-desc max-w-2xl mx-auto text-[#555] px-1">
                We supply quality aluminium systems with honest advice,
                reliable service, and full support across Saudi Arabia.
            </p>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gold/20 to-transparent" />
    </section>
);

export default Hero;