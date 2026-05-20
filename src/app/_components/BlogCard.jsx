import React from 'react';
import Link from 'next/link';

// BlogCard.jsx
const BlogCard = ({ post }) => {
  return (
    <Link
      href={`/news-blogs/${post.slug || '#'}`}
      className="group cursor-pointer flex flex-col h-full no-underline"
    >
      {/* Image */}
      <div className="relative flex-shrink-0 w-full aspect-[4/3] sm:aspect-[4/3] overflow-hidden mb-3 sm:mb-5">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* Category pill */}
        <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#111] text-white text-[0.55rem] sm:text-[0.65rem] uppercase tracking-widest font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">

        {/* Date */}
        <p className="font-sans text-[#999] text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-medium mb-1.5 sm:mb-3">
          {post.date}
        </p>

        {/* Title */}
        <h3 className="font-serif font-bold text-[0.85rem] sm:text-[1.25rem] text-[#111] leading-snug group-hover:text-light-gold transition-colors duration-300 mb-1.5 sm:mb-3 line-clamp-3 sm:line-clamp-none">
          {post.title}
        </h3>

        {/* Excerpt — hidden on very small cards, visible sm+ */}
        {post.excerpt && (
          <p className="font-sans text-[#555] text-[0.72rem] sm:text-sm leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3 flex-1 font-light">
            {post.excerpt}
          </p>
        )}

        {/* Read More */}
        <span className="font-sans inline-flex items-center gap-1.5 sm:gap-2 text-light-gold text-[0.6rem] sm:text-sm font-bold uppercase tracking-wider mt-auto pt-2.5 sm:pt-0 border-t border-black/[0.07] sm:border-none group-hover:gap-2.5 sm:group-hover:gap-3 transition-all duration-300">
          Read More
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>

      </div>
    </Link>
  );
};

export default BlogCard;

