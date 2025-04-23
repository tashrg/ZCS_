"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ManongBLogo from "@/assets/mb_logo.png";
import MarananGLogo from "@/assets/mgroup_logo.png";
import IETILogo from "@/assets/IETI_logo.png";
import PUPSPCLogo from "@/assets/pupspc_logo.png";

const logos = [
  { src: ManongBLogo, alt: "Manong Barbs Logo", width: 100, height: 50 },
  { src: MarananGLogo, alt: "Maranan Group Logo", width: 120, height: 60 },
  { src: IETILogo, alt: "IETI Logo", width: 110, height: 70 },
  { src: PUPSPCLogo, alt: "PUPSPC Logo", width: 50, height: 50 },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 relative bg-white overflow-hidden border-y border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-gray-500 font-medium text-sm mb-6">TRUSTED BY LEADING ORGANIZATIONS</h3>
        
        <div className="relative w-full h-16 md:h-20">
          {/* Container for the animation */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Edge fade effect */}
            <div className="absolute inset-0 w-full pointer-events-none z-10 
                [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]">
            </div>
            
            {/* Center color effect - Two overlapping divs with different mask gradients */}
            <div className="absolute inset-0 z-20 pointer-events-none 
                [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0)_35%,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_65%,rgba(0,0,0,0))]">
            </div>
            
            {/* Moving logos - Grayscale base layer */}
            <motion.div
              className="flex gap-16 md:gap-24 items-center absolute"
              animate={{ x: [0, "-33.333%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {/* Triple the logos to create seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain filter grayscale"
                  />
                </div>
              ))}
            </motion.div>
            
            {/* Identical motion div on top that will be masked to show color only in center */}
            <div className="absolute inset-0 z-20 overflow-hidden
                [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0)_35%,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_65%,rgba(0,0,0,0))]">
              <motion.div
                className="flex gap-16 md:gap-24 items-center absolute"
                animate={{ x: [0, "-33.333%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              >
                {/* Triple the logos to create seamless loop */}
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 p-4">
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} (Color)`}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;