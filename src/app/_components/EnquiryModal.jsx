"use client";
import React, { useEffect, useState } from 'react';
import { useEnquiry } from '@/context/EnquiryContext';

const EnquiryModal = () => {
    const { isModalOpen, closeModal } = useEnquiry();
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            setIsRendered(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => {
                setIsRendered(false);
                document.body.style.overflow = 'unset';
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isModalOpen]);

    if (!isRendered && !isModalOpen) return null;

    return (
        <div 
            className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 transition-all duration-300 ${
                isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={closeModal}
            />

            {/* Modal Content Wrapper (for offset borders) */}
            <div 
                className={`relative w-full max-w-xl transition-all duration-500 transform ${
                    isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'
                }`}
            >
                {/* Offset gold border */}
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-[#8A939E]/20 pointer-events-none rounded-2xl"></div>
                
                {/* Decorative L-shaped corners */}
                <div className="absolute -top-6 -left-6 w-16 h-16 border-t border-l border-[#8A939E]/40 rounded-tl-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b border-r border-[#8A939E]/40 rounded-br-2xl"></div>

                {/* Main Modal Box */}
                <div className="relative bg-[#fcfaf2] rounded-2xl shadow-2xl overflow-hidden border border-[#8A939E]/10">
                    {/* Top Accent Bar */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#8A939E] to-transparent opacity-50" />

                    {/* Close Button */}
                    <button 
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-[#111]/40 hover:text-[#8A939E] transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="p-8 sm:p-10">
                        {/* Header */}
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-[#111] mb-2 tracking-tight uppercase">
                                Send Your <span className="text-[#8A939E]">Enquiry</span>
                            </h2>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
                                Fill out the form below to receive a consultation or quote on our premium architectural systems.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[0.75rem] font-bold text-[#111] ml-1">
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Name"
                                        className="w-full bg-white border border-[#111]/10 rounded-lg py-3 px-4 focus:border-[#8A939E] outline-none transition-all placeholder:text-[#111]/20 text-sm shadow-sm"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[0.75rem] font-bold text-[#111] ml-1">
                                        Country
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Country"
                                        className="w-full bg-white border border-[#111]/10 rounded-lg py-3 px-4 focus:border-[#8A939E] outline-none transition-all placeholder:text-[#111]/20 text-sm shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[0.75rem] font-bold text-[#111] ml-1">
                                        Phone *
                                    </label>
                                    <input 
                                        type="tel" 
                                        placeholder="000-000-0000"
                                        className="w-full bg-white border border-[#111]/10 rounded-lg py-3 px-4 focus:border-[#8A939E] outline-none transition-all placeholder:text-[#111]/20 text-sm shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[0.75rem] font-bold text-[#111] ml-1">
                                        E-mail Address
                                    </label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter Email"
                                        className="w-full bg-white border border-[#111]/10 rounded-lg py-3 px-4 focus:border-[#8A939E] outline-none transition-all placeholder:text-[#111]/20 text-sm shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="relative group">
                                    <select 
                                        className="w-full bg-white border border-[#8A939E] rounded-lg py-3 px-4 focus:border-[#8A939E] outline-none transition-all text-sm appearance-none cursor-pointer text-[#666]"
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

                            {/* Submit Section */}
                            <div className="pt-2">
                                <button 
                                    type="submit"
                                    className="w-full bg-[#111] text-white py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-[0.65rem] hover:bg-[#8A939E] transition-all duration-500 shadow-xl active:scale-[0.98] group relative overflow-hidden"
                                >
                                    <span className="relative z-10">Submit Enquiry</span>
                                    <div className="absolute inset-0 bg-[#8A939E] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                </button>
                                <p className="text-center text-[0.6rem] text-[#111]/40 mt-3 uppercase tracking-widest">
                                    Our team will respond within 24 hours
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EnquiryModal;
