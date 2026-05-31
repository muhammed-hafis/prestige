"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const pathname = usePathname();
  const isRoot = pathname === "/";

  useEffect(() => {
    if (!isRoot) return;

    // Lock scroll while loading
    document.documentElement.style.overflow = "hidden";

    let dismissed = false;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      // Start fade-out
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        document.documentElement.style.overflow = "";
        // Signal to the rest of the app that the loading screen is gone
        window.dispatchEvent(new Event("prestige:ready"));
      }, 700); // matches transition duration below
    };

    // Dismiss when the page signals it is ready
    window.addEventListener("prestige:loaded", dismiss);

    // Hard 2-second maximum — always dismiss even if the event never fires
    const maxTimer = setTimeout(dismiss, 2000);

    return () => {
      window.removeEventListener("prestige:loaded", dismiss);
      clearTimeout(maxTimer);
      document.documentElement.style.overflow = "";
    };
  }, [isRoot]);

  if (!isRoot || !visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090a]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Gold ring spinner with Logo inside */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-light-gold/10" />
        <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-t-2 border-light-gold animate-spin" />
        <div
          className="absolute w-18 h-18 sm:w-22 sm:h-22 rounded-full border border-light-gold/20 flex items-center justify-center"
          style={{ animationDuration: "3s" }}
        />
        <img 
          src="/logo.avif" 
          alt="Prestige Logo" 
          className="absolute w-12 h-12 sm:w-14 sm:h-14 object-contain" 
        />
      </div>



      {/* Bottom thin line accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px]">
        <div
          className="h-full bg-light-gold"
          style={{
            width: "100%",
            animation: "loader-bar 2s ease-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loader-bar {
          from { width: 0%; opacity: 1; }
          to   { width: 100%; opacity: 0.6; }
        }
      `}</style>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default PageLoader;
