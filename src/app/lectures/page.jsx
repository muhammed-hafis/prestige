import React from 'react';
import LectureCard from '../_components/LectureCard';
import { journalArticles } from '../_data/journal';

export const metadata = {
  title: 'Technical Lectures & Journal | Prestige Architectural Solutions',
  description: 'Deep dives into the science of thermal break systems, climate engineering, and modern structural design satisfying the Saudi Building Code (SBC).',
};

export default function LecturesPage() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 overflow-hidden border-b border-black/5">
        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]
                    [background-image:radial-gradient(var(--light-gold)_0.8px,transparent_0.8px)]
                    [background-size:24px_24px]" />

        <div className="main-container text-center relative z-10 px-4 sm:px-8" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            PRESTIGE JOURNAL
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            Technical Lectures &amp; <span className="text-light-gold font-semibold">Journal</span>
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto mb-5 sm:mb-7" />
          <p className="section-desc text-[#555] mx-auto max-w-xs sm:max-w-xl lg:max-w-2xl font-light">
            Our technical journal translates complex international material physics into practical engineering solutions for the Gulf environment. Explore calculations, wind-load resistance, dampening, and Saudi Building Code (SBC) thermal compliance.
          </p>
        </div>
      </section>

      {/* Lectures Content */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="main-container max-w-6xl mx-auto px-4 sm:px-8">
          {/* Grid — 2 cols on mobile, 3 on large */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-y-16">
            {journalArticles.map((post, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <LectureCard post={post} />
              </div>
            ))}
          </div>

          {/* Pagination (kept for future scale matching blogs page structure) */}
          {journalArticles.length > 9 && (
            <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center items-center gap-2" data-aos="fade-up" data-aos-delay="100">
              <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors">
                &lt;
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm font-semibold text-white bg-light-gold rounded-sm shadow-md">
                1
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm text-[#666] hover:text-[#111] transition-colors">
                &gt;
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
