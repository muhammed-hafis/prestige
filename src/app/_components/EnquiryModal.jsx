"use client";
import React, { useEffect, useState } from 'react';
import { useEnquiry } from '@/context/EnquiryContext';

const SERVICES = [
  "Technical Consultant",
  "Showroom Visit",
  "Request Quotation",
  "After-Sales Service",
  "Others"
];

const EnquiryModal = () => {
    const { isModalOpen, closeModal } = useEnquiry();
    const [isRendered, setIsRendered] = useState(isModalOpen);
    const [selectedServices, setSelectedServices] = useState([]);
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        phone: '',
        email: '',
        message: ''
    });

    if (isModalOpen && !isRendered) {
        setIsRendered(true);
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            if (isRendered) {
                const timer = setTimeout(() => {
                    setIsRendered(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [isModalOpen, isRendered]);

    if (!isRendered && !isModalOpen) return null;

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

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enquiry Submitted:", { ...formData, services: selectedServices, file: file ? file.name : null });
        
        // Construct WhatsApp message
        const servicesList = selectedServices.length > 0 ? selectedServices.join(', ') : 'None';
        const drawingsAttached = file ? `Yes (${file.name})` : 'No';
        const messageText = `*New Project Intake from Prestige Website*
---------------------------------------
*Name:* ${formData.name}
*Country:* ${formData.country || 'N/A'}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Services:* ${servicesList}
*Drawings Uploaded:* ${drawingsAttached}
*Project Scope:* ${formData.message || 'N/A'}`;

        const encodedText = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/966573828134?text=${encodedText}`;
        
        // Redirect to WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Reset Form and close modal
        setFormData({
            name: '',
            country: '',
            phone: '',
            email: '',
            message: ''
        });
        setSelectedServices([]);
        setFile(null);
        closeModal();
    };

    return (
        <div 
            className={`fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300 ${
                isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {/* Backdrop with high-end blur */}
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-lg transition-all duration-500"
                onClick={closeModal}
            />

            {/* Modal Content Wrapper */}
            <div 
                className={`relative w-full max-w-3xl transition-all duration-500 transform ${
                    isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'
                }`}
            >
                {/* Decorative Premium Frame Details */}
                <div className="absolute -top-3 -right-3 -bottom-3 -left-3 border border-light-gold/15 pointer-events-none rounded-2xl hidden md:block"></div>
                <div className="absolute -top-5 -left-5 w-12 h-12 border-t border-l border-light-gold/30 rounded-tl-2xl pointer-events-none hidden md:block"></div>
                <div className="absolute -bottom-5 -right-5 w-12 h-12 border-b border-r border-light-gold/30 rounded-br-2xl pointer-events-none hidden md:block"></div>

                {/* Main Modal Box: Split Layout */}
                <div className="relative bg-[var(--background)] rounded-xl md:rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[88vh] md:max-h-[80vh] lg:max-h-none border border-light-gold/10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] w-full no-scrollbar">
                    
                    {/* LEFT COLUMN: Luxury Brand Concierge Panel */}
                    <div className="hidden lg:flex relative bg-[#0c0d0e] p-6 sm:p-7 flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                        {/* Background subtle design details */}
                        <div className="absolute -top-16 -left-16 w-48 h-48 bg-light-gold/5 rounded-full blur-[60px] pointer-events-none"></div>
                        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-light-gold/5 rounded-full blur-[60px] pointer-events-none"></div>

                        {/* Top Section */}
                        <div className="relative z-10">
                            {/* Prestige Premium Logo Symbol Horizontal Alignment */}
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-lg border border-light-gold/25 flex items-center justify-center bg-white/[0.02] shrink-0">
                                    <svg className="w-4 h-4 text-light-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-serif font-semibold text-xs tracking-wide leading-none">Prestige</span>
                                    <span className="text-light-gold text-[0.5rem] uppercase tracking-[0.25em] font-black mt-1 leading-none">Creations</span>
                                </div>
                            </div>
                            
                            <h3 className="font-serif text-2xl text-white font-light tracking-tight leading-tight mb-3">
                                Luxury <span className="font-medium text-light-gold">Reimagined</span>
                            </h3>
                            <p className="text-[0.7rem] text-white/60 leading-relaxed font-light mb-5 max-w-sm">
                                Let us shape your architectural vision. Submit your drawings and specifications directly to our engineering desk in Jeddah.
                            </p>
                        </div>

                        {/* Middle/Bottom Contact Badge Cards */}
                        <div className="relative z-10 space-y-2 mt-auto">
                            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                <div className="w-7 h-7 rounded-md bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25 C4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13.5a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[0.5rem] uppercase tracking-wider text-light-gold font-bold leading-none">Headquarters</span>
                                    <span className="text-[0.7rem] text-white/80 font-medium mt-1 leading-none">Emaar Square, Jeddah, KSA</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                <div className="w-7 h-7 rounded-md bg-light-gold/10 border border-light-gold/20 flex items-center justify-center text-light-gold shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[0.5rem] uppercase tracking-wider text-light-gold font-bold leading-none">Phone Support</span>
                                    <span className="text-[0.7rem] text-white/80 font-medium mt-1 leading-none">+966 57 382 8134</span>
                                </div>
                            </div>
                        </div>

                        {/* Saudi Vision 2030 Badge */}
                        <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[0.5rem] text-white/40 uppercase tracking-widest">
                            <span>Jeddah Office</span>
                            <span className="text-light-gold/50">Precision Systems</span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Elegant Cream-Gold Input Form */}
                    <div className="p-5 sm:p-7 flex flex-col justify-between relative">
                        {/* Close Button */}
                        <button 
                            onClick={closeModal}
                            className="absolute top-4 right-4 w-7 h-7 rounded-full border border-black/5 hover:border-light-gold/30 flex items-center justify-center text-[#111]/40 hover:text-light-gold transition-all duration-300 z-20 hover:rotate-90 bg-white/20 backdrop-blur-sm"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="w-full">
                            {/* Header */}
                            <div className="mb-4 sm:mb-5 pr-8 sm:pr-0">
                                <span className="text-light-gold uppercase text-[0.55rem] font-bold tracking-[0.25em] block mb-1">Digital Project Intake</span>
                                <h2 className="text-lg sm:text-xl font-semibold text-[#111] tracking-tight uppercase leading-none">
                                    Send <span className="text-light-gold">Enquiry</span>
                                </h2>
                                <div className="w-8 h-0.5 bg-light-gold mt-2"></div>
                            </div>

                            {/* Form */}
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                {/* Grid for Name and Country */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                            Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            className="w-full bg-white border border-[#111]/10 rounded-lg py-2 px-3 focus:border-light-gold focus:ring-1 focus:ring-light-gold outline-none transition-all placeholder:text-[#111]/20 text-[0.7rem] shadow-sm text-[#111] font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                            Country
                                        </label>
                                        <input 
                                            type="text" 
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            placeholder="Your Country"
                                            className="w-full bg-white border border-[#111]/10 rounded-lg py-2 px-3 focus:border-light-gold focus:ring-1 focus:ring-light-gold outline-none transition-all placeholder:text-[#111]/20 text-[0.7rem] shadow-sm text-[#111] font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Grid for Phone and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                            Phone *
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="000-000-0000"
                                            className="w-full bg-white border border-[#111]/10 rounded-lg py-2 px-3 focus:border-light-gold focus:ring-1 focus:ring-light-gold outline-none transition-all placeholder:text-[#111]/20 text-[0.7rem] shadow-sm text-[#111] font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                            E-mail Address
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="you@example.com"
                                            className="w-full bg-white border border-[#111]/10 rounded-lg py-2 px-3 focus:border-light-gold focus:ring-1 focus:ring-light-gold outline-none transition-all placeholder:text-[#111]/20 text-[0.7rem] shadow-sm text-[#111] font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Project Scope Description */}
                                <div className="space-y-1">
                                    <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                        Project Scope & Requirements
                                    </label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Describe your architectural needs, size, or specific configuration needs..."
                                        rows={2}
                                        className="w-full bg-white border border-[#111]/10 rounded-lg py-2 px-3 focus:border-light-gold focus:ring-1 focus:ring-light-gold outline-none transition-all placeholder:text-[#111]/20 text-[0.7rem] shadow-sm text-[#111] font-medium resize-none"
                                    />
                                </div>

                                {/* Upload Drawings Dropzone */}
                                <div className="space-y-1">
                                    <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                        Upload Architectural Drawings
                                    </label>
                                    <div 
                                        className={`relative border border-dashed rounded-lg p-2.5 text-center transition-all duration-300 ${
                                            dragActive 
                                                ? 'border-light-gold bg-light-gold/5' 
                                                : file 
                                                    ? 'border-light-gold bg-light-gold/5' 
                                                    : 'border-[#111]/15 hover:border-light-gold/50 bg-white'
                                        }`}
                                        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                                        onDragLeave={() => setDragActive(false)}
                                        onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); }}
                                    >
                                        <input 
                                            type="file" 
                                            id="file-upload" 
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleFileChange}
                                            accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                                        />
                                        <div className="flex flex-col items-center justify-center gap-1 pointer-events-none">
                                            {file ? (
                                                <>
                                                    <svg className="w-4 h-4 text-light-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-[0.7rem] font-semibold text-[#111]">{file.name}</p>
                                                    <p className="text-[0.55rem] text-[#111]/40">Click/drag to replace file</p>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-4 h-4 text-[#111]/30 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                    <p className="text-[0.65rem] font-medium text-[#111]/60">Drag drawings here or click to upload</p>
                                                    <p className="text-[0.52rem] text-[#111]/30 uppercase tracking-widest">PDF, DWG, DXF, Images (Max 25MB)</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Required Services Selectors */}
                                <div className="space-y-1">
                                    <label className="text-[0.6rem] font-bold text-[#111] tracking-wide uppercase ml-1 block">
                                        Required Services
                                    </label>
                                    <div className="flex flex-wrap gap-1.5">
                                        {SERVICES.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`py-0.5 px-2 rounded-md text-[0.55rem] uppercase tracking-wider font-bold transition-all duration-300 border ${
                                                        isSelected 
                                                            ? 'bg-light-gold text-white border-light-gold shadow-sm' 
                                                            : 'bg-white text-[#111]/60 border-[#111]/10 hover:border-light-gold/50 hover:text-light-gold'
                                                    }`}
                                                >
                                                    {service}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-1">
                                    <button 
                                        type="submit"
                                        className="w-full bg-[#111] text-white py-2.5 rounded-lg font-bold uppercase tracking-[0.25em] text-[0.6rem] hover:bg-light-gold hover:text-white transition-all duration-500 shadow-md active:scale-[0.98] relative overflow-hidden group border border-[#111]"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Send Enquiry
                                            <svg className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-light-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                                    </button>
                                    <p className="text-center text-[0.45rem] text-[#111]/40 mt-1.5 uppercase tracking-widest">
                                        Our engineering team will respond within 24 hours
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
