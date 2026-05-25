import React from 'react';
import { FiSettings, FiMonitor, FiLayers, FiTool } from 'react-icons/fi';

const FRAMEWORK_ITEMS = [
    {
        step: "01",
        title: "Structural Engineering",
        desc: "Advanced calculations for wind deflection, acoustic insulation, and thermal dynamics to transform complex architectural concepts into approved, buildable shop drawings.",
        icon: <FiSettings className="w-6 h-6" />,
    },
    {
        step: "02",
        title: "Showroom-First Experience",
        desc: "A premium flagship viewing space where clients interact directly with full-scale, tactile architectural systems and profiles before final specification.",
        icon: <FiMonitor className="w-6 h-6" />,
    },
    {
        step: "03",
        title: "Just-in-Time Assembly",
        desc: "Operating from strategic industrial zones. Custom fabrication occurs exactly to order specifications, ensuring flawless quality control and just-in-time site delivery to minimize overhead.",
        icon: <FiLayers className="w-6 h-6" />,
    },
    {
        step: "04",
        title: "Elite Workforce Installation",
        desc: "Deployment of a highly disciplined, expert technician and installation force trained to execute complex fabrications on-site to strict safety and international tolerance standards.",
        icon: <FiTool className="w-6 h-6" />,
    },
];

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div 
            className={`relative flex flex-col md:flex-row items-center w-full my-4 ${
                isEven ? "md:justify-start" : "md:justify-end"
            }`}
            data-aos={isEven ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
        >
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

const ExecutionFramework = () => (
    <section className="py-10 lg:py-14 relative overflow-hidden bg-[var(--background)]">
        {/* Decorative Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: "radial-gradient(#B8902A 0.5px,transparent 0.5px)", backgroundSize: "32px 32px" }} />

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
                <p className="mb-4 sm:mb-5 section-label text-[#B8902A] uppercase tracking-[0.25em] font-bold">
                    THE EXECUTION FRAMEWORK
                </p>
                <h2 className="section-heading text-[#111] mb-4 sm:mb-6">
                    Integrated Capabilities from <br className="hidden sm:block" />
                    <span className="text-light-gold font-bold">Concept to Handover.</span>
                </h2>
            </div>

            {/* Alternating Vertical Timeline Flow Chart */}
            <div className="relative max-w-4xl mx-auto py-10 group">
                
                {/* Desktop Central axis line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#B8902A]/25 -translate-x-1/2 pointer-events-none" />
                
                {/* Timeline Items */}
                <div className="flex flex-col">
                    {FRAMEWORK_ITEMS.map((item, idx) => (
                        <TimelineItem key={item.title} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ExecutionFramework;
