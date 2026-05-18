const EXPERTISE_ITEMS = [
    {
        title: "Architectural Aluminium",
        desc: "Specialized thermal and non-thermal systems designed for high-performance developments.",
        img: "/images/atis-detail.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
    },
    {
        title: "Interior Solutions",
        desc: "Strategic integration of high-end architectural hardware and interior glass solutions.",
        img: "/images/interior_swing_door_1778838623299.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4M12 16h.01" />
            </svg>
        ),
    },
    {
        title: "Custom Fabrication",
        desc: "Bespoke system integration and precision fabrication to meet unique requirements.",
        img: "/images/we70-detail.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
            </svg>
        ),
    },
    {
        title: "Project Management",
        desc: "Professional coordination and installation services ensuring dependable timelines.",
        img: "/images/about-detail.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M9 2h6M12 11l2 2 4-4M8 11h.01M8 16h.01" />
            </svg>
        ),
    },
];

const ExpertiseCard = ({ item }) => (
    <div className="group flex flex-col border border-black/5 hover:border-[#8A939E]/20 transition-all duration-500 rounded-xl overflow-hidden shadow-sm hover:shadow-lg">
        <div className="relative h-44 overflow-hidden">
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-3 left-3 w-8 h-8 flex items-center justify-center bg-white/60 backdrop-blur-sm text-[#8A939E] rounded-lg shadow-sm group-hover:bg-[#8A939E] group-hover:text-white transition-all duration-500">
                {item.icon}
            </div>
        </div>
        <div className="p-5">
            <h4 className="text-sm uppercase tracking-[0.15em] mb-2 text-[#111]">
                {item.title}
            </h4>
            <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
        </div>
    </div>
);

const Expertise = () => (
    <section className="py-16 lg:py-24">
        <div className="main-container px-4 sm:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Sidebar */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 reveal">
                    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-5">
                        Our Expertise
                    </p>
                    <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-5 leading-tight">
                        Comprehensive <br />
                        <em className="text-[#999]">Capability</em>
                    </h2>
                    <p className="text-[1.05rem] text-[#666] leading-relaxed">
                        We work closely with consultants, contractors, and developers to align design intent with
                        technical performance at every stage of the project lifecycle.
                    </p>

                </div>

                {/* Grid */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 reveal reveal-d1">
                    {EXPERTISE_ITEMS.map((item) => (
                        <ExpertiseCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Expertise;