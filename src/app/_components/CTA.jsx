"use client";
import { useEnquiry } from '@/context/EnquiryContext';

const CTA = () => {
  const { openModal } = useEnquiry();

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Gradients to ensure text readability while keeping image visible */}
        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/20 lg:to-transparent"></div>
      </div>

      <div className="main-container relative z-10 py-16">
        <div className="max-w-[700px]">
          {/* Logo Brand Mark */}
          <div className="flex items-center gap-6 mb-8">
            <span className="font-black text-white text-3xl tracking-tighter uppercase">
              PRESTIGE
              <span className="inline-block w-2 h-2 bg-[#8A939E] rounded-full ml-1"></span>
            </span>
            <div className="w-16 h-[1px] bg-[var(--background)]/20"></div>
          </div>

          {/* Heading */}
          <h2 className="font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-white mb-8">
            Enhance your living.
          </h2>

          {/* Subtle Divider */}
          <div className="w-32 h-[2px] bg-[var(--background)]/20 mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#8A939E] -translate-x-full animate-[shimmer_3s_infinite]"></div>
          </div>

          {/* Subheading */}
          <p className="text-[1.05rem] text-white/80 mb-14 max-w-[500px]">
            Elevate your projects with our cutting-edge product portfolio and 
            architectural engineering excellence.
          </p>


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#products" className="px-12 py-5 bg-[var(--background)] text-black uppercase text-[0.8rem] transition-all duration-300 hover:bg-[#8A939E] hover:text-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] no-underline text-center">
              View Products
            </a>
            <button 
              onClick={openModal}
              className="px-12 py-5 border border-white/30 text-white uppercase text-[0.8rem] transition-all duration-300 hover:bg-[var(--background)] hover:text-black text-center"
            >
              Enquire Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
