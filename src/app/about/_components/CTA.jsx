import Link from "next/link";

const CTA = () => (
    <section className="py-20 lg:py-28 bg-light-gold text-white text-center px-4 sm:px-8 overflow-hidden relative">
        <div className="main-container relative z-10">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-white/70 mb-6 font-black">
                Start Your Project
            </p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,3.2rem)] mb-10 leading-tight font-semibold">
                Build with <span className="font-serif font-normal">Excellence</span>
            </h2>
            <Link
                href="/contact"
                className="font-sans inline-block px-10 sm:px-14 py-4 sm:py-5 bg-[var(--background)] text-light-gold text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#111] hover:text-white transition-all duration-500 no-underline"
            >
                Get in Touch
            </Link>
        </div>
    </section>
);

export default CTA;