"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TOTAL_FRAMES = 240;
// Max simultaneous requests — browser + HTTP/2 handle multiplexing, but we
// cap here to avoid hammering slow connections (increase freely on fast links)
const MAX_CONCURRENT = 30;

const isMobileDevice = () =>
  typeof window !== 'undefined' && window.innerWidth < 768;

const pad = (num, size) => {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
};

const Hero = () => {
  const containerRef    = useRef(null);
  const canvasRef       = useRef(null);
  const textRef         = useRef(null);
  const sublineRef      = useRef(null);
  const headlineRef     = useRef(null);
  const scrollPromptRef = useRef(null);
  const preloaderRef    = useRef(null);
  const imagesRef       = useRef([]);
  const currentFrameRef = useRef(1);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // ─── Cached draw state (recomputed only on resize) ─────────────────────────
  const ctxRef       = useRef(null);   // cached 2D context
  const drawParamRef = useRef(null);   // cached cover-fit geometry { x, y, w, h }
  const rafRef       = useRef(null);   // pending requestAnimationFrame id

  // ─── Draw a specific frame on the canvas ───────────────────────────────────
  // Uses cached context + geometry; only paints on a real animation frame.
  const drawFrame = (index) => {
    const ctx = ctxRef.current;
    const p   = drawParamRef.current;
    const img = imagesRef.current[index];
    if (!ctx || !p || !img) return;

    ctx.clearRect(0, 0, p.cw, p.ch);
    ctx.drawImage(img, p.x, p.y, p.w, p.h);
  };

  // Schedule a draw through RAF — collapses multiple onUpdate calls into one
  // paint per display frame (prevents redundant canvas redraws mid-scroll).
  const scheduleDrawFrame = (index) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      drawFrame(index);
    });
  };

  // ─── Resize canvas + rebuild cached draw params ────────────────────────────
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    // Cap DPR: mobile = 1.5, desktop = 2 — prevents massive canvas on hi-DPI phones
    const maxDpr = isMobileDevice() ? 1.5 : 2;
    const dpr    = Math.min(window.devicePixelRatio || 1, maxDpr);
    const cw = rect.width  * dpr;
    const ch = rect.height * dpr;
    canvas.width  = cw;
    canvas.height = ch;

    // Cache the 2D context once (avoid repeated getContext calls)
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (isMobileDevice()) ctx.imageSmoothingEnabled = false;
    ctxRef.current = ctx;

    // Rebuild cover-fit geometry using the first available loaded image
    const sampleImg = imagesRef.current.find(Boolean);
    if (sampleImg) {
      const iw = sampleImg.naturalWidth  || sampleImg.width;
      const ih = sampleImg.naturalHeight || sampleImg.height;
      if (iw && ih) {
        const imgRatio    = iw / ih;
        const canvasRatio = cw / ch;
        let x, y, w, h;
        if (canvasRatio > imgRatio) {
          w = cw; h = cw / imgRatio; x = 0; y = (ch - h) / 2;
        } else {
          w = ch * imgRatio; h = ch; x = (cw - w) / 2; y = 0;
        }
        drawParamRef.current = { cw, ch, x, y, w, h };
      }
    } else {
      // No image yet — store dims so params are rebuilt when first frame arrives
      drawParamRef.current = null;
    }

    if (currentFrameRef.current) drawFrame(currentFrameRef.current);
  };

  // ─── Load frames (concurrent with semaphore to respect slow connections) ────
  useEffect(() => {
    let isMounted   = true;
    let loadedCount = 0;

    const onProgress = (idx, img) => {
      if (!isMounted) return;
      if (img) {
        imagesRef.current[idx] = img;
        // Build draw params as soon as the very first image arrives
        if (!drawParamRef.current) handleResize();
      }
      loadedCount++;
      setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
      if (img && currentFrameRef.current === idx) scheduleDrawFrame(idx);
    };

    // Semaphore: allows MAX_CONCURRENT requests in-flight at once
    const loadWithSemaphore = (() => {
      let active = 0;
      const queue = [];
      const next = () => {
        if (!queue.length || active >= MAX_CONCURRENT) return;
        active++;
        const { idx, resolve } = queue.shift();
        const img = new Image();
        img.src = `/animation/ezgif-frame-${pad(idx, 3)}.avif`;
        img.onload = () => { onProgress(idx, img); active--; resolve(); next(); };
        img.onerror = () => { onProgress(idx, null); active--; resolve(); next(); };
      };
      return (idx) => new Promise((resolve) => { queue.push({ idx, resolve }); next(); });
    })();

    // Frame 1 — load eagerly and immediately set up canvas
    const firstImg = new Image();
    firstImg.src = '/animation/ezgif-frame-001.avif';
    firstImg.onload = () => {
      if (!isMounted) return;
      imagesRef.current[1] = firstImg;
      handleResize();
      loadedCount++;
      setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
    };
    firstImg.onerror = () => { if (isMounted) { loadedCount++; setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100)); } };

    // Frames 2–240 — fire all concurrently (semaphore caps in-flight count)
    for (let i = 2; i <= TOTAL_FRAMES; i++) loadWithSemaphore(i);

    window.addEventListener('resize', handleResize);
    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── ScrollTrigger: frame playback + text reveals ──────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const mobile = isMobileDevice();
    const frameObj = { frame: 1 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=150%',
        scrub: mobile ? 0.3 : 0.3,  // tight scrub = animation tracks scroll closely
        pin: true,
        anticipatePin: 1,
        onUpdate: () => {
          const f = Math.round(frameObj.frame);
          currentFrameRef.current = f;
          // Rebuild draw params on first scroll if they weren't ready at resize
          if (!drawParamRef.current) handleResize();
          const target = imagesRef.current[f]
            ? f
            : (() => { let fb = f; while (fb > 1 && !imagesRef.current[fb]) fb--; return fb; })();
          scheduleDrawFrame(target);
        },
      },
    });

    // Frame playback across full scroll duration
    tl.to(frameObj, { frame: TOTAL_FRAMES, snap: 'frame', ease: 'none', duration: 10 }, 0);

    // Sub-line: scale from 0 → 1 pop-up, scroll-scrubbed, starts at ~70% of scroll
    // blur() is skipped on mobile — it's a very expensive GPU compositing op
    tl.fromTo(
      sublineRef.current,
      { scale: 0, opacity: 0, ...(mobile ? {} : { filter: 'blur(4px)' }) },
      { scale: 1, opacity: 1, ...(mobile ? {} : { filter: 'blur(0px)' }), ease: 'back.out(1.4)', duration: 10 },
      5
    );

    // Headline: scale from 0 → 1 pop-up, scroll-scrubbed, slightly after sub-line
    tl.fromTo(
      headlineRef.current,
      { scale: 0, opacity: 0, ...(mobile ? {} : { filter: 'blur(4px)' }) },
      { scale: 1, opacity: 1, ...(mobile ? {} : { filter: 'blur(0px)' }), ease: 'back.out(1.4)', duration: 10 },
      5
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── On 100% load: animated preloader exit → hero entrance ─────────────────
  useEffect(() => {
    if (loadingProgress < 100) return;

    ScrollTrigger.refresh();
    drawFrame(1);

    const preloader = preloaderRef.current;
    const canvas    = canvasRef.current;
    const overlay   = containerRef.current?.querySelector('[data-overlay]');

    if (!preloader) return;

    // Set canvas starting state for entrance animation
    gsap.set(canvas, { scale: 1.06, opacity: 0 });
    if (overlay) gsap.set(overlay, { opacity: 0 });

    const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Preloader fades out
    entrance.to(preloader, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        preloader.style.pointerEvents = 'none';
      },
    });

    // 2. Canvas zooms gently into place
    entrance.to(
      canvas,
      { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' },
      '-=0.2'
    );

    // 3. Overlay fades in for depth
    if (overlay) {
      entrance.to(
        overlay,
        { opacity: 1, duration: 1, ease: 'power2.out' },
        '-=1.1'
      );
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingProgress]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-[#09090a] select-none"
      style={{ overflow: 'clip' }}
    >
      {/* Canvas — on its own GPU compositor layer via will-change */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ display: 'block', willChange: 'transform' }}
      />

      {/* Dark overlay */}
      <div
        data-overlay
        className="absolute inset-0 bg-black/45 z-20 pointer-events-none"
      />

      {/* Text overlay */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-white z-30 px-3 sm:px-5 lg:px-8 text-center pointer-events-none"
      >
        <div className="w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-6xl mx-auto">
          <h1 className="mb-0 flex flex-col items-center gap-1 sm:gap-2">
            {/* Sub-line — starts invisible; revealed by scroll timeline */}
            <span
              ref={sublineRef}
              className="block font-sans font-light tracking-widest text-white/95 whitespace-normal sm:whitespace-nowrap"
              style={{
                fontSize: 'clamp(0.65rem, 1.8vw, 1.1rem)',
                lineHeight: 1.25,
                letterSpacing: '0.15em',
                textShadow:
                  '0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
                opacity: 0,
                scale: 0,
                display: 'inline-block',
                willChange: 'transform, opacity, filter',
                transformOrigin: 'center center',
              }}
            >
              Experience our premium system
            </span>

            {/* Headline */}
            <span
              ref={headlineRef}
              className="block font-serif font-bold uppercase text-light-gold whitespace-normal sm:whitespace-nowrap"
              style={{
                fontSize: 'clamp(1.2rem, 3.5vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                textShadow:
                  '0 4px 12px rgba(0,0,0,0.95), 0 8px 32px rgba(0,0,0,0.8), 0 20px 80px rgba(0,0,0,0.6), 0 0 120px rgba(180,140,60,0.25)',
                opacity: 0,
                scale: 0,
                display: 'inline-block',
                willChange: 'transform, opacity, filter',
                transformOrigin: 'center center',
              }}
            >
              Aluminium doors &amp; windows
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollPromptRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2 text-white/60 pointer-events-none hidden"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-white/80">
          Scroll to Explore
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 relative">
          <div className="w-1.5 h-1.5 bg-light-gold rounded-full scroll-wheel relative" />
        </div>
      </div>

      {/* Preloader — always in DOM to avoid GSAP pin-spacer conflicts */}
      <div
        ref={preloaderRef}
        className="absolute inset-0 bg-[#09090a] z-50 flex flex-col items-center justify-center text-white"
        style={{
          pointerEvents: loadingProgress < 100 ? 'auto' : 'none',
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <img
            src="/logo.avif"
            alt="Prestige"
            className="h-16 w-auto object-contain animate-pulse"
          />
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#C5A028] font-bold">
              Preparing Experience
            </span>
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-[#C5A028] transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <span className="font-sans text-[10px] tracking-[0.1em] text-white/40">
              {loadingProgress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;