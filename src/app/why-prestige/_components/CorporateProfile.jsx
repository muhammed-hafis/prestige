import Link from "next/link";

const SPECIALTIES = [
    "Architectural Aluminium Systems",
    "Japanese Pre-Fabricated Aluminium Systems",
    "Thermal Aluminium Systems",
    "Doors & Window Systems",
    "Sliding & Hinged Aluminium Systems",
    "Customized Fabrication Solutions",
    "Project Coordination & Installation",
    "Compliance-Driven Execution (Saudi Arabia)",
    "Manufacturer-Certified Systems",
    "Consultant & Developer Support",
];

const INFO_ITEMS = [
    {
        label: "Phone",
        value: "0573828134",
        color: "text-[#8A939E]",
        icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 015.08 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.19-2.33a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
    },
    {
        label: "Headquarters",
        value: "Jeddah, Makkah",
        icon: (
            <>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </>
        ),
    },
    {
        label: "Founded",
        value: "2026",
        icon: (
            <>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </>
        ),
    },
    {
        label: "Industry",
        value: "Fabricated Metal Products",
        icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    },
    {
        label: "Company Size",
        value: "2–10 Employees",
        icon: (
            <>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </>
        ),
    },
];

const CorporateProfile = () => (
    <section className="py-16 lg:py-24 text-[#111] overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#8A939E_0.5px,transparent_0.5px)] [background-size:28px_28px] pointer-events-none" />

        <div className="main-container px-4 sm:px-8 relative z-10">
            <div className="mb-12 reveal">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-4">
                    Corporate Information
                </p>
                <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] leading-tight">
                    The Profile
                </h2>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                {/* Info list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-7 reveal">
                    {INFO_ITEMS.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start group">
                            <div className="w-8 h-8 shrink-0 rounded-full border border-black/10 flex items-center justify-center text-[#8A939E] group-hover:bg-[#8A939E] group-hover:text-white transition-all duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                                    {item.icon}
                                </svg>
                            </div>
                            <div>
                                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-black/40 mb-1">
                                    {item.label}
                                </p>
                                <p className={`text-base sm:text-lg ${item.color || "text-[#111]"}`}>
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="pt-2">
                        <Link
                            href="https://maps.app.goo.gl/CV1DYryGMsHbwrPa6"
                            target="_blank"
                            className="text-[0.7rem] uppercase tracking-[0.2em] text-[#8A939E] no-underline hover:text-[#111] transition-colors flex items-center gap-3 group"
                        >
                            View on Google Maps
                            <span className="w-6 h-px bg-current group-hover:w-10 transition-all" />
                        </Link>
                    </div>
                </div>

                {/* Specialties */}
                <div className="reveal reveal-d1">
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-black/40 mb-8">
                        Specialties
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {SPECIALTIES.map((s, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2.5 border border-black/10 text-[0.7rem] uppercase tracking-[0.1em] text-[#111]/60 hover:border-[#8A939E] hover:text-[#8A939E] transition-all cursor-default"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CorporateProfile;
