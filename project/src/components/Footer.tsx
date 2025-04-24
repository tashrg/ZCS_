"use client";

import { usePathname, useRouter } from "next/navigation";
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
      className="relative py-16 overflow-hidden font-montserrat text-[#010D3E]"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 z-0">
        {/* New gradient: white to light blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#e8f4ff] to-[#94b1cc]" />
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2297F5_1px,transparent_1px)]" style={{ backgroundSize: "20px 20px" }} />
      </div>

      {/* Wave decoration at the top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-8 text-white fill-current">
          <path d="M0,0 C150,40 350,20 500,20 C650,20 700,40 900,30 C1050,20 1150,0 1200,0 L1200,40 L0,40 Z" />
        </svg>
      </div>

      {/* Footer Content with enhanced layout */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo + Tagline - given more space */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-12 drop-shadow-md">
                <Image
                  src={Logo}
                  alt="ZCS Logo"
                  fill
                  className="object-contain cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col font-bold text-sm leading-tight">
                <div>
                  <span className="text-[#2297F5]">ZENITH C</span>
                  <span className="text-[#F8CD23]">O</span>
                  <span className="text-[#2297F5]">RE</span>
                </div>
                <span className="text-[#2297F5]">SOLUTIONS</span>
              </div>
            </div>
            <p className="mt-4 text-[#032854] font-semibold italic">Make your technology creative</p>
            <p className="mt-4 text-gray-600 text-sm max-w-xs">Delivering innovative technology solutions to help businesses thrive in the digital landscape.</p>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3">
            <h3 className="text-[#032854] font-bold mb-6 text-lg after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#F8CD23] after:mt-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2297F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+639266132248" className="text-[#032854] hover:text-[#2297F5] transition-colors">
                  +63 926 613 2248
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 text-[#2297F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:zenithcoresolutions.sales@gmail.com" className="text-[#032854] hover:text-[#2297F5] transition-colors break-all">
                  zenithcoresolutions.sales@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 text-[#2297F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#032854]">
                  463 Damayan Navarro, General Trias, Cavite
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[#032854] font-bold mb-6 text-lg after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#F8CD23] after:mt-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("/about", " ")} 
                  className="text-[#032854] hover:text-[#2297F5] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#F8CD23] transform group-hover:translate-x-1 transition-transform">›</span>
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/about", "corevalues")} 
                  className="text-[#032854] hover:text-[#2297F5] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#F8CD23] transform group-hover:translate-x-1 transition-transform">›</span>
                  Core Values
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/about", "our-team")} 
                  className="text-[#032854] hover:text-[#2297F5] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#F8CD23] transform group-hover:translate-x-1 transition-transform">›</span>
                  Who We Are
                </button>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h3 className="text-[#032854] font-bold mb-6 text-lg after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#F8CD23] after:mt-2">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#2297F5] hover:text-white transition-all"
              >
                <SocialX />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#2297F5] hover:text-white transition-all"
              >
                <SocialInsta />
              </a>
              <a 
                href="https://www.linkedin.com/in/zenith-core-solutions-464b09356" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#2297F5] hover:text-white transition-all"
              >
                <SocialLinkedIn />
              </a>
              <a 
                href="https://www.facebook.com/share/14waFXKbe9/?mibextid=qi2Omg" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#2297F5] hover:text-white transition-all"
              >
                <SocialFB />
              </a>
              <a 
                href="https://www.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#2297F5] hover:text-white transition-all"
              >
                <SocialYoutube />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2297F5]/30 to-transparent my-8"></div>
        
        {/* Copyright with simplified design */}
        <div className="text-center text-sm text-[#032854]">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Zenith Core Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};