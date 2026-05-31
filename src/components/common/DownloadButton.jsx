"use client";
import React from 'react';

export default function DownloadButton({ docName, children, className, ...props }) {
    const handleDownload = () => {
        alert(`Starting download for: ${docName}`);
    };

    return (
        <button onClick={handleDownload} className={className} {...props}>
            {children}
        </button>
    );
}
