"use client";
import { useEnquiry } from '@/context/EnquiryContext';

const EnquirySticky = () => {
  const { openModal } = useEnquiry();

  return (
    <button
      onClick={openModal}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] bg-[#8A939E] text-white py-6 px-3 flex flex-col items-center gap-4 group hover:bg-[#111] transition-all duration-500 rounded-l-md shadow-2xl no-underline"
    >
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
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
