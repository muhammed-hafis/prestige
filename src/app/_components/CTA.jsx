"use client";
import { useEnquiry } from '@/context/EnquiryContext';

const CTA = () => {
  const { openModal } = useEnquiry();

  return (
    <section id="contact" className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Gradients to ensure text readability while keeping image visible */}
        <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/30 lg:to-transparent"></div>
      </div>

      <div className="main-container relative z-10">
        <div className="max-w-[700px]">
          {/* Logo Brand Mark */}
          <div className="flex items-center gap-6 mb-6" data-aos="fade-up" data-aos-delay="100">
            <span className="font-black text-white text-3xl tracking-tighter uppercase">
              PRESTIGE
              <span className="inline-block w-2 h-2 bg-light-gold rounded-full ml-1"></span>
            </span>
            <div className="w-16 h-[1px] bg-[var(--background)]/20"></div>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
            Enhance your living.
          </h2>

          {/* Subtle Divider */}
          <div className="w-32 h-[2px] bg-[var(--background)]/20 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-light-gold -translate-x-full animate-[shimmer_3s_infinite]"></div>
          </div>

          {/* Subheading */}
          <p className="text-[1rem] text-white/80 mb-10 max-w-[500px]" data-aos="fade-up" data-aos-delay="300">
            Elevate your projects with our cutting-edge product portfolio and 
            architectural engineering excellence.
          </p>


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center" data-aos="fade-up" data-aos-delay="400">
            {/* View Products */}
            <a 
              href="#products" 
              className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.25em] text-[0.68rem] rounded-full transition-all duration-500 hover:bg-light-gold hover:text-white hover:shadow-[0_15px_30px_rgba(197,160,40,0.35)] no-underline text-center border border-white"
            >
              <span>View Products</span>
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Enquire Now */}
            <button 
              onClick={openModal}
              className="group btn-prestige-enquire-outline text-center inline-flex items-center justify-center gap-3"
            >
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-500 group-hover:scale-110 text-light-gold" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Enquire Now</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
