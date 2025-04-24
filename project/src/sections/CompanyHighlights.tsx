"use client";
import chMain from "@/assets/ch-main.png";
import ch1 from "@/assets/ch1.png";
import ch2 from "@/assets/ch2.png";
import ch3 from "@/assets/ch3.png";
import ch4 from "@/assets/ch4.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const CompanyHighlights = () => {
  // Define the state as number | null
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const images = [
    { src: chMain, alt: "Team Collaboration", span: "md:col-span-2 md:row-span-2" },
    { src: ch1, alt: "Team Meeting", span: "md:col-span-1" },
    { src: ch2, alt: "Virtual Team", span: "md:col-span-1" },
    { src: ch3, alt: "Teamwork", span: "md:col-span-1" },
    { src: ch4, alt: "Team Discussion", span: "md:col-span-1" },
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-[500px] py-16 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-blue-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered heading section with text-center class applied to container */}
        <div className="section-heading mb-12 text-center">
          {/* Animated Title with underline effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center mx-auto" // Added mx-auto to center the content
          >
            <motion.h2
              className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 relative"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              A Glimpse Into Our Team
            </motion.h2>
            <motion.div 
              className="h-1 w-20 md:w-24 bg-gradient-to-r from-[#2297F5] to-[#F8CD23] mx-auto mt-4 mb-4 md:mb-5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p 
              className="text-base md:text-lg text-center font-openSans text-gray-600 max-w-2xl mx-auto mt-6 px-2 md:px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Explore the moments that define our team and culture through a visual journey of collaboration and innovation.
            </motion.p>
          </motion.div>
        </div>

        {/* Gallery Section with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${image.span} overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full aspect-video md:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{
                    transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
                    transform: hoveredIndex === index ? "scale(1.08)" : "scale(1)"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-white font-medium">{image.alt}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};