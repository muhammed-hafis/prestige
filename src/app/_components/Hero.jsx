"use client";
import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const INITIAL_STEP = 2;

const Hero = () => {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedInitial, setLoadedInitial] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const velocityRef = useRef(0);
  const currentFrameRef = useRef(1);
  const animationFinishedRef = useRef(false);
  const rafIdRef = useRef(null);
  const isTickingRef = useRef(false);
  const lastFrameRef = useRef(-1);
  const scrollIndicatorRef = useRef(null);
  const contentRef = useRef(null);
  const resizeTimerRef = useRef(null);

  // ─── Cover-scale draw ────────────────────────────────────────────────────────
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
    if (canvasRatio > imgRatio) { dH = cW / imgRatio; oY = (cH - dH) / 2; }
    else { dW = cH * imgRatio; oX = (cW - dW) / 2; }
    ctx.drawImage(img, oX, oY, dW, dH);
  };

  const getClosestLoadedFrame = (targetIndex) => {
    if (imagesRef.current[targetIndex]) return imagesRef.current[targetIndex];
    for (let i = targetIndex - 1; i >= 1; i--)           if (imagesRef.current[i]) return imagesRef.current[i];
    for (let i = targetIndex + 1; i <= TOTAL_FRAMES; i++) if (imagesRef.current[i]) return imagesRef.current[i];
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

    const initialIndices = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += INITIAL_STEP) initialIndices.push(i);
    if (initialIndices.at(-1) !== TOTAL_FRAMES) initialIndices.push(TOTAL_FRAMES);

    Promise.all(initialIndices.map(loadFrame)).then(() => {
      setLoadedInitial(true);
      const firstImg = getClosestLoadedFrame(1);
      if (firstImg) drawFrame(ctx, canvas, firstImg);

      const initialSet = new Set(initialIndices);
      const remaining = Array.from({ length: TOTAL_FRAMES }, (_, i) => i + 1)
        .filter(i => !initialSet.has(i));
      let idx = 0;
      const loadNextChunk = () => {
        const end = Math.min(idx + 8, remaining.length);
        const promises = [];
        while (idx < end) promises.push(loadFrame(remaining[idx++]));
        Promise.all(promises).then(() => {
          if (idx < remaining.length) {
            typeof requestIdleCallback !== 'undefined'
              ? requestIdleCallback(loadNextChunk, { timeout: 200 })
              : setTimeout(loadNextChunk, 16);
          }
        });
      };
      typeof requestIdleCallback !== 'undefined'
        ? requestIdleCallback(loadNextChunk, { timeout: 200 })
        : setTimeout(loadNextChunk, 16);
    });

    const handleResize = () => {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const img = getClosestLoadedFrame(currentFrameRef.current);
        const ctx = canvas.getContext('2d', { alpha: false });
        if (img && ctx) drawFrame(ctx, canvas, img);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimerRef.current);
    };
  }, []);

  // ─── Spring rAF loop & scroll handler ────────────────────────────────────────
  useEffect(() => {
    if (!loadedInitial) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!ctx) return;

    const STIFFNESS = 180;
    const DAMPING = 22;
    const MASS = 1;
    const TIMESTEP = 1 / 60;
    const REST_DELTA = 0.000015;

    const updatePosition = (progress) => {
      if (scrollIndicatorRef.current)
        scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - progress * 8);

      const TEXT_START = 0.55;
      const TEXT_END = 0.85;
      const rawT = Math.max(0, Math.min(1, (progress - TEXT_START) / (TEXT_END - TEXT_START)));
      const easedT = 1 - (1 - rawT) * (1 - rawT);
      if (contentRef.current) {
        contentRef.current.style.opacity = easedT;
        contentRef.current.style.transform = `scale(${easedT})`;
      }

      const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES,
        Math.round(Math.min(1, progress / 0.85) * (TOTAL_FRAMES - 1)) + 1
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
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const velocity = velocityRef.current;

      const acceleration = (-STIFFNESS * (current - target) - DAMPING * velocity) / MASS;
      const newVelocity = velocity + acceleration * TIMESTEP;
      const newPosition = current + newVelocity * TIMESTEP;

      velocityRef.current = newVelocity;
      currentProgressRef.current = newPosition;
      updatePosition(newPosition);

      if (Math.abs(newPosition - target) < REST_DELTA && Math.abs(newVelocity) < REST_DELTA) {
        currentProgressRef.current = target;
        velocityRef.current = 0;
        updatePosition(target);
        isTickingRef.current = false;
        rafIdRef.current = null;
      } else {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      targetProgressRef.current = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      if (!isTickingRef.current) {
        isTickingRef.current = true;
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [loadedInitial]);

  return (
    <div ref={trackRef} className="relative h-[250vh] md:h-[350vh] bg-[#09090a]">
      <div className="sticky top-0 h-screen md:h-screen w-full overflow-hidden flex items-center justify-center text-white z-10">

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-screen z-0 bg-[#09090a]"
          style={{
            opacity: loadedInitial ? 1 : 0,
            transition: 'opacity 0.7s ease',
            willChange: 'contents',
            transform: 'translateZ(0)',
          }}
        />

        {/* Loading overlay */}
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 pointer-events-none z-[1]" />

        {/* Brand content */}
        <div
          ref={contentRef}
          className="w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center z-10 relative pointer-events-none"
          style={{
            opacity: 0,
            transform: 'scale(0)',
            transformOrigin: 'center center',
            willChange: 'opacity, transform',
          }}
        >
          <h1 className="mb-0 flex flex-col items-center gap-1 sm:gap-2">
            <span
              className="block font-sans font-light tracking-widest text-white/95 whitespace-normal sm:whitespace-nowrap"
              style={{
                fontSize: 'clamp(0.9rem, 3vw, 1.75rem)',
                lineHeight: 1.25,
                letterSpacing: '0.15em',
                textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              Experience our premium system
            </span>
            <span
              className="block font-serif font-bold uppercase text-light-gold whitespace-normal sm:whitespace-nowrap"
              style={{
                fontSize: 'clamp(1.75rem, 6vw, 5rem)',
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                textShadow: '0 4px 12px rgba(0,0,0,0.95), 0 8px 32px rgba(0,0,0,0.8), 0 20px 80px rgba(0,0,0,0.6), 0 0 120px rgba(180,140,60,0.25)',
              }}
            >
              Aluminium doors &amp; windows
            </span>
          </h1>
        </div>

        {/* Scroll indicator */}
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