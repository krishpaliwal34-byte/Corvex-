"use client";

import { useRef } from "react";

export default function TiltCard({ children, style, className = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Apply mouse glow coordinates
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glass glow-card ${className}`}
      style={{
        cursor: "pointer",
        ...style,
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
