import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { blogsData } from '../_data/blogs';

// Blogs.jsx
const Blogs = () => {
  const posts = blogsData.slice(0, 3);

  return (
    <section
      className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-12"
      id="news"
    >
      <div className="absolute top-0 left-[10%] w-px h-full bg-light-gold/[0.05] z-0" />

      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:pl-24 lg:pr-20">

        {/* ── Header ── */}
        <div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 lg:gap-10 mb-6 lg:mb-14"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <span className="block w-6 sm:w-12 h-px bg-light-gold" />
              <span className="text-light-gold uppercase tracking-[0.2em] text-[0.58rem] sm:text-[0.72rem] font-medium">
                Latest Insights
              </span>
            </div>

            <h2 className="section-heading text-[#111] mb-2 sm:mb-4">
              News &amp; Blogs
            </h2>

            <p className="section-desc text-[#666] max-w-xl">
              Stay informed and inspired with Prestige&apos;s latest
              architectural insights and luxury industry trends.
            </p>
          </div>

          <Link
            href="/news-blogs"
            className="group relative overflow-hidden shrink-0 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[#111] text-white uppercase tracking-[0.18em] text-[0.58rem] sm:text-[0.75rem] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#111]">
              View All Posts
            </span>
            <div className="absolute inset-0 bg-light-gold translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>

        {/* ── Swipe hint (mobile only) ── */}
        <p className="flex items-center gap-1.5 text-[#aaa] text-[0.65rem] mb-2 sm:hidden">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M15 7l5 5-5 5" />
          </svg>
          Swipe to explore
        </p>

        {/* ── Scroll track ── */}
        <div
          className="flex sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-8 lg:gap-10 overflow-x-auto sm:overflow-visible scroll-smooth snap-x snap-mandatory pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="700"
              className="snap-start flex-none w-[200px] sm:w-auto h-full"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* ── Dot indicators (mobile only) ── */}
        <div className="flex justify-center gap-1.5 mt-3 sm:hidden">
          {posts.map((_, i) => (
            <span key={i}
              className="w-1.5 h-1.5 rounded-full bg-light-gold/30 first:bg-light-gold"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;