"use client"; 
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import avatar1 from "@/assets/User.png";
import avatar2 from "@/assets/User.png";
import avatar3 from "@/assets/User.png";
import avatar4 from "@/assets/User.png";
import avatar5 from "@/assets/User.png";
import avatar6 from "@/assets/User.png";
import avatar7 from "@/assets/User.png";
import avatar8 from "@/assets/User.png";
import avatar9 from "@/assets/User.png";

const testimonials = [
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar1.src,
    name: "Elijah Sunga",
    role: "UI/UX Designer",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar2.src,
    name: "Mykel Cymon Bernal",
    role: "Project Manager",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar3.src,
    name: "CJ Salgo",
    role: "Software Engineer",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    role: "Marketing Specialist",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar5.src,
    name: "Nicole Reim Madronero",
    role: "Event Planner",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar6.src,
    name: "Alfredo Almirez",
    role: "UI/UX Designer",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar7.src,
    name: "Natasha Gallego",
    role: "Team Lead",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar8.src,
    name: "Warren Cerdo",
    role: "Tech Consultant",
  },
  {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    imageSrc: avatar9.src,
    name: "Niel Joseph Samar",
    role: "Business Analyst",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setFadeKey((prevKey) => prevKey + 1); // Trigger re-render for page-turn effect
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setFadeKey((prevKey) => prevKey + 1); // Trigger re-render for page-turn effect
  };

  const { text, imageSrc, name, role } = testimonials[currentIndex];

  return (
    <section className="min-h-[400px] sm:min-h-[550px] lg:min-h-[580px] xl:min-h-[750px] pt-20 pb-12 md:pt-12 md:pb-12 relative bg-gradient-to-r from-[#ffffff]/30 to-[#ffffff] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 relative">
        {/* Title Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 md:order-none text-center md:text-left"
        >
          <div className="tag text-[#032854] font-bold uppercase font-montserrat">Testimonials</div>
          <h2 className="section-title mt-5 text-6xl font-montserrat font-bold text-[#032854] flex flex-col items-start">
            <span>What Client</span>
            <div className="flex flex-row items-center mt-2">
              <span className="mt-2">say</span>
              <span className="bg-[#F8CD23] text-[#032854] font-montserrat px-2 rounded-md mt-2 ml-2 typing-animation">
                about us.
              </span>
            </div>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={fadeKey}
          ref={ref}
          className="order-2 md:order-none bg-[#032854] text-white p-8 rounded-lg shadow-lg max-w-lg flex flex-col justify-between relative mt-6"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-5xl font-bold font-openSans">❜❜</div>
          <div className="text-xl leading-relaxed font-light font-openSans">{text}</div>
          <div className="flex items-center gap-4 mt-6">
            <Image
              src={imageSrc}
              alt={name}
              width={50}
              height={50}
              className="h-12 w-12 rounded-full border-2 border-[#F8CD23]"
            />
            <div className="text-left">
              <div className="font-bold text-lg font-montserrat">{name}</div>
              <div className="text-sm text-[#F8CD23] font-openSans">{role}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-12 right-0 flex flex-row gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-[#F8CD23] text-[#032854] font-extrabold text-3xl rounded-full flex items-center justify-center shadow-md hover:bg-[#e6b91f]"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-[#F8CD23] text-[#032854] font-extrabold text-3xl rounded-full flex items-center justify-center shadow-md hover:bg-[#e6b91f]"
            >
              &gt;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
