'use client';

import React, { useState } from 'react';

import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa';

import {
  FiCopy,
  FiCheck,
} from 'react-icons/fi';

export default function ShareRow({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://prestigesystems.in/news-blogs/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const socialClass =
    'w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95';

  return (
    <div
      className="
        mt-12 sm:mt-16
        pt-8 sm:pt-10
        border-t border-gray-200
        flex flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
      "
    >
      {/* Left */}
      <div className="flex flex-col gap-1">
        <span
          className="
            text-[10px] sm:text-xs
            uppercase tracking-[0.25em]
            text-[#999]
            font-semibold
          "
        >
          Share this article
        </span>

        <p className="text-xs sm:text-sm text-[#666]">
          Share with your friends and network
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex items-center flex-wrap gap-3">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            title + ' ' + shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className={`${socialClass} bg-[#25D366] hover:shadow-[0_8px_20px_rgba(37,211,102,0.35)]`}
        >
          <FaWhatsapp className="text-sm sm:text-base" />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className={`${socialClass} bg-[#0A66C2] hover:shadow-[0_8px_20px_rgba(10,102,194,0.35)]`}
        >
          <FaLinkedinIn className="text-sm sm:text-base" />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className={`${socialClass} bg-[#1877F2] hover:shadow-[0_8px_20px_rgba(24,119,242,0.35)]`}
        >
          <FaFacebookF className="text-sm sm:text-base" />
        </a>

        {/* Copy */}
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          title={copied ? 'Copied!' : 'Copy link'}
          className="
            w-10 h-10 sm:w-11 sm:h-11
            rounded-full
            bg-[#f3f3f3]
            flex items-center justify-center
            text-[#555]
            transition-all duration-300
            hover:bg-[#111]
            hover:text-white
            hover:scale-110
            active:scale-95
          "
        >
          {copied ? (
            <FiCheck className="text-sm sm:text-base" />
          ) : (
            <FiCopy className="text-sm sm:text-base" />
          )}
        </button>
      </div>
    </div>
  );
}