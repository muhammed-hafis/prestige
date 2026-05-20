"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Why Prestige", href: "/#why-choose" },
    { name: "Products", href: "/#products" },
    { name: "Gallery", href: "/#gallery" },
    { name: "News & Blogs", href: "/news-blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      // On home page, wait until they scroll past the Hero animation (approx 1.4x height on mobile, 2.2x on desktop)
      const threshold = isHome ? window.innerHeight * (isMobile ? 1.4 : 2.2) : 20;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Navbar is visible immediately on other pages, or after scroll threshold on home
  const isVisible = !isHome || scrolled;

  return (
    <>
      <nav
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-[1440px] z-[1000] flex justify-between items-center rounded-full py-3 px-5 sm:px-8 lg:px-10 bg-[var(--background)]/80 backdrop-blur-xl border border-light-gold/20 transition-all duration-500 ${scrolled ? "shadow-xl" : "shadow-lg"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24 pointer-events-none"}`}
        data-aos={isHome ? undefined : "fade-down"}
        data-aos-duration="700"
        data-aos-delay="200"
        data-aos-easing="ease-out-quart"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl tracking-[0.3em] text-[#111] font-serif relative flex-shrink-0"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="350"
          onClick={closeMenu}
        >
          <span className="relative">
            PRESTIGE
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-light-gold to-transparent opacity-50" />
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12 list-none m-0 p-0">
          {navItems.map((item, idx) => (
            <li
              key={item.name}
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay={400 + idx * 60}
            >
              <Link
                href={item.href}
                className="text-[0.75rem] xl:text-[0.8rem] uppercase relative group text-[#4b5563] hover:text-[#111] tracking-widest font-sans transition-colors duration-200"
              >
                {item.name}
                <span className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-light-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger — visible on < lg */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none flex-shrink-0"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[1.5px] bg-[#4b5563] origin-center transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45 bg-[#111]" : ""
              }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#4b5563] transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#4b5563] origin-center transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45 bg-[#111]" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-[1000] h-full w-[75vw] max-w-[320px] bg-[var(--background)]/95 backdrop-blur-2xl border-l border-light-gold/20 shadow-2xl flex flex-col pt-24 pb-10 px-8 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Decorative top line */}
        <span className="absolute top-20 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-light-gold/50 to-transparent" />

        <ul className="flex flex-col gap-1 list-none m-0 p-0">
          {navItems.map((item, idx) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="flex items-center gap-3 text-[0.75rem] uppercase tracking-[0.25em] font-sans text-[#4b5563] hover:text-[#111] py-4 border-b border-light-gold/10 transition-colors duration-200 group"
                style={{
                  transitionDelay: menuOpen ? `${80 + idx * 40}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(12px)",
                  transition: `opacity 0.35s ease ${80 + idx * 40}ms, transform 0.35s ease ${80 + idx * 40}ms, color 0.2s`,
                }}
              >
                <span className="w-0 group-hover:w-3 h-[1.5px] bg-light-gold transition-all duration-300 flex-shrink-0" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom logo watermark */}
        <div className="mt-auto text-center">
          <span className="text-[0.65rem] tracking-[0.4em] text-[#4b5563]/40 font-serif uppercase">
            PRESTIGE
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;