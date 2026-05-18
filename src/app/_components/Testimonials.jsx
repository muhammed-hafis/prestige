import React from "react";
import TestimonialCard from "./TestimonialCard";

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
      className="relative min-h-screen w-full flex justify-center items-center overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-10"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Modern Premium Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-3 text-[#8A939E] uppercase text-[0.65rem] tracking-[6px] font-bold mb-4">
            <span className="w-8 h-px bg-[#8A939E]"></span>
            CLIENT STORIES
            <span className="w-8 h-px bg-[#8A939E]"></span>
          </span>

          <h2 className="font-bold text-4xl sm:text-5xl text-[#111] leading-tight tracking-tight mt-2">
            Hear from our clients
          </h2>
          
          <div className="w-12 h-[2px] bg-[#8A939E] mx-auto mt-6"></div>
        </div>

        {/* Dynamic Cards Horizontal Scrollable Carousel (for both Mobile & Desktop) */}
        <div className="relative w-full">
          <div
            className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory scroll-smooth no-scrollbar w-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </div>
          
          {/* Subtle scroll indicator tip */}
          <div className="flex justify-center items-center gap-2 mt-4 text-[0.7rem] sm:text-[0.75rem] text-[#999] uppercase tracking-widest pointer-events-none select-none font-medium">
            <span>Scroll Horizontally</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;