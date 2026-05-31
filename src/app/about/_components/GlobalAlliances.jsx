import React from 'react';

const ALLIANCES = [
    {
        name: "TOSTEM (Japan)",
        label: "Exterior Systems",
        desc: "Factory-prefabricated aluminium window and sliding door systems recognized globally for extreme dimensional accuracy and maximum wind-load resistance. Perfect for contemporary architecture.",
        logo: "/partners/tostem-logo.avif",
    },
    {
        name: "ALAMIN (Regional)",
        label: "Thermal Optimization",
        desc: "Advanced, insulated thermal break aluminium profiles engineered specifically to block intense desert heat, minimize solar heat gain, and drastically lower HVAC energy costs.",
        logo: "/partners/al-amin.avif",
    },
    {
        name: "OZONE (International)",
        label: "Interior Luxury",
        desc: "Premium structural glass hardware, minimalist interior partitions, and high-performance glass fittings designed to create expansive, seamless, and modern interior spaces.",
        logo: "/partners/ozone-logo.avif",
    },
];

const AllianceCard = ({ alliance, index }) => (
    <div
        className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-[#B8902A]/10 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B8902A]/40 hover:shadow-[0_20px_40px_rgba(184,144,42,0.08)]"
        data-transform="translateY(0)"
        data-aos="fade-up"
        data-aos-delay={index * 120}
    >
        {/* Top Accent Line */}
        <div className="absolute left-0 right-0 top-0 h-[3px] origin-center scale-x-0 bg-[#B8902A] transition-transform duration-500 group-hover:scale-x-100" />

        {/* Logo */}
        <div className="mb-5 flex h-16 sm:h-20 w-full items-center justify-center">
            <img
                src={alliance.logo}
                alt={alliance.name}
                className="max-h-full max-w-[140px] sm:max-w-[170px] object-contain brightness-90 transition-all duration-500 "
            />
        </div>

        {/* Label */}
        <p className="mb-3 font-sans text-[0.62rem] sm:text-[0.7rem] font-black uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#B8902A]">
            {alliance.label}
        </p>

        {/* Description */}
        <p className="max-w-sm font-sans text-sm sm:text-[15px] lg:text-base leading-relaxed sm:leading-[1.9] text-[#555] font-light">
            {alliance.desc}
        </p>
    </div>
);

const GlobalAlliances = () => (
    <section className="relative overflow-hidden bg-[#E6BE5A] py-10 lg:py-14">

        {/* Background Texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#111_0.5px,transparent_0.5px)] [background-size:26px_26px]" />

        {/* Soft Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] sm:h-[400px] sm:w-[400px] rounded-full bg-white/20 blur-[100px]" />
        </div>

        <div className="main-container relative z-10 px-5 sm:px-8 lg:px-10">

            {/* Heading */}
            <div className="mx-auto mb-12 sm:mb-14 lg:mb-16 max-w-3xl text-center" data-aos="fade-up">

                <span className="mb-4 sm:mb-5 inline-block rounded-full bg-black/20 px-4 py-1.5 section-label text-white uppercase tracking-[0.25em] font-bold">
                    GLOBAL ALLIANCES
                </span>

                <h2 className="section-heading text-[#111] mb-4 sm:mb-6">
                    Certified World-Class Technology. <br className="hidden sm:block" />
                    <span className="text-white font-bold">
                        Regionally Engineered.
                    </span>
                </h2>

                <p className="mx-auto max-w-2xl section-desc text-[#111]/85">
                    We are authorized dealers of leading global brands, delivering
                    genuine systems backed by manufacturer standards and localized
                    technical support.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {ALLIANCES.map((alliance, idx) => (
                    <AllianceCard key={alliance.name} alliance={alliance} index={idx} />
                ))}
            </div>
        </div>
    </section>
);

export default GlobalAlliances;
