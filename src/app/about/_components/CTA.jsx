import Link from "next/link";

const CTA = () => (
    <section className="py-20 lg:py-28 bg-[#8A939E] text-white text-center px-4 sm:px-8 overflow-hidden relative">
        <div className="main-container relative z-10">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/70 mb-6">
                Start Your Project
            </p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] mb-10 leading-tight">
                Build with <em>Excellence</em>
            </h2>
            <Link
                href="/contact"
                className="inline-block px-10 sm:px-14 py-4 sm:py-5 bg-[var(--background)] text-[#8A939E] text-sm uppercase tracking-[0.2em] hover:bg-[#111] hover:text-white transition-all duration-500 no-underline"
            >
                Get in Touch
            </Link>
        </div>
    </section>
);

export default CTA;