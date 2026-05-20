const BRANDS = [
    {
        name: "TOSTEM",
        label: "Japanese Engineering",
        desc: "Precision pre-fabricated aluminium systems recognized for factory-controlled quality and consistent performance in windows and doors.",
        logo: "/partners/tostem.avif",
    },
    {
        name: "OZONE",
        label: "International Leader",
        desc: "A pioneer in architectural hardware and interior solutions, offering functional and design-driven products for modern spaces.",
        logo: "/partners/ozone.avif",
    },
    {
        name: "AL AMIN",
        label: "Regional Expert",
        desc: "Trusted thermal aluminium systems engineered to meet the specific climatic and energy-efficiency requirements of Saudi Arabia.",
        logo: "/partners/al-amin.avif",
    },
];

const BrandCard = ({ brand, index }) => (
    <div
        className="group relative p-8 bg-white border border-[#B8902A]/10 hover:border-[#B8902A]/40 transition-all duration-500 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(184,144,42,0.08)] hover:-translate-y-1.5 reveal flex flex-col items-center text-center overflow-hidden"
        style={{ transitionDelay: `${index * 0.15}s` }}
    >
        {/* Luxury top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#B8902A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

        <div className="mb-6 h-20 flex items-center justify-center w-full">
            <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-full max-w-full object-contain filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            />
        </div>
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B8902A] mb-3 font-black">
            {brand.label}
        </p>
        <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light max-w-xs">{brand.desc}</p>
    </div>
);

const BrandPartners = () => (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#E6BE5A]">
        {/* Decorative Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] [background-image:radial-gradient(#111_0.5px,transparent_0.5px)] [background-size:28px_28px]" />
        
        {/* Soft white orb light */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[120px] rounded-full" />
        </div>

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-16 reveal">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-white bg-black/20 px-4 py-1.5 rounded-full inline-block mb-4 font-black">
                    Global Alliances
                </span>
                <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-5 leading-tight">
                    Certified & Authorized <br />
                    <span className="text-[#111]/70 font-normal">Brand Partnerships</span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#111]/85 leading-relaxed font-light">
                    We are authorized dealers of leading global brands, delivering genuine systems backed by
                    manufacturer standards and localized technical support.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {BRANDS.map((brand, idx) => (
                    <BrandCard key={brand.name} brand={brand} index={idx} />
                ))}
            </div>
        </div>
    </section>
);

export default BrandPartners;