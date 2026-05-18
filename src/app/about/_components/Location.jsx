const Location = () => (
    <section className="py-16 lg:py-24">
        <div className="main-container px-4 sm:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto reveal">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-4">
                    Where We Are
                </p>
                <h2 className="text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-5 leading-tight">
                    Headquartered in <em className="text-[#999]">Jeddah</em>, <br />
                    Serving the Kingdom.
                </h2>
                <p className="text-[1.05rem] text-[#666] mb-10 leading-relaxed max-w-xl">
                    Located in the heart of Jeddah's business district at Emmar Square, we are strategically
                    positioned to support developers and consultants across Saudi Arabia.
                </p>


                <div className="w-full relative group mt-4">
                    <div className="relative aspect-[21/9] sm:aspect-[21/7] overflow-hidden shadow-2xl z-10">
                        <img
                            src="/images/about-wide.png"
                            alt="Saudi Arabia Reach"
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/15" />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="py-4 px-6 sm:py-5 sm:px-8 bg-white/70 backdrop-blur-sm border border-[#8A939E]/20 text-center">
                                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8A939E] mb-1.5">
                                    Corporate Office
                                </p>
                                <p className="text-base sm:text-xl text-[#111]">Emmar Square, Jeddah</p>
                            </div>
                        </div>
                    </div>

                    {/* Offset gold border */}
                    <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-[#8A939E]/20 pointer-events-none transition-transform duration-500 group-hover:scale-[1.01]"></div>
                    
                    {/* Decorative L-shaped corners */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-[#8A939E]/40"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-[#8A939E]/40"></div>
                </div>

            </div>
        </div>
    </section>
);

export default Location;