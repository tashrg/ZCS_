"use client"; 
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import P1 from "@/assets/CEO.webp";
import P2 from "@/assets/CTO.png";
import P3 from "@/assets/COO.png";
import bgImage from "@/assets/bgg2.png";

// Define props interface for the component
interface AnimatedProfileImageProps {
  imageUrl: any; // Using any for Next.js Image src compatibility
  alt: string;
}

// Create a reusable component for the image pop-up animation
const AnimatedProfileImage: React.FC<AnimatedProfileImageProps> = ({ imageUrl, alt }) => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
      {/* Invisible container with pop-up effect */}
      <div className="relative w-full h-full transition-all duration-500 ease-out transform 
                      group-hover:scale-125 group-hover:translate-y-[-25px] group-hover:z-50
                      overflow-hidden bg-transparent">
        {/* Image only with no visible container */}
        <Image
          src={imageUrl}
          alt={alt}
          width={700}
          height={700}
          quality={100}
          className="w-full h-full object-cover transition-all duration-500 
                     filter grayscale group-hover:grayscale-0"
          style={{ 
            boxShadow: 'none',
            borderRadius: '0px'
          }}
          priority
        />
      </div>
      
      {/* Very subtle shadow that's barely visible */}
      <div className="absolute -inset-4 bg-black/10 rounded-3xl blur-2xl opacity-0 
                      group-hover:opacity-50 transition-all duration-500 
                      transform scale-90 -z-10 group-hover:scale-100"></div>
    </div>
  );
};

export const WhoWeAre = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center px-6 pb-15 bg-gradient-to-r from-[#eef4fa]/30 to-[#eef4fa] overflow-hidden relative">
      {/* Main content container with background overlay */}
      <div className="h-auto w-full flex flex-col items-center justify-start py-20 relative">
        {/* Background image with reduced opacity */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        ></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#eef4fa]/80 to-[#eef4fa]/70"></div>
        
        {/* Content container */}
        <div className="container relative z-10">
          <div className="flex justify-center">
            <div className="tag text-[#032854] font-bold uppercase font-montserrat">
              Zenith Core Solutions
            </div>
          </div>
          {/* Animated Title */}
          <motion.h2
            className="section-title mt-5 text-6xl font-montserrat font-bold text-[#032854] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Leadership Team
          </motion.h2>
          <p className="section-description mt-5 text-xl text-center font-openSans">
            
          </p>
        </div>
        
        {/* First Section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center relative z-10 mt-8">
          <div className="md:w-1/3 w-full flex justify-center">
            <AnimatedProfileImage imageUrl={P1} alt="ZCS_CEO" />
          </div>

          <div className="md:w-2/3 md:ml-12 mt-8 md:mt-0 text-center md:text-left relative">
            <h2 className="text-4xl font-bold text-[#032854] mt-4">Mr.Z</h2>
            <h3 className="text-2xl font-semibold italic text-[#032854]">Founder and CEO</h3>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
              This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </p>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
              The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </p>
          </div>
        </div>
        
        {/* Second Section - with increased spacing for image pop-up */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse items-center mt-16 pt-8 pb-8 relative z-10">
          <div className="md:w-1/3 w-full flex justify-center">
            <AnimatedProfileImage imageUrl={P2} alt="ZCS_CTO" />
          </div>

          <div className="md:w-2/3 md:mr-12 mt-8 md:mt-0 text-center md:text-left relative">
            <h2 className="text-4xl font-bold text-[#032854] mt-4">John Warren Cedro</h2>
            <h3 className="text-2xl font-semibold italic text-[#032854]">Co-Founder and CTO</h3>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
              This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </p>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
              The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </p>
          </div>
        </div>
        
        {/* Third Section - with increased spacing for image pop-up */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center mt-16 pt-8 mb-8 relative z-10">
          <div className="md:w-1/3 w-full flex justify-center">
            <AnimatedProfileImage imageUrl={P3} alt="ZCS_COO" />
          </div>

          <div className="md:w-2/3 md:ml-12 mt-8 md:mt-0 text-center md:text-left relative">
            <h2 className="text-4xl font-bold text-[#032854] mt-4">Chris Joie Salgo</h2>
            <h3 className="text-2xl font-semibold italic text-[#032854]">Co-Founder and COO</h3>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
              This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </p>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
              The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};