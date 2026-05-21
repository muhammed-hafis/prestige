const Introduction = () => (
    <section className="bg-[var(--background)] px-5 sm:px-8 py-16 lg:py-24 overflow-hidden">

        {/* Main Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#B8902A]/10 bg-white px-5 sm:px-10 lg:px-16 py-10 sm:py-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)]" data-aos="fade-up">

            {/* Corner Accents */}
            <div className="absolute left-0 top-0 h-6 w-6 sm:h-8 sm:w-8 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] border-l border-t border-[#B8902A]/30" />

            <div className="absolute bottom-0 right-0 h-6 w-6 sm:h-8 sm:w-8 rounded-br-[1.5rem] sm:rounded-br-[2rem] border-b border-r border-[#B8902A]/30" />

            {/* Soft Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[#FAF5E8]/20" />

            {/* Heading */}
            <h2 className="section-heading relative z-10 mx-auto mb-8 sm:mb-10 lg:mb-12 max-w-4xl text-center text-[#111]" data-aos="fade-up" data-aos-delay="100">
                A trusted supplier of{" "}
                <span className="font-normal text-light-gold">
                    aluminium doors and windows
                </span>{" "}
                in Saudi Arabia.
            </h2>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 text-left" data-aos="fade-up" data-aos-delay="200">

                <p className="section-desc flex-1 text-[#4a4a4a]">
                    Prestige Creations supplies certified aluminium systems from trusted
                    global brands. We focus on delivering the right product for each
                    project, with clear advice and dependable service.
                </p>

                <p className="section-desc flex-1 text-[#4a4a4a]">
                    We serve developers, contractors, and consultants across Saudi Arabia,
                    helping them get quality systems on time and within the requirements
                    of local building standards.
                </p>
            </div>
        </div>
    </section>
);

export default Introduction;