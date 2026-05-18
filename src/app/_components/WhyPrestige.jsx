import Link from 'next/link';

const WHY_REASONS = [
  {
    title: "Technical Clarity",
    desc: "We align design intent with technical performance at every stage."
  },
  {
    title: "Reliable Execution",
    desc: "Precision in fabrication and installation for long-term reliability."
  },
  {
    title: "Global Alliances",
    desc: "Authorized partnerships with leading brands like TOSTEM and OZONE."
  }
];

const WhyPrestige = () => {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="main-container px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[1rem] tracking-[.4em] uppercase text-[#8A939E] mb-4">Value Proposition</p>
          <h2 className="font-semibold" className="text-4xl md:text-5xl font-medium text-[#111] mb-6">Why Prestige</h2>
          <p className="text-[#666] leading-relaxed">
            Delivering specialized architectural solutions across Saudi Arabia with a focus on quality, compliance, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {WHY_REASONS.map((reason, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-12 h-12 border border-[#8A939E]/20 flex items-center justify-center text-[#8A939E] mx-auto mb-6 group-hover:bg-[#8A939E] group-hover:text-white transition-all duration-500">
                <span className="text-4xl">0{idx + 1}</span>
              </div>
              <h3 className="font-semibold" className="font-semibold text-5xl text-[#111] mb-3">{reason.title}</h3>
              <p className="text-4xl text-[#777] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/why-prestige" 
            className="inline-flex items-center gap-4 text-[1rem] tracking-[.3em] uppercase font-bold text-[#111] hover:text-[#8A939E] transition-colors group"
          >
            Learn More
            <span className="w-8 h-px bg-[#8A939E] group-hover:w-12 transition-all"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyPrestige;
