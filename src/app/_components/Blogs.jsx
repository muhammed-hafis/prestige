import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { blogsData } from '../_data/blogs';

const Blogs = () => {
  const posts = blogsData.slice(0, 3);

  return (
    <section className="relative min-h-screen w-full flex justify-center items-center overflow-hidden py-12 lg:py-16 px-8" id="news">
      {/* Decorative architectural elements */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-[#8A939E]/[0.05] z-0"></div>

      <div className="main-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-14 gap-6 md:gap-8">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-12 h-[1px] bg-[#8A939E]"></span>
              <span className="text-[#8A939E] uppercase text-[0.7rem]">
                LATEST INSIGHTS
              </span>
            </div>
            <h2 className="font-semibold text-[clamp(1.6rem,3vw,3.2rem)] text-[#111] mb-4">
              News & Blogs
            </h2>
            <p className="text-[1.05rem] text-[#666] max-w-[550px]">
              Stay informed and inspired with Prestige's latest architectural insights and luxury industry trends.
            </p>

          </div>

          <Link href="/news-blogs" className="group relative px-8 py-3.5 bg-[#111] text-white uppercase text-[0.75rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] shrink-0">
            <span className="relative z-10">View All Posts</span>
            <div className="absolute inset-0 bg-[#8A939E] translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;