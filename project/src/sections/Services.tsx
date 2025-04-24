"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";


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
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });

  const handleCardClick = (front: string, back: string) => {
    setPopupInfo({ front, back });
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  const categories = [
    "All",
    "Development",
    "Design",
    "Consultation",
    "AI/ML"
  ];

  const services: (Omit<FlipCardProps, "index"> & { category: string, icon: string })[] = [
    {
      frontText: "Custom Software Development",
      backText: "Tailored software solutions designed to address your unique business challenges. We build scalable, secure, and efficient applications that streamline your operations and drive growth.",
      onClick: handleCardClick,
      category: "Development",
      icon: "💻"
    },
    {
      frontText: "Website Development & Web Design",
      backText: "Modern, responsive, and SEO-friendly websites that provide exceptional user experience. Our designs are visually appealing while ensuring fast load times and optimal performance.",
      onClick: handleCardClick,
      category: "Design",
      icon: "🌐"
    },
    {
      frontText: "Web Application Development",
      backText: "Scalable and efficient web applications built with cutting-edge technologies. We create robust solutions that can handle your business requirements while providing intuitive user interfaces.",
      onClick: handleCardClick,
      category: "Development",
      icon: "⚙️"
    },
    {
      frontText: "Mobile Application Development",
      backText: "Cross-platform and native mobile applications that deliver seamless experiences across devices. Our mobile solutions are optimized for performance, security, and user engagement.",
      onClick: handleCardClick,
      category: "Development",
      icon: "📱"
    },
    {
      frontText: "AI/ML Engineering (Coming Soon)",
      backText: "AI-driven solutions for automation and insights. Leverage the power of machine learning to analyze data, automate processes, and gain valuable business intelligence.",
      onClick: handleCardClick,
      category: "AI/ML",
      icon: "🧠"
    },
    {
      frontText: "Software Integration Services",
      backText: "Seamless integration of various software systems to create a unified technology ecosystem. We connect your disparate platforms to improve workflow efficiency and data consistency.",
      onClick: handleCardClick,
      category: "Development",
      icon: "🔄"
    },
    {
      frontText: "UI/UX Design Prototyping",
      backText: "User-friendly interfaces and prototypes that prioritize usability and aesthetic appeal. Our design process focuses on understanding user behaviors to create intuitive, engaging experiences.",
      onClick: handleCardClick,
      category: "Design",
      icon: "🎨"
    },
    {
      frontText: "Information Technology Consultation",
      backText: "Expert IT strategies tailored for your business goals. Our consultants provide guidance on technology adoption, infrastructure planning, and digital transformation initiatives.",
      onClick: handleCardClick,
      category: "Consultation",
      icon: "📊"
    },
    {
      frontText: "Automation and Workflow Optimization",
      backText: "Enhancing business processes through intelligent automation. We identify inefficiencies and implement solutions that save time, reduce errors, and increase productivity.",
      onClick: handleCardClick,
      category: "Development",
      icon: "⚡"
    },
    {
      frontText: "Agentic AI (Coming Soon)",
      backText: "Next-generation AI systems with autonomous capabilities. Our agentic AI solutions can perform complex tasks, make decisions, and adapt to changing environments with minimal human intervention.",
      onClick: handleCardClick,
      category: "AI/ML",
      icon: "🤖"
    },
  ];

  const filteredServices = selectedCategory && selectedCategory !== "All" 
    ? services.filter(service => service.category === selectedCategory)
    : services;

  // Animation variants - updated with longer duration and persist state
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        when: "beforeChildren"
      }
    }
  };

  // Updated with longer transition and no fade-out
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // Determine if last item should be centered
  const shouldCenterLastItem = filteredServices.length % 3 === 1;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-8 md:py-16 overflow-hidden" // Further reduced padding to bring closer to dashboard
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-50"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-50"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        <svg width="100%" height="100%" className="absolute top-0 left-0 z-0 opacity-10">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#2297F5"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="text-center mb-8 md:mb-12"
        >
          <motion.span 
            className="inline-block text-sm font-medium text-blue-600 mb-2 px-4 py-1 bg-blue-50 rounded-full"
            variants={titleVariants}
          >
            WHAT WE OFFER
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-3 md:mb-4 px-2"
            variants={titleVariants}
          >
            Our <span className="text-[#2297F5]">Services</span>
          </motion.h2>

          <motion.div 
            className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#2297F5] to-[#F8CD23] mx-auto mb-4 md:mb-5"
            variants={titleVariants}
          />

          <motion.p 
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 font-openSans px-2 md:px-4"
            variants={titleVariants}
          >
            Our expertise spans cutting-edge software development, intuitive
            digital experiences, and AI-driven innovations, ensuring your business
            stays ahead in an ever-evolving digital landscape.
          </motion.p>
        </motion.div>

        {/* Category filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10" // Further reduced margin to bring cards closer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-3 py-1 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category || (category === "All" && !selectedCategory)
                  ? "bg-[#2297F5] text-white shadow-lg shadow-blue-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile view - vertical single column with fixed card width */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory || "all"}
            className="flex flex-col items-center gap-4 md:hidden" // Maintained from previous version
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.frontText}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08, // Slightly reduced delay for faster appearance
                  ease: "easeOut",
                }}
              >
                <ServiceCard
                  frontText={service.frontText}
                  backText={service.backText}
                  onClick={service.onClick}
                  index={index}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tablet and Desktop view - grid layout with last card aligned center column */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory || "all-desktop"}
            className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.frontText}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`w-full flex justify-center ${index === filteredServices.length - 1 ? 'lg:col-start-2' : ''}`}
              >
                <ServiceCard
                  frontText={service.frontText}
                  backText={service.backText}
                  onClick={service.onClick}
                  index={index}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


        {popupInfo && (
          <ServicePopup
            frontText={popupInfo.front}
            backText={popupInfo.back}
            onClose={closePopup}
          />
        )}
      </div>
    </section>
  );
};

// Simplified card without flip effect
const ServiceCard: React.FC<FlipCardProps & { className?: string, icon: string }> = ({
  frontText,
  backText,
  className,
  onClick,
  index,
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  // Using once: true to prevent disappearing when scrolled up
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onClick(frontText, backText);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full max-w-[280px] sm:w-80 h-44 md:h-48 cursor-pointer ${className}`} // Reduced height slightly on mobile
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.07 }} // Slightly reduced delay
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Card without flip effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-xl shadow-lg flex flex-col items-center justify-center p-4 md:p-6 text-center">
        <motion.div 
          className="text-3xl md:text-4xl mb-3 md:mb-4"
          animate={isHovered ? { scale: 1.2, rotate: [0, 10, -10, 0] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 tracking-tight line-clamp-2">{frontText}</h3>
        
        <motion.div
          className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-7 md:w-8 h-7 md:h-8 flex items-center justify-center text-blue-500"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
      </div>
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 rounded-xl bg-blue-300 opacity-0 z-[-1]"
        animate={{ opacity: isHovered ? 0.2 : 0, scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ filter: "blur(15px)" }}
      />
    </motion.div>
  );
};

// Simplified popup without Learn More button
const ServicePopup: React.FC<{
  frontText: string;
  backText: string;
  onClose: () => void;
}> = ({ frontText, backText, onClose }) => {
  useEffect(() => {
    // Prevent background scrolling when popup is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
      onClick={onClose}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 1000000, // Extremely high z-index to overcome all other elements
      }}
    >
      <div
        className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl relative max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div>
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2297F5" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 text-center">
            {frontText}
          </h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-[#2297F5] to-[#F8CD23] mx-auto mb-4 md:mb-5" />
          
          <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
            {backText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;