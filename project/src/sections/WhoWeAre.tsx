"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import P1 from "@/assets/CEO.webp";
import P2 from "@/assets/CTO.png";
import P3 from "@/assets/COO.png";

// Define props interface for the component
interface AnimatedProfileImageProps {
  imageUrl: any;
  alt: string;
  delay?: number;
}

// Create a reusable component for the image animation with improved effects
const AnimatedProfileImage: React.FC<AnimatedProfileImageProps> = ({ imageUrl, alt, delay = 0 }) => {
  return (
    <motion.div 
      className="relative w-72 h-72 md:w-96 md:h-96 group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {/* Container with enhanced hover effects */}
      <div className="relative w-full h-full transition-all duration-700 ease-out transform 
                      group-hover:scale-110 group-hover:translate-y-[-15px] group-hover:z-30
                      overflow-hidden rounded-lg">
        {/* Image with improved hover transition */}
        <Image
          src={imageUrl}
          alt={alt}
          width={700}
          height={700}
          quality={100}
          className="w-full h-full object-cover transition-all duration-700 
                     filter grayscale hover:grayscale-0 group-hover:grayscale-0"
          style={{ 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px'
          }}
          priority
        />
        
        {/* Subtle gradient overlay that fades on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40 
                      group-hover:opacity-0 transition-all duration-700"></div>
      </div>
      
      {/* Enhanced shadow effect */}
      <motion.div 
        className="absolute -inset-4 bg-gradient-to-r from-[#2297F5]/10 to-[#F8CD23]/10 rounded-xl blur-xl opacity-0 
                  group-hover:opacity-80 transition-all duration-700 
                  transform scale-90 -z-10 group-hover:scale-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      ></motion.div>
    </motion.div>
  );
};

export const WhoWeAre = () => {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: 0.15 * i,
        ease: "easeOut"
      } 
    })
  };

  return (
    <div className="h-auto flex flex-col items-center justify-center px-6 pb-15 bg-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#2297F5 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      {/* Main content container */}
      <div className="h-auto w-full flex flex-col items-center justify-start py-20 relative">
        
        {/* Content container */}
        <div className="container relative z-10">
          {/* Animated Title with enhanced animation */}
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="section-title text-4xl md:text-5xl font-montserrat font-bold mb-4 text-[#2297F5] text-center">
              Our Leadership Team
            </h2>
            <div className="w-20 h-1 bg-[#F8CD23] mx-auto"></div>
          </motion.div>
        </div>
        
        {/* First Section with staggered animations */}
        <motion.div 
          className="w-full max-w-6xl flex flex-col md:flex-row items-center relative z-10 mt-8 p-6 rounded-xl hover:shadow-lg transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ backgroundColor: "rgba(246, 249, 252, 0.8)" }}
        >
          <div className="md:w-1/3 w-full flex justify-center">
            <AnimatedProfileImage imageUrl={P1} alt="ZCS_CEO" delay={0.2} />
          </div>

          <div className="md:w-2/3 md:ml-12 mt-8 md:mt-0 text-center md:text-left relative">
            <motion.h2 
              custom={1}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#032854] mt-4"
            >
              Mr.Z
            </motion.h2>
            
            <motion.h3 
              custom={2}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold italic text-[#2297F5] mb-4"
            >
              Founder and CEO
            </motion.h3>
            
            <motion.div 
              className="w-10 h-1 bg-[#F8CD23] mb-6 hidden md:block"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            
            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8"
            >
              This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </motion.p>
            
            <motion.p 
              custom={4}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8"
            >
              The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Second Section */}
        <motion.div 
          className="w-full max-w-6xl flex flex-col md:flex-row-reverse items-center mt-16 pt-8 pb-8 relative z-10 p-6 rounded-xl hover:shadow-lg transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          whileHover={{ backgroundColor: "rgba(246, 249, 252, 0.8)" }}
        >
          <div className="md:w-1/3 w-full flex justify-center">
            <AnimatedProfileImage imageUrl={P2} alt="ZCS_CTO" delay={0.3} />
          </div>

          <div className="md:w-2/3 md:mr-12 mt-8 md:mt-0 text-center md:text-left relative">
            <motion.h2 
              custom={1}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#032854] mt-4"
            >
              John Warren Cedro
            </motion.h2>
            
            <motion.h3 
              custom={2}
              variants={textVariants}
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold italic text-[#2297F5] mb-4"
            >
              Co-Founder and CTO
            </motion.h3>
            
            <motion.div 
              className="w-10 h-1 bg-[#F8CD23] mb-6 hidden md:block" 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            
            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              whileInView="visible" 
              viewport={{ once: true }}
              className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8"
            >
              This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </motion.p>
            
            <motion.p 
              custom={4}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8"
            >
              The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Third Section */}
        <motion.div 
          className="w-full max-w-6xl flex flex-col md:flex-row items-center mt-16 pt-8 mb-8 relative z-10 p-6 rounded-xl hover:shadow-lg transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          whileHover={{ backgroundColor: "rgba(246, 249, 252, 0.8)" }}
        >
          <div className="md:w-1/3 w-full flex justify-center">
            <AnimatedProfileImage imageUrl={P3} alt="ZCS_COO" delay={0.4} />
          </div>

          <div className="md:w-2/3 md:ml-12 mt-8 md:mt-0 text-center md:text-left relative">
            <motion.h2 
              custom={1}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#032854] mt-4"
            >
              Chris Joie Salgo
            </motion.h2>
            
            <motion.h3 
              custom={2}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold italic text-[#2297F5] mb-4"
            >
              Co-Founder and COO
            </motion.h3>
            
            <motion.div 
              className="w-10 h-1 bg-[#F8CD23] mb-6 hidden md:block"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            
            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8"
            >
              This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </motion.p>
            
            <motion.p 
              custom={4}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8"
            >
              The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};