"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "/src/assets/ch-main.png";
import image2 from "/src/assets/ch1.png";

const backgroundImages = [image1, image2];

interface FlipCardProps {
  frontText: string;
  backText: string;
  onClick: (front: string, back: string) => void;
  index: number;
}

export const Services = () => {
  const [popupInfo, setPopupInfo] = useState<{
    front: string;
    back: string;
  } | null>(null);

  const handleFlipCardClick = (front: string, back: string) => {
    setPopupInfo({ front, back });
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  const services: Omit<FlipCardProps, "index">[] = [
    {
      frontText: "Customer Software Development",
      backText: "Tailored software solutions for businesses.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "WEBSITE DEVELOPMENT & WEB DESIGN",
      backText: "Modern, responsive, and SEO-friendly websites.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "WEB APPLICATION DEVELOPMENT",
      backText: "Scalable and efficient web apps.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "MOBILE APPLICATION DEVELOPMENT",
      backText: "Cross-platform and native mobile apps.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "AI/ML ENGINEERING (COMING SOON)",
      backText: "AI-driven solutions for automation and insights.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "Software Integration Services",
      backText: "Seamless integration of various software systems.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "UI/UX DESIGN PROTOTYPING",
      backText: "User-friendly interfaces and prototypes.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "INFORMATION TECHNOLOGY CONSULTATION",
      backText: "Expert IT strategies for your business.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "AUTOMATION AND WORKFLOW OPTIMIZATION",
      backText: "Enhancing business processes through automation.",
      onClick: handleFlipCardClick,
    },
    {
      frontText: "AGENTIC AI (COMING SOON)",
      backText: "Next-gen AI systems with autonomous capabilities.",
      onClick: handleFlipCardClick,
    },
  ];

  return (
    <section
      id="services"
      className="bg-radial-blue-gradient bg-gradient-to-r overflow-hidden from-[#ffffff]/30 to-[#ffffff] relative"
    >
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-title mt-2 text-6xl font-montserrat font-bold text-[#032854]"
        >
          Our Services
        </motion.h2>
        <p className="section-description mt-5 text-xl text-center font-openSans">
          Our expertise spans cutting-edge software development, intuitive
          digital experiences, and AI-driven innovations, ensuring your business
          stays ahead in an ever-evolving digital landscape.
        </p>

<<<<<<< HEAD
        {/* Mobile view - vertical single column with fixed card width */}
        <div className="flex flex-col items-center gap-6 mt-12 px-4 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-12 px-4 sm:px-6 md:px-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
>>>>>>> 28b8247dfa305b10179311bbed2341331b59a90c
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
<<<<<<< HEAD
            >
              <FlipCard
                frontText={service.frontText}
                backText={service.backText}
                onClick={service.onClick}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Tablet and Desktop view - grid layout */}
        <motion.div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-12 px-4 sm:px-6 md:px-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={
                service.frontText === "AGENTIC AI (COMING SOON)"
                  ? "md:col-start-2"
=======
              className={
                service.frontText === "AGENTIC AI (COMING SOON)"
                  ? "md:col-start-2" // Modified line
>>>>>>> 28b8247dfa305b10179311bbed2341331b59a90c
                  : ""
              }
            >
              <FlipCard
                frontText={service.frontText}
                backText={service.backText}
                onClick={service.onClick}
                className={index === services.length - 1 ? "md:col-span-3" : ""}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {popupInfo && (
          <Popup
            frontText={popupInfo.front}
            backText={popupInfo.back}
            onClose={closePopup}
          />
        )}
      </div>
    </section>
  );
};

const FlipCard: React.FC<FlipCardProps & { className?: string }> = ({
  frontText,
  backText,
  className,
  onClick,
  index,
}) => {
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
      <div className="absolute inset-0">
        <Image
          src={backgroundImages[index % backgroundImages.length]}
          alt={frontText}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
      </div>
      <motion.div className="absolute inset-0 flex items-center justify-center text-center text-white font-semibold text-lg px-4">
        {frontText}
      </motion.div>
    </motion.div>
  );
};

const Popup: React.FC<{
  frontText: string;
  backText: string;
  onClose: () => void;
}> = ({ frontText, backText, onClose }) => {
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
        <button
          onClick={() => {
            setIsPopupOpen(false);
            onClose();
          }}
          className="absolute top-2 right-2"
        >
          X
        </button>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          {frontText}
        </h2>
        <p className="text-gray-700">{backText}</p>
      </motion.div>
    </motion.div>
  );
};

<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> 28b8247dfa305b10179311bbed2341331b59a90c
