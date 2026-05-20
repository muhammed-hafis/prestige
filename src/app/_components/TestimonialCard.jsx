import React from 'react';

// TestimonialCard.jsx
const TestimonialCard = ({ item }) => {
  const getInitials = (name) =>
    name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div
      className="group relative flex flex-col
                 w-[210px] sm:w-[310px] md:w-[360px]
                 shrink-0
                 p-4 sm:p-6 md:p-8
                 pl-5 sm:pl-7 md:pl-8
                 snap-center
                 hover:-translate-y-1 transition-all duration-500
                 border-l-2 border-[#B8902A]/20 hover:border-[#B8902A]
                 rounded-r-xl"
    >
      {/* Big decorative quote */}
      <span className="absolute right-2 sm:right-4 top-2 sm:top-4
                       text-5xl sm:text-7xl font-serif
                       text-[#B8902A]/[0.05] select-none pointer-events-none
                       group-hover:text-[#B8902A]/[0.12] transition-colors duration-500">
        "
      </span>

      {/* Top row: quote icon + stars */}
      <div className="flex justify-between items-center mb-3 sm:mb-5">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg
                        bg-[#B8902A]/10 flex items-center justify-center
                        text-[#B8902A] font-serif text-sm sm:text-lg font-bold">
          "
        </div>
        <div className="flex gap-0.5">
          {[...Array(item.rating)].map((_, i) => (
            <svg key={i}
              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#B8902A]"
              fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote text */}
      <p className="font-sans
                    text-[0.75rem] sm:text-[0.95rem] md:text-[1.02rem]
                    leading-relaxed text-[#3a3a3a]
                    mb-4 sm:mb-6
                    line-clamp-4 sm:line-clamp-none
                    font-light relative z-10">
        "{item.quote}"
      </p>

      {/* Author footer */}
      <div className="mt-auto flex items-center gap-2.5 sm:gap-4
                      pt-3 sm:pt-5
                      border-t border-[#B8902A]/10">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full
                        border border-[#B8902A]/30
                        flex items-center justify-center
                        text-[0.6rem] sm:text-xs font-bold
                        text-[#B8902A] tracking-wider flex-shrink-0">
          {getInitials(item.author)}
        </div>
        <div>
          <h4 className="font-sans
                         text-[0.75rem] sm:text-sm md:text-base
                         font-bold text-[#111] leading-none mb-0.5 sm:mb-1">
            {item.author}
          </h4>
          <p className="font-sans
                        text-[0.55rem] sm:text-[0.65rem] sm:text-[0.7rem]
                        uppercase tracking-widest text-[#888] font-bold m-0">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;