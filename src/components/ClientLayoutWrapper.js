"use client";

import { useEffect } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";

export default function ClientLayoutWrapper({ children }) {
  useEffect(() => {
    // Scroll progress bar animation
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const progressBar = document.querySelector(".scroll-progress-bar");
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      {/* Background Visual Effects */}
      <BackgroundEffects />
      
      {/* Top Scroll Progress Indicator */}
      <div className="scroll-progress-bar" />

      {/* Main Website Wrapper */}
      <div style={{ opacity: 1 }}>
        <Navbar />
        <main style={{ width: "100%", position: "relative", zIndex: 2 }}>
          {children}
        </main>
      </div>
    </SmoothScroll>
  );
}
