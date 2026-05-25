import React from 'react';
import { FiUsers, FiFileText } from 'react-icons/fi';

const INTEGRITY_ITEMS = [
    {
        title: "Developer Alignment",
        body: "Our corporate structure and material compliance frameworks are optimized for immediate vendor registration and smooth onboarding with the Kingdom’s major master developers and mega-projects.",
        icon: <FiUsers />,
    },
    {
        title: "Tax & Regulatory Readiness",
        body: "Maintaining perfect local commercial compliance, including structured ZATCA VAT filing and comprehensive localized industrial licensing, guaranteeing zero bureaucratic delays for project timelines.",
        icon: <FiFileText />,
    },
];

const IntegrityCard = ({ item }) => (
    <div className="group relative bg-[#FAF5E8]/60 px-8 py-12 rounded-2xl flex flex-col items-center text-center shadow-md border border-[#B8902A]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#B8902A]/25">
        
        {/* Overlapping top circle with white icon */}
        <div className="w-18 h-18 rounded-full bg-[#111] text-white flex items-center justify-center absolute -top-9 left-1/2 -translate-x-1/2 shadow-md transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[360deg] group-hover:bg-[#B8902A]">
            {React.cloneElement(item.icon, { className: "w-7 h-7" })}
        </div>

        {/* Content */}
        <div className="pt-8">
            {/* Title */}
            <h3 className="mb-4 font-serif text-lg sm:text-xl font-bold uppercase tracking-wider text-[#111] transition-colors duration-300 group-hover:text-[#B8902A]">
                {item.title}
            </h3>

            {/* Body */}
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#555] font-light max-w-sm">
                {item.body}
            </p>
        </div>
    </div>
);

const CommercialIntegrity = () => (
    <section className="relative overflow-hidden bg-white py-10 lg:py-14">

        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(var(--light-gold)_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

        <div className="main-container relative z-10 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24" data-aos="fade-up">
                <span className="mb-4 sm:mb-5 inline-block rounded-full bg-[#FAF5E8] px-4 py-1.5 section-label text-[#B8902A] uppercase tracking-[0.25em] font-bold">
                    COMMERCIAL INTEGRITY
                </span>

                <h2 className="section-heading text-[#111111] mb-4 sm:mb-6">
                    Seamless Integration into <br className="hidden sm:block" />
                    <span className="text-light-gold font-bold">Saudi Supply Chains.</span>
                </h2>
                <div className="w-10 h-0.5 bg-light-gold mx-auto mt-6"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 max-w-4xl mx-auto relative mt-12">
                {INTEGRITY_ITEMS.map((item, idx) => (
                    <div key={item.title} data-aos="fade-up" data-aos-delay={idx * 150}>
                        <IntegrityCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default CommercialIntegrity;
