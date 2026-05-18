"use client";
import React, { useEffect } from 'react';
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChoose from "./_components/WhyChoose";
import Products from "./_components/Products";
import Testimonials from "./_components/Testimonials";
import Blogs from "./_components/Blogs";
import CTA from "./_components/CTA";

const Page = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <div className="relative">
                <About />
                <WhyChoose />
                <Products />
                <Testimonials />
                <Blogs />
                <CTA />
            </div>
        </main>
    );
};

export default Page;
