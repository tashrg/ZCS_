"use client";
import React from 'react';
import { motion } from 'framer-motion';
import aboutBg from "@/assets/ch-main.png";

export const AboutUs: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 * i,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="h-auto pt-1 pb-14 md:pt-0 md:pb-8 bg-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#2297F5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="flex flex-col items-center justify-start pt-16 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-6 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-3 md:mb-4 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About <span className="text-[#2297F5]">Us</span>
            </motion.h1>

            {/* Gradient Divider */}
            <motion.div
              className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#F8CD23] to-[#2297F5] mx-auto mt-4 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-gray-700 font-montserrat max-w-2xl mx-auto px-2 md:px-4 mt-6 text-center"
              custom={1}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              These are the services that ZCS offers.
            </motion.p>
          </motion.div>
        </div>

      {/* Full-width parallax image section */}
      <motion.div
        className="w-screen relative min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden shadow-xl -mt-4"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>

        <div className="relative z-10 p-8 space-y-12 text-white container max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            className="max-w-2xl mx-auto p-6 rounded-lg backdrop-blur-sm bg-black/10 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-3 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Mission
              <motion.div
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#F8CD23]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              ></motion.div>
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Our mission is to empower Philippine businesses, starting with
              SMEs and startups, by providing top-tier custom software
              solutions that optimize operations, drive growth, and achieve
              unique goals. Globally, we create career opportunities,
              fostering innovation and making a lasting impact on industries
              and communities.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto p-6 rounded-lg backdrop-blur-sm bg-black/10 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-3 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Vision
              <motion.div
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#F8CD23]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              ></motion.div>
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Our vision is to be a world-class leader in custom software development,
              recognized in the Philippines and globally. As the preferred technology partner,
              we drive innovation, sustainable growth, and set new standards for impactful,
              client-centered solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};