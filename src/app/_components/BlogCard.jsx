import React from 'react';
import Link from 'next/link';

const BlogCard = ({ post }) => {
  return (
    <Link href={`/news-blogs/${post.slug || '#'}`} className="group cursor-pointer flex flex-col h-full no-underline">
      {/* Image */}
      <div className="relative mb-5 flex-shrink-0 w-full aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* Category pill on top of image */}
        <span className="absolute top-4 left-4 bg-[#111] text-white text-[0.65rem] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Date */}
        <p className="text-[#999] text-xs uppercase tracking-widest font-normal mb-3">
          {post.date}
        </p>

        {/* Title */}
        <h3 className="font-bold text-xl sm:text-[1.25rem] text-[#111] leading-snug group-hover:text-light-gold transition-colors duration-300 mb-3">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[#555] text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* Read More */}
        <span className="inline-flex items-center gap-2 text-light-gold text-sm font-semibold uppercase tracking-wider mt-auto group-hover:gap-3 transition-all duration-300">
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
