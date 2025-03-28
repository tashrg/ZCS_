"use client";
import React from 'react';
import { motion } from 'framer-motion';
import aboutBg from "@/assets/ch-main.png";

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen pt-1 pb-14 md:pt-0 md:pb-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE,_100%)] overflow-hidden">
      <div className="min-h-screen flex flex-col items-center justify-start py-10">
        <motion.h1 
          className="section-title mt-1 text-6xl font-montserrat font-bold text-[#032854]"
          initial={{ opacity: 0, y: 50 }} // Start invisible and below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and float up when in view
          viewport={{ once: true }} // Trigger animation only once
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          About Us
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12 font-montserrat text-[#032854]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          These are the services that ZCS Offers
        </motion.p>

        {/* Full-width image container with reduced height */}
        <motion.div 
          className="w-full relative min-h-[300px] md:min-h-[300px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content inside the overlay */}
          <div className="relative z-10 p-6 space-y-6 text-white container max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-2">Mission</h2>
              <p className="text-base leading-relaxed">
              Our mission is to empower Philippine businesses, starting with
                SMEs and startups, by providing top-tier custom software
                solutions that optimize operations, drive growth, and achieve
                unique goals. Globally, we create career opportunities,
                fostering innovation and making a lasting impact on industries
                and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-2">Vision</h2>
              <p className="text-base leading-relaxed">
              Our vision is to be a world-class leader in custom software
                development, recognized in the Philippines and globally. As the
                preferred technology partner, we drive innovation, sustainable
                growth, and set new standards for impactful, client-centered
                solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
