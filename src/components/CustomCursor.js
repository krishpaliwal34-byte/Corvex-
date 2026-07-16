"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  
  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot position immediately
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    // Hover effect states
    const onMouseEnterLink = () => {
      document.body.classList.add("cursor-hover");
    };

    const onMouseLeaveLink = () => {
      document.body.classList.remove("cursor-hover");
    };

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .glow-card');
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    const removeHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .glow-card');
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Add hover listeners. Set up a MutationObserver to watch for DOM updates and re-bind.
    addHoverListeners();
    const observer = new MutationObserver(() => {
      removeHoverListeners();
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth animation loop for the outer glow (spring effect)
    let animationFrameId;
    const updateGlow = () => {
      // Damping coefficient (0.15 is smooth and responsive)
      const dx = mouseX - glowX;
      const dy = mouseY - glowY;
      glowX += dx * 0.15;
      glowY += dy * 0.15;

      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;

      animationFrameId = requestAnimationFrame(updateGlow);
    };
    updateGlow();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      removeHoverListeners();
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={glowRef} className="custom-cursor-glow" />
    </>
  );
}
