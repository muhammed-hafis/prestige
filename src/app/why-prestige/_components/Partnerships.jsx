const PARTNERSHIPS = [
    {
        brand: "TOSTEM",
        origin: "Japan",
        desc: "A Japanese aluminium brand known for precise factory-made systems. Used widely in doors, windows, and architectural projects for its consistent quality.",
        image: "/images/we70-detail.png",
        logo: "/partners/tostem.avif",
    },
    {
        brand: "OZONE",
        origin: "International",
        desc: "An international brand offering hardware and interior door solutions. Well known for practical, well-designed products used in modern buildings.",
        image: "/images/interior_swing_door_1778838623299.png",
        logo: "/partners/ozone.avif",
    },
    {
        brand: "Al Amin",
        origin: "Regional",
        desc: "A regional brand for thermal aluminium systems suited to the Gulf climate. Designed to meet local energy and building code requirements.",
        image: "/images/atis-detail.png",
        logo: "/partners/al-amin.avif",
    },
];

const Partnerships = () => (
    <section className="py-24 lg:py-32 bg-[var(--background)] relative overflow-hidden">
        {/* Subtle backdrop overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
             style={{ backgroundImage: "radial-gradient(var(--light-gold) 0.5px,transparent 0.5px)", backgroundSize: "32px 32px" }} />
        
        {/* Soft orb lights */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-light-gold/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-light-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Header */}
            <div className="max-w-3xl mb-16 reveal">
                <span className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-4 block">
                    Certified & Authorized
                </span>
                <h2 className="font-serif font-bold text-[clamp(2.2rem,4vw,3.6rem)] text-[#111] mb-6 leading-tight">
                    Our Brand Partners
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light max-w-2xl">
                    We work with trusted international brands to supply genuine, quality-assured aluminium systems for projects across Saudi Arabia.
                </p>
            </div>

            {/* Grid of Alliances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mt-12">
                {PARTNERSHIPS.map((p, idx) => (
                    <div
                        key={p.brand}
                        className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#E6BE5A] via-[#ECC970] to-[#D9B048] text-[#111] border border-black/5 hover:border-black/20 transition-all duration-500 shadow-[0_15px_40px_rgba(184,144,42,0.15)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 flex flex-col justify-between h-full reveal text-center"
                        style={{ transitionDelay: `${idx * 0.15}s` }}
                    >
                        {/* Subtle top dark accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-black/30 to-transparent scale-x-50 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                        {/* Floating background number */}
                        <div className="absolute right-6 top-6 text-7xl font-serif font-black text-black/[0.03] group-hover:text-black/10 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none">
                            {`0${idx + 1}`}
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Image Showcase Frame */}
                            <div className="w-full relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 border border-black/10 group-hover:border-black/30 transition-all duration-500">
                                <img
                                    src={p.image}
                                    alt={p.brand}
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                />
                            </div>

                            {/* Centered Overlapping Medallion Badge */}
                            <div className="w-20 h-20 rounded-full bg-[#111111] border-4 border-[#ECC970] flex items-center justify-center shadow-lg -mt-16 mb-6 relative z-20 group-hover:scale-110 transition-transform duration-500">
                                <img 
                                    src={p.logo} 
                                    alt={p.brand} 
                                    className="w-12 h-12 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500" 
                                />
                            </div>

                            {/* Origin badge */}
                            <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-white bg-black/25 px-3.5 py-1.5 rounded-full font-bold inline-block mb-4">
                                {p.origin} Engineering
                            </span>

                            {/* Brand Name */}
                            <h3 className="font-serif text-xl font-bold text-black mb-3 group-hover:scale-105 transition-transform duration-300">
                                {p.brand}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
                                {p.desc}
                            </p>
                        </div>

                        {/* Bottom accent line decoration */}
                        <div className="w-10 h-px bg-black/20 mx-auto transition-all duration-500 mt-8 group-hover:w-16" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Partnerships;
