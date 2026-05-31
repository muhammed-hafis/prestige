import React from "react";
import { FiCompass, FiThermometer, FiEye, FiMessageSquare, FiAward } from "react-icons/fi";

const ADVANTAGES = [
    {
        title: "Protecting Architectural Intent (Zero Approximation)",
        desc: "When architects design massive, minimalist glass walls, standard fabricators often say, \"It cannot be done,\" or they use heavy, ugly profiles that ruin the design. We specialize in high-end structural problem-solving. We use ultra-slim, high-performance systems that preserve the luxury, light-filled aesthetic without compromising structural safety.",
        icon: FiCompass,
        bgColor: "#D87263",
        area: "area1",
    },
    {
        title: "Climate-Engineered Thermal Barriers",
        desc: "The Saudi climate demands extreme thermal insulation. Our certified thermal break systems are engineered specifically to handle intense desert heat and high wind-loads. By blocking exterior thermal transfer, we prevent your interiors from heating up, eliminate condensation issues, and drastically lower your long-term HVAC energy consumption.",
        icon: FiThermometer,
        bgColor: "#9B6888",
        area: "area2",
    },
    {
        title: "The \"Showroom-First\" Absolute Certainty",
        desc: "We eliminate guesswork. Through our Showroom-First experience, you touch, feel, and operate full-scale architectural systems to verify their flawless quality before making a financial commitment. Once confirmed, our efficient, just-in-time assembly model builds your order to exact millimetric tolerances, ensuring zero material wastage and no site delays.",
        icon: FiEye,
        bgColor: "#654366",
        area: "area3",
    },
    {
        title: "Transparent & Honest Communication",
        desc: "We build relationships on absolute clarity, not transaction-driven promises. We give consultants and clients straightforward, data-driven technical advice on what works for their project based on actual wind-load and energy requirements. No overselling—just genuine system recommendations you can rely on.",
        icon: FiMessageSquare,
        bgColor: "#4F6583",
        area: "area4",
    },
    {
        title: "Handover Integrity (No Delays, Full Compliance)",
        desc: "A beautiful system is useless if it fails municipal inspection. Every system we install is fully compliant with the Saudi Building Code (SBC) and SASO standards. Furthermore, our commercial operations are perfectly aligned with ZATCA requirements, giving master developers and main contractors a friction-free vendor experience from contract signing to final handover.",
        icon: FiAward,
        bgColor: "#2E3A4B",
        area: "area5",
    },
];

const DistinctAdvantages = () => {
    return (
        <section className="relative overflow-hidden bg-[var(--background)] py-10 lg:py-14">

            <style>{`
                .advantages-grid-container {
                    display: grid;
                    grid-gap: 20px;
                }
                @media (min-width: 768px) {
                    .advantages-grid-container {
                        grid-template-columns: repeat(2, 1fr);
                        grid-gap: 24px;
                        grid-template-areas:
                            "area1 area2"
                            "area3 area4"
                            "area5 area5";
                    }
                }
                .adv-scroll::-webkit-scrollbar { display: none; }
                .adv-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* Header */}
            <div className="main-container relative z-10 mb-12 sm:mb-16">
                <div className="mx-auto text-center" data-aos="fade-up">
                    <span className="section-label text-light-gold mb-4 sm:mb-5 block">
                        THE DISTINCT ADVANTAGES
                    </span>
                    <h2 className="section-heading text-[#111] mb-5">
                        Five Reasons to Specify Prestige Creations for Your Project.
                    </h2>
                    <div className="mx-auto h-[2px] w-12 bg-light-gold" />
                </div>
            </div>

            {/* MOBILE: Horizontal Scroll Slider */}
            <div className="md:hidden">
                <div
                    className="adv-scroll flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory"
                >
                    {ADVANTAGES.map((adv, i) => {
                        const Icon = adv.icon;
                        return (
                            <div
                                key={i}
                                className="flex-shrink-0 snap-start flex flex-col justify-between p-7 text-white rounded-3xl overflow-hidden relative"
                                style={{
                                    width: "78vw",
                                    minHeight: "420px",
                                    background: adv.bgColor,
                                }}
                            >
                                {/* Noise texture */}
                                <div
                                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
                                />

                                {/* Card number */}
                                <div className="absolute top-6 right-6 text-white/30 font-mono text-xs tracking-widest">
                                    0{i + 1}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-7 w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-white/90" />
                                    </div>
                                    <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-4 tracking-wide">
                                        {adv.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                                        {adv.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 w-10 h-[3px] bg-white/50 rounded-full mt-6" />
                            </div>
                        );
                    })}
                    {/* Trailing spacer */}
                    <div className="flex-shrink-0 w-1" />
                </div>

                {/* Scroll dots */}
                <div className="flex justify-center gap-2 mt-3">
                    {ADVANTAGES.map((adv, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ background: adv.bgColor, opacity: 0.55 }}
                        />
                    ))}
                </div>
            </div>

            {/* DESKTOP: Grid Layout */}
            <div className="hidden md:block main-container" data-aos="fade-up">
                <div className="advantages-grid-container">
                    {ADVANTAGES.map((adv, i) => {
                        const Icon = adv.icon;
                        return (
                            <div
                                key={i}
                                className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 text-white h-full rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:brightness-[0.96] hover:scale-[1.01] hover:z-10 group relative overflow-hidden"
                                style={{
                                    gridArea: adv.area,
                                    minHeight: "450px",
                                    background: adv.bgColor,
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
                                />

                                <div className="relative z-10">
                                    <div className="mb-8 w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 origin-left">
                                        <Icon className="w-7 h-7 text-white/90" />
                                    </div>
                                    <h3 className="font-serif font-bold text-lg lg:text-xl text-white mb-4 tracking-wide leading-tight">
                                        {adv.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                                        {adv.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 w-10 h-[3px] bg-white/60 mt-8 rounded-full transition-all duration-300 group-hover:w-16" />
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default DistinctAdvantages;