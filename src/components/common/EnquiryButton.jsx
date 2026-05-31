"use client";
import React from 'react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function EnquiryButton({ children, className, ...props }) {
    const { openModal } = useEnquiry();

    return (
        <button onClick={openModal} className={className} {...props}>
            {children}
        </button>
    );
}
