import React from "react";

const PILLARS = [
    {
        title: "Code-Compliant Systems",
        body: "All our aluminium systems meet Saudi Building Code requirements. This makes the approval process straightforward for consultants and avoids delays on site.",
        highlight: "SBC Ready",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: "Factory-Made Quality",
        body: "We supply systems that are cut and assembled in a controlled factory environment. This reduces on-site errors and ensures consistent quality across every project.",
        highlight: "Factory Controlled",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l-2.43-2.43m2.43 2.43a2.902 2.902 0 11-4.104-4.104m4.104 4.104L6.75 21H3v-3.75l5.877-5.877m0 0L11.42 9.17m-2.43 2.43L17.25 3H21v3.75l-5.877 5.877" />
            </svg>
        ),
    },
    {
        title: "Full Project Support",
        body: "We support developers and contractors from system selection through to supply and installation coordination, backed by our technical team in Jeddah and Riyadh.",
        highlight: "Jeddah & Riyadh",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.75a1.125 1.125 0 01-1.125-1.125V11.25m9.75 7.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H6.75m12 0h1.5a1.125 1.125 0 001.125-1.125V13.5m-3.75 5.25v-5.25m3.75 5.25a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75-5.25H12m0 0V5.25A1.125 1.125 0 0113.125 4.12h5.25c.621 0 1.125.504 1.125 1.125V9M9.75 13.5H4.125A1.125 1.125 0 013 12.375V6.75A1.125 1.125 0 014.125 5.625h5.25c.621 0 1.125.504 1.125 1.125v5.625A1.125 1.125 0 019.75 13.5z" />
            </svg>
        ),
    },
];

const Pillars = () => (
    <section className="py-24 lg:py-32 bg-[var(--background)] text-[#111] relative overflow-hidden">
        {/* Subtle glowing gold ambient lights */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-light-gold/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -left-40 -bottom-40 w-[600px] h-[600px] bg-light-gold/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="main-container px-4 sm:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 reveal">
                <span className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-5 block">
                    Our Competitive Edge
                </span>
                <h2 className="font-serif font-semibold text-[clamp(1.8rem,3vw,3.4rem)] text-[#111] mb-6 leading-[1.2]">
                    What Makes Us <br />
                    <span className="text-[#111]/40 font-normal">A Reliable Choice</span>
                </h2>
                <div className="w-12 h-px bg-light-gold mx-auto mb-6" />
                <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light max-w-2xl mx-auto">
                    We combine quality international systems with local knowledge and hands-on support.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PILLARS.map((pillar, idx) => (
                    <div
                        key={idx}
                        className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-light-gold/10 hover:border-light-gold/30 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(197,160,40,0.06)] hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
                        style={{ transitionDelay: `${idx * 0.15}s` }}
                    >
                        <div>
                            {/* Icon frame */}
                            <div className="w-14 h-14 rounded-2xl bg-light-gold/10 text-light-gold flex items-center justify-center mb-8 group-hover:bg-light-gold group-hover:text-white transition-all duration-500 shadow-sm">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-xl font-semibold mb-4 text-[#111] group-hover:text-light-gold transition-colors duration-300">
                                {pillar.title}
                            </h3>

                            {/* Body */}
                            <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light mb-8">
                                {pillar.body}
                            </p>
                        </div>

                        {/* Highlight Badge */}
                        <div className="mt-auto">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-light-gold/30 text-[0.65rem] uppercase tracking-[0.1em] text-light-gold bg-light-gold/5 font-bold">
                                {pillar.highlight}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Pillars;
