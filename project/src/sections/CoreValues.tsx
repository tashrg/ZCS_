"use client";
import React from "react";
import { motion } from "framer-motion";

export const CoreValues: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const cardHoverAnimation = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03, 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.4,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="h-auto flex flex-col items-center justify-center px-6 py-20 bg-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#2297F5 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      <div className="h-auto flex flex-col items-center justify-start max-w-6xl w-full mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-[#2297F5]">
            <span className="text-[#2297F5]">
              Z<span className="text-[#F8CD23]">C</span>S
            </span>{" "}
            Core Values
          </h1>
          <motion.div 
            className="w-24 h-1 bg-[#2297F5] mx-auto mt-2 mb-2"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[{
            title: "Z",
            subtitle: "EAL",
            desc: "Driven by integrity and respect, we approach each project with passion and commitment, ensuring our work aligns with the highest standards of quality and honor.",
            subtext: "(Honesty, Leadership)",
            gradient: "from-[#032854] to-[#0a4381]"
          }, {
            title: "C",
            subtitle: "USTOMER FOCUS",
            desc: "We prioritize our clients' unique needs, fostering a collaborative environment built on clear communication and mutual respect. Our goal is to create tailored solutions that drive meaningful, efficient results.",
            subtext: "(Communication)",
            gradient: "from-[#032854] to-[#0a4381]"
          }, {
            title: "S",
            subtitle: "OLUTIONS-DRIVEN",
            desc: "Guided by a positive, solutions-focused mindset, we lead by example in the industry. Through innovative thinking and continuous improvement, we strive to develop impactful software that supports our clients' long-term success.",
            subtext: "(Efficiency, Attitude)",
            gradient: "from-[#032854] to-[#0a4381]"
          }].map((value, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${value.gradient} text-white rounded-xl flex flex-col items-center justify-between px-6 sm:px-8 py-8 sm:py-10 text-center min-h-[320px] sm:min-h-[350px] overflow-hidden relative`}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              whileInView={{
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-tr-full"></div>

              <div className="z-10 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    <span className="text-[#F8CD23]">{value.title}</span>{value.subtitle}
                  </h5>
                  <div className="w-16 h-1 bg-[#F8CD23] mx-auto mt-2 mb-4 sm:mb-6"></div>
                </motion.div>

                <motion.p 
                  className="text-sm sm:text-base font-normal leading-relaxed tracking-wide flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {value.desc}
                  <motion.span 
                    className="block mt-3 sm:mt-4 font-semibold text-[#F8CD23]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 * index, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {value.subtext}
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center text-[#032854] mt-16 mb-10 p-8 rounded-xl bg-[#f8f9fa] w-full max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ 
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            backgroundColor: "#f3f6f9",
            transition: { duration: 0.4 }
          }}
        >
          <div className="text-center">
            <motion.h2 
              className="relative inline-block tracking-wide font-bold text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              PSALM 78:72 (NEW INTERNATIONAL VERSION)
              <motion.div 
                className="absolute left-0 bottom-[-4px] w-full h-1 bg-[#F8CD23]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
              ></motion.div>
            </motion.h2>
            <motion.p 
              className="mt-6 text-xl font-semibold tracking-wide leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <sup>72</sup>and David shepherded them with integrity of heart; with skillful
              hands he led them.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
