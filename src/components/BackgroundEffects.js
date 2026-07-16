"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle config
    const particles = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000)); // Responsive density
    let mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        // Assign random color theme: Cyan, Sunset Coral, Magenta
        const rand = Math.random();
        if (rand < 0.4) {
          this.color = "rgba(77, 217, 232, 0.45)"; // Retro Cyan
        } else if (rand < 0.8) {
          this.color = "rgba(255, 107, 107, 0.45)"; // Sunset Coral
        } else {
          this.color = "rgba(255, 79, 163, 0.45)"; // Glow Magenta
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around borders
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction: push away slightly
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connection lines between particles that are close
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(77, 217, 232, ${0.12 * (1 - distance / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="aurora-container">
      {/* Dynamic animated CSS background gradient */}
      <div className="aurora" />
      
      {/* Floating blur orbs */}
      <div 
        className="floating-orb" 
        style={{
          width: "40vw",
          height: "40vw",
          left: "-10vw",
          top: "10vh",
          backgroundColor: "#4DD9E8",
          animationDelay: "0s",
        }} 
      />
      <div 
        className="floating-orb" 
        style={{
          width: "35vw",
          height: "35vw",
          right: "-5vw",
          top: "40vh",
          backgroundColor: "#FF4FA3",
          animationDelay: "-5s",
        }} 
      />
      <div 
        className="floating-orb" 
        style={{
          width: "30vw",
          height: "30vw",
          left: "30vw",
          bottom: "-5vh",
          backgroundColor: "#FF6B6B",
          animationDelay: "-10s",
        }} 
      />

      {/* Floating Canvas-based cyber network dots */}
      <canvas ref={canvasRef} style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
    </div>
  );
}
