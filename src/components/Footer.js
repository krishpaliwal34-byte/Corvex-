"use client";

import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const socials = [
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      href: "#", 
      name: "Instagram" 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ), 
      href: "#", 
      name: "Facebook" 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: "#", 
      name: "LinkedIn" 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ), 
      href: "#", 
      name: "GitHub" 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ), 
      href: "#", 
      name: "X" 
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(244, 239, 234, 0.05)",
        backgroundColor: "rgba(15, 14, 46, 0.95)",
        backgroundImage: "radial-gradient(circle at bottom right, rgba(255, 79, 163, 0.05), transparent 40%)",
        padding: "80px 5% 40px 5%",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {/* Visual Accent */}
      <div 
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(77, 217, 232, 0.05) 0%, transparent 70%)",
          bottom: "-50px",
          left: "-50px",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "60px",
        }}
      >
        {/* Branding Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                position: "relative",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid rgba(77, 217, 232, 0.3)",
              }}
            >
              <Image
                src="/logo2.png"
                alt="Corvex Logo"
                fill
                sizes="44px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.5rem",
                fontWeight: "700",
                letterSpacing: "0.08em",
                color: "#F4EFEA",
              }}
            >
              CORVEX
            </span>
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              color: "rgba(244, 239, 234, 0.6)",
              maxWidth: "280px",
            }}
          >
            Building next-generation digital ecosystems that scale startups, businesses, and enterprise architectures.
          </p>
          
          {/* Social Icons list */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.name}
                className="social-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(244, 239, 234, 0.08)",
                  color: "rgba(244, 239, 234, 0.7)",
                  transition: "all 0.3s ease",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4
            style={{
              color: "#F4EFEA",
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "24px",
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {["Home", "About", "Services", "FAQ", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleScrollTo(e, link.toLowerCase())}
                  className="footer-link"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4
            style={{
              color: "#F4EFEA",
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "24px",
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Our Services
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "Web Development",
              "Frontend Development",
              "Backend Development",
              "Digital Marketing",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "services")}
                  className="footer-link"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Support & Details */}
        <div>
          <h4
            style={{
              color: "#F4EFEA",
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "24px",
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Support
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "24/7 Customer Support",
              "Fast Response",
              "Email Support",
            ].map((sup) => (
              <li
                key={sup}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(244, 239, 234, 0.6)",
                }}
              >
                {sup}
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "rgba(244, 239, 234, 0.7)" }}>
              <Mail size={16} style={{ color: "#4DD9E8" }} />
              <span>hello@corvex.io</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "rgba(244, 239, 234, 0.7)" }}>
              <Phone size={16} style={{ color: "#FF6B6B" }} />
              <span>+916367858991</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "rgba(244, 239, 234, 0.7)" }}>
              <MapPin size={16} style={{ color: "#FF4FA3" }} />
              <span>Udaipur, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(244, 239, 234, 0.05)",
          paddingTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.85rem",
          color: "rgba(244, 239, 234, 0.4)",
        }}
      >
        <span>&copy; {currentYear} Corvex. All Rights Reserved.</span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#" className="footer-link" style={{ fontSize: "0.85rem" }}>Privacy Policy</a>
          <a href="#" className="footer-link" style={{ fontSize: "0.85rem" }}>Terms of Service</a>
        </div>
      </div>

      <style jsx global>{`
        .footer-link {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: rgba(244, 239, 234, 0.6);
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: var(--secondary-accent);
          padding-left: 4px;
        }
        .social-btn:hover {
          background-color: rgba(77, 217, 232, 0.15) !important;
          border-color: var(--secondary-accent) !important;
          color: var(--secondary-accent) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(77, 217, 232, 0.2);
        }
      `}</style>
    </footer>
  );
}
