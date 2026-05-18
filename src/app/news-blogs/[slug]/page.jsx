import React from 'react';
import { notFound } from 'next/navigation';
import { blogsData } from '../../_data/blogs';
import CTA from '../../_components/CTA';
import Link from 'next/link';
import ShareRow from './ShareRow';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found | Prestige' };

  return {
    title: `${post.title} | Prestige Architectural Solutions`,
    description: post.excerpt || `Read about ${post.title} and discover architectural excellence.`,
  };
}

export function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get 3 related posts (excluding current)
  const related = blogsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen">

      {/* ── Hero Section ── */}
      <section className="pt-40 pb-12 border-b border-black/5">
        <div className="main-container text-center flex flex-col items-center">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#999] uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-[#8A939E] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news-blogs" className="hover:text-[#8A939E] transition-colors">News &amp; Blogs</Link>
            <span>/</span>
            <span className="text-[#111] font-semibold line-clamp-1 max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category Badge */}
          <span className="bg-[#111] text-white text-[0.65rem] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-8">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] text-[#111] font-bold mb-7 leading-tight tracking-tight max-w-[820px]">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-[#666] max-w-[680px] leading-relaxed mb-8 font-normal">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-[#888] mb-10">
            <span className="font-semibold text-[#555]">{post.author}</span>
            <span className="text-gray-300">•</span>
            <span>{post.date}</span>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] overflow-hidden rounded-sm shadow-xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="py-20">
        <div className="main-container">
          
          <article>
            {post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl mt-14 mb-5 text-[#111] font-bold tracking-tight border-l-4 border-[#8A939E] pl-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'subheading') {
                return (
                  <h3 key={idx} className="text-xl sm:text-[1.3rem] mt-8 mb-3 text-[#111] font-semibold">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="mb-7 text-[1.1rem] sm:text-[1.15rem] text-[#3a3a3a] leading-[1.9] font-normal">
                    {block.text}
                  </p>
                );
              }
              return null;
            })}
          </article>

          {/* ── Share Row ── */}
          <ShareRow title={post.title} slug={post.slug} />
         
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="py-20 border-t border-black/5">
          <div className="main-container">
            <p className="text-[#999] text-xs uppercase tracking-widest font-semibold mb-2">Continue Reading</p>
            <h2 className="text-3xl font-bold text-[#111] mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {related.map((rel, idx) => (
                <Link key={idx} href={`/news-blogs/${rel.slug}`} className="group flex flex-col no-underline cursor-pointer">
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-5">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-[#111] text-white text-[0.6rem] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                      {rel.category}
                    </span>
                  </div>
                  <p className="text-[#999] text-xs uppercase tracking-widest mb-2">{rel.date}</p>
                  <h3 className="font-bold text-lg text-[#111] leading-snug group-hover:text-[#8A939E] transition-colors duration-300 mb-3">
                    {rel.title}
                  </h3>
                  {rel.excerpt && (
                    <p className="text-[#666] text-sm leading-relaxed line-clamp-2 mb-4">{rel.excerpt}</p>
                  )}
                  <span className="inline-flex items-center gap-2 text-[#8A939E] text-xs font-semibold uppercase tracking-wider mt-auto group-hover:gap-3 transition-all duration-300">
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/news-blogs"
                className="inline-flex items-center gap-3 bg-[#111] text-white text-sm font-semibold uppercase tracking-wider py-4 px-10 rounded-full hover:bg-[#8A939E] transition-colors duration-300"
              >
                View All Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
};

export default BlogPostPage;
