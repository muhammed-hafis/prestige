"use client";
import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
// Load every 4th frame first — denser keyframes = smoother early scrolling
const INITIAL_STEP = 4;

// Stable viewport height — avoids mobile URL-bar resize jitter
const vh = () => document.documentElement.clientHeight || window.innerHeight;
const vw = () => document.documentElement.clientWidth  || window.innerWidth;
const isMobile = () => vw() < 768;

const Hero = () => {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedInitial, setLoadedInitial] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  // All animation state lives in refs — zero React re-renders in the hot path
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const currentFrameRef = useRef(1);
  const animationFinishedRef = useRef(false);
  const scrollIndicatorRef = useRef(null);
  const contentRef = useRef(null); // driven directly from rAF — no React state
  // Scroll-lock refs — freeze scroll for 2s after animation completes
  const scrollLockRef = useRef(false);
  const scrollLockPosRef = useRef(0);

  // Cover-scale draw — reuses existing canvas context
  const drawFrame = (ctx, canvas, img) => {
    if (!img) return;
    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;
    if (!imgW || !imgH) return;

    const cW = canvas.width;
    const cH = canvas.height;
    const imgRatio = imgW / imgH;
    const canvasRatio = cW / cH;

    let dW = cW, dH = cH, oX = 0, oY = 0;
    if (canvasRatio > imgRatio) {
      dH = cW / imgRatio;
      oY = (cH - dH) / 2;
    } else {
      dW = cH * imgRatio;
      oX = (cW - dW) / 2;
    }

    // Since the image always covers the entire canvas (object-cover), 
    // clearRect is omitted to prevent redundant GPU clears and micro-flicker.
    ctx.drawImage(img, oX, oY, dW, dH);
  };

  // Prefer the closest *previous* loaded frame — avoids flash of future content
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

    canvas.width = vw();
    canvas.height = vh();
    const ctx = canvas.getContext('2d', { alpha: false });

    const loadFrame = (index) =>
      new Promise((resolve) => {
        if (imagesRef.current[index]) { resolve(); return; }
        const img = new Image();
        img.src = `/animation/ezgif-frame-${String(index).padStart(3, '0')}.avif`;
        img.onload = () => { imagesRef.current[index] = img; resolve(); };
        img.onerror = () => resolve();
      });

    // Stage 1 — dense keyframes (every 4th frame = 60 images)
    const initialIndices = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += INITIAL_STEP) initialIndices.push(i);
    if (initialIndices[initialIndices.length - 1] !== TOTAL_FRAMES) {
      initialIndices.push(TOTAL_FRAMES);
    }

    Promise.all(initialIndices.map(loadFrame)).then(() => {
      setLoadedInitial(true);
      const firstImg = getClosestLoadedFrame(1);
      if (firstImg) drawFrame(ctx, canvas, firstImg);

      // Stage 2 — fill in remaining frames during idle time
      const remaining = [];
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

    // Resize handler — use stable vw/vh helpers
    const handleResize = () => {
      canvas.width = vw();
      canvas.height = vh();
      const img = getClosestLoadedFrame(currentFrameRef.current);
      if (img) drawFrame(ctx, canvas, img);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ─── Butter-Smooth rAF Loop & Scroll Handler ──────────────────────────────────
  useEffect(() => {
    if (!loadedInitial) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!ctx) return;

    let rafId = null;
    let isTicking = false;
    let lastFrame = -1;

    const updatePosition = (progress) => {
      // Update scroll indicator opacity directly via DOM — no React involved
      if (scrollIndicatorRef.current) {
        const opacity = Math.max(0, 1 - progress * 6);
        scrollIndicatorRef.current.style.opacity = opacity;
      }

      // ── Scroll-driven text reveal: starts at 55%, full at 85% ──
      const TEXT_START = 0.55;
      const TEXT_END   = 0.85;
      const rawT = Math.max(0, Math.min(1, (progress - TEXT_START) / (TEXT_END - TEXT_START)));
      const easedT = 1 - (1 - rawT) * (1 - rawT);
      if (contentRef.current) {
        contentRef.current.style.opacity   = easedT;
        contentRef.current.style.transform = `scale(${easedT})`;
      }

      // Frame animation: progress 0 → 1 maps to frames 1 → 240
      const frameProgress = Math.min(1, progress / 0.85);
      const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES,
        Math.round(frameProgress * (TOTAL_FRAMES - 1)) + 1
      ));
      currentFrameRef.current = frameIndex;

      if (frameIndex !== lastFrame) {
        const img = getClosestLoadedFrame(frameIndex);
        if (img) drawFrame(ctx, canvas, img);
        lastFrame = frameIndex;
      }

      // Trigger React state only on edge transitions
      const finished = frameIndex === TOTAL_FRAMES;
      if (finished !== animationFinishedRef.current) {
        animationFinishedRef.current = finished;
        setAnimationFinished(finished);

        // On first completion, lock scroll for 2 seconds
        if (finished && !scrollLockRef.current) {
          scrollLockRef.current = true;
          scrollLockPosRef.current = window.scrollY;

          if (isMobile()) {
            document.body.style.overflow = 'hidden';
          }
          setTimeout(() => {
            scrollLockRef.current = false;
            document.body.style.overflow = '';
          }, 2000);
        }
      }
    };

    const tick = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.00005) {
        currentProgressRef.current += diff * 0.12;
        updatePosition(currentProgressRef.current);
        rafId = requestAnimationFrame(tick);
      } else {
        // Snap to target
        currentProgressRef.current = targetProgressRef.current;
        updatePosition(currentProgressRef.current);
        isTicking = false;
        rafId = null;
      }
    };

    const handleScroll = () => {
      // Desktop scroll lock: snap back to locked position
      if (scrollLockRef.current && !isMobile()) {
        window.scrollTo({ top: scrollLockPosRef.current, behavior: 'instant' });
        return;
      }
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - vh();
      if (totalScrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      targetProgressRef.current = progress;

      // Start tick loop if not running
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedInitial]);

  return (
    // Shorter track on mobile (less scrolling needed)
    <div ref={trackRef} className="relative h-[250vh] md:h-[350vh] bg-[#09090a]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center text-white z-10">

        {/* Full-Screen Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 bg-[#09090a]"
          style={{ opacity: loadedInitial ? 1 : 0, transition: 'opacity 0.7s ease' }}
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

        {/* Brand Content — scale + opacity driven 1:1 by scroll in the rAF loop */}
        <div
          ref={contentRef}
          className="w-full px-5 sm:px-8 text-center z-10 relative pointer-events-none"
          style={{ opacity: 0, transform: 'scale(0)', transformOrigin: 'center center' }}
        >
          <h1 className="mb-0 flex flex-col items-center gap-1">
            <span
              className="block font-sans font-light tracking-widest text-white/95"
              style={{
                fontSize: 'clamp(0.85rem, 3.5vw, 3rem)',
                lineHeight: 1.2,
                letterSpacing: '0.15em',
                textShadow:
                  '0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              Experience our premium system
            </span>
            <span
              className="block font-serif font-bold uppercase text-light-gold"
              style={{
                fontSize: 'clamp(1.6rem, 7vw, 6rem)',
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

        {/* Scroll Indicator — opacity driven directly via DOM ref */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-10 pointer-events-none"
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
