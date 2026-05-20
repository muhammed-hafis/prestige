"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ContactForm from './_components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center pt-32 pb-16 overflow-hidden relative">
      {/* Premium Technical Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-light-gold/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-light-gold/10 pointer-events-none hidden lg:block" />

      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.in { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 0.15s; }
      `}</style>
      
      <section className="w-full relative z-10 my-auto">
        <div className="main-container px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch shadow-[0_30px_70px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden border border-light-gold/15 reveal">
            
            {/* Left Column: Stunning Luxury Architectural Photo */}
            <div className="relative w-full h-[400px] lg:h-full overflow-hidden group flex flex-col">
              <img 
                src="/images/grants-showcase.png" 
                alt="Prestige System Architecture" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
              
              {/* Brand Detailing */}
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <span className="text-light-gold uppercase text-[0.62rem] tracking-[0.3em] font-bold mb-2 block">
                  LUXURY REIMAGINED
                </span>
                <h3 className="text-xl sm:text-2xl font-serif tracking-widest uppercase leading-none mb-3">
                  PRESTIGE SYSTEMS
                </h3>
                <p className="text-[0.78rem] text-white/70 max-w-[320px] leading-relaxed">
                  Connect with our specialized design consultants to integrate precision prefabricated aluminium solutions into your layout.
                </p>
              </div>
            </div>

            {/* Right Column: Sleek Form */}
            <ContactForm />
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
