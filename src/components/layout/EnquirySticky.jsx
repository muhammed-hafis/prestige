"use client";
import { useEnquiry } from '@/context/EnquiryContext';

const EnquirySticky = () => {
  const { openModal } = useEnquiry();

  return (
    <button
      onClick={openModal}
      className="fixed right-5 bottom-8 z-[200] group flex flex-col items-center gap-2 cursor-pointer"
      aria-label="Open Enquiry"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-light-gold/30 animate-ping opacity-75 pointer-events-none" />

      {/* Main pill */}
      <span className="relative flex items-center gap-2.5 bg-[#111] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.35)] group-hover:shadow-[0_8px_30px_rgba(197,160,40,0.4)] group-hover:bg-light-gold transition-all duration-400 border border-light-gold/30 group-hover:border-light-gold">
        {/* Chat icon */}
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.839L3 21l1.339-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
          Enquire Now
        </span>
      </span>
    </button>
  );
};


export default EnquirySticky;
