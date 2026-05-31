import React, { useState, useRef, useEffect, useCallback } from "react";

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
        brand: "AL AMIN",
        origin: "Regional",
        desc: "A regional brand for thermal aluminium systems suited to the Gulf climate. Designed to meet local energy and building code requirements.",
        image: "/images/atis-detail.png",
        logo: "/partners/al-amin.avif",
    },
];

const SLIDE_DURATION = 5000; // ms per slide

const Partnerships = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [swipeOffset, setSwipeOffset] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0); // 0–1, drives dot fill & smooth advance

    const touchStartRef = useRef(0);
    const totalItems = PARTNERSHIPS.length;

    // rAF-based smooth progress ticker
    const rafRef = useRef(null);
    const startTimeRef = useRef(null);
    const pausedAtRef = useRef(null); // tracks elapsed when paused
    const tickRef = useRef();

    const tick = useCallback((timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const p = Math.min(elapsed / SLIDE_DURATION, 1);
        setProgress(p);

        if (p < 1) {
            if (tickRef.current) {
                rafRef.current = requestAnimationFrame(tickRef.current);
            }
        } else {
            // Advance slide
            setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
            setProgress(0);
            startTimeRef.current = null;
            if (tickRef.current) {
                rafRef.current = requestAnimationFrame(tickRef.current);
            }
        }
    }, [totalItems]);

    // Keep tickRef updated
    useEffect(() => {
        tickRef.current = tick;
    }, [tick]);

    const startTimer = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        startTimeRef.current = null;
        if (tickRef.current) {
            rafRef.current = requestAnimationFrame(tickRef.current);
        }
    }, []);

    const stopTimer = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
    }, []);

    // Kick off / pause based on state
    useEffect(() => {
        if (isSwiping || isPaused) {
            stopTimer();
        } else {
            startTimer();
        }
        return () => stopTimer();
    }, [isSwiping, isPaused, activeIndex, startTimer, stopTimer]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMobile(window.innerWidth < 768);
        }, 0);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize, { passive: true });
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Touch Mechanics
    const handleTouchStart = (e) => {
        setIsPaused(true);
        stopTimer();
        touchStartRef.current = e.touches[0].clientX;
        setIsSwiping(true);
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        const diff = e.touches[0].clientX - touchStartRef.current;
        setSwipeOffset(diff);
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
        const swipeThreshold = 60;

        if (swipeOffset > swipeThreshold) {
            setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
        } else if (swipeOffset < -swipeThreshold) {
            setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
        }
        setSwipeOffset(0);
        setProgress(0);

        setTimeout(() => setIsPaused(false), 800);
    };

    const goToSlide = (idx) => {
        setActiveIndex(idx);
        setProgress(0);
        setIsPaused(true);
        stopTimer();
        setTimeout(() => setIsPaused(false), 2000);
    };

    return (
        <section className="py-16 lg:py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Subtle backdrop overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: "radial-gradient(var(--light-gold) 0.5px,transparent 0.5px)", backgroundSize: "32px 32px" }}
            />

            {/* Soft orb lights */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-light-gold/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-light-gold/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="main-container relative z-10 px-4 sm:px-8">
                {/* Centered Header Content */}
                <div className="max-w-3xl mb-16 md:mb-20 mx-auto text-center" data-aos="fade-up">
                    <span className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-4 block">
                        Certified & Authorized
                    </span>
                    <h2 className="section-heading text-[#111] mb-6">
                        Our Brand Partners
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed font-light max-w-2xl mx-auto">
                        We work with trusted international brands to supply genuine, quality-assured aluminium systems for projects across Saudi Arabia.
                    </p>
                </div>

                {/* Cylinder Showcase on Mobile / Static Grid on Desktop */}
                <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative h-[480px] w-full max-w-[320px] sm:max-w-[360px] mx-auto touch-none md:max-w-none md:h-auto md:grid md:grid-cols-3 md:gap-10 lg:gap-12 md:mt-12 [perspective:1000px] md:[perspective:none]"
                    data-aos="fade-up"
                >
                    {PARTNERSHIPS.map((p, idx) => {
                        let offset = idx - activeIndex;
                        if (offset < -totalItems / 2) offset += totalItems;
                        if (offset > totalItems / 2) offset -= totalItems;

                        const baseAngle = offset * (360 / totalItems);
                        const dynamicDragAngle = isSwiping && typeof window !== "undefined"
                            ? (swipeOffset / window.innerWidth) * 120
                            : 0;
                        const finalAngle = baseAngle + dynamicDragAngle;

                        const radiusDistance = 110;
                        const isFocusedCard = offset === 0;

                        const mobileCylinderStyle = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: Math.round(100 - Math.abs(offset) * 20),
                            transform: `rotateY(${finalAngle}deg) translateZ(${radiusDistance}px) scale(${isFocusedCard ? 1 : 0.88})`,
                            opacity: Math.abs(offset) > 1 ? 0 : (isFocusedCard ? 1 : 0.45),
                            pointerEvents: isFocusedCard ? "auto" : "none",
                            // Smooth on auto-advance (600ms ease), snappy on drag release (300ms)
                            transition: isSwiping
                                ? "none"
                                : "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            willChange: "transform, opacity",
                        };

                        return (
                            <div
                                key={p.brand}
                                className="group rounded-3xl bg-gradient-to-br from-[#E6BE5A] via-[#ECC970] to-[#D9B048] text-[#111] border border-black/5 hover:border-black/20 transition-all duration-500 shadow-[0_15px_40px_rgba(184,144,42,0.15)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] md:hover:-translate-y-2 flex flex-col justify-between h-full text-center p-8 [backface-visibility:hidden] md:[backface-visibility:visible]"
                                style={
                                    isMobile
                                        ? mobileCylinderStyle
                                        : { transitionDelay: `${idx * 0.15}s` }
                                }
                            >
                                {/* Floating background number */}
                                <div className="absolute right-6 top-6 text-7xl font-serif font-black text-black/[0.03] group-hover:text-black/10 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none">
                                    {`0${idx + 1}`}
                                </div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-full relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 border border-black/10 group-hover:border-black/30 transition-all duration-500">
                                        <img
                                            src={p.image}
                                            alt={p.brand}
                                            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="w-20 h-20 rounded-full bg-[#111111] border-4 border-[#ECC970] flex items-center justify-center shadow-lg -mt-16 mb-6 relative z-20 group-hover:scale-110 transition-transform duration-500">
                                        <img
                                            src={p.logo}
                                            alt={p.brand}
                                            className="w-12 h-12 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500"
                                        />
                                    </div>

                                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-white bg-black/25 px-3.5 py-1.5 rounded-full font-bold inline-block mb-4">
                                        {p.origin} Engineering
                                    </span>

                                    <h3 className="font-serif text-xl font-bold text-black mb-3 group-hover:scale-105 transition-transform duration-300">
                                        {p.brand}
                                    </h3>

                                    <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
                                        {p.desc}
                                    </p>
                                </div>

                                <div className="w-10 h-px bg-black/20 mx-auto transition-all duration-500 mt-8 group-hover:w-16" />
                            </div>
                        );
                    })}
                </div>

                {/* Progress Dots — active dot fills like a timer */}
                <div className="flex md:hidden justify-center gap-3 mt-8 items-center">
                    {PARTNERSHIPS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                            style={{ width: activeIndex === idx ? "2rem" : "0.375rem" }}
                        >
                            {/* Track */}
                            <span className="absolute inset-0 rounded-full bg-light-gold/30" />
                            {/* Fill — animates with progress for the active dot */}
                            {activeIndex === idx && (
                                <span
                                    className="absolute inset-y-0 left-0 rounded-full bg-light-gold"
                                    style={{
                                        width: `${progress * 100}%`,
                                        // No CSS transition here — rAF drives this directly for smoothness
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partnerships;