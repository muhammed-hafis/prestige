"use client";
import React, { useState } from 'react';

const SERVICES = [
  "Technical Consultant",
  "Showroom Visit",
  "Request Quotation",
  "After -Sales Service",
  "Others"
];

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Message Submitted:", { ...formData, service: selectedService });
    
    // Construct WhatsApp message
    const messageText = `*New Contact Page Message*
---------------------------------------
*Name:* ${formData.name}
*Country:* ${formData.country}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Service Required:* ${selectedService || 'None'}
*Project Scope:* ${formData.message || 'N/A'}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/966573828134?text=${encodedText}`;
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset Form
    setFormData({
      name: '',
      country: '',
      phone: '',
      email: '',
      message: ''
    });
    setSelectedService('');
  };

  return (
    <div className="w-full relative overflow-hidden h-full flex flex-col justify-center bg-transparent">

      <div className="mb-6 sm:mb-8">
        <span className="text-light-gold uppercase text-[0.62rem] tracking-[0.25em] font-bold mb-2 block">
          CONTACT US
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#111] tracking-wider uppercase leading-none m-0">
          Send a <span className="font-sans font-normal text-light-gold">Message</span>
        </h2>
        <div className="w-10 h-[1.5px] bg-light-gold/30 mt-3 sm:mt-4"></div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name and Country fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[0.78rem] font-bold text-[#333] ml-1 block mb-1">
              Name
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#e2e8f0] rounded-xl py-3 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-[#a0aec0] text-[#111] text-xs font-semibold"
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-[0.78rem] font-bold text-[#333] ml-1 block mb-1">
              Country
            </label>
            <input 
              type="text" 
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#e2e8f0] rounded-xl py-3 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-[#a0aec0] text-[#111] text-xs font-semibold"
              required
            />
          </div>
        </div>

        {/* Phone and Email fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[0.78rem] font-bold text-[#333] ml-1 block mb-1">
              Phone *
            </label>
            <input 
              type="tel" 
              name="phone"
              placeholder="000-000-0000"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#e2e8f0] rounded-xl py-3 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-[#a0aec0] text-[#111] text-xs font-semibold"
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-[0.78rem] font-bold text-[#333] ml-1 block mb-1">
              E-mail Address
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#e2e8f0] rounded-xl py-3 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-[#a0aec0] text-[#111] text-xs font-semibold"
              required
            />
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="space-y-1 pt-1">
          <select
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full bg-white border border-[#e2e8f0] rounded-xl py-3 px-4 focus:border-[#3b82f6] focus:bg-white focus:ring-1 focus:ring-[#3b82f6]/20 outline-none transition-all duration-300 text-[#718096] text-xs font-semibold cursor-pointer"
            required
          >
            <option value="">Choose Services</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Project Scope Description */}
        <div className="space-y-1">
          <label className="text-[0.78rem] font-bold text-[#333] ml-1 block mb-1">
            Project Scope & Description
          </label>
          <textarea 
            name="message"
            placeholder="Describe your architectural needs, dimensions, series requests or specific system needs..."
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-white border border-[#e2e8f0] rounded-xl py-3 px-4 focus:border-light-gold focus:bg-white focus:ring-1 focus:ring-light-gold/20 outline-none transition-all duration-300 placeholder:text-[#a0aec0] text-[#111] text-xs resize-none font-semibold"
          />
        </div>

        {/* Submit button */}
        <button 
          type="submit"
          className="w-full bg-[#111] text-white py-3.5 rounded-xl font-bold uppercase tracking-[0.25em] text-[0.65rem] hover:bg-light-gold transition-all duration-500 shadow-md active:scale-[0.98] group relative overflow-hidden mt-2 cursor-pointer border border-[#111] hover:border-light-gold"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Submit Message
            <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-light-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
