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

    requestAnimationFrame(raf);

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
          }, 100);
          return;
        }
      }
      window.__lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
