"use client";
import Logo from "@/assets/ZCSName.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/menu.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20, 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      },
    },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      },
    },
  };

  return (
    <header className={`sticky top-0 bg-white/10 backdrop-blur-lg z-50 w-full transition-transform duration-300 ${         
        isVisible ? "translate-y-0" : "-translate-y-full" 
      }`}
    >
      <div className="py-4">
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} alt="ZCS Name" height={80} width={80} className="cursor-pointer" />
          </Link>
          
          {/* Menu Icon for Mobile */}
          <MenuIcon className="h-8 w-8 md:hidden cursor-pointer" onClick={toggleMenu} />

          {/* Desktop Navbar */}
          <nav className="hidden md:flex gap-10 text-[#032854] items-center text-sm font-montserrat">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial="hidden" 
              animate="visible" 
              exit="hidden" 
              variants={menuVariants} 
              className="absolute top-14 left-0 w-full shadow-md md:hidden"
            >
              <motion.nav 
                variants={menuVariants} 
                className="flex flex-col gap-3 p-4 text-[#032854] text-sm font-montserrat"
              >
                <motion.div variants={menuItemVariants}>
                  <Link href="/" onClick={toggleMenu}>Home</Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/about" onClick={toggleMenu}>About</Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/#services" onClick={toggleMenu}>Services</Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/#contact" onClick={toggleMenu}>Contact</Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};