"use client";

import { Suspense, lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function HolographicGlobe() {
  const [isRobotLoaded, setIsRobotLoaded] = useState(false);
  return (
    <div className="globe-parent">
      {/* Glow */}
     <div
  style={{
    position: "absolute",
    width: "min(650px, 85vw)",
    height: "min(650px, 85vw)",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(77,217,232,.15) 0%, rgba(255,79,163,.12) 45%, transparent 75%)",
    filter: "blur(80px)",
    zIndex: 0,
  }}
/>

      {/* Neon Ring */}
     <div
  style={{
    position: "absolute",
    width: "min(480px, 65vw)",
    height: "min(480px, 65vw)",
    borderRadius: "50%",
    border: "3px solid rgba(77,217,232,.8)",
    boxShadow:
      "0 0 40px rgba(77,217,232,.6), 0 0 100px rgba(255,79,163,.35)",
    zIndex: 1,
  }}
/>

      <Suspense fallback={<div style={{ color: "#4DD9E8", fontFamily: "var(--font-accent)", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Loading 3D Node...</div>}>
       <div className="spline-container">
         <Spline
           scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
           onLoad={() => setIsRobotLoaded(true)}
           style={{
             width: "100%",
             height: "100%",
           }}
         />
         {/* Robot Chest Logo Overlay - only visible when fully loaded */}
         <div className={`robot-chest-logo ${isRobotLoaded ? "visible" : ""}`}>
           <img src="/logo2.png" alt="Corvex Bird Chest Logo" />
         </div>
       </div>
     </Suspense>
    </div>
  );
}