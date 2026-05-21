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

      <section className="pt-28 pb-8 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-16 border-b border-black/5">
        <div className="main-container px-4 sm:px-8 text-left flex flex-col items-start" data-aos="fade-up">

          {/* Breadcrumb */}
          <nav className="font-sans flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-[#999] uppercase tracking-[0.22em] mb-5 sm:mb-8 font-bold">
            <Link href="/" className="hover:text-light-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news-blogs" className="hover:text-light-gold transition-colors">News &amp; Blogs</Link>
            <span>/</span>
            <span className="text-[#111] font-semibold">{post.title}</span>
          </nav>

          {/* Category Badge */}
          <span className="font-sans bg-[#111] text-white text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.25em] font-black px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-5 sm:mb-8">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111] font-semibold mb-4 sm:mb-7 leading-[1.2] sm:leading-[1.1] tracking-tight w-full">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="font-sans text-sm sm:text-lg lg:text-[1.1rem] text-[#555] leading-relaxed mb-5 sm:mb-8 font-light w-full">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="font-sans flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm tracking-wide text-[#777] mb-6 sm:mb-10 font-medium">
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
      <section className="py-10 sm:py-16 lg:py-20" data-aos="fade-up" data-aos-delay="100">
        <div className="main-container px-4 sm:px-8">
          
          <article>
            {post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="font-serif text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-14 sm:mb-5 text-[#111] font-semibold tracking-tight border-l-4 border-light-gold pl-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'subheading') {
                return (
                  <h3 key={idx} className="font-serif text-lg sm:text-xl mt-5 mb-2.5 sm:mt-8 sm:mb-3 text-[#111] font-semibold">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="font-sans mb-5 sm:mb-7 text-base sm:text-[1.05rem] text-[#3a3a3a] leading-[1.85] font-light">
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
        <section className="py-10 sm:py-16 lg:py-20 border-t border-black/5" data-aos="fade-up">
          <div className="main-container px-4 sm:px-8">
            <p className="font-sans text-[#999] text-xs uppercase tracking-widest font-black mb-2">Continue Reading</p>
            <h2 className="section-heading text-[#111] mb-6 sm:mb-12">Related Articles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-12">
              {related.map((rel, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="w-full">
                  <Link href={`/news-blogs/${rel.slug}`} className="group flex flex-col no-underline cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden mb-3 sm:mb-5">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="font-sans absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#111] text-white text-[0.55rem] sm:text-[0.65rem] uppercase tracking-widest font-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                        {rel.category}
                      </span>
                    </div>
                    <p className="font-sans text-[#999] text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] mb-1.5 sm:mb-3 font-medium">{rel.date}</p>
                    <h3 className="font-serif text-sm sm:text-lg text-[#111] leading-snug group-hover:text-light-gold transition-colors duration-300 mb-1.5 sm:mb-3 font-semibold line-clamp-3 sm:line-clamp-none">
                      {rel.title}
                    </h3>
                    {rel.excerpt && (
                      <p className="font-sans text-[#666] text-[0.72rem] sm:text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4 font-light">{rel.excerpt}</p>
                    )}
                    <span className="font-sans inline-flex items-center gap-1.5 sm:gap-2 text-light-gold text-[0.6rem] sm:text-xs font-bold uppercase tracking-wider mt-auto group-hover:gap-2.5 sm:group-hover:gap-3 transition-all duration-300">
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-14 text-center">
              <Link
                href="/news-blogs"
                className="font-sans inline-flex items-center gap-3 bg-[#111] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-8 sm:py-4 sm:px-10 rounded-full hover:bg-light-gold transition-colors duration-300"
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
    </main>
  );
};

export default BlogPostPage;
