"use client";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const AnimatedAtomLogo = () => {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        {/* Sphere gradient */}
        <radialGradient id="sphereGradient" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#a8c6df" />
          <stop offset="80%" stopColor="#4a6d8c" />
          <stop offset="100%" stopColor="#2d4459" />
        </radialGradient>
        
        {/* Orbit gradient */}
        <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        {/* Back orbit gradient */}
        <linearGradient id="backOrbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        
        {/* Glow effect */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Clip paths for orbit segments */}
        <clipPath id="frontClip">
          <rect x="0" y="200" width="400" height="200" />
        </clipPath>
        <clipPath id="backClip">
          <rect x="0" y="0" width="400" height="200" />
        </clipPath>
      </defs>
      
      {/* Back orbit segments */}
      <g clipPath="url(#backClip)">
        {/* Horizontal Orbit */}
        <ellipse 
          cx="200" 
          cy="200" 
          rx="185" 
          ry="55" 
          fill="none" 
          stroke="url(#orbitGradient)" 
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)"
        >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 200 200; 180 200 200"
          dur="6s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.4 0 0.2 1"
        />
        </ellipse>

        {/* Diagonal Orbit 1 */}
        <ellipse 
          cx="200" 
          cy="200" 
          rx="170" 
          ry="65" 
          fill="none" 
          stroke="url(#backOrbitGradient)" 
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-135 200 200"
            to="45 200 200"
            dur="6s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
        </ellipse>
        
        {/* Diagonal Orbit 2 */}
        <ellipse 
          cx="200" 
          cy="200" 
          rx="170" 
          ry="65" 
          fill="none" 
          stroke="url(#backOrbitGradient)" 
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="135 200 200"
            to="-45 200 200"
            dur="6s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
        </ellipse>
      </g>

      {/* Center sphere */}
      <g>
        <circle 
          cx="200" 
          cy="210" 
          r="80" 
          fill="url(#sphereGradient)"
          filter="url(#glow)"
        >
          <animate 
            attributeName="r" 
            values="60;78;60" 
            dur="10s" 
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </circle>
        
        {/* Sphere highlight */}
        <circle 
          cx="170" 
          cy="180" 
          r="16" 
          fill="rgba(255, 255, 255, 0.3)" 
        >
          <animate 
            attributeName="r" 
            values="18;20;18" 
            dur="10s" 
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </circle>
      </g>

      {/* Front orbit segments */}
      <g clipPath="url(#frontClip)">
        {/* Horizontal Orbit */}
        <ellipse 
          cx="200" 
          cy="200" 
          rx="185" 
          ry="55" 
          fill="none" 
          stroke="url(#orbitGradient)" 
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)"
        >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 200 200; 180 200 200"
          dur="6s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.4 0 0.2 1"
        />
        </ellipse>
        
        {/* Diagonal Orbit 1 */}
        <ellipse 
          cx="200" 
          cy="200" 
          rx="170" 
          ry="65" 
          fill="none" 
          stroke="url(#orbitGradient)" 
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-135 200 200"
            to="45 200 200"
            dur="6s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
        </ellipse>
        
        {/* Diagonal Orbit 2 */}
        <ellipse 
          cx="200" 
          cy="200" 
          rx="170" 
          ry="65" 
          fill="none" 
          stroke="url(#orbitGradient)" 
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="135 200 200"
            to="-45 200 200"
            dur="6s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
        </ellipse>
      </g>
      
      {/* Electron */}
      <circle 
        cx="80" 
        cy="265" 
        r="15" 
        fill="#F8CD23" 
        filter="url(#glow)"
      >
        <animate 
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline" 
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
    </svg>
  );
};

export const Dashboard = () => {
  const dashRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: dashRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="home"
      ref={dashRef}
      className="min-h-screen pt-1 pb-14 md:pt-0 md:pb-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE,_100%)] overflow-hidden"
    >
      <div className="container h-full flex items-center">
        <div className="md:flex items-center justify-between w-full relative">
          {/* Animated Atom Logo container */}
          <div className="md:h-[500px] md:flex-1 flex items-center justify-center order-2 md:order-1">
            <motion.div
              className="md:h-auto md:w-[100%] md:max-w-none"
              animate={{ translateY: [-20, 20] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <AnimatedAtomLogo />
            </motion.div>
          </div>

          {/* Text container */}
          <div className="md:w-[480px] order-1 md:order-2 z-10 flex flex-col justify-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tighter font-montserrat text-transparent bg-clip-text"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <span className="text-[#2297F5]">Zenith</span>{" "}
              <span className="text-[#F8CD23]">Core</span>{" "}
              <span className="text-[#2297F5]">Solutions</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-[#010D3E] tracking-tight mt-2 font-openSans"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ delay: 0.2 }} // Delay to make text appear after title
            >
              is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make.
            </motion.p>

            <motion.div
              className="flex gap-1 items-center mt-4"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ delay: 0.4 }} // Delay to animate button after text
            >
              <Link href="#services">
                <button className="btn btn-primary">More</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};