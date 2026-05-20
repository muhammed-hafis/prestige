const Location = () => (
    <section className="overflow-hidden bg-[var(--background)] py-14 sm:py-16 lg:py-24">

        <div className="main-container px-5 sm:px-8 lg:px-10">

            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

                {/* Label */}
                <p className="mb-4 sm:mb-5 section-label text-light-gold">
                    Where We Are
                </p>

                {/* Heading */}
                <h2 className="mb-5 sm:mb-6 section-heading text-[#111]">
                    Headquartered in{" "}
                    <span className="font-normal text-[#999]">Jeddah</span>,
                    <br className="hidden sm:block" />
                    Serving the Kingdom.
                </h2>

                {/* Description */}
                <p className="mb-8 sm:mb-10 max-w-2xl px-1 section-desc text-[#555]">
                    Located in the heart of Jeddah's business district at Emmar Square,
                    we are strategically positioned to support developers and consultants
                    across Saudi Arabia.
                </p>

                {/* Image Card */}
                <div className="group relative mt-2 sm:mt-4 w-full px-1 sm:px-0">

                    {/* Main Image */}
                    <div className="relative z-10 overflow-hidden rounded-[1.2rem] sm:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] aspect-[16/11] sm:aspect-[21/9] lg:aspect-[21/8]">

                        <img
                            src="/images/about-wide.png"
                            alt="Saudi Arabia Reach"
                            className="h-full w-full object-cover sm:grayscale transition-all duration-[1200ms] group-hover:scale-[1.03] sm:group-hover:scale-105 group-hover:grayscale-0"
                        />

                        {/* Center Content */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">

                            <div className="rounded-xl border border-light-gold/20 bg-white/80 px-5 py-4 sm:px-8 sm:py-5 backdrop-blur-md shadow-lg">

                                <p className="mb-1.5 font-sans text-[0.55rem] sm:text-[0.65rem] font-black uppercase tracking-[0.22em] sm:tracking-[0.3em] text-light-gold">
                                    Corporate Office
                                </p>

                                <p className="font-serif text-sm sm:text-lg lg:text-xl font-medium text-[#111]">
                                    Emmar Square, Jeddah
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outer Border */}
                    <div className="pointer-events-none absolute -inset-2 sm:-inset-4 rounded-[1.3rem] sm:rounded-2xl border border-light-gold/20 transition-transform duration-500 group-hover:scale-[1.01]" />

                    {/* Decorative Corners */}
                    <div className="absolute -left-2 -top-2 sm:-left-6 sm:-top-6 h-6 w-6 sm:h-12 sm:w-12 border-l border-t border-light-gold/40" />

                    <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 h-6 w-6 sm:h-12 sm:w-12 border-b border-r border-light-gold/40" />

                </div>
            </div>
        </div>
    </section>
);

export default Location;