"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
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

  return null;
};

export default AOSInit;
