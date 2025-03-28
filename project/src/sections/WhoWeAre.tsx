"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import P1 from "@/assets/ch-main.png";
import P2 from "@/assets/ch1.png";
import P3 from "@/assets/ch2.png";
import P4 from "@/assets/ch3.png";
import P5 from "@/assets/ch4.png";

export const WhoWeAre = () => {
  const images = [P1, P2, P3];
  const newImages = [P4, P5];
  const newImages1 = [P1, P4];
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentNewImage, setCurrentNewImage] = useState(0);
  const [isNewHovered, setIsNewHovered] = useState(false);
  const [currentNewImage1, setCurrentNewImage1] = useState(0);
  const [is1NewHovered, setIs1NewHovered] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    } else {
      setCurrentImage(0);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isNewHovered) {
      intervalId = setInterval(() => {
        setCurrentNewImage((prevIndex) => (prevIndex + 1) % newImages.length);
      }, 1000);
    } else {
      setCurrentNewImage(0);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isNewHovered]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
  
    if (is1NewHovered) {
      intervalId = setInterval(() => {
        setCurrentNewImage1((prevIndex) => (prevIndex + 1) % newImages1.length);
      }, 1000);
    } else {
      setCurrentNewImage1(0);
    }
  
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [is1NewHovered]);
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-15 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE,_100%)] overflow-hidden relative">
      <div className="min-h-screen flex flex-col items-center justify-start py-20">
      <motion.div 
        className="flex items-center justify-center w-full mb-12 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl font-montserrat font-bold text-[#032854] text-center">
          Who We Are
        </h1>
      </motion.div>
    {/* First Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center">
        <div 
          className="md:w-1/3 w-full flex justify-center h-[500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full max-w-[400px] rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={images[currentImage]}
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="md:w-2/3 md:ml-12 mt-8 md:mt-0 text-center md:text-left relative">
          <h2 className="text-4xl font-bold text-[#032854] mt-4">Cris Joe Salgo</h2>
          <h3 className="text-2xl font-semibold italic text-[#032854]">Chief Operating Officer</h3>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
                This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </p>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
                The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </p>
        </div>
      </div>
    {/* Second Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse items-center mt-2">
        <div 
          className="md:w-1/3 w-full flex justify-center h-[500px]"
          onMouseEnter={() => setIsNewHovered(true)}
          onMouseLeave={() => setIsNewHovered(false)}
        >
          <motion.div
            key={currentNewImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full max-w-[400px] rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={newImages[currentNewImage]}
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="md:w-2/3 md:mr-12 mt-8 md:mt-0 text-center md:text-left relative">
          <h2 className="text-4xl font-bold text-[#032854] mt-4">New Section Title</h2>
          <h3 className="text-2xl font-semibold italic text-[#032854]">New Section Subtitle</h3>
          <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
                This is the first paragraph with an indent. The text is justified for a cleaner look, making it more readable.
            </p>
            <p className="text-lg text-[#032854] leading-loose tracking-wide text-justify max-w-prose indent-8">
                The second paragraph follows the same style, keeping the layout visually balanced and easy to read.
            </p>
        </div>
      </div>
    {/* Third Section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center mb-2">
            <div 
            className="md:w-1/3 w-full flex justify-center h-[500px]"
            onMouseEnter={() => setIs1NewHovered(true)}
            onMouseLeave={() => setIs1NewHovered(false)}
            >
            <motion.div
                key={currentNewImage1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full max-w-[400px] rounded-lg shadow-lg overflow-hidden"
            >
                <Image
                src={newImages1[currentNewImage1]}
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </motion.div>
            </div>

            <div className="md:w-2/3 md:ml-12 mt-8 md:mt-0 text-center md:text-left relative">
            <h2 className="text-4xl font-bold text-[#032854] mt-4">Cris Joe Salgo</h2>
            <h3 className="text-2xl font-semibold italic text-[#032854]">Chief Operating Officer</h3>
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
