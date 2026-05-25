import React from 'react';
import { FiAward, FiShield } from 'react-icons/fi';

const COMMITMENT_ITEMS = [
    {
        title: "Professionalism",
        desc: "Our commitment is to deliver transparent communication, dependable timelines, and meticulous execution. Every project reflects our core values of operational precision across Saudi Arabia.",
        icon: <FiAward className="w-6 h-6" />,
    },
    {
        title: "Quality Assurance",
        desc: "We provide genuine, certified systems fully backed by global manufacturer standards. Our approach ensures absolute technical clarity and structural safety at every stage of the build.",
        icon: <FiShield className="w-6 h-6" />,
    },
];

const OurCommitment = () => (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E6BE5A] via-[#ECC970] to-[#D9B048] py-10 lg:py-14">

        {/* Diagonal Wave Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#fff_0.5px,transparent_0.5px)] opacity-[0.06] [background-size:26px_26px] pointer-events-none" />

        <div className="main-container relative z-10 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                {/* Left Text */}
                <div className="w-full lg:w-5/12 text-white" data-aos="fade-right">
                    <span className="mb-4 sm:mb-5 inline-block rounded-full bg-white/20 px-4 py-1.5 section-label text-white uppercase tracking-[0.25em] font-bold">
                        OUR COMMITMENT
                    </span>

                    <h2 className="section-heading text-[#111111] mb-4 sm:mb-6">
                        Ensuring Long-Term Value <br className="hidden sm:block" />
                        <span className="text-white font-bold">
                            & Dependable Execution.
                        </span>
                    </h2>
                </div>

                {/* Right Cards */}
                <div className="w-full lg:w-7/12 flex flex-col sm:flex-row gap-6 sm:gap-8">
                    {COMMITMENT_ITEMS.map((item, idx) => (
                        <div
                            key={item.title}
                            className="group flex-1 relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg border border-transparent transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                            data-aos="fade-left"
                            data-aos-delay={idx * 150}
                        >
                            {/* Hover gold Accent */}
                            <div className="absolute left-0 right-0 top-0 h-[3px] scale-x-0 bg-[#B8902A] transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />

                            {/* Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF5E8] text-[#B8902A] transition-all duration-700 ease-out group-hover:bg-[#B8902A] group-hover:text-white group-hover:rotate-[360deg]">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mb-3 font-serif text-lg sm:text-xl font-bold uppercase tracking-wider text-[#111] group-hover:text-[#B8902A] transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* Body */}
                            <p className="font-sans text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#555] font-light">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
);

export default OurCommitment;
