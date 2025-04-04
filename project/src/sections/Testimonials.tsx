"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// You'll need to replace these with actual images
import avatar1 from "@/assets/User.png";
import avatar2 from "@/assets/User.png";
import avatar3 from "@/assets/User.png";
import avatar4 from "@/assets/User.png";
import avatar5 from "@/assets/User.png";
import avatar6 from "@/assets/User.png";
import avatar7 from "@/assets/User.png";
import avatar8 from "@/assets/User.png";
import avatar9 from "@/assets/User.png";
import bgImage from "@/assets/testimonialsboarder.png";

// Define interface for testimonial items
interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  role: string;
  rating: number;
}

// Define interface for StarRating props
interface StarRatingProps {
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar1.src,
    name: "John Doe",
    role: "Student",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar2.src,
    name: "Mykel Cymon Bernal",
    role: "Project Manager",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar3.src,
    name: "CJ Salgo",
    role: "Software Engineer",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    role: "Marketing Specialist",
    rating: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar5.src,
    name: "Nicole Reim Madronero",
    role: "Event Planner",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar6.src,
    name: "Alfredo Almirez",
    role: "UI/UX Designer",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar7.src,
    name: "John Doe",
    role: "Student",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar8.src,
    name: "John Doe",
    role: "Student",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus condimentor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imageSrc: avatar9.src,
    name: "John Doe",
    role: "Student",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate prev and next indices for the carousel
  const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  // Generate star ratings with proper typing
  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-sm text-[#2297F5]">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-[500px] py-16 bg-gradient-to-r from-[#ffffff]/30 to-[#ffffff] overflow-hidden relative"
    style={{
      backgroundImage: `url(${bgImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    {/* Add a semi-transparent overlay to maintain readability */}
    <div className="absolute inset-0 bg-[#ffffff] opacity-70 z-0"></div>
    
    {/* Add z-10 to container to place content above the background */}
    <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-10">
        <motion.h2
            className="section-title mt-5 text-6xl font-montserrat font-bold text-[#032854]"
            initial={{ opacity: 0, y: 50 }} // Start invisible and below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and float up when in view
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            Testimonials
          </motion.h2>
          <p className="section-description mt-5 text-xl text-center font-openSans">
            What client says about us?
          </p>
        </div>
        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center relative mb-8">
            {/* Previous Card (hidden on mobile) */}
            {!isMobile && (
              <motion.div
                key={`prev-${prevIndex}`}
                className="hidden md:block absolute left-24 w-56 h-64 bg-[#2297F5] rounded-lg shadow p-5 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xl font-bold text-white opacity-50 mb-2">❝</div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-2">
                    <Image
                      src={testimonials[prevIndex].imageSrc}
                      alt={testimonials[prevIndex].name}
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <div className="ml-2">
                      <div className="text-xs font-medium text-white">{testimonials[prevIndex].name}</div>
                      <div className="text-xs text-white opacity-75">{testimonials[prevIndex].role}</div>
                    </div>
                  </div>
                  <p className="text-white text-xs opacity-75 line-clamp-6">
                    {testimonials[prevIndex].text}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Current Card */}
            <motion.div
              key={`current-${currentIndex}`}
              className="w-full max-w-sm bg-white rounded-lg shadow-lg p-5 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold text-[#2297F5] mb-3">❝</div>
              <div className="flex flex-col items-center">
                <Image
                  src={testimonials[currentIndex].imageSrc}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="rounded-full mb-2"
                />
                <StarRating rating={testimonials[currentIndex].rating} />
                <div className="text-center mt-1 mb-4">
                  <div className="font-medium text-sm">{testimonials[currentIndex].name}</div>
                  <div className="text-xs text-gray-500">{testimonials[currentIndex].role}</div>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </motion.div>

            {/* Next Card (hidden on mobile) */}
            {!isMobile && (
              <motion.div
                key={`next-${nextIndex}`}
                className="hidden md:block absolute right-24 w-56 h-64 bg-[#2297F5] rounded-lg shadow p-5 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xl font-bold text-white opacity-50 mb-2">❝</div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-2">
                    <Image
                      src={testimonials[nextIndex].imageSrc}
                      alt={testimonials[nextIndex].name}
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <div className="ml-2">
                      <div className="text-xs font-medium text-white">{testimonials[nextIndex].name}</div>
                      <div className="text-xs text-white opacity-75">{testimonials[nextIndex].role}</div>
                    </div>
                  </div>
                  <p className="text-white text-xs opacity-75 line-clamp-6">
                    {testimonials[nextIndex].text}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-[#2297F5] rounded-full flex items-center justify-center shadow hover:bg-gray-100 focus:outline-none z-30"
              aria-label="Previous testimonial"
            >
              <span className="sr-only">Previous</span>
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-[#2297F5] rounded-full flex items-center justify-center shadow hover:bg-gray-100 focus:outline-none z-30"
              aria-label="Next testimonial"
            >
              <span className="sr-only">Next</span>
              &gt;
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-2 h-2 rounded-full outline outline-1 outline-[#032854] ${
                  index === currentIndex ? "bg-blue-500" : "bg-transparent"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};