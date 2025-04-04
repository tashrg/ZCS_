"use client"; 

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/ZCSName.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-ins.svg";
import SocialLinkedIn from "@/assets/social-in.svg";
import SocialFB from "@/assets/social-fb.svg";
import SocialYoutube from "@/assets/social-yt.svg";

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [bgColor, setBgColor] = useState("bg-gradient-to-r from-[#a6c2dd]/30 to-[#b7ccdd]");

  // Function to handle smooth scrolling or navigation
  const handleNavigation = (path: string, sectionId: string) => {
    if (pathname === path) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`${path}#${sectionId}`);
    }
  };

  // Detect scroll position and change background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerOffset = document.getElementById("footer")?.offsetTop || 0;
      const windowHeight = window.innerHeight;

      if (scrollY + windowHeight >= footerOffset - 100) {
        setBgColor("bg-gradient-to-r from-[#a6c2dd]/30 to-[#b7ccdd]"); // Apply the same gradient
      } else {
        setBgColor("bg-gradient-to-r from-[#a6c2dd]/30 to-[#b7ccdd]"); // Keep the same gradient
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="footer" className={`min-h-[calc(2.5rem+2.5rem)] pt-10 pb-10 md:pb-8 overflow-hidden text-[#010D3E] text-sm font-montserrat transition-colors duration-700 ${bgColor}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* ZCS Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src={Logo} height={40} alt="ZCS Name" className="mt-4" />
          <p className="mt-1 ml-4 text-[#032854] font-semibold">Make your technology creative</p>
        </div>

        {/* Contact Us */}
        <div className="mt-6">
          <h3 className="text-[#032854] font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <a href="tel:+639266132248" className="text-[#032854] hover:text-[#F8CD23]" aria-label="Call us">
                +63 926 613 2248
              </a>
            </li>
            <li>
              <a href="mailto:zenithcoresolutions.sales@gmail.com" className="text-[#032854] hover:text-[#F8CD23] break-normal md:break-words" aria-label="Email us">
                zenithcoresolutions.sales@gmail.com
              </a>
            </li>
            <li>
              <a>
                463 Damayan Navarro, General Trias, Cavite
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links (Centered) */}
        <div className="mt-6 flex-col items-start mx-auto">
          <h3 className="text-[#032854] font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <button onClick={() => handleNavigation("/about", " ")} className="hover:text-[#F8CD23]">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/about", "corevalues")} className="hover:text-[#F8CD23]">
                Core Values
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/about", "our-team")} className="hover:text-[#F8CD23]">
                Who We Are
              </button>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="mt-6">
          <h3 className="text-[#032854] font-bold mb-4">Socials</h3>
          <div className="flex flex-row justify-center md:justify-start gap-4">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <SocialX />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SocialInsta />
            </a>
            <a href="https://www.linkedin.com/in/zenith-core-solutions-464b09356" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <SocialLinkedIn />
            </a>
            <a href="https://www.facebook.com/share/14waFXKbe9/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <SocialFB />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <SocialYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-[#032854] font-medium">
        &copy; 2025 ZCS. All Rights Reserved.
      </p>
    </footer>
  );
};
