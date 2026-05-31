import React, { useState, useRef, useEffect } from "react";
// Import high-quality, modern icons from react-icons
import { LuShieldCheck, LuFactory } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";

const PILLARS = [
    {
        title: "Code-Compliant Systems",
        body: "All our aluminium systems meet Saudi Building Code requirements. This makes the approval process straightforward for consultants and avoids delays on site.",
        highlight: "SBC Ready",
        icon: <LuShieldCheck className="w-6 h-6 stroke-[1.5]" />,
    },
    {
        title: "Factory-Made Quality",
        body: "We supply systems that are cut and assembled in a controlled factory environment. This reduces on-site errors and ensures consistent quality across every project.",
        highlight: "Factory Controlled",
        icon: <LuFactory className="w-6 h-6 stroke-[1.5]" />,
    },
    {
        title: "Full Project Support",
        body: "We support developers and contractors from system selection through to supply and installation coordination, backed by our technical team in Jeddah and Riyadh.",
        highlight: "Jeddah & Riyadh",
        icon: <FaMapLocationDot className="w-5 h-5" />,
    },
];

const Pillars = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeOffset, setSwipeOffset] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    const touchStartRef = useRef(0);

    // Handle touch mechanics for mobile deck
    const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
        setIsSwiping(true);
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartRef.current;
        setSwipeOffset(diff);
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
        const swipeThreshold = 100; // pixels needed to count as a swipe away

        if (swipeOffset > swipeThreshold) {
            // Swiped Right - Go to previous
            setCurrentIndex((prev) => (prev === 0 ? PILLARS.length - 1 : prev - 1));
        } else if (swipeOffset < -swipeThreshold) {
            // Swiped Left - Go to next
            setCurrentIndex((prev) => (prev === PILLARS.length - 1 ? 0 : prev + 1));
        }

        setSwipeOffset(0);
    };

    // After mounting, determine if we are on mobile
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
            setIsMobile(window.innerWidth < 768);
        }, 0);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', checkMobile);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <section className="py-16 lg:py-24 bg-[var(--background)] text-[#111] relative overflow-hidden">
            {/* Subtle glowing gold ambient lights */}
            <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-light-gold/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -left-40 -bottom-40 w-[600px] h-[600px] bg-light-gold/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="main-container relative z-10 px-4 sm:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" data-aos="fade-up">
                    <span className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-4 md:mb-5 block">
                        Our Competitive Edge
                    </span>
                    <h2 className="section-heading text-[#111] mb-6 leading-[1.2]">
                        What Makes Us <br />
                        <span className="text-[#111]/40 font-normal">A Reliable Choice</span>
                    </h2>
                    <div className="w-12 h-px bg-light-gold mx-auto mb-6" />
                    <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light max-w-2xl mx-auto">
                        We combine quality international systems with local knowledge and hands-on support.
                    </p>
                </div>

                {/* --- MOBILE STACK DECK / DESKTOP GRID --- */}
                <div className="relative h-[420px] sm:h-[380px] md:h-auto w-full max-w-md mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8" data-aos="fade-up">
                    {PILLARS.map((pillar, idx) => {
                        // Calculate stack positions for the mobile viewports
                        let stackOrder = idx - currentIndex;
                        if (stackOrder < 0) stackOrder += PILLARS.length; // Loop around

                        const isTopCard = stackOrder === 0;

                        // Inline styling for the physical 3D stacking visual on mobile
                        const mobileStyle = {
                            zIndex: PILLARS.length - stackOrder,
                            transform: isTopCard
                                ? `translateX(${swipeOffset}px) rotate(${swipeOffset * 0.03}deg) scale(1)`
                                : `translateY(${stackOrder * 12}px) scale(${1 - stackOrder * 0.04})`,
                            opacity: stackOrder > 2 ? 0 : 1 - stackOrder * 0.15,
                            transition: isSwiping && isTopCard ? "none" : "all 400ms cubic-bezier(0.25, 0.8, 0.25, 1)",
                        };

                        return (
                            <div
                                key={idx}
                                onTouchStart={isTopCard ? handleTouchStart : undefined}
                                onTouchMove={isTopCard ? handleTouchMove : undefined}
                                onTouchEnd={isTopCard ? handleTouchEnd : undefined}
                                className={`
                                    absolute top-0 left-0 w-full md:relative md:top-auto md:left-auto md:w-auto
                                    group p-8 sm:p-10 rounded-3xl bg-white border border-light-gold/10 hover:border-light-gold/30 
                                    shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(197,160,40,0.06)] 
                                    md:hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between h-full touch-none
                                `}
                                style={{
                                    // Stacking styles active up to 767px wide screens, grid transition rules for desktop
                                    ...(isMounted && isMobile
                                        ? mobileStyle
                                        : { transitionDelay: `${idx * 0.15}s` }),
                                }}
                            >
                                <div>
                                    {/* Icon frame */}
                                    <div className="w-14 h-14 rounded-2xl bg-light-gold/10 text-light-gold flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-light-gold group-hover:text-white transition-all duration-500 shadow-sm">
                                        {pillar.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-xl font-semibold mb-4 text-[#111] group-hover:text-light-gold transition-colors duration-300">
                                        {pillar.title}
                                    </h3>

                                    {/* Body */}
                                    <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light mb-6 sm:mb-8">
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
                        );
                    })}
                </div>

                {/* Mobile visual indicators (dots) */}
                <div className="flex md:hidden justify-center gap-2 mt-8">
                    {PILLARS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-light-gold" : "w-1.5 bg-light-gold/30"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;