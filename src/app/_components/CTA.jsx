"use client";
import React from 'react';
import Link from 'next/link';
import { useEnquiry } from '@/context/EnquiryContext';
import { FiFileText, FiMapPin } from 'react-icons/fi';

const CTA = () => {
  const { openModal } = useEnquiry();

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-transparent"
      id="contact-consultations"
    >
      <div className="main-container px-6 sm:px-10 md:px-14 lg:pl-24 lg:pr-20 relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-sans text-light-gold uppercase text-[0.62rem] sm:text-[0.7rem] mb-3 flex items-center gap-3 tracking-[0.4em] font-black">
            CONTACT & CONSULTATIONS
            <span className="block w-[24px] sm:w-[30px] h-[0.5px] bg-light-gold shrink-0" />
          </p>
          <h2 className="section-heading text-[#111]">
            Start Your <span className="text-light-gold font-bold">Project</span>
          </h2>
          <p className="font-sans text-[#777] text-[0.88rem] sm:text-[0.95rem] mt-4 font-light leading-relaxed max-w-xl">
            Reach our engineering desk — by form, by phone, or in person.
          </p>
        </div>

        {/* ── Single Unified Container ── */}
        <div
          className="w-full bg-light-gold/5 rounded-2xl sm:rounded-3xl border border-light-gold/20 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-light-gold/15"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          {/* ── Card 1: Digital Project Intake ── */}
          <div
            className="flex flex-col p-8 sm:p-10 lg:p-12 cursor-pointer bg-transparent"
            onClick={openModal}
          >
            {/* Icon */}
            <div className="w-11 h-11 flex items-center justify-center border border-light-gold/40 rounded-[4px] mb-8 bg-light-gold/10 text-light-gold">
              <FiFileText className="w-5 h-5" />
            </div>

            {/* Eyebrow */}
            <span className="font-sans text-[0.58rem] sm:text-[0.62rem] tracking-[0.25em] text-light-gold font-black uppercase mb-3">
              DIGITAL INTAKE
            </span>

            {/* Title */}
            <h3 className="font-serif font-semibold text-xl sm:text-2xl text-[#111] mb-4 leading-snug">
              Digital Project Intake
            </h3>

            {/* Description */}
            <p className="font-sans text-[#777] text-[0.88rem] sm:text-[0.92rem] leading-relaxed font-light mb-8">
              Access our comprehensive inquiry form to share your project scope or securely upload your architectural drawings.
            </p>

            {/* Divider */}
            <div className="w-full h-[0.5px] bg-[#111]/10 mb-6 mt-auto" />

            {/* CTA */}
            <button
              onClick={(e) => { e.stopPropagation(); openModal(); }}
              className="font-sans inline-flex items-center gap-2 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-widest text-[#111] hover:text-light-gold transition-colors duration-300 w-fit bg-transparent border-none outline-none cursor-pointer group"
            >
              Send an Enquiry
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* ── Card 2: Direct Coordinates ── */}
          <Link
            href="/contact"
            className="flex flex-col p-8 sm:p-10 lg:p-12 bg-transparent no-underline"
          >
            {/* Icon */}
            <div className="w-11 h-11 flex items-center justify-center border border-light-gold/40 rounded-[4px] mb-8 bg-light-gold/10 text-light-gold">
              <FiMapPin className="w-5 h-5" />
            </div>

            {/* Eyebrow */}
            <span className="font-sans text-[0.58rem] sm:text-[0.62rem] tracking-[0.25em] text-light-gold font-black uppercase mb-3">
              DIRECT COORDINATES
            </span>

            {/* Title */}
            <h3 className="font-serif font-semibold text-xl sm:text-2xl text-[#111] mb-4 leading-snug">
              Direct Coordinates
            </h3>

            {/* Description */}
            <p className="font-sans text-[#777] text-[0.88rem] sm:text-[0.92rem] leading-relaxed font-light mb-8">
              Find our instant WhatsApp chat links, enterprise email channels, and showroom navigation via Google Maps.
            </p>

            {/* Divider */}
            <div className="w-full h-[0.5px] bg-[#111]/10 mb-6 mt-auto" />

            {/* CTA */}
            <span
              className="font-sans inline-flex items-center gap-2 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-widest text-[#111] hover:text-light-gold transition-colors duration-300 w-fit group"
            >
              View Contact Details
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTA;
