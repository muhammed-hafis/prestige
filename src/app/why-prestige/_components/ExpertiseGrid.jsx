const EXPERTISE_ITEMS = [
    {
        title: "Architectural Aluminium",
        desc: "Thermal & non-thermal systems for high-performance developments.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
    },
    {
        title: "Interior Solutions",
        desc: "Premium hardware & interior glass solutions for modern spaces.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10" />
            </svg>
        ),
    },
    {
        title: "Custom Fabrication",
        desc: "Bespoke system integration and precision manufacturing.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
            </svg>
        ),
    },
    {
        title: "Project Execution",
        desc: "End-to-end coordination, installation, and handover management.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
];

const ExpertiseGrid = () => (
    <section className="py-16 lg:py-24">
        <div className="main-container px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left: expertise items */}
                <div className="reveal">
                    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-5">
                        Our Expertise
                    </p>
                    <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-10 leading-tight">
                        Specialized <br />
                        <em className="text-[#999]">Capability</em>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {EXPERTISE_ITEMS.map((item, i) => (
                            <div key={i} className="group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="text-[#8A939E] mb-4 group-hover:scale-110 transition-transform origin-left duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-sm sm:text-base uppercase tracking-[0.1em] text-[#111] mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-[#666] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: approach box */}
                <div className="reveal reveal-d1 lg:pt-20">
                    <div className="p-7 sm:p-10 border border-[#8A939E]/10 relative shadow-xl">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#8A939E]/5 rounded-bl-full" />
                        <h3 className="text-xl sm:text-2xl text-[#111] mb-6">
                            Approach & Commitment
                        </h3>
                        <p className="text-[1.05rem] text-[#555] leading-relaxed mb-5">
                            We work closely with consultants, contractors, and end clients to align design intent,
                            technical performance, and execution quality at every stage of the project.
                        </p>
                        <p className="text-[1.05rem] text-[#555] leading-relaxed">
                            Our commitment is to deliver compliant solutions, clear communication, dependable
                            timelines, and long-term value, ensuring every project reflects professionalism, precision,
                            and reliability across Saudi Arabia.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default ExpertiseGrid;
