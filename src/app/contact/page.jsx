"use client";
import React from 'react';
import ContactInfo from './_components/ContactInfo';
import ContactForm from './_components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden relative bg-[#FAF6EC]/30">
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

      <div className="w-full max-w-7xl px-6 sm:px-10 md:px-14 lg:pl-24 lg:pr-20 relative z-10 my-auto" data-aos="fade-up">
        {/* Single Unified Container Card */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-light-gold/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          
          {/* Left Column: Direct Coordinates Info & Active Maps Embed */}
          <div className="p-6 sm:p-10 lg:p-12 bg-[#FAF6EC]/15 border-b lg:border-b-0 lg:border-r border-[#111]/10 h-full flex flex-col justify-between order-2 lg:order-1">
            <ContactInfo />
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="p-6 sm:p-10 lg:p-12 h-full flex flex-col justify-center order-1 lg:order-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
