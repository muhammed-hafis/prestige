import {
    FiShield,
    FiGlobe,
    FiUsers,
    FiClipboard,
    FiFileText,
    FiMessageCircle,
    FiArrowRight,
} from "react-icons/fi";

const WHY_FEATURES = [
    {
        title: "Authorized System Supplier",
        desc: "We supply genuine, certified systems directly from our brand partners — no substitutes, no imitations. Every product comes with full manufacturer backing.",
        badge: "100% Genuine",
        icon: <FiShield className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        title: "Saudi Market Experience",
        desc: "We understand local regulations, building codes, and the demands of the Gulf climate. Our solutions are selected and executed with Saudi Arabia's conditions in mind.",
        badge: "Local Expertise",
        icon: <FiGlobe className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        title: "Honest, Clear Communication",
        desc: "We give clients straightforward advice on what works for their project. No overselling — just honest system recommendations based on actual requirements.",
        badge: "Transparent",
        icon: <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
];

const WhyChoosePrestige = () => (
    <section className="relative overflow-hidden bg-[var(--background)] py-16 lg:py-24">

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] sm:h-[600px] sm:w-[600px] rounded-full bg-light-gold/8 blur-[160px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-light-gold/6 blur-[140px]" />

        <div className="main-container relative z-10 px-5 sm:px-8 lg:px-10">

            {/* Header */}
            <div className="mx-auto mb-12 sm:mb-14 lg:mb-16 max-w-3xl text-center" data-aos="fade-up">

                <span className="section-label text-light-gold mb-4 sm:mb-5 block">
                    Why Choose Us
                </span>

                <h2 className="section-heading text-[#111] mb-5 sm:mb-6">
                    What Sets Prestige{" "}
                    <span className="font-normal text-[#111]/35">
                        Apart
                    </span>
                </h2>

                <div className="mx-auto mb-5 sm:mb-6 h-px w-10 sm:w-12 bg-light-gold" />

                <p className="section-desc mx-auto max-w-2xl px-1 text-[#555]">
                    We are a specialized supplier built around quality, trust,
                    and long-term client relationships — not just transactions.
                </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-6">

                {WHY_FEATURES.map((feat, i) => (
                    <div
                        key={i}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-light-gold/10 bg-white/30 backdrop-blur-lg p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-light-gold/30 hover:shadow-[0_20px_45px_rgba(197,160,40,0.07)]"
                        data-aos="fade-up"
                        data-aos-delay={i * 120}
                    >

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-b-2xl bg-gradient-to-r from-light-gold/60 to-light-gold transition-transform duration-500 group-hover:scale-x-100" />

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-light-gold/5 blur-2xl transition-colors duration-500 group-hover:bg-light-gold/10" />

                        {/* Icon */}
                        <div className="relative z-10 mb-5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/20 text-light-gold shadow-sm transition-all duration-500 group-hover:bg-light-gold group-hover:text-white">
                            {feat.icon}
                        </div>

                        {/* Title */}
                        <h4 className="relative z-10 mb-3 font-serif text-[1rem] sm:text-[1.05rem] lg:text-[1.1rem] font-bold leading-snug text-[#111] transition-colors duration-300 group-hover:text-light-gold">
                            {feat.title}
                        </h4>

                        {/* Description */}
                        <p className="section-desc relative z-10 flex-grow text-[#555]">
                            {feat.desc}
                        </p>

                        {/* Badge */}
                        <div className="relative z-10 mt-5 sm:mt-6 border-t border-light-gold/10 pt-4 sm:pt-5">

                            <span className="inline-flex items-center gap-1.5 rounded-full border border-light-gold/25 bg-white/20 px-3 py-1.5 font-sans text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.12em] text-light-gold">

                                <span className="inline-block h-1 w-1 rounded-full bg-light-gold" />

                                {feat.badge}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Slider */}
            <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">

                {WHY_FEATURES.map((feat, i) => (
                    <div
                        key={i}
                        className="group relative min-w-[88%] snap-center flex flex-col overflow-hidden rounded-2xl border border-light-gold/10 bg-white/30 backdrop-blur-lg p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-light-gold/30 hover:shadow-[0_20px_45px_rgba(197,160,40,0.07)]"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                    >

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-light-gold/60 to-light-gold" />

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-light-gold/5 blur-2xl" />

                        {/* Icon */}
                        <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-light-gold shadow-sm">
                            {feat.icon}
                        </div>

                        {/* Title */}
                        <h4 className="relative z-10 mb-3 font-serif text-[1rem] font-bold leading-snug text-[#111]">
                            {feat.title}
                        </h4>

                        {/* Description */}
                        <p className="section-desc relative z-10 flex-grow text-[#555]">
                            {feat.desc}
                        </p>

                        {/* Badge */}
                        <div className="relative z-10 mt-5 border-t border-light-gold/10 pt-4">

                            <span className="inline-flex items-center gap-1.5 rounded-full border border-light-gold/25 bg-white/20 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-light-gold">

                                <span className="inline-block h-1 w-1 rounded-full bg-light-gold" />

                                {feat.badge}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Strip */}
            <div className="relative mt-12 sm:mt-14 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-light-gold/20 bg-[#111] p-6 sm:p-8 lg:p-10" data-aos="fade-up" data-aos-delay="200">

                {/* Pattern */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, var(--light-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--light-gold) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 sm:h-60 sm:w-60 rounded-full bg-light-gold/10 blur-[80px]" />

                <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">

                    <div className="max-w-2xl">

                        <p className="section-label text-light-gold mb-2">
                            Ready to work together?
                        </p>

                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug">
                            Let's discuss your project requirements.
                        </h3>

                        <p className="section-desc mt-2 text-white/60">
                            Our team is available to advise on system selection,
                            supply timelines, and on-site coordination for your next development.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex flex-shrink-0 items-center gap-3 rounded-full bg-light-gold px-6 py-3.5 sm:px-7 text-sm font-semibold tracking-wide text-white shadow-[0_6px_24px_rgba(197,160,40,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-light-gold/90"
                    >
                        Get in Touch

                        <FiArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default WhyChoosePrestige;