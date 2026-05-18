const BRANDS = [
    {
        name: "TOSTEM",
        label: "Japanese Engineering",
        desc: "Precision pre-fabricated aluminium systems recognized for factory-controlled quality and consistent performance in windows and doors.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#8A939E" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9M15 21V9" />
            </svg>
        ),
    },
    {
        name: "OZONE",
        label: "International Leader",
        desc: "A pioneer in architectural hardware and interior solutions, offering functional and design-driven products for modern spaces.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#8A939E" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v8M8 12h8" />
                <path d="M15 15l1.5 1.5M9 9L7.5 7.5" />
            </svg>
        ),
    },
    {
        name: "AL AMIN",
        label: "Regional Expert",
        desc: "Trusted thermal aluminium systems engineered to meet the specific climatic and energy-efficiency requirements of Saudi Arabia.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#8A939E" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
];

const BrandCard = ({ brand, index }) => (
    <div
        className="group relative p-6 sm:p-8 border border-black/5 hover:border-[#8A939E]/30 transition-all duration-500 reveal"
        style={{ transitionDelay: `${index * 0.15}s` }}
    >
        <div className="mb-5 p-3 w-fit bg-white/60 rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
            {brand.icon}
        </div>
        <h3 className="text-2xl sm:text-3xl text-[#111] mb-1">{brand.name}</h3>
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#8A939E] mb-4">
            {brand.label}
        </p>
        <p className="text-sm sm:text-base text-[#555] leading-relaxed">{brand.desc}</p>
    </div>
);

const BrandPartners = () => (
    <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8A939E]/5 blur-[100px] rounded-full" />
        </div>

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12 reveal">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-4">
                    Global Alliances
                </p>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] text-[#111] mb-5 leading-tight">
                    Certified & Authorized <br />
                    <em className="text-[#999]">Brand Partnerships</em>
                </h2>
                <p className="text-sm sm:text-base text-[#666] leading-relaxed">
                    We are authorized dealers of leading global brands, delivering genuine systems backed by
                    manufacturer standards and localized technical support.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                {BRANDS.map((brand, idx) => (
                    <BrandCard key={brand.name} brand={brand} index={idx} />
                ))}
            </div>
        </div>
    </section>
);

export default BrandPartners;