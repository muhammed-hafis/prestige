const Gallery = () => (
    <section className="py-20 lg:py-28 overflow-hidden bg-[var(--background)]">
        <div className="main-container px-4 sm:px-8 mb-12">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.4em] text-light-gold font-black mb-3">
                Our Work
            </p>
            <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] leading-[1.2]">
                Project Gallery
            </h2>
        </div>

        {/* Asymmetrical Mosaic Layout */}
        <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-8 max-w-7xl mx-auto">
            {/* Gallery Item 1 */}
            <div className="flex-[2] relative overflow-hidden group h-64 sm:h-96 lg:h-[500px] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(197,160,40,0.15)] transition-all duration-500 reveal">
                <img
                    src="/images/about-hero.png"
                    alt="Precision Framing"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Description overlay */}
                <div className="absolute bottom-6 left-6 text-white z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-light-gold font-bold block mb-1">
                        Manufacturing
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold">
                        Precision Framing Systems
                    </h4>
                </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="flex-[1.2] relative overflow-hidden group h-64 sm:h-96 lg:h-[500px] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(197,160,40,0.15)] transition-all duration-500 reveal reveal-d1">
                <img
                    src="/images/hero-windows-v2.png"
                    alt="System Detail"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 text-white z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-light-gold font-bold block mb-1">
                        System Detail
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold">
                        High-Performance Glazing
                    </h4>
                </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="flex-[1.5] relative overflow-hidden group h-64 sm:h-96 lg:h-[500px] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(197,160,40,0.15)] transition-all duration-500 reveal reveal-d2">
                <img
                    src="/images/interior_grand_opening_1778838691195.png"
                    alt="Interior Spaces"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 text-white z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-light-gold font-bold block mb-1">
                        Interior Spaces
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold">
                        Minimalist Glass Assemblies
                    </h4>
                </div>
            </div>
        </div>
    </section>
);

export default Gallery;
