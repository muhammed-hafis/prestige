"use client";
import React, { useState } from "react";

export default function ConfigurationsCatalogue({
  configurations = {},
  seriesId = "",
  brand = "tostem",
}) {
  const tabKeys = Object.keys(configurations);
  const defaultTab = brand === "ozone" ? "DOOR" : "WINDOW";
  const [activeTab, setActiveTab] = useState(tabKeys[0] || defaultTab);

  if (tabKeys.length === 0) return null;

  const showToggle = brand === "tostem" ? (seriesId !== "in16") : (tabKeys.length > 1);

  const getPageItems = () => {
    if (brand === "tostem" && seriesId === "in16") {
      return Object.values(configurations).flat();
    }
    return configurations[activeTab] || [];
  };

  const pageItems = getPageItems();

  const aspectRatioClass = brand === "tostem"
    ? "aspect-[4/3] p-3 sm:p-6 bg-[#f8fafc] border border-[#e2e8f0]/60"
    : "aspect-[4/4] p-0 bg-white";

  return (
    <div className="mb-20 border-t border-[#e2e8f0] pt-16">
      <div className="text-center mb-12">
        <h3 className="font-sans text-[0.75rem] font-black tracking-[0.25em] text-[#B8902A] uppercase mb-3">
          Sash Options & Designs
        </h3>
        <h2 className="section-heading text-[#222] uppercase">
          Product Configurations Catalogue
        </h2>
      </div>

      {showToggle && (
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#f1f3f5] p-1 rounded-full border border-black/5">
            {tabKeys.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-sans px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-[#B8902A] shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                    : "text-[#666] hover:text-black"
                }`}
              >
                {tab}S
              </button>
            ))}
          </div>
        </div>
      )}

      {pageItems.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {pageItems.map((cfg, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white border border-[#e2e8f0]/80 rounded-[6px] p-3.5 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(184,144,42,0.06)] hover:-translate-y-1 hover:border-[#B8902A]/40"
            >
              <div className={`relative w-full rounded-[4px] overflow-hidden flex items-center justify-center transition-colors duration-500 ${aspectRatioClass}`}>
                <img
                  src={cfg.image}
                  alt={cfg.name}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[0.55rem] sm:text-[0.6rem] font-mono text-[#B8902A] bg-[#B8902A]/10 px-1.5 sm:px-2 py-0.5 rounded-[2px]">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-col mt-3 sm:mt-4">
                <h4 className="font-sans text-[0.72rem] sm:text-[0.8rem] font-black uppercase tracking-wider text-[#111] group-hover:text-[#B8902A] transition-colors duration-300">
                  {cfg.name}
                </h4>
                <p className="font-sans text-[0.65rem] sm:text-[0.7rem] leading-relaxed text-[#666] mt-1.5 sm:mt-2 font-light">
                  {cfg.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        brand === "ozone" && (
          <div className="text-center py-16 bg-white border border-[#e2e8f0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed font-light">
              Technical drawings and detailed system configurations for this series are available upon request. Please contact our design and specification desk for consultation.
            </p>
          </div>
        )
      )}
    </div>
  );
}
