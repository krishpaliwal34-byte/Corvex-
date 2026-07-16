"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="glass glow-card"
            style={{
              overflow: "hidden",
              border: "1px solid rgba(244, 239, 234, 0.05)",
              borderRadius: "12px",
              transition: "border-color 0.3s ease",
            }}
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: "100%",
                padding: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                color: "#F4EFEA",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.1rem",
                fontWeight: "500",
              }}
            >
              <span style={{ paddingRight: "16px" }}>{item.question}</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: isOpen ? "rgba(77, 217, 232, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  border: isOpen ? "1px solid rgba(77, 217, 232, 0.3)" : "1px solid rgba(255, 255, 255, 0.08)",
                  color: isOpen ? "#4DD9E8" : "#F4EFEA",
                  transition: "all 0.3s ease",
                }}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>

            {/* Answer Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25, delay: 0.05 } } 
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } } 
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 24px 24px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "rgba(244, 239, 234, 0.7)",
                    }}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
