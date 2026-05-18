const Gallery = () => (
    <section className="py-16 overflow-hidden">
        <div className="main-container px-4 sm:px-8 mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8A939E] mb-3">Our Work</p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] text-[#111]">Project Gallery</h2>
        </div>

        {/* Responsive grid instead of fixed 60vh */}
        <div className="flex flex-col sm:flex-row gap-2 px-4 sm:px-8">
            <div className="flex-[2] relative overflow-hidden group h-56 sm:h-80 lg:h-[480px] reveal">
                <img
                    src="/images/about-hero.png"
                    alt="Architectural"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex-[1] relative overflow-hidden group h-56 sm:h-80 lg:h-[480px] reveal reveal-d1">
                <img
                    src="/images/hero-windows-v2.png"
                    alt="Detail"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex-[1.5] relative overflow-hidden group h-56 sm:h-80 lg:h-[480px] reveal reveal-d2">
                <img
                    src="/images/interior_grand_opening_1778838691195.png"
                    alt="Interior"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
        </div>
    </section>
);

export default Gallery;
