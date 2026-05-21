const AboutHero = () => (
    <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 overflow-hidden">

        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]
                    [background-image:radial-gradient(var(--light-gold)_0.8px,transparent_0.8px)]
                    [background-size:24px_24px]" />

        <div className="main-container text-center relative z-10">

            <p className="mb-4 sm:mb-5 section-label text-light-gold" data-aos="fade-down">
                The Company
            </p>

            <h1 className="mb-5 sm:mb-6 section-heading text-[#111]" data-aos="fade-up" data-aos-delay="100">
                About{' '}
                <span className="text-light-gold font-semibold">Prestige</span>
            </h1>

            <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto mb-5 sm:mb-7" data-aos="zoom-in" data-aos-delay="200" />

            <p className="section-desc text-[#555] mx-auto max-w-xs sm:max-w-xl lg:max-w-2xl" data-aos="fade-up" data-aos-delay="300">
                Specialized solutions delivering architectural excellence and
                compliance-driven delivery across Saudi Arabia.
            </p>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px
                    bg-gradient-to-r from-transparent via-light-gold/20 to-transparent" />
    </section>
);

export default AboutHero;
