"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  TrendingUp, 
  Palette, 
  Check, 
  ArrowRight, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Users, 
  Heart,
  Eye,
  Send,
  Sparkles
} from "lucide-react";
import HolographicGlobe from "@/components/HolographicGlobe";
import Accordion from "@/components/Accordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import TiltCard from "@/components/TiltCard";

export default function Home() {
 
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroMouse({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroMouse({ x: 0, y: 0 });
  };

  // Smooth scroll helper
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

  // FAQ Items
  const faqItems = [
    {
      question: "What services does Corvex provide?",
      answer: "Corvex offers full-stack digital development including responsive web applications, backend systems (Node.js/Express, databases, cloud), result-driven digital marketing (SEO, Meta Ads, Brand growth), and highly interactive UI/UX prototyping and wireframes."
    },
    {
      question: "How long does a project take?",
      answer: "Timeline varies based on complexity. Landing pages take around 1-2 weeks. Complex custom web applications with full API endpoints and backend databases usually range from 4 to 8 weeks. We keep strict deadlines and provide regular updates."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, we offer ongoing maintenance and support packages covering security checks, content updates, dependency upgrades, cloud performance tracking, and speed optimizations."
    },
    {
      question: "Can you redesign existing websites?",
      answer: "Absolutely. We specialize in revamping slow, outdated websites into sleek, modern, award-winning applications with premium glassmorphic UI, optimized conversion rates, and SEO enhancements."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, our digital marketing team implements off-page and on-page SEO best practices (structure, schema markup, performance, backlinks, Google Analytics) to improve organic search rankings."
    },
    {
      question: "Do you provide backend development?",
      answer: "Yes, we design secure REST and GraphQL APIs, build clean authentication systems, structure databases (MongoDB, PostgreSQL), and support cloud hosting configuration."
    },
    {
      question: "Can I contact your team anytime?",
      answer: "Yes, our support desk is open 24/7 to address critical technical issues. You will be assigned a dedicated product manager for your project communication."
    }
  ];

  // Services
  const services = [
    {
      title: "Web Development",
      icon: <Code size={30} style={{ color: "#4DD9E8" }} />,
      color: "rgba(77, 217, 232, 0.15)",
      bullets: ["Responsive websites", "Landing pages", "Business websites", "E-commerce apps", "Custom Web Apps"]
    },
    {
      title: "Backend Development",
      icon: <Database size={30} style={{ color: "#FF6B6B" }} />,
      color: "rgba(255, 107, 107, 0.15)",
      bullets: ["REST APIs & Auth", "Database Architecture", "Node.js & Express.js", "MongoDB & SQL", "Cloud Integration"]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp size={30} style={{ color: "#FF4FA3" }} />,
      color: "rgba(255, 79, 163, 0.15)",
      bullets: ["SEO Optimization", "Google & Meta Ads", "Social Media campaigns", "Brand Growth Strategies", "Content Strategy"]
    },
    {
      title: "Frontend Development",
      icon: <Layers size={30} style={{ color: "#F2B84B" }} />,
      color: "rgba(242, 184, 75, 0.15)",
      bullets: ["Responsive Web Apps", "React & Next.js UI", "Tailwind & CSS styling", "Component Libraries", "Speed & Core Web Vitals"]
    }
  ];

  // Tech stack items
  const techStack = [
   {
  name: "Next.js",
  logo: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: "#F4EFEA" }}
    >
      <path d="M18.36 20.78c-.62 0-1.17-.31-1.49-.83l-5.9-9.5v8.97H8.44V4h2.53l5.9 9.5V4H19.4v16.78h-1.04z"/>
    </svg>
  ),
},
    {
      name: "React.js",
      logo: (
        <svg width="16" height="16" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#4DD9E8" }}>
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: "Node.js",
      logo: (
        <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#4DD9E8" }}>
          <path d="M128 32l88 50.8v101.6l-88 50.8-88-50.8V82.8L128 32z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="16" strokeLinejoin="round" />
          <path d="M128 32v203.2M128 133.6l88-50.8M128 133.6L40 82.8" stroke="currentColor" strokeWidth="16" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "Express.js",
      logo: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#FF6B6B" }}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      name: "MongoDB",
      logo: (
        <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#FF4FA3" }}>
          <path d="M16 3C16 3 9 10 9 17C9 23.0751 12.134 27 16 29C19.866 27 23 23.0751 23 17C23 10 16 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 3V29" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      logo: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" style={{ color: "#F2B84B" }}>
          <path d="M12 6.0001C9.6 6.0001 8.2 7.2001 7.8 9.6001C8.8 8.2001 10.2 7.8001 12 8.4001C13 8.7334 13.8 9.2668 14.8 9.9334C16.3 10.9334 18.2 12.2001 22 12.2001C24.4 12.2001 25.8 11.0001 26.2 8.6001C25.2 10.0001 23.8 10.4001 22 9.8001C21 9.4668 20.2 8.9334 19.2 8.2668C17.7 7.2668 15.8 6.0001 12 8.2668M12 12.2001C9.6 12.2001 8.2 13.4001 7.8 15.8001C8.8 14.4001 10.2 14.0001 12 14.6001C13 14.9334 13.8 15.4668 14.8 16.1334C16.3 17.1334 18.2 18.4001 22 18.4001C24.4 18.4001 25.8 17.2001 26.2 14.8001C25.2 16.2001 23.8 16.6001 22 16.0001C21 15.6668 20.2 15.1334 19.2 14.4668C17.7 13.4668 15.8 12.2001 12 14.4668Z" transform="scale(0.8) translate(3, 3)" />
        </svg>
      )
    }
  ];

  // Portfolio items
  const portfolioItems = [
    { name: "Restaurant Website", tag: "UI/UX & Web Dev", desc: "Interactive dining platform with seamless bookings.", img: "rgba(77, 217, 232, 0.1)" },
    { name: "Business Website", tag: "Design & Copywriting", desc: "Corporate platform for global consulting ventures.", img: "rgba(255, 107, 107, 0.1)" },
    { name: "Portfolio Website", tag: "WebGL & Motion", desc: "3D portfolio for high-fashion designers.", img: "rgba(255, 79, 163, 0.1)" },
    { name: "E-Commerce Website", tag: "Full-Stack Web App", desc: "Next-gen storefront with localized stripe pipelines.", img: "rgba(242, 184, 75, 0.1)" },
    { name: "School Website", tag: "E-Learning Portals", desc: "Integrated portal for assignments and class feeds.", img: "rgba(77, 217, 232, 0.1)" },
    { name: "Hospital Website", tag: "HIPAA Cloud Engine", desc: "Secure telemedicine and patient database system.", img: "rgba(255, 107, 107, 0.1)" }
  ];


  return (
    <div style={{ position: "relative" }}>
      <WhatsAppButton />
      {/* 1. HERO SECTION */}
      <section
        id="home"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 5% 60px 5%",
          position: "relative",
          zIndex: 1,
          perspective: "1000px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "650px" }}>
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "30px",
                backgroundColor: "rgba(77, 217, 232, 0.08)",
                border: "1px solid rgba(77, 217, 232, 0.2)",
                color: "#4DD9E8",
                fontSize: "0.85rem",
                width: "fit-content",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-accent)",
              }}
            >
              <Sparkles size={14} />
              <span>THE FUTURE OF IT INFRASTRUCTURE</span>
            </motion.div>

            {/* Mouse-tracking 3D tilt title wrapper */}
            <div
              style={{
                transform: `rotateY(${heroMouse.x * 28}deg) rotateX(${-heroMouse.y * 28}deg) translateZ(10px)`,
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Giant Title with reveal animations */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: "1.05",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: "700",
                  color: "#F4EFEA",
                  transformStyle: "preserve-3d",
                }}
              >
                Build. Scale.<br />
                <span className="gradient-text">Dominate.</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.1rem",
                lineHeight: "1.7",
                color: "rgba(244, 239, 234, 0.75)",
              }}
            >
              Corvex builds modern digital experiences that help businesses grow through cutting-edge development, beautiful design, and result-driven marketing.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "12px" }}
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="btn-primary"
                style={{ padding: "16px 36px" }}
              >
                <span>Get Started</span>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, "portfolio")}
                className="btn-secondary"
                style={{ padding: "16px 36px" }}
              >
                <span>View Portfolio</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Content (3D Holographic Globe) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: "500px",
            }}
          >
            <HolographicGlobe />
          </motion.div>
        </div>
      </section>
 
      <section
  style={{
    marginTop: "60px",
    width: "100%",
    padding: "80px 8%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <div
  className="stats-grid"
  style={{
    width: "100%",
    maxWidth: "1200px",
    display: "grid",
    gap: "25px",
  }}
>
    {[
      { number: "50+", title: "Projects Completed" },
      { number: "5+", title: "Expert Developers" },
      { number: "24/7", title: "Support Available" },
      { number: "2+", title: "Years Experience" },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(77,217,232,0.15)",
          borderRadius: "20px",
          padding: "40px 20px",
          textAlign: "center",
          backdropFilter: "blur(15px)",
          transition: "0.4s ease",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(77,217,232,0.08)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.borderColor = "#4DD9E8";
          e.currentTarget.style.boxShadow =
            "0 0 40px rgba(77,217,232,.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor =
            "rgba(77,217,232,0.15)";
          e.currentTarget.style.boxShadow =
            "0 0 30px rgba(77,217,232,0.08)";
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#4DD9E8",
            marginBottom: "10px",
            fontFamily: "Space Grotesk",
          }}
        >
          {item.number}
        </h2>

        <p
          style={{
            color: "#F4EFEA",
            fontSize: "1.05rem",
            opacity: "0.8",
          }}
        >
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* 2. ABOUT SECTION */}
      <section
        id="about"
        style={{
          padding: "100px 5%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#FF6B6B", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-accent)" }}>ABOUT CORVEX</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4EFEA", marginTop: "10px" }}>Specializing in Scalability</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              alignItems: "stretch",
            }}
          >
            {/* Main Overview Card */}
            <TiltCard style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "300px" }}>
              <h3 style={{ fontSize: "1.6rem", color: "#4DD9E8", marginBottom: "20px" }}>Who We Are</h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "rgba(244, 239, 234, 0.8)" }}>
                Corvex is a futuristic IT solutions company built to design, deploy, and scale high-fidelity digital platforms. We transform startups, local businesses, and enterprise systems into fast, modern architectures with premium experiences.
              </p>
            </TiltCard>

            {/* Mission Card */}
            <TiltCard style={{ padding: "40px", display: "flex", flexDirection: "column", minHeight: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(255, 107, 107, 0.1)", border: "1px solid rgba(255, 107, 107, 0.2)" }}>
                  <Cpu size={22} style={{ color: "#FF6B6B" }} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "#FF6B6B" }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "rgba(244, 239, 234, 0.7)" }}>
                To empower companies with high-performance web products, custom cloud capabilities, and growth assets that optimize workflows, scale databases, and dominate organic search channels.
              </p>
            </TiltCard>

            {/* Vision Card */}
            <TiltCard style={{ padding: "40px", display: "flex", flexDirection: "column", minHeight: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(255, 79, 163, 0.1)", border: "1px solid rgba(255, 79, 163, 0.2)" }}>
                  <Eye size={22} style={{ color: "#FF4FA3" }} />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "#FF4FA3" }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "rgba(244, 239, 234, 0.7)" }}>
                To build digital structures where complexity is streamlined into minimalist UI, highly responsive modules, and bulletproof security, setting global benchmarks in engineering.
              </p>
            </TiltCard>
          </div>

          {/* Core Values Card */}
          <div style={{ marginTop: "40px" }}>
            <TiltCard style={{ padding: "40px" }}>
              <h3 style={{ fontSize: "1.6rem", color: "#F2B84B", marginBottom: "30px", textAlign: "center" }}>Company Values</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "24px",
                }}
              >
                {[
                  { title: "Velocity", desc: "Optimized pipelines, 60fps renders, and rapid build releases." },
                  { title: "Innovation", desc: "Utilizing WebGL, AI assistance, and high-performance server grids." },
                  { title: "Symmetry", desc: "Perfect harmony between visual brand art and deep backend code." }
                ].map((val, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Heart size={18} style={{ color: "#FF6B6B" }} />
                      <h4 style={{ color: "#F4EFEA", fontSize: "1.1rem" }}>{val.title}</h4>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "rgba(244, 239, 234, 0.6)", lineHeight: "1.6" }}>{val.desc}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section
        id="services"
        style={{
          padding: "100px 5%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <span style={{ color: "#4DD9E8", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-accent)" }}>OUR CAPABILITIES</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4EFEA", marginTop: "10px" }}>Full-stack Engineering & Digital Services</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <TiltCard
                key={index}
                style={{
                  padding: "40px 30px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Floating Animated Icon Container */}
                <div
                  className="services-icon-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    backgroundColor: service.color,
                    border: "1px solid rgba(244, 239, 234, 0.08)",
                    marginBottom: "28px",
                    boxShadow: "0 8px 20px rgba(15, 14, 46, 0.5)",
                    animation: "floating-service-icon 4s infinite ease-in-out",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: "#F4EFEA",
                    marginBottom: "20px",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {service.title}
                </h3>

                {/* Sub Bullet Points */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "auto",
                  }}
                >
                  {service.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.9rem",
                        color: "rgba(244, 239, 234, 0.65)",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "#4DD9E8",
                        }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>

          {/* 3.1 WHY CHOOSE CORVEX */}
          <div style={{ marginTop: "100px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h3 style={{ fontSize: "2rem", color: "#F4EFEA" }}>Why Choose Corvex</h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                { title: "Fast Delivery", icon: <Clock size={20} style={{ color: "#FF6B6B" }} />, desc: "Agile sprints ensure swift deployment without compromising detail quality." },
                { title: "Modern Technology", icon: <Cpu size={20} style={{ color: "#4DD9E8" }} />, desc: "Harnessing the latest builds of Next.js, Vercel, Node, and Tailwind modules." },
                { title: "Scalable Architecture", icon: <Layers size={20} style={{ color: "#FF4FA3" }} />, desc: "Microservices design configured for frictionless horizontal scaling." },
                { title: "Secure Solutions", icon: <ShieldCheck size={20} style={{ color: "#F2B84B" }} />, desc: "Standard SSL pipelines, robust authentication gates, and database shields." }
              ].map((choose, i) => (
                <TiltCard key={i} style={{ padding: "30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    {choose.icon}
                    <h4 style={{ fontSize: "1.1rem", color: "#F4EFEA" }}>{choose.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "rgba(244, 239, 234, 0.6)", lineHeight: "1.6" }}>{choose.desc}</p>
                </TiltCard>
              ))}
            </div>

            {/* Additional choosing parameters */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "24px",
              }}
            >
              <TiltCard style={{ padding: "30px", display: "flex", gap: "16px", alignItems: "center" }}>
                <Users size={32} style={{ color: "#4DD9E8" }} />
                <div>
                  <h4 style={{ color: "#F4EFEA", fontSize: "1.1rem" }}>Experienced Team & 24/7 Support</h4>
                  <p style={{ fontSize: "0.85rem", color: "rgba(244, 239, 234, 0.6)", marginTop: "4px" }}>
                    Direct connection to senior programmers, UX creatives, and cloud architects anytime.
                  </p>
                </div>
              </TiltCard>

              <TiltCard style={{ padding: "35px 30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h4 style={{ color: "#F4EFEA", fontSize: "1.2rem", fontWeight: "600", fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.02em" }}>
                  Latest Technology Frameworks
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: "12px", width: "100%" }}>
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginTop: "20px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(244, 239, 234, 0.06)",
                        color: "#F4EFEA",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="tech-pill"
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", flexShrink: 0 }}>
                        {tech.logo}
                      </div>
                      <span style={{ fontSize: "0.88rem", fontWeight: "500", fontFamily: "Inter, sans-serif" }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>

        </div>
      </section>

     <section
  id="industries"
  style={{
    padding: "100px 8%",
    textAlign: "center",
  }}
>
  <div
    style={{
      display: "inline-block",
      padding: "10px 22px",
      borderRadius: "999px",
      border: "1px solid rgba(77,217,232,.3)",
      color: "#4DD9E8",
      fontWeight: "600",
      letterSpacing: "2px",
      marginBottom: "25px",
      background: "rgba(77,217,232,.08)",
      fontFamily: "var(--font-accent)",
    }}
  >
    INDUSTRIES
  </div>

  <h2
    style={{
      color: "#F4EFEA",
      fontSize: "clamp(2.5rem,5vw,4.5rem)",
      fontWeight: "700",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.15",
    }}
  >
    Digital Solutions For Every Industry
  </h2>

  <p
    style={{
      color: "#B6B6C8",
      fontSize: "1.2rem",
      marginTop: "25px",
      maxWidth: "700px",
      marginInline: "auto",
      lineHeight: "1.7",
    }}
  >
    We create modern websites, web applications and digital experiences
    for businesses across multiple industries.
  </p>

  <div className="industry-grid">
    {[
      "Healthcare",
      "Restaurant",
      "Education",
      "Real Estate",
      "Gym & Fitness",
      "Hospitality",
      "Retail & E-Commerce",
      "Construction",
      "Finance",
      "Travel & Tourism",
      "Startups",
      "Corporate",
    ].map((item) => (
      <div key={item} className="industry-card">
        <span className="industry-dot"></span>
        {item}
      </div>
    ))}
  </div>
</section>

      <Contact />

      {/* 6. FAQ SECTION */}
      <section
        id="faq"
        style={{
          padding: "100px 5%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#4DD9E8", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-accent)" }}>FAQ MODULE</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4EFEA", marginTop: "10px" }}>Frequently Asked Questions</h2>
          </div>

          <Accordion items={faqItems} />

        </div>
      </section>


      {/* 8. FOOTER */}
      <Footer />

      {/* Custom micro interaction CSS keyframes */}
      <style jsx global>{`
        /* Desktop grid query */
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        
        /* Floating Service Icon micro-interactions */
        @keyframes floating-service-icon {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }
        
        .project-link:hover {
          gap: 12px !important;
          color: var(--primary-accent) !important;
          text-shadow: 0 0 10px rgba(255, 107, 107, 0.2);
        }
        
        .tech-pill:hover {
          background-color: rgba(77, 217, 232, 0.06) !important;
          border-color: var(--secondary-accent) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(77, 217, 232, 0.15);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          width: 100%;
        }
        
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
