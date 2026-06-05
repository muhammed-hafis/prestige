"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productCategories } from "../../app/_data/products";

const getCategoryPath = (catId) => {
  return catId;
};

const getCategoryTitle = (catId) => {
  if (catId === "tostem") return "TOSTEM Collection";
  if (catId === "ozone") return "OZONE Collection";
  if (catId === "alamin") return "ALAMIN Systems";
  return catId;
};

const getSeriesHref = (catId, serId) => {
  const path = getCategoryPath(catId);
  if (catId === "alamin") {
    return `/products/alamin#${serId}`;
  }
  return `/products/${path}/${serId}`;
};

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const navRef = useRef(null);

  const orderedCategories = ["tostem", "alamin", "ozone"];
  const sortedCategories = [...productCategories].sort((a, b) => {
    return orderedCategories.indexOf(a.id) - orderedCategories.indexOf(b.id);
  });

  const navItems = [
    { name: "Home",              href: "/" },
    { name: "About",             href: "/about" },       // scrolls to #about section on homepage
    { name: "Why Prestige",      href: "/why-prestige" }, // dedicated page
    { name: "Products",          href: "/products" },     // dedicated page
    { name: "Discover", href: "/global-portfolio-insights" }, // new page
    // { name: "News & Blogs",      href: "/news-blogs" },   // dedicated page
    { name: "Contact",           href: "/contact" },      // dedicated page
  ];

  // Navbar entrance: slide from top after hero animation ends (home page only)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nav = navRef.current;
    if (!nav) return;

    if (!isHome) {
      // Non-home pages: always visible
      gsap.set(nav, { y: 0, opacity: 1 });
      return;
    }

    // Hide navbar above viewport initially
    gsap.set(nav, { y: '-120%', opacity: 0 });

    // The hero section uses end: '+=150%', pin: true → total scroll = 150vh
    // Slide navbar in once user has scrolled past the hero pin zone
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: () => `${window.innerHeight * 1.5} top`,
      once: true,
      onEnter: () => {
        gsap.to(nav, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
        });
      },
    });

    return () => st.kill();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome]);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };


  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-[1440px] z-[1000] flex justify-between items-center rounded-full py-3 px-5 sm:px-8 lg:px-10 bg-[var(--background)]/80 backdrop-blur-xl border border-light-gold/20 transition-shadow duration-500 ${scrolled ? "shadow-xl" : "shadow-lg"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative flex-shrink-0 flex items-center"
          onClick={closeMenu}
        >
          <img src="/logo.avif" alt="Prestige" className="h-14 sm:h-16 md:h-18 w-auto object-contain" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 lg:gap-5 list-none m-0 p-0">
          {navItems.map((item, idx) => (
            <li
              key={item.name}
              className="relative group py-2"
            >
              {item.name === "Products" ? (
                <>
                  <Link
                    href={item.href}
                    className="text-[0.75rem] xl:text-[0.8rem] uppercase relative text-[#4b5563] hover:text-[#111] tracking-widest font-sans transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.name}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-light-gold transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* Desktop Cascade Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 scale-[0.98] pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-[#FAF6EC]/95 backdrop-blur-xl border border-light-gold/20 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] w-[240px]">
                      <ul className="flex flex-col gap-1 list-none p-0 m-0">
                        {sortedCategories.map((cat) => (
                           <li key={cat.id} className="relative group/cat">
                            <Link
                              href={`/products/${getCategoryPath(cat.id)}`}
                              className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl hover:bg-light-gold/15 transition-all duration-200 cursor-pointer font-sans text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[#4b5563] hover:text-[#111] w-full"
                            >
                              <span>{getCategoryTitle(cat.id)}</span>
                              <svg
                                className="w-3.5 h-3.5 text-[#4b5563] group-hover/cat:text-[#B8902A] transition-transform duration-200 group-hover/cat:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>

                            {/* Second Level: Series List Flyout */}
                            <div className="absolute top-0 left-full pl-3 opacity-0 translate-x-2 pointer-events-none group-hover/cat:opacity-100 group-hover/cat:translate-x-0 group-hover/cat:pointer-events-auto transition-all duration-300 ease-out z-50">
                              <div className="bg-[#FAF6EC]/95 backdrop-blur-xl border border-light-gold/20 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] w-[250px] flex flex-col gap-2.5">
                                {cat.series.map((ser) => (
                                  <Link
                                    key={ser.id}
                                    href={getSeriesHref(cat.id, ser.id)}
                                    className="font-sans text-[0.75rem] text-[#555] hover:text-[#111] transition-all duration-200 flex items-center gap-2 group/item py-0.5"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-light-gold scale-0 group-hover/item:scale-100 transition-transform duration-200 flex-shrink-0" />
                                    <span>{ser.name} {ser.seriesLabel || "Series"}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-[0.75rem] xl:text-[0.8rem] uppercase relative text-[#4b5563] hover:text-[#111] tracking-widest font-sans transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-light-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
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
        className={`lg:hidden fixed top-0 right-0 z-[1000] h-full w-[75vw] max-w-[320px] bg-[var(--background)]/95 backdrop-blur-2xl border-l border-light-gold/20 shadow-2xl flex flex-col pt-24 pb-10 px-8 overflow-y-auto transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Decorative top line */}
        <span className="absolute top-20 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-light-gold/50 to-transparent" />

        <ul className="flex flex-col gap-1 list-none m-0 p-0">
          {navItems.map((item, idx) => (
            <li key={item.name}>
              {item.name === "Products" ? (
                <div className="border-b border-light-gold/10">
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between gap-3 text-[0.75rem] uppercase tracking-[0.25em] font-sans text-[#4b5563] hover:text-[#111] py-4 group focus:outline-none"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? "translateX(0)" : "translateX(12px)",
                      transitionProperty: "opacity, transform, color",
                      transitionDuration: "0.35s, 0.35s, 0.2s",
                      transitionTimingFunction: "ease, ease, ease",
                      transitionDelay: menuOpen
                        ? `${80 + idx * 40}ms, ${80 + idx * 40}ms, 0ms`
                        : "0ms, 0ms, 0ms",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-0 group-hover:w-3 h-[1.5px] bg-light-gold transition-all duration-300 flex-shrink-0 ${mobileProductsOpen ? "w-3" : ""}`} />
                      {item.name}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-[#4b5563] transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mobile Collapsible Sub-menu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileProductsOpen ? "max-h-[2000px] opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-4 pl-4 pt-2 pb-2">
                      {sortedCategories.map((cat) => (
                        <div key={cat.id} className="flex flex-col gap-2">
                          <Link
                            href={`/products/${getCategoryPath(cat.id)}`}
                            onClick={closeMenu}
                            className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#B8902A] hover:text-[#111] transition-colors"
                          >
                            {getCategoryTitle(cat.id)}
                          </Link>
                          <ul className="flex flex-col gap-1.5 list-none p-0 m-0 pl-3 border-l border-light-gold/20">
                            {cat.series.map((ser) => (
                              <li key={ser.id}>
                                <Link
                                  href={getSeriesHref(cat.id, ser.id)}
                                  onClick={closeMenu}
                                  className="font-sans text-[0.72rem] text-[#6b7280] hover:text-[#111] transition-colors block py-0.5"
                                >
                                  {ser.name} {ser.seriesLabel || "Series"}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-[0.75rem] uppercase tracking-[0.25em] font-sans text-[#4b5563] hover:text-[#111] py-4 border-b border-light-gold/10 group"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(12px)",
                    transitionProperty: "opacity, transform, color",
                    transitionDuration: "0.35s, 0.35s, 0.2s",
                    transitionTimingFunction: "ease, ease, ease",
                    transitionDelay: menuOpen
                      ? `${80 + idx * 40}ms, ${80 + idx * 40}ms, 0ms`
                      : "0ms, 0ms, 0ms",
                  }}
                >
                  <span className="w-0 group-hover:w-3 h-[1.5px] bg-light-gold transition-all duration-300 flex-shrink-0" />
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default Navbar;