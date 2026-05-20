"use client";
import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
// Load every 4th frame first — denser keyframes = smoother early scrolling
const INITIAL_STEP = 4;

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

    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, oX, oY, dW, dH);
  };

  // Prefer the closest *previous* loaded frame — avoids flash of future content
  const getClosestLoadedFrame = (targetIndex) => {
    if (imagesRef.current[targetIndex]) return imagesRef.current[targetIndex];

    // Search backwards first (prefer last good frame for forward scroll)
    for (let i = targetIndex - 1; i >= 1; i--) {
      if (imagesRef.current[i]) return imagesRef.current[i];
    }
    // Fallback: search forward
    for (let i = targetIndex + 1; i <= TOTAL_FRAMES; i++) {
      if (imagesRef.current[i]) return imagesRef.current[i];
    }
    return null;
  };

  // ─── Image Preloading ────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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

      // Stage 2 — fill in all remaining frames sequentially (no setTimeout gaps)
      const remaining = [];
      const initialSet = new Set(initialIndices);
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!initialSet.has(i)) remaining.push(i);
      }

      // Load in chunks of 8, yield to browser between chunks via requestIdleCallback
      let idx = 0;
      const loadNextChunk = (deadline) => {
        // Use all available idle time, or just 8 frames at a time
        const chunkSize = 8;
        const end = Math.min(idx + chunkSize, remaining.length);
        const promises = [];
        while (idx < end) {
          promises.push(loadFrame(remaining[idx++]));
        }
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

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const img = getClosestLoadedFrame(currentFrameRef.current);
      if (img) drawFrame(ctx, canvas, img);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ─── Butter-Smooth rAF Loop (zero React state inside) ────────────────────────
  useEffect(() => {
    if (!loadedInitial) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!ctx) return;

    let rafId;
    let lastFrame = -1;

    const tick = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.00005) {
        // Lerp factor 0.12 — snappier response, still eased (not laggy)
        currentProgressRef.current += diff * 0.12;
        const progress = currentProgressRef.current;

        // Update scroll indicator opacity directly via DOM — no React involved
        if (scrollIndicatorRef.current) {
          const opacity = Math.max(0, 1 - progress * 6);
          scrollIndicatorRef.current.style.opacity = opacity;
        }

        // Frame animation: progress 0 → 1 maps to frames 1 → 240
        const frameProgress = Math.min(1, progress / 0.85);
        const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES,
          Math.round(frameProgress * (TOTAL_FRAMES - 1)) + 1
        ));
        currentFrameRef.current = frameIndex;

        // Only redraw when the frame actually changes
        if (frameIndex !== lastFrame) {
          const img = getClosestLoadedFrame(frameIndex);
          if (img) drawFrame(ctx, canvas, img);
          lastFrame = frameIndex;
        }

        // Trigger React state only on edge transitions (not every frame)
        const finished = frameIndex === TOTAL_FRAMES;
        if (finished !== animationFinishedRef.current) {
          animationFinishedRef.current = finished;
          setAnimationFinished(finished);
        }
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedInitial]);

  // ─── Scroll Listener (passive, zero work) ────────────────────────────────────
  useEffect(() => {
    if (!loadedInitial) return;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadedInitial]);

  return (
    <div ref={trackRef} className="relative h-[350vh] bg-[#09090a]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 pointer-events-none z-[1]" />

        {/* Brand Content — fades in when animation completes */}
        <div
          className="main-container px-8 text-center z-10 relative pointer-events-none"
          style={{
            opacity: animationFinished ? 1 : 0,
            transform: animationFinished ? 'translateY(0) scale(1)' : 'translateY(2rem) scale(0.95)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <h1 className="mb-0 flex flex-col items-center gap-5">
            <span
              className="block font-sans font-light tracking-widest text-white/95"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
                textShadow:
                  '0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              Experience our premium system
            </span>
            <span
              className="block font-serif font-bold uppercase text-light-gold tracking-wider"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
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
          className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px] z-10 pointer-events-none"
        >
          <div className="w-[26px] h-[45px] border-2 border-light-gold/40 rounded-[20px] relative bg-black/10 backdrop-blur-sm">
            <div className="w-[4px] h-[10px] bg-light-gold rounded-[2px] absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-wheel" />
          </div>
          <span className="font-sans text-[0.7rem] uppercase text-light-gold/80 tracking-widest font-bold">
            Scroll
          </span>
        </div>

      </div>
    </div>
  );
};

export default Hero;
