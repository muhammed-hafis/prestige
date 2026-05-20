import Link from "next/link";

const CTA = () => (
    <section className="relative overflow-hidden bg-light-gold py-16 sm:py-20 lg:py-28 px-5 sm:px-8 text-center text-white">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-[-120px] right-[-120px] h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] rounded-full bg-white/10 blur-[120px]" />

            <div className="absolute bottom-[-120px] left-[-120px] h-[220px] w-[220px] sm:h-[360px] sm:w-[360px] rounded-full bg-black/5 blur-[120px]" />
        </div>

        {/* Subtle Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_0.5px,transparent_0.5px)] [background-size:26px_26px]" />

        <div className="main-container relative z-10 mx-auto max-w-4xl">

            {/* Label */}
            <p className="mb-4 sm:mb-5 section-label text-white/70">
                Start Your Project
            </p>

            {/* Heading */}
            <h2 className="mb-8 sm:mb-10 section-heading text-white">
                Build with{" "}
                <span className="font-normal text-white/80">
                    Excellence
                </span>
            </h2>

            {/* Button */}
            <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[var(--background)] px-8 py-3.5 sm:px-12 sm:py-5 font-sans text-[0.72rem] sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-light-gold no-underline transition-all duration-500 hover:scale-[1.03] hover:bg-[#111] hover:text-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
            >
                Get in Touch
            </Link>
        </div>
    </section>
);

export default CTA;