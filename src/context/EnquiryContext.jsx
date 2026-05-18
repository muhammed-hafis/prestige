"use client";
import React, { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <EnquiryContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </EnquiryContext.Provider>
    );
};

export const useEnquiry = () => {
    const context = useContext(EnquiryContext);
    if (!context) {
        throw new Error('useEnquiry must be used within an EnquiryProvider');
    }
    return context;
};
