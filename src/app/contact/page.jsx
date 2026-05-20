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
    <div className="min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden relative">
      {/* Premium Technical Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.in { opacity: 1; transform: translateY(0); }
      `}</style>
      
      <section className="w-full max-w-2xl px-4 sm:px-6 relative z-10 my-auto">
        <div className="shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl sm:rounded-3xl overflow-hidden border border-light-gold/15 reveal">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
