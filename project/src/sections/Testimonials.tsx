"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import avatar1 from "@/assets/User.png";
import avatar2 from "@/assets/User.png";
import avatar3 from "@/assets/User.png";
import avatar4 from "@/assets/User.png";
import avatar5 from "@/assets/User.png";
import avatar6 from "@/assets/User.png";
import avatar7 from "@/assets/User.png";
import avatar8 from "@/assets/User.png";
import avatar9 from "@/assets/User.png";

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

// Interface for Counter component
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
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

// Counter component for animating numbers
const Counter: React.FC<CounterProps> = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startValue = 0;
    const increment = end / (duration * 60); // 60fps approximately
    const timer = setInterval(() => {
      startValue += increment;
      
      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16); // ~60fps

    return () => {
      clearInterval(timer);
    };
  }, [end, duration, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  // Generate star ratings with proper typing and animation
  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <motion.span 
            key={i} 
            className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
          >
            ★
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      {/* Beautiful subtle pattern background */}
      <div className="absolute inset-0 bg-blue-50 opacity-20 bg-[radial-gradient(#2297F5_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-100 opacity-30 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-100 opacity-30 z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-blue-600 mb-2 px-4 py-1 bg-blue-50 rounded-full"
          >
            CLIENT FEEDBACK
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-3 md:mb-4 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What <span className="text-[#2297F5]">Our Clients</span> Say
          </motion.h2>

          <motion.div
            className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#2297F5] to-[#F8CD23] mx-auto mb-4 md:mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-base md:text-lg text-gray-600 font-openSans max-w-2xl mx-auto px-2 md:px-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Don’t just take our word for it — hear from the people who’ve experienced our service.
          </motion.p>
        </div>

        {/* Testimonials Carousel - adjusted to move down */}
        <div 
          className="relative max-w-6xl mx-auto mt-12"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex justify-center items-center relative mb-14 h-96">
            <AnimatePresence mode="popLayout">
              {/* Previous Card (hidden on mobile) */}
              {!isMobile && (
                <motion.div
                  key={`prev-${prevIndex}`}
                  className="hidden md:block absolute left-0 md:left-16 w-64 h-72 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 z-10 text-white transform -rotate-6"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 0.85, x: 0, y: 20 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="text-2xl font-bold opacity-80 mb-3">❝</div>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 overflow-hidden">
                        <Image
                          src={testimonials[prevIndex].imageSrc}
                          alt={testimonials[prevIndex].name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">{testimonials[prevIndex].name}</div>
                        <div className="text-xs opacity-80">{testimonials[prevIndex].role}</div>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 line-clamp-6">
                      {testimonials[prevIndex].text}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Current Card - Adjusted position with y offset */}
              <motion.div
                key={`current-${currentIndex}`}
                className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 z-30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 20 }} 
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-[#2297F5] mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotateZ: 10 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  ❝
                </motion.div>
                
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-blue-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1, borderColor: "#2297F5" }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Image
                      src={testimonials[currentIndex].imageSrc}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  <StarRating rating={testimonials[currentIndex].rating} />
                  
                  <motion.div 
                    className="text-center mt-3 mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="font-medium text-lg text-gray-900">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-[#2297F5]">{testimonials[currentIndex].role}</div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-700 text-lg text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {testimonials[currentIndex].text}
                  </motion.p>
                </div>
              </motion.div>

              {/* Next Card (hidden on mobile) */}
              {!isMobile && (
                <motion.div
                  key={`next-${nextIndex}`}
                  className="hidden md:block absolute right-0 md:right-16 w-64 h-72 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 z-10 text-white transform rotate-6"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 0.85, x: 0, y: 20 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="text-2xl font-bold opacity-80 mb-3">❝</div>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 overflow-hidden">
                        <Image
                          src={testimonials[nextIndex].imageSrc}
                          alt={testimonials[nextIndex].name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">{testimonials[nextIndex].name}</div>
                        <div className="text-xs opacity-80">{testimonials[nextIndex].role}</div>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 line-clamp-6">
                      {testimonials[nextIndex].text}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fixed Navigation Buttons - No position change on hover */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-[#2297F5] rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 focus:outline-none z-40 border border-blue-100 transform transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-[#2297F5] rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 focus:outline-none z-40 border border-blue-100 transform transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Enhanced Pagination Dots */}
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 relative ${
                  index === currentIndex ? "bg-[#2297F5]" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-blue-200 -z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 2 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Social proof counter section with animated numbers */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="bg-blue-50 rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#e6f0ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-[#2297F5]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Counter end={500} suffix="+" duration={2.5} />
            </motion.h3>
            <p className="text-gray-600">Happy Clients</p>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#e6f0ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-[#2297F5]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Counter end={98} suffix="%" duration={2} />
            </motion.h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#e6f0ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-[#2297F5]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Counter end={150} suffix="+" duration={2.2} />
            </motion.h3>
            <p className="text-gray-600">Projects Completed</p>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#e6f0ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-[#2297F5]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Counter end={10} suffix="+" duration={1.5} />
            </motion.h3>
            <p className="text-gray-600">Years Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};