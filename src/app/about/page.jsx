"use client";
import React from "react";
import AboutHero from "./_components/Hero";
import Identity from "./_components/Identity";
import BrandPartners from "./_components/BrandPartners";
import Expertise from "./_components/Expertise";
import Commitment from "./_components/Commitment";
import Location from "./_components/Location";
import CTA from "./_components/CTA";

const AboutPage = () => {
  return (
    <div className="min-h-screen selection:bg-light-gold selection:text-white">
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