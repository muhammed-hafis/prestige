"use client";
import React from "react";
import AboutHero from "./_components/AboutHero";
import HeritageDirective from "./_components/HeritageDirective";
import GlobalAlliances from "./_components/GlobalAlliances";
import ExecutionFramework from "./_components/ExecutionFramework";
import OurCommitment from "./_components/OurCommitment";
import CommercialIntegrity from "./_components/CommercialIntegrity";
import RegionalHub from "./_components/RegionalHub";
import SpecificationDesk from "./_components/SpecificationDesk";

const AboutPage = () => {
  return (
    <div className="min-h-screen selection:bg-light-gold selection:text-white">
      <AboutHero />
      <HeritageDirective />
      <GlobalAlliances />
      <ExecutionFramework />
      <OurCommitment />
      <CommercialIntegrity />
      <RegionalHub />
      <SpecificationDesk />
    </div>
  );
};

export default AboutPage;