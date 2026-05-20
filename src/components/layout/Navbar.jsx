"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Why Prestige', href: '/#why-choose' },
    { name: 'Products', href: '/#products' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'News & Blogs', href: '/news-blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  const navbarClasses = "fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1440px] z-[1000] flex justify-between items-center rounded-full py-3 px-10 bg-[var(--background)]/80 backdrop-blur-xl border border-light-gold/20 shadow-lg";
  const logoClasses = "text-xl tracking-[0.3em] text-[#111] font-serif";

  return (
    <nav className={navbarClasses}>
      <Link href="/" className={logoClasses}>
        <span className="relative">
          PRESTIGE
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-light-gold to-transparent opacity-50"></span>
        </span>
      </Link>
      
      <ul className="hidden lg:flex items-center gap-12 list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className="text-[0.8rem] uppercase relative group text-[#4b5563] hover:text-[#111]"
            >
              {item.name}
              <span className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-light-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>


    </nav>
  );
};

export default Navbar;
