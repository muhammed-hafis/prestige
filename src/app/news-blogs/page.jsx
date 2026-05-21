import React from 'react';
import Link from 'next/link';
import BlogCard from '../_components/BlogCard';
import { blogsData } from '../_data/blogs';

export const metadata = {
  title: 'News & Blogs | Prestige Architectural Solutions',
  description: 'Stay informed and inspired with Prestige\'s latest insights, trends, and tips for choosing premium windows, doors, and architectural solutions.',
};

export default function NewsBlogsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 overflow-hidden border-b border-black/5">
        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]
                    [background-image:radial-gradient(var(--light-gold)_0.8px,transparent_0.8px)]
                    [background-size:24px_24px]" />

        <div className="main-container text-center relative z-10 px-4 sm:px-8" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            PRESTIGE
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            News &amp; <span className="text-light-gold font-semibold">Blogs</span>
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto mb-5 sm:mb-7" />
          <p className="section-desc text-[#555] mx-auto max-w-xs sm:max-w-xl lg:max-w-2xl font-light">
            Stay informed and inspired with Prestige&apos;s latest insights, tips, and trends.
          </p>
        </div>
      </section>

      {/* Blogs Content */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="main-container max-w-6xl mx-auto px-4 sm:px-8">
          {/* Blogs Grid — 2 cols on mobile, 3 on large */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-y-16">
            {blogsData.map((post, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center items-center gap-2" data-aos="fade-up" data-aos-delay="100">
            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors">
              &lt;
            </button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm font-semibold text-white bg-light-gold rounded-sm shadow-md">
              1
            </button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors rounded-sm shadow-sm border border-transparent hover:border-black/10">
              2
            </button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}