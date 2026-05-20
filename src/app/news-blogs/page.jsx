import React from 'react';
import Link from 'next/link';
import BlogCard from '../_components/BlogCard';
import { blogsData } from '../_data/blogs';
import CTA from '../_components/CTA';

export const metadata = {
  title: 'News & Blogs | Prestige Architectural Solutions',
  description: 'Stay informed and inspired with Prestige\'s latest insights, trends, and tips for choosing premium windows, doors, and architectural solutions.',
};

export default function NewsBlogsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Solid white, left aligned */}
      <section className="pt-40 pb-16 px-4 sm:px-8 border-b border-black/5">
        <div className="main-container max-w-6xl mx-auto">
          <p className="font-sans text-[#999] text-sm uppercase tracking-widest font-black mb-4">
            PRESTIGE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111] font-semibold mb-4">
            News & Blogs
          </h1>
          <p className="font-sans text-lg text-[#666] max-w-2xl font-light">
            Stay informed and inspired with Prestige's latest insights.
          </p>
        </div>
      </section>

      {/* Blogs Content */}
      <section className="py-20 px-4 sm:px-8">
        <div className="main-container max-w-6xl mx-auto">
          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogsData.map((post, idx) => (
              <BlogCard key={idx} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors">&lt;</button>
            <button className="w-10 h-10 flex items-center justify-center text-sm font-semibold text-white bg-light-gold rounded-sm shadow-md">1</button>
            <button className="w-10 h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors rounded-sm shadow-sm border border-transparent hover:border-black/10">2</button>
            <button className="w-10 h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors">&gt;</button>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
