import React from 'react'
import TiltCard from "@/components/TiltCard";
import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

const [formState, setFormState] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

    const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };
  return (
    <>
      {/* 7. CONTACT SECTION */}
            <section
              id="contact"
              style={{
               padding: "100px 5% 120px 5%",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                
                <div style={{ textAlign: "center", marginBottom: "70px" }}>
                  <span style={{ color: "#FF6B6B", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-accent)" }}>SECURE INQUIRY</span>
                  <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F4EFEA", marginTop: "10px" }}>Get In Touch With Corvex</h2>
                </div>
      
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                    gap: "40px",
                    alignItems: "stretch",
                  }}
                >
                  {/* Contact Form Card */}
                  <TiltCard style={{ padding: "40px" }}>
                    <h3 style={{ fontSize: "1.4rem", color: "#F4EFEA", marginBottom: "30px", fontFamily: "Space Grotesk, sans-serif" }}>
                      Send Secure Message
                    </h3>
                    
                    <form onSubmit={handleContactSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="name" style={{ fontSize: "0.85rem", color: "rgba(244, 239, 234, 0.7)" }}>Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Enter name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
      
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="email" style={{ fontSize: "0.85rem", color: "rgba(244, 239, 234, 0.7)" }}>Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
      
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="phone" style={{ fontSize: "0.85rem", color: "rgba(244, 239, 234, 0.7)" }}>Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
      
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="message" style={{ fontSize: "0.85rem", color: "rgba(244, 239, 234, 0.7)" }}>Message</label>
                        <textarea
                          id="message"
                          required
                          rows="5"
                          placeholder="Detail your build requirements..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>
      
                      <button
                        type="submit"
                        className="btn-primary"
                        style={{
                          padding: "16px 20px",
                          marginTop: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <Send size={16} />
                        <span>{submitted ? "Message Transmitted!" : "Transmit Inquiry"}</span>
                      </button>
                    </form>
                  </TiltCard>
      
                  {/* Map Placeholder Card */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <TiltCard
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                       padding: "clamp(20px,4vw,40px)",
                      minHeight: "auto",
                      }}
                    >
                     <div
        style={{
          display: "flex",
          flexDirection: "column",
         gap: "18px",
        }}
      >
        <h2
          style={{
         fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            color: "#F4EFEA",
            marginBottom: "10px",
          }}
        >
          Talk to a human
        </h2>
      
        <p
          style={{
            color: "#B8B8C7",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          Prefer to reach out directly? We usually respond within one business
          day.
        </p>
      
        {[
          {
            icon: <Mail size={28} />,
            title: "Email",
            value: "info@corvex.com",
          },
          {
            icon: <Phone size={28} />,
            title: "Call",
            value: "+91 98765 43210",
          },
          {
            icon: <MessageCircle size={28} />,
            title: "WhatsApp",
            value: "Chat with us instantly",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
             padding: "clamp(18px,3vw,28px)",
gap: "clamp(14px,2vw,25px)",
borderRadius: "22px",
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.08)",
              transition: ".35s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#4DD9E8";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(77,217,232,.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
             width: "clamp(56px,8vw,78px)",
             height: "clamp(56px,8vw,78px)",
            borderRadius: "18px",
                background: "rgba(77,217,232,.12)",
                color: "#4DD9E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
      
            <div>
              <h3
                style={{
                  color: "#F4EFEA",
                fontSize: "clamp(1.2rem,2vw,1.6rem)",
                  marginBottom: "8px",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </h3>
      
              <p
                style={{
                  color: "#B8B8C7",
               fontSize: "clamp(.95rem,2vw,1.15rem)",
                }}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      
                    </TiltCard>
                  </div>
      
                </div>
              </div>
            </section>
    </>
  )
}

export default Contact;
