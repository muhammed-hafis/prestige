import React from 'react';

const EXPERTISE_ITEMS = [
    {
        step: "01",
        title: "Architectural Aluminium",
        desc: "Specialized thermal and non-thermal systems designed for high-performance developments.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Interior Solutions",
        desc: "Strategic integration of high-end architectural hardware and interior glass solutions.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4M12 16h.01" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Custom Fabrication",
        desc: "Bespoke system integration and precision fabrication to meet unique requirements.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
            </svg>
        ),
    },
    {
        step: "04",
        title: "Project Management",
        desc: "Professional coordination and installation services ensuring dependable timelines.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M9 2h6M12 11l2 2 4-4M8 11h.01M8 16h.01" />
            </svg>
        ),
    },
];

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center w-full my-4 reveal ${
            isEven ? "md:justify-start" : "md:justify-end"
        }`}>
            {/* Timeline node connection dot on the axis line */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#B8902A] flex items-center justify-center z-20 shadow-sm transition-all duration-500 group-hover:scale-110">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8902A] animate-pulse" />
            </div>

            {/* Content card wrapper */}
            <div className="w-[calc(100%-3rem)] md:w-[44%] ml-12 md:ml-0 group relative bg-white border border-[#B8902A]/10 hover:border-[#B8902A]/40 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(184,144,42,0.14)] p-5 sm:p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1">
                
                {/* Gold top hover highlight */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8902A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl origin-left" />
                
                {/* Card Header: Step and Icon */}
                <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-[#B8902A] bg-[#FAF5E8] px-3 py-1 rounded-full font-black">
                        Stage {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] text-[#B8902A] flex items-center justify-center group-hover:bg-[#B8902A] group-hover:text-white transition-all duration-500 shadow-sm">
                        {item.icon}
                    </div>
                </div>

                {/* Card Title */}
                <h4 className="font-serif text-base sm:text-lg text-[#111] font-bold mb-2 group-hover:text-[#B8902A] transition-colors duration-300">
                    {item.title}
                </h4>

                {/* Card Description */}
                <p className="font-sans text-xs sm:text-sm text-[#666] leading-relaxed font-light">
                    {item.desc}
                </p>
            </div>
        </div>
    );
};

const Expertise = () => (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[var(--background)]">
        {/* Decorative Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "32px 32px" }} />

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12 reveal">
                <p className="mb-4 sm:mb-5 section-label text-[#B8902A]">
                    Execution Timeline
                </p>
                <h2 className="mb-5 sm:mb-6 section-heading text-[#111]">
                    Comprehensive Capabilities
                </h2>
                <p className="section-desc text-[#555]">
                    Our capabilities run as an integrated progressive system chart, delivering unified performance from engineering drafts to final build completion.
                </p>
            </div>

            {/* Alternating Vertical Timeline Flow Chart */}
            <div className="relative max-w-4xl mx-auto py-10 group">
                
                {/* Desktop Central axis line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#B8902A]/25 -translate-x-1/2 pointer-events-none" />
                
                {/* Timeline Items */}
                <div className="flex flex-col">
                    {EXPERTISE_ITEMS.map((item, idx) => (
                        <TimelineItem key={item.title} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Expertise;