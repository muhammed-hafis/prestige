"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft, FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/gallery1/image1.avif",
    title: "Minimalist Sliding Facade",
    colSpan: "col-span-2"
  },
  {
    id: 2,
    src: "/images/gallery1/image2.avif",
    title: "Luxury Glass Entrance",
    colSpan: "col-span-1"
  },
  {
    id: 3,
    src: "/images/gallery1/image3.avif",
    title: "High-Rise Curtain Wall",
    colSpan: "col-span-1"
  },
  {
    id: 4,
    src: "/images/gallery1/image4.avif",
    title: "Minimalist Pivot Door",
    colSpan: "col-span-1"
  },
  {
    id: 5,
    src: "/images/gallery1/image5.avif",
    title: "Frameless Structural Partition",
    colSpan: "col-span-1"
  },
  {
    id: 6,
    src: "/images/gallery1/image6.avif",
    title: "Panoramic Double-Height Atrium",
    colSpan: "col-span-1"
  },
  {
    id: 7,
    src: "/images/gallery1/image7.avif",
    title: "Acoustic Insulation Window",
    colSpan: "col-span-2"
  },
  {
    id: 8,
    src: "/images/gallery1/image8.avif",
    title: "Insulated Thermal Break Slider",
    colSpan: "col-span-2"
  },
  {
    id: 9,
    src: "/images/gallery1/image9.avif",
    title: "Concealed Track Balcony Door",
    colSpan: "col-span-1"
  },
  {
    id: 10,
    src: "/images/gallery1/image10.avif",
    title: "Pre-Engineered Aluminum Casement",
    colSpan: "col-span-3"
  },
  {
    id: 11,
    src: "/images/gallery1/image11.avif",
    title: "SBC-Compliant Glazing Facade",
    colSpan: "col-span-3"
  },
  {
    id: 12,
    src: "/images/gallery1/image12.avif",
    title: "Thermally Broken Folding System",
    colSpan: "col-span-2"
  },
  {
    id: 13,
    src: "/images/gallery1/image13.avif",
    title: "Structural Glazing Corner",
    colSpan: "col-span-1"
  },
  {
    id: 14,
    src: "/images/gallery1/image14.avif",
    title: "Slimline Casement Vent",
    colSpan: "col-span-3"
  }
];

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageSize = 10;
  const totalPages = isMobile ? 1 : Math.ceil(GALLERY_IMAGES.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pageItems = isMobile ? GALLERY_IMAGES : GALLERY_IMAGES.slice(startIndex, startIndex + pageSize);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] selection:bg-light-gold selection:text-white pt-28 pb-20 sm:pt-36 sm:pb-32 overflow-hidden relative">
      
      {/* Decorative technical grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-light-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-light-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="main-container relative z-10 px-4 sm:px-10 lg:px-16">
        
        {/* Back Link */}
        <div className="mb-8" data-aos="fade-up">
          <Link
            href="/global-portfolio-insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] hover:text-[#B8902A] transition-colors duration-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p className="mb-4 sm:mb-5 section-label text-light-gold">
            Visual Showcase
          </p>
          <h1 className="mb-5 sm:mb-6 section-heading text-[#111]">
            Architectural Gallery
          </h1>
          <div className="w-8 sm:w-10 h-0.5 bg-light-gold mx-auto" />
        </div>

        {/* Bento Grid (Same Height, Different Widths) */}
        <div 
          className="grid grid-cols-3 gap-3 sm:gap-6 auto-rows-[120px] sm:auto-rows-[250px] lg:auto-rows-[420px]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {pageItems.map((item, index) => {
            const globalIndex = startIndex + index;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(globalIndex)}
                className={`relative overflow-hidden group cursor-pointer rounded-2xl border border-light-gold/15 bg-white/30 shadow-sm hover:shadow-xl hover:border-light-gold/40 transition-all duration-500 hover:-translate-y-1 h-full ${item.colSpan}`}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Maximize Icon */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 md:opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none">
                  <FiMaximize2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 pt-8 border-t border-light-gold/15 mt-16" data-aos="fade-up">
            
            {/* Previous Button */}
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }
              }}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border transition-all duration-300 focus:outline-none flex items-center justify-center ${
                currentPage === 1
                  ? "border-light-gold/10 text-gray-300 pointer-events-none"
                  : "border-light-gold/20 text-[#B8902A] hover:text-white hover:bg-light-gold hover:border-light-gold cursor-pointer"
              }`}
              aria-label="Previous Page"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const isActive = currentPage === p;
                return (
                  <button
                    key={p}
                    onClick={() => {
                      setCurrentPage(p);
                      window.scrollTo({ top: 380, behavior: "smooth" });
                    }}
                    className={`w-10 h-10 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none cursor-pointer flex items-center justify-center ${
                      isActive
                        ? "bg-light-gold border border-light-gold text-white shadow-md shadow-light-gold/10"
                        : "bg-white/40 border border-light-gold/10 text-gray-600 hover:text-black hover:bg-white hover:border-light-gold/30"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }
              }}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border transition-all duration-300 focus:outline-none flex items-center justify-center ${
                currentPage === totalPages
                  ? "border-light-gold/10 text-gray-300 pointer-events-none"
                  : "border-light-gold/20 text-[#B8902A] hover:text-white hover:bg-light-gold hover:border-light-gold cursor-pointer"
              }`}
              aria-label="Next Page"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[5000] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-[6000] w-12 h-12 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
            title="Close Gallery (Esc)"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Prev Image Control */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-6 z-[6000] w-12 h-12 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
            title="Previous (Left Arrow)"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Display */}
          <div 
            className="relative max-w-[85vw] max-h-[85vh] aspect-auto shadow-2xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              className="max-w-[85vw] max-h-[80vh] object-contain rounded-lg border border-white/5"
            />
          </div>

          {/* Next Image Control */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-6 z-[6000] w-12 h-12 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
            title="Next (Right Arrow)"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}

