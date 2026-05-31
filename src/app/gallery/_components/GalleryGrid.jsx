"use client";
import React, { useState, useEffect } from "react";
import { FiMaximize2, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function GalleryGrid({ images = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);



  // Handle lightbox navigations
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images.length]);

  const pageSize = 10;
  const totalItems = images.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageItems = images.slice(startIndex, endIndex);

  // Dynamic Col-Span mapping for 3-Column Alternating Layout
  const getGridColSpanClass = (index) => {
    const mod = index % 10;
    if (mod === 0 || mod === 6) {
      return "md:col-span-2 col-span-1";
    }
    return "md:col-span-1 col-span-1";
  };

  return (
    <>
      {pageItems.length === 0 ? (
        <div className="text-center py-20 bg-white/40 rounded-2xl border border-light-gold/10" data-aos="fade-up">
          <p className="font-serif text-lg text-gray-500 italic mb-2">No items found</p>
        </div>
      ) : (
        <div className="space-y-12">
          
          {/* 3-Column Alternating Asymmetric Grid */}
          <div 
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-[180px] sm:auto-rows-[280px] md:auto-rows-[420px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {pageItems.map((item, index) => {
              const globalIndex = startIndex + index;
              const colSpanClass = getGridColSpanClass(index);
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(globalIndex)}
                  className={`relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1 rounded-[10px] border border-light-gold/15 bg-white/30 shadow-md hover:shadow-xl hover:border-light-gold/45 h-full ${colSpanClass}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-[10px] transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Premium visual-only overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FAF6EC]/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300">
                      <FiMaximize2 className="w-5 h-5 text-white" />
                    </div>
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
      )}

      {/* Premium Lightbox Modal (Visual Only, No Text) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[5000] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[6000] w-12 h-12 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
            title="Close Gallery (Esc)"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Prev Image Control */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-6 z-[6000] w-12 h-12 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
            title="Previous Project (Left Arrow)"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Display */}
          <div 
            className="relative max-w-[85vw] max-h-[85vh] aspect-auto shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt="Architectural Portfolio Design Reference"
              className="max-w-[85vw] max-h-[85vh] object-contain rounded-lg border border-white/5"
            />
          </div>

          {/* Next Image Control */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-6 z-[6000] w-12 h-12 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 focus:outline-none cursor-pointer"
            title="Next Project (Right Arrow)"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
