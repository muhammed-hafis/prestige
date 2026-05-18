const PARTNERSHIPS = [
    {
        brand: "TOSTEM",
        origin: "Japan",
        desc: "A Japanese pre-fabricated aluminum system brand recognized for precision engineering, factory-controlled quality, and consistent performance in doors, windows, and architectural systems.",
        image: "/images/we70-detail.png",
    },
    {
        brand: "OZONE",
        origin: "International",
        desc: "An international leader in interior solutions and architectural hardware, offering functional, safe, and design-driven products for modern interior environments.",
        image: "/images/interior_swing_door_1778838623299.png",
    },
    {
        brand: "Al Amin",
        origin: "Regional",
        desc: "A trusted regional brand specializing in thermal aluminium systems, engineered to meet the climatic and energy-efficiency requirements of Saudi Arabia.",
        image: "/images/atis-detail.png",
    },
];

const Partnerships = () => (
    <section className="py-16 lg:py-28 relative overflow-hidden">
        <div className="main-container px-4 sm:px-8 relative z-10">
            <div className="mb-14 reveal">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-4">
                    Certified & Authorized
                </p>
                <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] leading-tight">
                    Global Alliances
                </h2>
            </div>

            <div className="space-y-16 lg:space-y-24">
                {PARTNERSHIPS.map((p, idx) => (
                    <div
                        key={p.brand}
                        className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 reveal ${
                            idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute -inset-3 border border-[#8A939E]/20 transition-all duration-500 group-hover:inset-0 pointer-events-none" />
                            <img
                                src={p.image}
                                alt={p.brand}
                                className="w-full aspect-[16/10] object-cover shadow-xl"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[#8A939E] mb-3 block">
                                {p.origin} Engineering
                            </span>
                            <h3 className="text-3xl sm:text-4xl text-[#111] mb-5">
                                {p.brand}
                            </h3>
                            <p className="text-[1.05rem] text-[#555] leading-relaxed mb-7">
                                {p.desc}
                            </p>
                            <div className="w-10 h-px bg-[#8A939E]" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

export default Partnerships;
