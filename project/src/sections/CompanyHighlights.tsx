"use client";
import chMain from "@/assets/ch-main.png";
import ch1 from "@/assets/ch1.png";
import ch2 from "@/assets/ch2.png";
import ch3 from "@/assets/ch3.png";
import ch4 from "@/assets/ch4.png";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

export const CompanyHighlights = () => {
  return (
    <section
      className="min-h-[500px] py-16 bg-gradient-to-r from-[#a6c2dd] to-[#b7ccdd] overflow-hidden relative"
    > 
      {/* Add z-10 to container to place content above the background */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-heading">
          <div className="flex justify-center">
          </div>

          {/* Animated Title */}
          <motion.h2
            className="section-title mt-5 text-4xl md:text-5xl font-montserrat font-bold text-[#2297F5]"
            initial={{ opacity: 0, y: 50 }} // Start invisible and below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and float up when in view
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            A Glimpse Into Our Team
          </motion.h2>
          <p className="section-description mt-5 text-xl text-center font-openSans">
            Explore the moments that define our team and culture.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {/* First Image (Large) */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-lg group">
            <Image
              src={chMain}
              alt="Team Collaboration"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Other Images */}
          <div className="col-span-1 md:col-span-1 overflow-hidden rounded-lg group">
            <Image
              src={ch1}
              alt="Team Meeting"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 md:col-span-1 overflow-hidden rounded-lg group">
            <Image
              src={ch2}
              alt="Virtual Team"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 md:col-span-1 overflow-hidden rounded-lg group">
            <Image
              src={ch3}
              alt="Teamwork"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 md:col-span-1 overflow-hidden rounded-lg group">
            <Image
              src={ch4}
              alt="Team Discussion"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
