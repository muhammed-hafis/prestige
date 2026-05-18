"use client";
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-[#8A939E]/15 relative overflow-hidden reveal">
      {/* Decorative premium L-corners */}
      <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#8A939E]/20 rounded-tl-xl"></div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#8A939E]/20 rounded-br-xl"></div>

      <h2 className="text-xl font-semibold text-[#111] mb-5 tracking-tight uppercase">
        Send us a <span className="text-[#374151]">Message</span>
      </h2>

      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[0.6rem] uppercase tracking-[0.15em] font-extrabold text-[#374151] ml-1">
              Name
            </label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg py-2 px-3 focus:border-[#8A939E] focus:bg-white outline-none transition-all duration-300 placeholder:text-[#111]/35 text-[#111] text-xs shadow-sm font-medium"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[0.6rem] uppercase tracking-[0.15em] font-extrabold text-[#374151] ml-1">
              Country
            </label>
            <input 
              type="text" 
              placeholder="Your Country"
              className="w-full bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg py-2 px-3 focus:border-[#8A939E] focus:bg-white outline-none transition-all duration-300 placeholder:text-[#111]/35 text-[#111] text-xs shadow-sm font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[0.6rem] uppercase tracking-[0.15em] font-extrabold text-[#374151] ml-1">
              Phone *
            </label>
            <input 
              type="tel" 
              placeholder="000-000-0000"
              className="w-full bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg py-2 px-3 focus:border-[#8A939E] focus:bg-white outline-none transition-all duration-300 placeholder:text-[#111]/35 text-[#111] text-xs shadow-sm font-medium"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[0.6rem] uppercase tracking-[0.15em] font-extrabold text-[#374151] ml-1">
              E-mail Address
            </label>
            <input 
              type="email" 
              placeholder="Enter Email"
              className="w-full bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg py-2 px-3 focus:border-[#8A939E] focus:bg-white outline-none transition-all duration-300 placeholder:text-[#111]/35 text-[#111] text-xs shadow-sm font-medium"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[0.6rem] uppercase tracking-[0.15em] font-extrabold text-[#374151] ml-1">
            Required Service *
          </label>
          <div className="relative group">
            <select 
              className="w-full bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg py-2.5 px-3 focus:border-[#8A939E] focus:bg-white outline-none transition-all duration-300 text-xs appearance-none cursor-pointer text-[#111] font-medium"
              required
              defaultValue=""
            >
              <option value="" disabled>Choose Services</option>
              <option value="Technical Consultant">Technical Consultant</option>
              <option value="Showroom Visit">Showroom Visit</option>
              <option value="Request Quotation">Request Quotation</option>
              <option value="After -Sales Service">After -Sales Service</option>
              <option value="Others">Others</option>
            </select>
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A939E] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#111] text-white py-3.5 rounded-lg font-bold uppercase tracking-[0.2em] text-[0.65rem] hover:bg-[#8A939E] transition-all duration-500 shadow-lg active:scale-[0.98] group relative overflow-hidden mt-3"
        >
          <span className="relative z-10">Submit Enquiry</span>
          <div className="absolute inset-0 bg-[#8A939E] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
