const EXPERTISE_ITEMS = [
    {
        title: "Aluminium Systems",
        desc: "We supply thermal and non-thermal aluminium systems for doors, windows, and facades.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
    },
    {
        title: "Interior Solutions",
        desc: "Hardware and interior glass products for modern residential and commercial spaces.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10" />
            </svg>
        ),
    },
    {
        title: "Custom Fabrication",
        desc: "Aluminium systems fabricated to match specific project designs and sizes.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
            </svg>
        ),
    },
    {
        title: "Project Coordination",
        desc: "We handle supply, scheduling, and installation support from start to finish.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
];

const ExpertiseGrid = () => (
    <section className="py-20 lg:py-28 bg-[var(--background)]">
        <div className="main-container px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-stretch">

                {/* Left Column: Capabilities Grid */}
                <div className="reveal flex flex-col justify-between">
                    <div className="mb-12">
                        <p className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-4">
                            Our Expertise
                        </p>
                        <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] leading-[1.2]">
                            What We Do
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                        {EXPERTISE_ITEMS.map((item, i) => (
                            <div 
                                key={i} 
                                className="group relative p-6 sm:p-8 rounded-2xl border border-light-gold/10 bg-white hover:border-light-gold/30 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(197,160,40,0.06)] reveal" 
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                {/* Bottom hover accent bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-light-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left" />

                                {/* Icon frame */}
                                <div className="w-12 h-12 rounded-xl bg-light-gold/10 text-light-gold flex items-center justify-center mb-5 group-hover:bg-light-gold group-hover:text-white transition-all duration-500 shadow-sm">
                                    {item.icon}
                                </div>
                                
                                <h4 className="font-serif text-base text-[#111] mb-2 font-bold group-hover:text-light-gold transition-colors duration-300">
                                    {item.title}
                                </h4>
                                
                                <p className="font-sans text-xs sm:text-sm text-[#555] leading-[1.8] font-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Dark Executive Panel */}
                <div className="reveal reveal-d1 lg:pt-14 flex flex-col">
                    <div className="p-8 sm:p-12 bg-[#111] border border-light-gold/20 rounded-[2rem] text-white relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.2)] flex flex-col justify-between h-full">
                        {/* Blueprint decorative grid backdrop */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                             style={{ 
                                 backgroundImage: `linear-gradient(to right, var(--light-gold) 1px, transparent 1px), 
                                                   linear-gradient(to bottom, var(--light-gold) 1px, transparent 1px)`,
                                 backgroundSize: "28px 28px" 
                             }} />
                        
                        {/* Ambient radial gold glow */}
                        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-light-gold/10 blur-[80px] pointer-events-none" />

                        {/* Top Accent */}
                        <div className="relative z-10">
                            <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-light-gold font-bold block mb-4">
                                Our Principle
                             </span>
                            <h3 className="font-serif text-2xl font-semibold mb-6 text-white tracking-tight">
                                Our Approach
                            </h3>
                            <p className="font-sans text-sm sm:text-base text-white/70 leading-[1.8] mb-6 font-light">
                                We work closely with consultants, contractors, and clients to understand
                                the project needs and deliver the right system at every stage.
                            </p>
                            <p className="font-sans text-sm sm:text-base text-white/70 leading-[1.8] font-light">
                                Our goal is simple — supply quality products on time, with clear communication
                                and reliable support throughout the project.
                            </p>
                        </div>

                        {/* Bottom Metadata */}
                        <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-[0.65rem] font-sans text-white/40 tracking-wider">
                            <span>PRESTIGE CREATIONS</span>
                            <span>SAUDI ARABIA</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default ExpertiseGrid;
