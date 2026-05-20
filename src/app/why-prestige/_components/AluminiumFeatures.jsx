const WHY_FEATURES = [
    {
        title: "Authorized System Supplier",
        desc: "We supply genuine, certified systems directly from our brand partners — no substitutes, no imitations. Every product comes with full manufacturer backing.",
        badge: "100% Genuine",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: "Saudi Market Experience",
        desc: "We understand local regulations, building codes, and the demands of the Gulf climate. Our solutions are selected and executed with Saudi Arabia's conditions in mind.",
        badge: "Local Expertise",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.96 8.96 0 013 12c0-1.299.27-2.535.757-3.661" />
            </svg>
        ),
    },
    {
        title: "Trusted Global Brands",
        desc: "Our partnerships with TOSTEM (Japan), OZONE, and Al Amin give clients access to internationally recognized systems with proven track records in quality and performance.",
        badge: "World-Class Partners",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        title: "End-to-End Project Support",
        desc: "From initial consultation and system selection through to supply, coordination, and installation — we stay involved at every stage so nothing falls through the cracks.",
        badge: "Full Service",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Compliance-Ready Solutions",
        desc: "Every system we supply is aligned with Saudi Building Code requirements and Civil Defense regulations, making consultant approval and site compliance straightforward.",
        badge: "SBC Aligned",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
    },
    {
        title: "Honest, Clear Communication",
        desc: "We give clients straightforward advice on what works for their project. No overselling — just honest system recommendations based on actual requirements.",
        badge: "Transparent",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
];

const WhyChoosePrestige = () => (
    <section className="py-24 lg:py-32 bg-[var(--background)] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -left-60 top-10 w-[600px] h-[600px] bg-light-gold/8 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute -right-60 bottom-10 w-[500px] h-[500px] bg-light-gold/6 blur-[150px] rounded-full pointer-events-none" />

        <div className="main-container px-4 sm:px-8 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 reveal">
                <span className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-5 block">
                    Why Choose Us
                </span>
                <h2 className="font-serif font-semibold text-[clamp(1.8rem,3vw,3.4rem)] text-[#111] mb-6 leading-[1.2]">
                    What Sets Prestige{" "}
                    <span className="text-[#111]/35 font-normal">Apart</span>
                </h2>
                <div className="w-12 h-px bg-light-gold mx-auto mb-6" />
                <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light">
                    We are a specialized supplier built around quality, trust, and long-term client relationships —
                    not just transactions.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {WHY_FEATURES.map((feat, i) => (
                    <div
                        key={i}
                        className="group relative p-7 sm:p-8 rounded-2xl border border-light-gold/10 bg-white hover:border-light-gold/30 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(197,160,40,0.07)] hover:-translate-y-1 overflow-hidden flex flex-col reveal"
                        style={{ transitionDelay: `${i * 0.08}s` }}
                    >
                        {/* Hover accent bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-light-gold/60 to-light-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left" />

                        {/* Corner glow */}
                        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-light-gold/5 blur-2xl pointer-events-none group-hover:bg-light-gold/10 transition-colors duration-500" />

                        {/* Icon */}
                        <div className="relative z-10 w-12 h-12 rounded-xl bg-light-gold/10 text-light-gold flex items-center justify-center mb-5 group-hover:bg-light-gold group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                            {feat.icon}
                        </div>

                        {/* Title */}
                        <h4 className="relative z-10 font-serif text-base text-[#111] mb-3 font-bold group-hover:text-light-gold transition-colors duration-300 leading-snug">
                            {feat.title}
                        </h4>

                        {/* Description */}
                        <p className="relative z-10 font-sans text-xs sm:text-sm text-[#555] leading-[1.85] font-light flex-grow">
                            {feat.desc}
                        </p>

                        {/* Badge */}
                        <div className="relative z-10 mt-6 pt-5 border-t border-light-gold/10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-light-gold/25 text-[0.6rem] uppercase tracking-[0.12em] text-light-gold bg-light-gold/5 font-bold">
                                <span className="w-1 h-1 rounded-full bg-light-gold inline-block" />
                                {feat.badge}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA Strip */}
            <div className="reveal mt-14 p-8 sm:p-10 rounded-[2rem] bg-[#111] border border-light-gold/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--light-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--light-gold) 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                    }}
                />
                <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-light-gold/10 blur-[80px] pointer-events-none" />

                <div className="relative z-10 text-center md:text-left">
                    <p className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-light-gold font-bold mb-2">
                        Ready to work together?
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                        Let's discuss your project requirements.
                    </h3>
                    <p className="font-sans text-sm text-white/60 mt-2 font-light max-w-xl">
                        Our team is available to advise on system selection, supply timelines, and on-site coordination
                        for your next development.
                    </p>
                </div>

                <a
                    href="/contact"
                    className="relative z-10 flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-light-gold text-white text-sm font-sans font-semibold tracking-wide hover:bg-light-gold/90 transition-colors duration-300 shadow-[0_6px_24px_rgba(197,160,40,0.35)]"
                >
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>

        </div>
    </section>
);

export default WhyChoosePrestige;
