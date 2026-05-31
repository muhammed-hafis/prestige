import React from 'react';
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChoose from "./_components/WhyPrestige";
import Products from "./_components/Products";
import Discover from "./_components/Discover";
import Blogs from "./_components/Blogs";
import CTA from "./_components/CTA";
import WhyPrestige from './_components/WhyPrestige';

const Page = () => {
    return (
        <main>
            <Hero />
            <div className="relative">
                <About />
                <WhyPrestige/>
                <Products />
                {/* <Blogs /> */}
                <Discover />
                <CTA />
            </div>
        </main>
    );
};

export default Page;
