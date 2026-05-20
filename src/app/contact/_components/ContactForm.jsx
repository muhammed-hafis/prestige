"use client";
import React, { useState } from 'react';

const SERVICES = [
  "Technical Consultant",
  "Showroom Visit",
  "Request Quotation",
  "After-Sales Service",
  "Others"
];

const ContactForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    message: ''
  });

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Enquiry Submitted:", { ...formData, services: selectedServices });
    
    // Smooth custom dialog feedback
    alert("Thank you! Your enquiry has been received successfully. A Prestige consultant will contact you shortly.");
    
    // Reset Form
    setFormData({
      name: '',
      country: '',
      phone: '',
      email: '',
      message: ''
    });
    setSelectedServices([]);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-light-gold/10">

      <div className="mb-8">
        <span className="text-light-gold uppercase text-[0.62rem] tracking-[0.25em] font-bold mb-2 block">
          SECURE CHANNEL
        </span>
        <h2 className="font-serif text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] tracking-wider uppercase leading-none m-0">
          Send a <span className="font-sans font-normal text-light-gold">Message</span>
        </h2>
        <div className="w-10 h-[1.5px] bg-light-gold/30 mt-4"></div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Name and Country fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-black/55 ml-1">
              Your Name *
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. Alexander Wright"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl py-3.5 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-black/25 text-[#111] text-[0.78rem] shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] font-semibold"
              required
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-black/55 ml-1">
              Country *
            </label>
            <input 
              type="text" 
              name="country"
              placeholder="e.g. Saudi Arabia"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl py-3.5 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-black/25 text-[#111] text-[0.78rem] shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] font-semibold"
              required
            />
          </div>
        </div>

        {/* Phone and Email fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-black/55 ml-1">
              Phone Number *
            </label>
            <input 
              type="tel" 
              name="phone"
              placeholder="e.g. +966 50 000 0000"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl py-3.5 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-black/25 text-[#111] text-[0.78rem] shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] font-semibold"
              required
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-black/55 ml-1">
              E-mail Address *
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="e.g. alex@corporate.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl py-3.5 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-black/25 text-[#111] text-[0.78rem] shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] font-semibold"
              required
            />
          </div>
        </div>

        {/* Required Services interactive Tag Grid */}
        <div className="space-y-2">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-black/55 ml-1">
            Required services * (Select all that apply)
          </label>
          <div className="flex flex-wrap gap-2.5">
            {SERVICES.map((service) => {
              const isSelected = selectedServices.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`py-2 px-3.5 border text-[0.68rem] font-bold uppercase tracking-wider transition-all duration-300 rounded-xl cursor-pointer select-none text-center ${
                    isSelected 
                      ? 'bg-light-gold border-light-gold text-white shadow-[0_5px_15px_rgba(197,160,40,0.2)]' 
                      : 'bg-[#f8f9fa] border-[#e2e8f0] text-[#111]/85 hover:border-light-gold/45 hover:text-black'
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message field */}
        <div className="space-y-1.5">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-black/55 ml-1">
            Describe your Architectural Project
          </label>
          <textarea 
            name="message"
            placeholder="Type your specifications, configurations, series requests or blueprints description here..."
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl py-3.5 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-black/25 text-[#111] text-[0.78rem] shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] resize-none font-semibold"
          />
        </div>

        {/* Submit button with sweep animation */}
        <button 
          type="submit"
          className="w-full bg-[#111] text-white py-4.5 rounded-xl font-bold uppercase tracking-[0.25em] text-[0.68rem] hover:bg-light-gold transition-all duration-500 shadow-xl active:scale-[0.98] group relative overflow-hidden mt-4 cursor-pointer border border-[#111] hover:border-light-gold"
        >
          <span className="relative z-10">Submit Inquiry</span>
          <div className="absolute inset-0 bg-light-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
