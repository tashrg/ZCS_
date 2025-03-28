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
    <div className="py-8 md:py-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE,_100%)] overflow-hidden relative">
      <div className="flex w-max">
        {/* Masking effect: Keeps center visible while sides fade */}
        <div className="flex overflow-hidden absolute inset-0 w-full [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_40%,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: ["0%", "-50%"] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
