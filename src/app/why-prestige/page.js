"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';


/* ── Keyframe animations ───────────────────────────────────── */
const Keyframes = () => (
  <style>{`
    .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal.in { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.15s; }
    .reveal-d2 { transition-delay: 0.3s; }
    .reveal-d3 { transition-delay: 0.45s; }
    
    @keyframes scrollLine {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      50.1% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }
    .scroll-line { animation: scrollLine 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
  `}</style>
);

import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import Pillars from "./_components/Pillars";
import Partnerships from "./_components/Partnerships";
import Gallery from "./_components/Gallery";
import ExpertiseGrid from "./_components/ExpertiseGrid";
import CorporateProfile from "./_components/CorporateProfile";
import AluminiumFeatures from "./_components/AluminiumFeatures";

const WhyPrestigePage = () => {
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

      <Hero />
      <Introduction />
      <AluminiumFeatures />
      <Pillars />
      <Partnerships />
      <Gallery />
      <ExpertiseGrid />
      <CorporateProfile />

    </div>
  );
};

export default WhyPrestigePage;
