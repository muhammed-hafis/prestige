"use client";
import { useEnquiry } from '@/context/EnquiryContext';

const EnquirySticky = () => {
  const { openModal } = useEnquiry();

  return (
    <button
      onClick={openModal}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] bg-[#0c0d0e]/95 backdrop-blur-md text-white py-6 px-3.5 flex flex-col items-center gap-4 group hover:bg-light-gold border-l-2 border-light-gold transition-all duration-500 rounded-l-xl shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_35px_rgba(197,160,40,0.3)] no-underline cursor-pointer"
    >
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">
        Enquire Now
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-4 h-4 group-hover:translate-y-1 transition-transform"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 14l-7 7-7-7M12 21V3" />
      </svg>
    </button>
  );
};


export default EnquirySticky;
