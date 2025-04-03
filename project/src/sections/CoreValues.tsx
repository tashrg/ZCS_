"use client"; 
import React from "react";
import { motion } from "framer-motion";

export const CoreValues: React.FC = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center px-6 bg-gradient-to-r from-[#a6c2dd]/30 to-[#b7ccdd] overflow-hidden relative">
      <div className="h-auto flex flex-col items-center justify-start py-10">
        {/* Title Animation */}
        <motion.div
          className="section-title text-6xl font-bold text-[#032854]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-5 mt-12 text-[#032854]">
            <span className="text-[#2297F5]">
              Z<span className="text-[#F8CD23]">C</span>S
            </span>{" "}
            Core Values
          </h1>
          <div className="w-20 h-1 bg-[#032854] mx-auto mt-0 mb-10"></div>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
          {[{
            title: "Z",
            subtitle: "EAL",
            desc: "Driven by integrity and respect, we approach each project with passion and commitment, ensuring our work aligns with the highest standards of quality and honor.",
            subtext: "(Honesty, Leadership)",
          }, {
            title: "C",
            subtitle: "USTOMER FOCUS",
            desc: "We prioritize our clients' unique needs, fostering a collaborative environment built on clear communication and mutual respect. Our goal is to create tailored solutions that drive meaningful, efficient results.",
            subtext: "(Communication)",
          }, {
            title: "S",
            subtitle: "OLUTIONS-DRIVEN",
            desc: "Guided by a positive, solutions-focused mindset, we lead by example in the industry. Through innovative thinking and continuous improvement, we strive to develop impactful software that supports our clients' long-term success.",
            subtext: "(Efficiency, Attitude)",
          }].map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#032854] text-white rounded-lg flex flex-col items-center justify-between px-12 py-8 text-center min-h-[300px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 * index }} // Stagger effect
            >
              <h5 className="text-4xl font-bold">
                <span className="text-[#F8CD23]">{value.title}</span>{value.subtitle}
              </h5>
              <p className="text-sm font-normal leading-relaxed tracking-wide flex-grow mt-4">
                {value.desc}
                <br />
                <span className="block mt-3">{value.subtext}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bible Verse */}
        <motion.div
          className="flex items-center justify-center text-[#032854] mt-10 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center font-bold text-2xl">
            <h2 className="relative inline-block tracking-wide">
              PSALM 78:72 (NEW INTERNATIONAL VERSION)
              <div className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#F8CD23]"></div>
            </h2>
            <p className="mt-4 text-xl font-semibold tracking-wide leading-relaxed">
              <sup>72</sup>and David shepherded them with integrity of heart; with skillful
              hands he led them.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
