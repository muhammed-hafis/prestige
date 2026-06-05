"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TOTAL_FRAMES = 240;
// Concurrent image requests — keep low on mobile to avoid saturating bandwidth
const BATCH_SIZE = 6;

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

  // ─── Draw a specific frame on the canvas ───────────────────────────────────
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const img = imagesRef.current[index];
    if (!img) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasWidth  = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth     = img.naturalWidth  || img.width;
    const imgHeight    = img.naturalHeight || img.height;
    if (!imgWidth || !imgHeight) return;

    const imgRatio    = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;
    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawWidth  = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      drawX      = 0;
      drawY      = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth  = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      drawX      = (canvasWidth - drawWidth) / 2;
      drawY      = 0;
    }

    context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // ─── Resize canvas to pixel ratio ──────────────────────────────────────────
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    // Cap DPR: mobile = 1.5, desktop = 2 — prevents massive canvas on hi-DPI phones
    const maxDpr = isMobileDevice() ? 1.5 : 2;
    const dpr    = Math.min(window.devicePixelRatio || 1, maxDpr);
    canvas.width  = rect.width  * dpr;
    canvas.height = rect.height * dpr;

    // Disable smoothing on mobile for faster draws
    const ctx = canvas.getContext('2d');
    if (ctx && isMobileDevice()) ctx.imageSmoothingEnabled = false;

    if (currentFrameRef.current) drawFrame(currentFrameRef.current);
  };

  // ─── Load frames (batched to avoid memory/bandwidth overload on mobile) ────
  useEffect(() => {
    let isMounted  = true;
    let loadedCount = 0;

    const onProgress = () => {
      loadedCount++;
      setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
    };

    const loadBatch = (startIdx, endIdx) => {
      if (!isMounted) return;
      const promises = [];
      for (let i = startIdx; i <= endIdx && i <= TOTAL_FRAMES; i++) {
        const idx = i; // capture
        const p = new Promise((resolve) => {
          const img = new Image();
          img.src = `/animation/ezgif-frame-${pad(idx, 3)}.avif`;
          img.onload = () => {
            if (!isMounted) { resolve(); return; }
            imagesRef.current[idx] = img;
            onProgress();
            if (currentFrameRef.current === idx) drawFrame(idx);
            resolve();
          };
          img.onerror = () => { onProgress(); resolve(); };
        });
        promises.push(p);
      }
      return Promise.all(promises).then(() => {
        const next = endIdx + 1;
        if (next <= TOTAL_FRAMES && isMounted) loadBatch(next, next + BATCH_SIZE - 1);
      });
    };

    const firstImg = new Image();
    firstImg.src = '/animation/ezgif-frame-001.avif';
    firstImg.onload = () => {
      if (!isMounted) return;
      imagesRef.current[1] = firstImg;
      handleResize();
      loadedCount++;
      setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
      // Start batched loading from frame 2
      loadBatch(2, 1 + BATCH_SIZE);
    };
    firstImg.onerror = () => { onProgress(); };

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
        scrub: mobile ? 0.5 : 1,  // tighter scrub on mobile = less lag
        pin: true,
        anticipatePin: 1,
        onUpdate: () => {
          const f = Math.round(frameObj.frame);
          currentFrameRef.current = f;
          if (imagesRef.current[f]) {
            drawFrame(f);
          } else {
            let fallback = f;
            while (fallback > 1 && !imagesRef.current[fallback]) fallback--;
            if (imagesRef.current[fallback]) drawFrame(fallback);
          }
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
      6
    );

    // Headline: scale from 0 → 1 pop-up, scroll-scrubbed, slightly after sub-line
    tl.fromTo(
      headlineRef.current,
      { scale: 0, opacity: 0, ...(mobile ? {} : { filter: 'blur(4px)' }) },
      { scale: 1, opacity: 1, ...(mobile ? {} : { filter: 'blur(0px)' }), ease: 'back.out(1.4)', duration: 10 },
      6
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