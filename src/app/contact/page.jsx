"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ContactForm from './_components/ContactForm';
import ContactInfo from './_components/ContactInfo';

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
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#8A939E]/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#8A939E]/10 pointer-events-none hidden lg:block" />

      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.in { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 0.15s; }
      `}</style>
      
      <section className="w-full relative z-10 my-auto">
        <div className="main-container px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
