"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-quart",
      once: true,
      offset: 80,
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
};

export default AOSInit;

