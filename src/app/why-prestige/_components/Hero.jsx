const Hero = () => (
    <section className="relative pt-40 pb-24 px-4 sm:px-8 overflow-hidden bg-[var(--background)]">
        {/* Subtle radial dots backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "28px 28px" }} />

        {/* Light ambient gold radial glow */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#B8902A]/5 blur-[80px] pointer-events-none" />

        <div className="main-container text-center relative z-10 reveal">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-5">
                Why Choose Us
            </p>
            <h1 className="font-serif font-medium text-4xl sm:text-5xl md:text-6.5xl text-[#111] mb-6 tracking-tight">
                Why <span className="text-light-gold font-medium">Prestige</span>
            </h1>
            <div className="w-10 h-0.5 bg-light-gold mx-auto mb-7" />
            <p className="font-sans text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto leading-relaxed">
                We supply quality aluminium systems with honest advice,
                reliable service, and full support across Saudi Arabia.
            </p>
        </div>

        {/* Bottom decorative border line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gold/20 to-transparent" />
    </section>
);

export default Hero;
