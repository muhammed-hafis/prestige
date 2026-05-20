import React from 'react';

const TestimonialCard = ({ item }) => {
  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div
      className="group relative flex flex-col w-[290px] sm:w-[350px] md:w-[380px] shrink-0 p-6 sm:p-8 snap-center hover:-translate-y-1 transition-all duration-500 border-l border-[#B8902A]/20 hover:border-[#B8902A] pl-8"
    >
      {/* Decorative quote mark in the background */}
      <span className="absolute right-4 top-4 text-7xl font-serif text-[#B8902A]/[0.05] select-none pointer-events-none group-hover:text-[#B8902A]/[0.12] transition-colors duration-500">
        ”
      </span>

      {/* Quote Icon & Stars */}
      <div className="flex justify-between items-center mb-5">
        <div className="w-8 h-8 rounded-lg bg-[#B8902A]/10 flex items-center justify-center text-[#B8902A] font-serif text-lg font-bold">
          “
        </div>
        <div className="flex gap-0.5">
          {[...Array(item.rating)].map((_, i) => (
            <svg 
              key={i} 
              className="w-3.5 h-3.5 text-[#B8902A]" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote Text */}
      <p className="font-sans text-[0.95rem] sm:text-[1.02rem] leading-relaxed text-[#3a3a3a] mb-6 font-light relative z-10">
        "{item.quote}"
      </p>

      {/* Client Profile / Footer */}
      <div className="mt-auto flex items-center gap-4 pt-5 border-t border-[#B8902A]/10">
        <div className="w-10 h-10 rounded-full border border-[#B8902A]/30 bg-transparent flex items-center justify-center text-xs font-bold text-[#B8902A] tracking-wider">
          {getInitials(item.author)}
        </div>
        <div>
          <h4 className="font-sans text-sm sm:text-base font-bold text-[#111] leading-none mb-1">
            {item.author}
          </h4>
          <p className="font-sans text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest text-[#888] font-bold m-0">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;