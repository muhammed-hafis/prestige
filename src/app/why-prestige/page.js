"use client";
import React from 'react';
import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import Pillars from "./_components/Pillars";
import Partnerships from "./_components/Partnerships";
import ExpertiseGrid from "./_components/ExpertiseGrid";
import AluminiumFeatures from "./_components/AluminiumFeatures";

const WhyPrestigePage = () => {
  return (
    <div className="min-h-screen selection:bg-light-gold selection:text-white">
      <Hero />
      <Introduction />
      <AluminiumFeatures />
      <Pillars />
      <Partnerships />
      <ExpertiseGrid />
    </div>
  );
};

export default WhyPrestigePage;
