import React from 'react';

const RegionalHub = () => (
    <section className="overflow-hidden bg-[#FAF6EC]/30 py-10 lg:py-14">

        <div className="main-container px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">

            <div className="mx-auto flex flex-col items-center text-center mb-12 sm:mb-16" data-aos="fade-up">

                {/* Label */}
                <p className="mb-4 sm:mb-5 section-label text-light-gold uppercase tracking-[0.25em] font-bold">
                    REGIONAL HUB
                </p>

                {/* Heading */}
                <h2 className="section-heading text-[#111] mb-4 sm:mb-6">
                    Headquartered in Jeddah, <br className="hidden sm:block" />
                    <span className="text-light-gold font-bold">Serving the Kingdom.</span>
                </h2>
                <div className="w-10 h-0.5 bg-light-gold mx-auto"></div>
            </div>

            {/* Grid of coordinates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Corporate Headquarters */}
                <div className="group relative bg-white border border-[#B8902A]/10 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B8902A]/40 hover:shadow-[0_20px_40px_rgba(184,144,42,0.06)]" data-aos="fade-up" data-aos-delay="0">
                    <div className="absolute left-0 right-0 top-0 h-[3px] scale-x-0 bg-[#B8902A] transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                    
                    <span className="font-sans text-[0.62rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#B8902A] mb-3 block">
                        Corporate Office
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#111] font-bold mb-3 uppercase tracking-wider">
                        Corporate Headquarters
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#555] leading-relaxed font-light">
                        Unit 325, Office 304, Building E8, Emaar Square, King Abdullah Road, Jeddah 22241, Kingdom of Saudi Arabia.
                    </p>
                </div>

                {/* Assembly Hub */}
                <div className="group relative bg-white border border-[#B8902A]/10 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B8902A]/40 hover:shadow-[0_20px_40px_rgba(184,144,42,0.06)]" data-aos="fade-up" data-aos-delay="100">
                    <div className="absolute left-0 right-0 top-0 h-[3px] scale-x-0 bg-[#B8902A] transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                    
                    <span className="font-sans text-[0.62rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#B8902A] mb-3 block">
                        Manufacturing
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#111] font-bold mb-3 uppercase tracking-wider">
                        Assembly Hub
                    </h3>
                    <span className="inline-block mt-1 font-sans text-xs uppercase tracking-[0.2em] font-black text-light-gold bg-[#FAF5E8] px-3 py-1 rounded-full animate-pulse">
                        Coming Soon
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#777] leading-relaxed font-light mt-3">
                        Strategic industrial zones facility for local pre-fabrication and quality-controlled assembly.
                    </p>
                </div>

                {/* Flagship Showroom */}
                <div className="group relative bg-white border border-[#B8902A]/10 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B8902A]/40 hover:shadow-[0_20px_40px_rgba(184,144,42,0.06)]" data-aos="fade-up" data-aos-delay="200">
                    <div className="absolute left-0 right-0 top-0 h-[3px] scale-x-0 bg-[#B8902A] transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                    
                    <span className="font-sans text-[0.62rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#B8902A] mb-3 block">
                        Experience Center
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#111] font-bold mb-3 uppercase tracking-wider">
                        Flagship Premium Showroom
                    </h3>
                    <span className="inline-block mt-1 font-sans text-xs uppercase tracking-[0.2em] font-black text-light-gold bg-[#FAF5E8] px-3 py-1 rounded-full animate-pulse">
                        Coming Soon
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#777] leading-relaxed font-light mt-3">
                        Tactile viewing gallery where clients can interact with our full-scale architectural aluminium and glass profiles.
                    </p>
                </div>
            </div>

            {/* Image Card */}
            <div className="group relative w-full px-1 sm:px-0" data-aos="fade-up" data-aos-delay="300">

                {/* Main Image */}
                <div className="relative z-10 overflow-hidden rounded-[1.2rem] sm:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] aspect-[16/11] sm:aspect-[21/9] lg:aspect-[21/8]">

                    <img
                        src="/images/emaar-square.avif"
                        alt="Saudi Arabia Reach"
                        className="h-full w-full object-cover sm:grayscale transition-all duration-[1200ms] group-hover:scale-[1.03] sm:group-hover:scale-105 group-hover:grayscale-0"
                    />

                    {/* Center Overlay Label */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-black/15">
                        <div className="rounded-xl border border-light-gold/20 bg-white/80 px-5 py-4 sm:px-8 sm:py-5 backdrop-blur-md shadow-lg">
                            <p className="mb-1.5 font-sans text-[0.55rem] sm:text-[0.65rem] font-black uppercase tracking-[0.22em] sm:tracking-[0.3em] text-light-gold">
                                Serving KSA Developer Base
                            </p>
                            <p className="font-serif text-sm sm:text-lg lg:text-xl font-medium text-[#111] m-0">
                                Emaar Square, Jeddah
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
    </section>
);

export default RegionalHub;
