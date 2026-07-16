"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const cta = ctaRef.current;
    const onMouseMove = (e) => {
      if (!cta) return;
      const rect = cta.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cta.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    };
    const onMouseLeave = () => {
      if (cta) cta.style.transform = `translate(0px, 0px)`;
    };
    if (cta) {
      cta.addEventListener("mousemove", onMouseMove);
      cta.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cta) {
        cta.removeEventListener("mousemove", onMouseMove);
        cta.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navItems = ["Home", "About", "Services", "FAQ", "Contact"];

  return (
    <nav
      className="glass-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: scrolled ? "70px" : "90px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s",
        backgroundColor: scrolled ? "rgba(15, 14, 46, 0.85)" : "rgba(15, 14, 46, 0.4)",
        boxShadow: scrolled ? "0 10px 30px rgba(15, 14, 46, 0.5)" : "none",
      }}
    >
       {/* Brand Logo and Name */}
       <a
         href="#home"
         onClick={(e) => handleScrollTo(e, "home")}
         style={{ display: "flex", alignItems: "center", gap: "1px", cursor: "pointer" }}
       >
        <div
          style={{
            position: "relative",
            width: scrolled ? "58px" : "72px",
            height: scrolled ? "58px" : "72px",
            overflow: "visible",
            background: "transparent",
            transition: "all 0.4s ease",
          }}
        >
          <Image
            src="/logo2.png"
            alt="Corvex Logo"
            fill
            priority
            sizes="72px"
            style={{ objectFit: "contain", background: "transparent" }}
          />
        </div>
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "1.4rem",
            fontWeight: "700",
            letterSpacing: "0.08em",
            color: "#F4EFEA",
            textShadow: "0 0 8px rgba(244, 239, 234, 0.15)",
          }}
        >
          CORVEX
        </span>
      </a>

       {/* Desktop Menu Links */}
       <div style={{ display: "none", alignItems: "center", gap: "40px" }} className="desktop-menu">
         {navItems.map((item) => (
           <a
             key={item}
             href={`#${item.toLowerCase()}`}
             onClick={(e) => handleScrollTo(e, item.toLowerCase())}
             className="nav-link"
           >
             {item}
           </a>
         ))}
       </div>

      {/* Desktop Action CTA Button */}
      <div style={{ display: "none" }} className="desktop-menu">
        <button
          ref={ctaRef}
          onClick={(e) => handleScrollTo(e, "contact")}
          className="btn-primary"
          style={{ fontSize: "0.85rem", padding: "10px 24px", boxShadow: "0 0 15px rgba(255, 107, 107, 0.2)" }}
        >
          <span>Get Started</span>
        </button>
      </div>

      {/* Mobile Burger Toggle */}
      <button
        onClick={toggleMenu}
        className="mobile-toggle"
        style={{
          display: "flex",
          background: "rgba(244, 239, 234, 0.08)",
          border: "1px solid rgba(244, 239, 234, 0.15)",
          borderRadius: "10px",
          padding: "8px",
          color: "#F4EFEA",
          cursor: "pointer",
          zIndex: 1001,
        }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu Overlay (click outside to close) */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.4s ease",
          zIndex: 998,
        }}
      />

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-100%",
          width: "88%",
          maxWidth: "380px",
          height: "100vh",
          background: "linear-gradient(160deg, #14123a 0%, #0F0E2E 55%, #0a0920 100%)",
          borderLeft: "1px solid rgba(244, 239, 234, 0.1)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          transition: "right 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        {/* Decorative glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(77,217,232,0.25), transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-80px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,107,0.18), transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        {/* Top bar inside menu: logo + close */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 28px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ position: "relative", width: "36px", height: "36px" }}>
              <Image src="/logo2.jpg" alt="Corvex Logo" fill sizes="36px" style={{ objectFit: "contain" }} />
            </div>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#F4EFEA",
              }}
            >
              CORVEX
            </span>
          </div>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 32px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScrollTo(e, item.toLowerCase())}
              className="mobile-nav-link"
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                padding: "16px 0",
                borderBottom: index < navItems.length - 1 ? "1px solid rgba(244,239,234,0.08)" : "none",
                transform: isOpen ? "translateX(0)" : "translateX(40px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.07 + 0.1}s`,
              }}
            >
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,107,107,0.7)",
                  fontWeight: 600,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.6rem",
                  color: "#F4EFEA",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            </a>
          ))}

          <button
            onClick={(e) => handleScrollTo(e, "contact")}
            className="btn-primary"
            style={{
              marginTop: "28px",
              width: "100%",
              padding: "14px 0",
              transform: isOpen ? "translateY(0)" : "translateY(30px)",
              opacity: isOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            }}
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Footer contact strip */}
        <div
          style={{
            padding: "20px 32px 28px",
            borderTop: "1px solid rgba(244,239,234,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            opacity: isOpen ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "rgba(244,239,234,0.5)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Corvex
          </span>
          <span style={{ fontSize: "0.75rem", color: "rgba(244,239,234,0.5)", letterSpacing: "0.05em" }}>
            hello@corvex.com
          </span>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx global>{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }

        .mobile-nav-link:active {
          opacity: 0.6;
        }

        .close-btn:hover {
          transform: rotate(90deg);
          background: rgba(244, 239, 234, 0.15);
        }

        @media (max-width: 360px) {
          .mobile-nav-link span:last-child {
            font-size: 1.35rem !important;
          }
        }
      `}</style>
    </nav>
  );
}