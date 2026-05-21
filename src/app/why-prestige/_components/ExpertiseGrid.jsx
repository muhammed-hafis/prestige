import {
    HiOutlineBuildingOffice2,
    HiOutlineHomeModern,
    HiOutlineWrenchScrewdriver,
    HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

const EXPERTISE_ITEMS = [
    {
        title: "Aluminium Systems",
        desc: "We supply thermal and non-thermal aluminium systems for doors, windows, and facades.",
        icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
    },
    {
        title: "Interior Solutions",
        desc: "Hardware and interior glass products for modern residential and commercial spaces.",
        icon: <HiOutlineHomeModern className="w-6 h-6" />,
    },
    {
        title: "Custom Fabrication",
        desc: "Aluminium systems fabricated to match specific project designs and sizes.",
        icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />,
    },
    {
        title: "Project Coordination",
        desc: "We handle supply, scheduling, and installation support from start to finish.",
        icon: <HiOutlineClipboardDocumentCheck className="w-6 h-6" />,
    },
];

const ExpertiseGrid = () => (
    <section className="py-14 sm:py-20 lg:py-28 bg-[var(--background,#faf9f7)]">
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 xl:gap-20 items-start lg:items-stretch">

                {/* Left Column */}
                <div className="flex flex-col">

                    {/* Heading */}
                    <div className="mb-8 sm:mb-10" data-aos="fade-right">
                        <p className="font-sans text-[0.68rem] uppercase tracking-[0.42em] text-[var(--light-gold,#C8A94A)] font-black mb-3 sm:mb-4">
                            Our Expertise
                        </p>

                        <h2 className="section-heading text-[#111] tracking-tight">
                            What We Do
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {EXPERTISE_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                className="group relative flex flex-col p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-[var(--light-gold,#C8A94A)]/10 hover:border-[var(--light-gold,#C8A94A)]/35 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(200,169,74,0.1)] transition-all duration-500 ease-out overflow-hidden"
                                data-aos="fade-right"
                                data-aos-delay={i * 100}
                            >

                                {/* Bottom Accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--light-gold,#C8A94A)] to-[#ECC970] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
                                />

                                {/* Corner Glow */}
                                <div
                                    className="absolute top-0 right-0 w-16 h-16 bg-[var(--light-gold,#C8A94A)]/[0.035] rounded-bl-3xl transition-all duration-500 group-hover:w-20 group-hover:h-20 group-hover:bg-[var(--light-gold,#C8A94A)]/[0.07]"
                                />

                                {/* Icon */}
                                <div
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--light-gold,#C8A94A)]/10 text-[var(--light-gold,#C8A94A)] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500 group-hover:bg-[var(--light-gold,#C8A94A)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(200,169,74,0.35)] relative z-10"
                                >
                                    {item.icon}
                                </div>

                                <h4
                                    className="font-serif text-[0.95rem] sm:text-base text-[#111] font-bold mb-2 group-hover:text-[var(--light-gold,#C8A94A)] transition-colors duration-300 relative z-10"
                                >
                                    {item.title}
                                </h4>

                                <p
                                    className="font-sans text-[0.78rem] sm:text-sm text-[#666] leading-[1.8] font-light relative z-10"
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel */}
                <div className="mt-2 lg:mt-0 lg:pt-[4.5rem] flex flex-col" data-aos="fade-up" data-aos-delay="200">
                    <div
                        className="relative flex flex-col justify-between flex-1 p-7 sm:p-10 lg:p-11 bg-[#111] border border-[var(--light-gold,#C8A94A)]/20 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.22)] min-h-[320px] sm:min-h-[380px]"
                    >

                        {/* Grid */}
                        <div
                            className="absolute inset-0 pointer-events-none opacity-[0.035]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, var(--light-gold,#C8A94A) 1px, transparent 1px),
                                    linear-gradient(to bottom, var(--light-gold,#C8A94A) 1px, transparent 1px)
                                `,
                                backgroundSize: "28px 28px",
                            }}
                        />

                        {/* Glow */}
                        <div className="absolute -right-16 -top-16 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[var(--light-gold,#C8A94A)]/10 blur-[70px]" />

                        <div className="relative z-10">
                            <span
                                className="font-sans text-[0.62rem] uppercase tracking-[0.38em] text-[var(--light-gold,#C8A94A)] font-bold block mb-3 sm:mb-4"
                            >
                                Our Principle
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-5 sm:mb-6 tracking-tight">
                                Our Approach
                            </h3>

                            <p className="font-sans text-sm sm:text-[0.93rem] text-white/65 leading-[1.85] mb-5 font-light">
                                We work closely with consultants, contractors, and clients to understand
                                the project needs and deliver the right system at every stage.
                            </p>

                            <p className="font-sans text-sm sm:text-[0.93rem] text-white/65 leading-[1.85] font-light">
                                Our goal is simple — supply quality products on time, with clear communication
                                and reliable support throughout the project.
                            </p>

                            <div className="mt-7 sm:mt-8 h-px bg-gradient-to-r from-[var(--light-gold,#C8A94A)]/30 via-[var(--light-gold,#C8A94A)]/10 to-transparent" />

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {["Quality Supply", "On-Time Delivery", "Gulf Climate Rated"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-sans text-[0.62rem] uppercase tracking-[0.18em] text-[var(--light-gold,#C8A94A)]/80 border border-[var(--light-gold,#C8A94A)]/20 bg-[var(--light-gold,#C8A94A)]/[0.07] px-3 py-1.5 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div
                            className="relative z-10 pt-6 mt-6 sm:mt-8 border-t border-white/[0.08] flex items-center justify-between text-[0.6rem] font-sans text-white/30 tracking-[0.22em] uppercase"
                        >
                            <span>Prestige Creations</span>
                            <span>Saudi Arabia</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default ExpertiseGrid;