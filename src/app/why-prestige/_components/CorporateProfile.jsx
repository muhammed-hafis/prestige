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
        label: "Contact Person",
        value: "Mohammed Shafeeh",
        sub: "Business Development Manager",
        icon: (
            <>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
            </>
        ),
    },
    {
        label: "Mobile",
        value: "+966 55 816 5710",
        color: "text-light-gold",
        icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 015.08 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.19-2.33a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
    },
    {
        label: "Email",
        value: "companyprestigecreations@gmail.com",
        icon: (
            <>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </>
        ),
    },
    {
        label: "Corporate Office",
        value: "Unit No. 325, Office No. 304, 3rd Floor,",
        sub: "Building E8, Emaar Square, King Abdullah Road, Al-Fayhaa Dist, Jeddah 22241, KSA",
        icon: (
            <>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </>
        ),
    },
];

const CorporateProfile = () => (
    <section className="py-20 lg:py-28 text-[#111] overflow-hidden relative bg-[var(--background)]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(var(--light-gold)_0.5px,transparent_0.5px)] [background-size:28px_28px] pointer-events-none" />

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Header */}
            <div className="mb-16 reveal">
                <p className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-4">
                    Corporate Information
                </p>
                <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] leading-[1.2]">
                    Company Profile
                </h2>
            </div>

            {/* Spec Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
                
                {/* Left Column: Metadata Cards grid */}
                <div className="flex flex-col gap-6 reveal">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {INFO_ITEMS.map((item, idx) => (
                            <div key={idx} className="p-5 rounded-2xl border border-light-gold/10 bg-white hover:border-light-gold/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.01)] flex gap-4 items-start group">
                                <div className="w-9 h-9 shrink-0 rounded-full border border-light-gold/10 flex items-center justify-center text-light-gold group-hover:bg-light-gold group-hover:text-white transition-all duration-500 shadow-sm">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                        {item.icon}
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-black/40 mb-1 font-black">
                                        {item.label}
                                    </p>
                                    <p className={`font-serif text-base sm:text-lg font-medium ${item.color || "text-[#111]"}`}>
                                        {item.value}
                                    </p>
                                    {item.sub && (
                                        <p className="font-sans text-xs text-[#777] mt-0.5 leading-relaxed font-light">
                                            {item.sub}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Google Maps link button */}
                    <div className="pt-4 text-center lg:text-left">
                        <Link
                            href="https://maps.app.goo.gl/CV1DYryGMsHbwrPa6"
                            target="_blank"
                            className="inline-flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-light-gold font-bold border border-light-gold/20 hover:border-light-gold px-6 py-3 rounded-full transition-all duration-300 hover:bg-light-gold/10 group"
                        >
                            View on Google Maps
                            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Specialties list container */}
                <div className="p-8 sm:p-10 border border-light-gold/10 bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] reveal reveal-d1">
                    <p className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-black/40 mb-8 font-black">
                        Specialties Matrix
                    </p>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {SPECIALTIES.map((s, idx) => (
                            <span
                                key={idx}
                                className="font-sans px-4 py-2.5 rounded-xl border border-light-gold/10 text-[0.7rem] uppercase tracking-[0.08em] text-[#111]/70 bg-light-gold/5 hover:border-light-gold hover:text-light-gold hover:bg-light-gold/10 transition-all duration-300 cursor-default font-bold"
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
