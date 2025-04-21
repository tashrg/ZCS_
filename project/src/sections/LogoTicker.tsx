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
    <div className="py-5 md:py-10 relative bg-gradient-to-r from-[#a6c2dd] to-[#b7ccdd] overflow-hidden">
      <div className="relative w-full h-14 md:h-18">
        {/* Container for the animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Masking effect: Keeps center visible while sides fade */}
          <div className="absolute inset-0 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]"></div>
          
          {/* Moving logos */}
          <motion.div
            className="flex gap-8 md:gap-14 items-center absolute"
            animate={{ x: [0, "-50%"] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {/* Double the logos to create seamless loop */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width * 0.8}
                  height={logo.height * 0.8}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;