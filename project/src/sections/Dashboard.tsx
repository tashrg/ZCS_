"use client";  
import Link from "next/link"; 
import { motion, useAnimation, AnimatePresence } from "framer-motion"; 
import { useEffect, useState } from "react"; 
import Image from "next/image"; 
import Logo from "@/assets/ZCSLogo1.gif";

// Enhanced animation variants
const textVariants = { 
  hidden: { opacity: 0, y: 40 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
};

const buttonVariants = {
  idle: { scale: 1 },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(34, 151, 245, 0.2)",
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  },
  tap: { scale: 0.95 }
};

// Particle component for dynamic background
interface ParticleProps {
  size: number;
  top: number;
  left: number;
  delay: number;
}

const Particle: React.FC<ParticleProps> = ({ size, top, left, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-100"
      style={{ 
        width: size, 
        height: size, 
        top: `${top}%`, 
        left: `${left}%`,
        zIndex: 1
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        y: [0, -20, -40],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
    />
  );
};

export const Dashboard = () => { 
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  interface ParticleConfig {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
}

const [particles, setParticles] = useState<ParticleConfig[]>([]);


  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 25 + 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
    
    // Trigger the reveal animation
    controls.start("visible");
  }, [controls]);

  return ( 
    <section
      id="home"
      className="relative bg-white overflow-visible md:overflow-hidden min-h-[480px]"
    >
      {/* Dynamic particles in background */}
      {particles.map((particle) => (
        <Particle 
          key={particle.id}
          size={particle.size}
          top={particle.top}
          left={particle.left}
          delay={particle.delay}
        />
      ))}
      
      {/* Decorative shapes */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-10 left-16 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.7, duration: 1 }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-50" />

      <div className="container mx-auto h-auto md:h-[480px] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 relative z-20">
        {/* Logo container with enhanced animations */}
        <motion.div 
          className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-1 mb-8 md:mb-0 flex-grow"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-[62%] md:w-[600px] lg:w-[600px] relative"
            animate={{ 
              y: [-20, 20],
              rotateZ: [-2, 2],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            }}
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl"
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />
            
            <Image
              src={Logo}
              alt="Zenith Core Solutions Logo"
              width={600}
              height={600}
              priority
              unoptimized={true}
              className="relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Text container with staggered animation */}
        <motion.div 
          className="w-full md:w-1/2 px-4 md:px-8 order-2 md:order-2 z-30 flex flex-col justify-center text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="overflow-visible"
            variants={textVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-montserrat"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Mobile view structure (stacked) */}
              <div className="block md:hidden">
                <div className="text-[#2297F5]">ZENITH</div>
                <div className="whitespace-nowrap">
                  <span className="text-[#2297F5]">C</span>
                  <motion.span 
                    className="text-[#F8CD23] inline-block"
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >O</motion.span>
                  <span className="text-[#2297F5]">RE</span>
                </div>
                <div className="text-[#2297F5] whitespace-nowrap">SOLUTIONS</div>
              </div>
              
              {/* Desktop view structure (ZENITH CORE together) */}
              <div className="hidden md:block">
                <div className="whitespace-nowrap">
                  <span className="text-[#2297F5]">ZENITH </span>
                  <span className="text-[#2297F5]">C</span>
                  <motion.span 
                    className="text-[#F8CD23] inline-block"
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >O</motion.span>
                  <span className="text-[#2297F5]">RE</span>
                </div>
                <div className="text-[#2297F5] whitespace-nowrap">SOLUTIONS</div>
              </div>
            </motion.h1>
          </motion.div>

          <motion.div
            className="overflow-visible mt-4"
            variants={textVariants}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-700 tracking-tight font-openSans"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the 1500s.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-4 items-center justify-center md:justify-start mt-8 px-4"
            variants={textVariants}
          >
            <Link href="#services">
              <motion.button 
                className="px-8 py-3 bg-gradient-to-r from-[#2297F5] to-[#1a7fd5] text-white rounded-full font-medium tracking-wide shadow-lg"
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Explore Services
                <motion.span
                  className="ml-2"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
            
            <Link href="#contact">
              <motion.button 
                className="px-8 py-3 border-2 border-[#2297F5] text-[#2297F5] rounded-full font-medium tracking-wide"
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};