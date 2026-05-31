import React from 'react';
import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import DistinctAdvantages from "./_components/DistinctAdvantages";
import ExpertiseGrid from "./_components/ExpertiseGrid";
import OperationalBenchmark from "./_components/OperationalBenchmark";
import Commitment from "./_components/Commitment";

const WhyPrestigePage = () => {
  return (
    <div className="min-h-screen selection:bg-light-gold selection:text-white">
      <Hero />
      <Introduction />
      <DistinctAdvantages />
      <ExpertiseGrid />
      <OperationalBenchmark />
      <Commitment />
    </div>
  );
};

export default WhyPrestigePage;
