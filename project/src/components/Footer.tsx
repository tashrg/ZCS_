"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-ins.svg";
import SocialLinkedIn from "@/assets/social-in.svg";
import SocialFB from "@/assets/social-fb.svg";
import SocialYoutube from "@/assets/social-yt.svg";
import Logo from "@/assets/ZCSLogo.png";

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path: string, sectionId: string) => {
    if (pathname === path) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`${path}#${sectionId}`);
    }
  };

  return (
    <footer
      id="footer"
      className="relative min-h-[calc(2.5rem+2.5rem)] pt-10 pb-10 md:pb-8 overflow-hidden text-[#010D3E] text-sm font-montserrat transition-colors duration-700"
    >
      {/* Background Gradient Layers */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Match the section above with horizontal gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a6c2dd] to-[#b7ccdd]" />
        
        {/* Layer 2: Fade vertically to #375b73 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#457799] opacity-90" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mt-4">
            <Image
              src={Logo}
              alt="ZCS Logo"
              height={60}
              width={45}
              className="cursor-pointer"
            />
            <div className="flex flex-col font-bold font-montserrat text-sm leading-tight">
              <div>
                <span className="text-[#2297F5]">ZENITH C</span>
                <span className="text-[#F8CD23]">O</span>
                <span className="text-[#2297F5]">RE</span>
              </div>
              <span className="text-[#2297F5]">SOLUTIONS</span>
            </div>
          </div>
          <p className="mt-4 text-[#032854] font-semibold">Make your technology creative</p>
        </div>

        {/* Contact Us */}
        <div className="mt-6">
          <h3 className="text-[#032854] font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <a href="tel:+639266132248" className="text-[#032854] hover:text-[#F8CD23]">
                +63 926 613 2248
              </a>
            </li>
            <li>
              <a href="mailto:zenithcoresolutions.sales@gmail.com" className="text-[#032854] hover:text-[#F8CD23] break-normal md:break-words">
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

        {/* Quick Links */}
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
      <p className="mt-6 text-center text-[#032854] font-medium relative z-10">
        &copy; 2025 ZCS. All Rights Reserved.
      </p>
    </footer>
  );
};
