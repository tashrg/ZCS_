"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the types for the FlipCard props
interface FlipCardProps {
  frontText: string;
  backText: string;
  onClick: (front: string, back: string) => void;
}

export const Services = () => {
  const [popupInfo, setPopupInfo] = useState<{ front: string; back: string } | null>(null);

  const handleFlipCardClick = (front: string, back: string) => {
    setPopupInfo({ front, back });
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  const services: FlipCardProps[] = [
    { frontText: "Customer Software Development", backText: "Tailored software solutions for businesses.", onClick: handleFlipCardClick },
    { frontText: "Website Development & Web Design", backText: "Modern, responsive, and SEO-friendly websites.", onClick: handleFlipCardClick },
    { frontText: "Web Application Development", backText: "Scalable and efficient web apps.", onClick: handleFlipCardClick },
    { frontText: "Mobile Application Development", backText: "Cross-platform and native mobile apps.", onClick: handleFlipCardClick },
    { frontText: "AI/ML Engineering (Coming Soon)", backText: "AI-driven solutions for automation and insights.", onClick: handleFlipCardClick },
    { frontText: "Software Integration Services", backText: "Seamless integration of various software systems.", onClick: handleFlipCardClick },
    { frontText: "UI/UX Design Prototyping", backText: "User-friendly interfaces and prototypes.", onClick: handleFlipCardClick },
    { frontText: "Information Technology Consultation", backText: "Expert IT strategies for your business.", onClick: handleFlipCardClick },
    { frontText: "Automation and Workflow Optimization", backText: "Enhancing business processes through automation.", onClick: handleFlipCardClick },
    { frontText: "Agentic AI (Coming Soon)", backText: "Next-gen AI systems with autonomous capabilities.", onClick: handleFlipCardClick }
  ];

  return (
    <section id="services" className="bg-radial-blue-gradient bg-gradient-to-r overflow-hidden from-[#ffffff]/30 to-[#ffffff] relative">
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-title mt-2 text-6xl font-montserrat font-bold text-[#2297F5]"
        >
          Our Services
        </motion.h2>
        <p className="section-description mt-5 text-xl text-center font-openSans">
          Our expertise spans cutting-edge software development, intuitive digital experiences, and AI-driven innovations, ensuring your business stays ahead in an ever-evolving digital landscape.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}  // Start from the right
              whileInView={{ opacity: 1, x: 0 }} // Wipe from right to left
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={service.frontText === "Agentic AI (Coming Soon)" ? "md:col-start-2" : ""}  // Align Agentic AI with second column
            >
              <FlipCard
                frontText={service.frontText}
                backText={service.backText}
                onClick={service.onClick}
                className={index === services.length - 1 ? "md:col-span-3" : ""}
              />
            </motion.div>
          ))}
        </motion.div>

        {popupInfo && (
          <Popup frontText={popupInfo.front} backText={popupInfo.back} onClose={closePopup} />
        )}
      </div>
    </section>
  );
};

// 🔹 Flip Card Component
const FlipCard: React.FC<FlipCardProps & { className?: string }> = ({ frontText, backText, className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-80 h-40 cursor-pointer perspective ${className}`}
      onClick={() => onClick(frontText, backText)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`w-full h-full rounded-lg shadow-lg font-semibold text-white flex items-center justify-center text-center bg-[#2297F5] ${isHovered ? 'scale-105 transition-transform duration-300' : ''}`}
        animate={{ backgroundColor: isHovered ? "rgb(66 179 255 / var(--tw-bg-opacity, 1))" : "rgb(34 151 245 / var(--tw-bg-opacity, 1))" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {frontText}
      </motion.div>
    </motion.div>
  );
};

// 🔹 Popup Component
const Popup: React.FC<{ frontText: string; backText: string; onClose: () => void }> = ({ frontText, backText, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={() => {
          setIsPopupOpen(false);
          onClose();
        }} className="absolute top-2 right-2">
          X
        </button>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">{frontText}</h2>
        <p className="text-gray-700">{backText}</p>
      </motion.div>
    </motion.div>
  );
};
