"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid double initialization
    if (window.__lenisInstance) {
      window.__lenisInstance.destroy();
      window.__lenisInstance = null;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 0.9,
    });

    window.__lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Intercept click on hash anchors for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("/#")) {
        const hash = href.substring(1);
        const element = document.querySelector(hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: 0, duration: 1.2 });
          history.pushState(null, "", href);
        }
      } else if (href && href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: 0, duration: 1.2 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Resize handler
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("prestige:ready", handleResize);

    // Setup ResizeObserver to observe body height changes and resize Lenis
    let resizeObserver;
    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    // Scroll to hash on initial load if present
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          lenis.scrollTo(element, { offset: 0, immediate: false, duration: 1.2 });
        }, 300);
      }
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("prestige:ready", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenisInstance = null;
    };
  }, []);

  // Scroll to top or to active hash on page/pathname transitions
  useEffect(() => {
    if (window.__lenisInstance) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            window.__lenisInstance.scrollTo(element, { offset: 0, duration: 1.2, immediate: false });
            window.__lenisInstance.resize();
          }, 100);
          return;
        }
      }
      window.__lenisInstance.scrollTo(0, { immediate: true });
      // Request resize on path changes to handle layout shifts
      setTimeout(() => {
        window.__lenisInstance?.resize();
      }, 50);
    }
  }, [pathname]);

  return null;
}
