"use client";
import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const INITIAL_STEP = 2;

// dvh falls back to vh — avoids iOS URL-bar resize jitter
const vh = () => {
  if (typeof window === 'undefined') return 800;
  return window.visualViewport?.height
    ?? document.documentElement.clientHeight
    ?? window.innerHeight;
};
const vw = () => {
  if (typeof window === 'undefined') return 1280;
  return document.documentElement.clientWidth ?? window.innerWidth;
};

const Hero = () => {
  const trackRef            = useRef(null);
  const canvasRef           = useRef(null);
  const imagesRef           = useRef([]);
  const [loadedInitial, setLoadedInitial] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const targetProgressRef    = useRef(0);
  const currentProgressRef   = useRef(0);
  const velocityRef          = useRef(0);
  const currentFrameRef      = useRef(1);
  const animationFinishedRef = useRef(false);
  const rafIdRef             = useRef(null);
  const isTickingRef         = useRef(false);
  const lastFrameRef         = useRef(-1);
  const scrollIndicatorRef   = useRef(null);
  const contentRef           = useRef(null);
  const resizeTimerRef       = useRef(null);

  // ─── Cover-scale draw ────────────────────────────────────────────────────────
  const drawFrame = (ctx, canvas, img) => {
    if (!img) return;
    const imgW = img.naturalWidth  || img.width;
    const imgH = img.naturalHeight || img.height;
    if (!imgW || !imgH) return;

    const cW = canvas.width;
    const cH = canvas.height;
    const imgRatio    = imgW / imgH;
    const canvasRatio = cW  / cH;

    let dW = cW, dH = cH, oX = 0, oY = 0;
    if (canvasRatio > imgRatio) {
      dH = cW / imgRatio;
      oY = (cH - dH) / 2;
    } else {
      dW = cH * imgRatio;
      oX = (cW - dW) / 2;
    }
    ctx.drawImage(img, oX, oY, dW, dH);
  };

  const getClosestLoadedFrame = (targetIndex) => {
    if (imagesRef.current[targetIndex]) return imagesRef.current[targetIndex];
    for (let i = targetIndex - 1; i >= 1; i--) {
      if (imagesRef.current[i]) return imagesRef.current[i];
    }
    for (let i = targetIndex + 1; i <= TOTAL_FRAMES; i++) {
      if (imagesRef.current[i]) return imagesRef.current[i];
    }
    return null;
  };

  // ─── Image Preloading ────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width  = vw();
    canvas.height = vh();
    const ctx = canvas.getContext('2d', { alpha: false });

    const loadFrame = (index) =>
      new Promise((resolve) => {
        if (imagesRef.current[index]) { resolve(); return; }
        const img = new Image();
        img.src = `/animation/ezgif-frame-${String(index).padStart(3, '0')}.avif`;
        img.onload  = () => { imagesRef.current[index] = img; resolve(); };
        img.onerror = () => resolve();
      });

    const initialIndices = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += INITIAL_STEP) initialIndices.push(i);
    if (initialIndices[initialIndices.length - 1] !== TOTAL_FRAMES) {
      initialIndices.push(TOTAL_FRAMES);
    }

    Promise.all(initialIndices.map(loadFrame)).then(() => {
      setLoadedInitial(true);
      const firstImg = getClosestLoadedFrame(1);
      if (firstImg) drawFrame(ctx, canvas, firstImg);

      const remaining  = [];
      const initialSet = new Set(initialIndices);
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!initialSet.has(i)) remaining.push(i);
      }

      let idx = 0;
      const loadNextChunk = () => {
        const chunkSize = 8;
        const end = Math.min(idx + chunkSize, remaining.length);
        const promises = [];
        while (idx < end) promises.push(loadFrame(remaining[idx++]));
        Promise.all(promises).then(() => {
          if (idx < remaining.length) {
            if (typeof requestIdleCallback !== 'undefined') {
              requestIdleCallback(loadNextChunk, { timeout: 200 });
            } else {
              setTimeout(loadNextChunk, 16);
            }
          }
        });
      };

      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(loadNextChunk, { timeout: 200 });
      } else {
        setTimeout(loadNextChunk, 16);
      }
    });

    // Debounced resize — also handles visualViewport changes on iOS
    const handleResize = () => {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        canvas.width  = vw();
        canvas.height = vh();
        const img = getClosestLoadedFrame(currentFrameRef.current);
        if (img) drawFrame(ctx, canvas, img);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    // visualViewport fires on iOS when the URL bar collapses — use it
    window.visualViewport?.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.visualViewport?.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimerRef.current);
    };
  }, []);

  // ─── Spring rAF Loop & Scroll Handler ────────────────────────────────────────
  useEffect(() => {
    if (!loadedInitial) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!ctx) return;

    const STIFFNESS  = 180;
    const DAMPING    = 22;
    const MASS       = 1;
    const TIMESTEP   = 1 / 60;
    const REST_DELTA = 0.000015;

    const updatePosition = (progress) => {
      if (scrollIndicatorRef.current) {
        const opacity = Math.max(0, 1 - progress * 8);
        scrollIndicatorRef.current.style.opacity = opacity;
      }

      const TEXT_START = 0.55;
      const TEXT_END   = 0.85;
      const rawT   = Math.max(0, Math.min(1, (progress - TEXT_START) / (TEXT_END - TEXT_START)));
      const easedT = 1 - (1 - rawT) * (1 - rawT);

      if (contentRef.current) {
        contentRef.current.style.opacity   = easedT;
        contentRef.current.style.transform = `scale(${easedT})`;
      }

      const frameProgress = Math.min(1, progress / 0.85);
      const frameIndex    = Math.max(1, Math.min(TOTAL_FRAMES,
        Math.round(frameProgress * (TOTAL_FRAMES - 1)) + 1
      ));
      currentFrameRef.current = frameIndex;

      if (frameIndex !== lastFrameRef.current) {
        const img = getClosestLoadedFrame(frameIndex);
        if (img) drawFrame(ctx, canvas, img);
        lastFrameRef.current = frameIndex;
      }

      const finished = frameIndex === TOTAL_FRAMES;
      if (finished !== animationFinishedRef.current) {
        animationFinishedRef.current = finished;
        setAnimationFinished(finished);
      }
    };

    const tick = () => {
      const target   = targetProgressRef.current;
      const current  = currentProgressRef.current;
      const velocity = velocityRef.current;

      const springForce  = -STIFFNESS * (current - target);
      const dampingForce = -DAMPING   * velocity;
      const acceleration = (springForce + dampingForce) / MASS;

      const newVelocity = velocity + acceleration * TIMESTEP;
      const newPosition = current  + newVelocity  * TIMESTEP;

      velocityRef.current        = newVelocity;
      currentProgressRef.current = newPosition;

      updatePosition(newPosition);

      const atRest =
        Math.abs(newPosition - target) < REST_DELTA &&
        Math.abs(newVelocity) < REST_DELTA;

      if (atRest) {
        currentProgressRef.current = target;
        velocityRef.current        = 0;
        updatePosition(target);
        isTickingRef.current = false;
        rafIdRef.current     = null;
      } else {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect            = trackRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - vh();
      if (totalScrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      targetProgressRef.current = progress;

      if (!isTickingRef.current) {
        isTickingRef.current = true;
        rafIdRef.current     = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedInitial]);

  return (
    /*
      Track height:
        mobile portrait  → 250dvh  (less scrolling on small screens)
        tablet landscape → 300dvh  (md breakpoint)
        desktop          → 350dvh  (lg breakpoint)
      dvh instead of vh prevents iOS URL-bar from changing scroll extent mid-animation.
    */
    <div
      ref={trackRef}
      className="relative bg-[#09090a]"
      style={{ height: 'clamp(250dvh, 300dvh, 350dvh)' }}
    >
      {/*
        Sticky container uses 100dvh so it fills exactly the visual viewport
        on iOS without overflowing behind the address bar.
      */}
      <div
        className="sticky top-0 w-full overflow-hidden flex items-center justify-center text-white z-10"
        style={{ height: '100dvh' }}
      >

        {/* Full-Screen Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 bg-[#09090a]"
          style={{
            opacity: loadedInitial ? 1 : 0,
            transition: 'opacity 0.7s ease',
            willChange: 'contents',
            transform: 'translateZ(0)',
          }}
        />

        {/* Loading Overlay */}
        {!loadedInitial && (
          <div className="absolute inset-0 bg-[#09090a] z-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-light-gold/20 border-t-light-gold rounded-full animate-spin" />
              <span className="font-sans text-light-gold text-xs font-bold uppercase tracking-[0.3em]">
                Preloading Experience
              </span>
            </div>
          </div>
        )}

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 pointer-events-none z-[1]" />

        {/*
          Brand Content.
          max-w caps the line length on ultrawide monitors (≥1920px).
          Padding scales: tight on mobile, generous on desktop.
          Font sizes use a 3-stop clamp so every breakpoint gets a
          comfortable size without jumping:
            supertitle: 1rem (320px phone) → 2.5vw → 1.75rem (desktop cap)
            headline:   1.75rem (phone)    → 6vw   → 5rem   (desktop cap)
        */}
        <div
          ref={contentRef}
          className="
            w-full
            max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-5xl
            mx-auto
            px-4 sm:px-6 md:px-8 lg:px-10
            text-center z-10 relative pointer-events-none
          "
          style={{
            opacity: 0,
            transform: 'scale(0)',
            transformOrigin: 'center center',
            willChange: 'opacity, transform',
          }}
        >
          <h1 className="mb-0 flex flex-col items-center gap-1 sm:gap-2">
            {/* Supertitle — readable on 320 px, not overwhelming on 4K */}
            <span
              className="block font-sans font-light tracking-widest text-white/95"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
                lineHeight: 1.25,
                letterSpacing: '0.15em',
                textShadow:
                  '0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              Experience our premium system
            </span>

            {/* Headline — fills viewport width tastefully on all sizes */}
            <span
              className="block font-serif font-bold uppercase text-light-gold"
              style={{
                fontSize: 'clamp(1.75rem, 6vw, 5rem)',
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                textShadow:
                  '0 4px 12px rgba(0,0,0,0.95), 0 8px 32px rgba(0,0,0,0.8), 0 20px 80px rgba(0,0,0,0.6), 0 0 120px rgba(180,140,60,0.25)',
              }}
            >
              Aluminium doors &amp; windows
            </span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-10 pointer-events-none"
          style={{ willChange: 'opacity' }}
        >
          <div className="w-5 h-8 sm:w-[26px] sm:h-[45px] border-2 border-light-gold/40 rounded-[20px] relative bg-black/10 backdrop-blur-sm">
            <div className="w-[3px] h-[7px] sm:w-[4px] sm:h-[10px] bg-light-gold rounded-[2px] absolute top-1.5 left-1/2 -translate-x-1/2 animate-scroll-wheel" />
          </div>
          <span className="font-sans text-[0.6rem] sm:text-[0.7rem] uppercase text-light-gold/80 tracking-widest font-bold">
            Scroll
          </span>
        </div>

      </div>
    </div>
  );
};

export default Hero;