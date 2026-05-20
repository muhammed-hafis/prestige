import React from "react";
import TestimonialCard from "./TestimonialCard";

// Testimonials.jsx
const Testimonials = () => {
  const testimonials = [

    {
      quote:
        "The precision of Prestige's aluminium systems is unmatched. As an architect, I value both aesthetics and engineering, and they deliver both perfectly.",
      author: "Robert Chen",
      role: "Lead Architect, ArchiStudio",
      rating: 5,
    },
    {
      quote:
        "Our new villa's sliding doors are a masterpiece. The smooth operation and the slim profile from Tostem have completely transformed our living space.",
      author: "Sarah Montgomery",
      role: "Homeowner",
      rating: 5,
    },
    {
      quote:
        "From design to installation, the Prestige team was professional and detail-oriented. The quality of the aluminium windows exceeds all our expectations.",
      author: "Michael Vance",
      role: "Property Developer",
      rating: 5,
    },
    {
      quote:
        "The sound insulation on these windows is incredible. Even living near a busy street, our interior remains peaceful and quiet. Truly premium quality.",
      author: "David Miller",
      role: "Urban Resident",
      rating: 5,
    },
    {
      quote:
        "Prestige brought our vision to life with custom-sized bi-fold doors that open up our patio perfectly. Their attention to detail is remarkable.",
      author: "Elena Rodriguez",
      role: "Interior Designer",
      rating: 5,
    },
    {
      quote:
        "Highly recommend for any luxury project. The finish on the aluminium profiles is flawless and adds a significant touch of class to the building.",
      author: "James Wilson",
      role: "Luxury Estate Manager",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative w-full flex justify-center items-center overflow-hidden py-10 sm:py-14 lg:py-12 px-0"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* Header */}
        <div
          className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-light-gold uppercase text-[0.58rem] sm:text-[0.65rem] tracking-[4px] sm:tracking-[6px] font-sans font-bold mb-3 sm:mb-4">
            <span className="w-5 sm:w-8 h-px bg-light-gold" />
            Client Stories
            <span className="w-5 sm:w-8 h-px bg-light-gold" />
          </span>

          <h2 className="font-serif font-semibold text-[clamp(1.4rem,4vw,3.2rem)] text-[#111] leading-tight tracking-tight mt-1 sm:mt-2">
            Hear from our clients
          </h2>

          <div className="w-10 sm:w-12 h-[2px] bg-light-gold mx-auto mt-4 sm:mt-6" />
        </div>

        {/* Scroll track — edge-to-edge on mobile */}
        <div
          className="flex gap-3 sm:gap-6 md:gap-8 overflow-x-auto pb-6 sm:pb-10 snap-x snap-mandatory scroll-smooth no-scrollbar px-4 sm:px-6 lg:px-10"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-left"
              data-aos-delay={idx * 80}
              data-aos-duration="700"
              className="snap-center"
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Progress dots — mobile only */}
        <div className="flex justify-center gap-1.5 mt-1 sm:hidden">
          {testimonials.map((_, i) => (
            <span key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300
                ${i === 0 ? 'bg-light-gold' : 'bg-light-gold/20'}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center items-center gap-2 mt-4 text-[0.62rem] sm:text-[0.75rem] text-[#999] uppercase tracking-widest pointer-events-none select-none font-sans font-medium">
          <span>Scroll to explore</span>
          <span className="animate-pulse">→</span>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;