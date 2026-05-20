"use client";
import React, { useEffect } from "react";
import AboutHero from "./_components/Hero";
import Identity from "./_components/Identity";
import BrandPartners from "./_components/BrandPartners";
import Expertise from "./_components/Expertise";
import Commitment from "./_components/Commitment";
import Location from "./_components/Location";
import CTA from "./_components/CTA";



/* ── Keyframe animations ───────────────────────────────────── */
const Keyframes = () => (
  <style>{`
    .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal.in { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.15s; }
    .reveal-d2 { transition-delay: 0.3s; }
    .reveal-d3 { transition-delay: 0.45s; }
  `}</style>
);

const AboutPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-light-gold selection:text-white">
      <Keyframes />

      <AboutHero />
      <Identity />
      <BrandPartners />
      <Expertise />
      <Commitment />
    
      <Location />

      <CTA />
    </div>
  );
};

export default AboutPage;