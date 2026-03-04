"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with smooth scrolling
    const lenis = new Lenis({
      duration: 2, // Duration of the scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth deceleration
      smoothWheel: true, // Enable smooth wheel scrolling
      wheelMultiplier: 3, // Multiplier for wheel scrolling
      touchMultiplier: 2, // Multiplier for touch scrolling
    });

    // Integrate Lenis with GSAP ScrollTrigger
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
