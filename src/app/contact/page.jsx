import React from 'react';
import { FiMail, FiMapPin, FiPhone, FiArrowRight, FiCheck } from 'react-icons/fi';
import EnquiryButton from '@/components/common/EnquiryButton';

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden relative bg-[#FAF6EC]/30">
      {/* Premium Technical Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "45px 45px"
        }}
      />
      
      {/* Subtle decorative glows */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-light-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-light-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 relative z-10 my-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            CONTACT &amp; CONSULTATIONS
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            Start Your Project.
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto mb-5 sm:mb-7" />
        </div>

        {/* Unified Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left Side: Digital Project Intake */}
          <div className="bg-white border border-light-gold/15 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden h-full">
            {/* Ambient pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10">
              <span className="font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold font-bold uppercase tracking-[0.25em] block mb-4">
                Concierge Portal
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111] mb-6 leading-tight">
                Digital Project Intake
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8">
                Access our comprehensive inquiry form to share your project scope or securely upload your architectural drawings.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Submit exact door & window dimensions",
                  "Securely upload blueprints (PDF, DWG, DXF)",
                  "Request technical specifications consultations",
                  "Get localized estimations within 24 hours"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <EnquiryButton 
                className="btn-prestige-enquire w-full sm:w-auto"
              >
                Send an Enquiry → Enquiry Form
              </EnquiryButton>
            </div>
          </div>

          {/* Right Side: Direct Coordinates */}
          <div className="bg-[#FAF6EC]/10 border border-light-gold/15 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] backdrop-blur-md flex flex-col justify-between h-full">
            <div>
              <span className="font-sans text-[0.62rem] sm:text-[0.68rem] text-light-gold font-bold uppercase tracking-[0.25em] block mb-4">
                Office &amp; Showrooms
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111] mb-6 leading-tight">
                Direct Coordinates
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8">
                Find our instant WhatsApp chat links, enterprise email channels, and showroom navigation via Google Maps.
              </p>

              {/* Coordinates List */}
              <div className="space-y-8">
                {/* Instant Communication */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-light-gold/20 rounded-lg flex items-center justify-center text-light-gold bg-light-gold/5 shrink-0 mt-0.5">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-light-gold font-black mb-1">
                      Instant Communication:
                    </span>
                    <span className="text-base text-[#111] font-bold tracking-tight">
                      +966 57 382 8134
                    </span>
                    <a 
                      href="https://wa.me/966573828134" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-[#B8902A] hover:underline font-medium mt-1 inline-flex items-center gap-1.5"
                    >
                      Connect on WhatsApp Business Hub <FiArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-light-gold/20 rounded-lg flex items-center justify-center text-light-gold bg-light-gold/5 shrink-0 mt-0.5">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-light-gold font-black mb-1">
                      Enterprise Email Channel:
                    </span>
                    <a 
                      href="mailto:project@prestigecreationscompany.com" 
                      className="text-base text-[#111] font-bold tracking-tight hover:text-[#B8902A] transition-colors break-all"
                    >
                      project@prestigecreationscompany.com
                    </a>
                  </div>
                </div>

                {/* Corporate Headquarters */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-light-gold/20 rounded-lg flex items-center justify-center text-light-gold bg-light-gold/5 shrink-0 mt-0.5">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-light-gold font-black mb-1">
                      Corporate Headquarters:
                    </span>
                    <span className="text-xs sm:text-sm text-[#111] font-medium leading-relaxed max-w-md">
                      Unit 325, Office 304, Building E8, Emaar Square, King Abdullah Road, Jeddah, KSA
                    </span>
                    <a 
                      href="https://maps.google.com/?q=Emaar+Square+Jeddah" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-[#B8902A] hover:underline font-medium mt-1 inline-flex items-center gap-1.5"
                    >
                      Navigate via Google Maps <FiArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Industrial Assembly Centre */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-light-gold/20 rounded-lg flex items-center justify-center text-light-gold bg-light-gold/5 shrink-0 mt-0.5">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-light-gold font-black mb-1">
                      Industrial Assembly Centre:
                    </span>
                    <span className="text-xs sm:text-sm text-[#111] font-medium leading-relaxed max-w-md">
                      Abcd
                    </span>
                    <a 
                      href="https://maps.google.com/?q=Jeddah+Industrial+Area" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-[#B8902A] hover:underline font-medium mt-1 inline-flex items-center gap-1.5"
                    >
                      Navigate via Google Maps <FiArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Flagship Premium Showroom */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 shrink-0 border border-light-gold/20 rounded-lg flex items-center justify-center text-light-gold bg-light-gold/5 shrink-0 mt-0.5">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-light-gold font-black mb-1">
                      Flagship Premium Showroom:
                    </span>
                    <span className="text-xs sm:text-sm text-[#111] font-medium leading-relaxed max-w-md">
                      Abcd
                    </span>
                    <a 
                      href="https://maps.google.com/?q=Emaar+Square+Jeddah" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-[#B8902A] hover:underline font-medium mt-1 inline-flex items-center gap-1.5"
                    >
                      Navigate via Google Maps <FiArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
