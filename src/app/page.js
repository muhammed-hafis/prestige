import React from 'react';
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChoose from "./_components/WhyChoose";
import Products from "./_components/Products";
import Testimonials from "./_components/Testimonials";
import Blogs from "./_components/Blogs";
import CTA from "./_components/CTA";

const Page = () => {
    return (
        <main>
            <Hero />
            <div className="relative">
                <About />
                <WhyChoose />
                <Products />
                <Blogs />
                <Testimonials />
                <CTA />
            </div>
        </main>
    );
};

export default Page;
