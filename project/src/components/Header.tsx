"use client";
import Logo from "@/assets/ZCSLogo.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <header className="sticky top-0 w-full bg-gradient-to-r from-[#dadee2]/30 to-[#a6c2dd]/30 backdrop-blur-xl shadow-md z-50">
      <div className="py-4">
        <div className="flex items-center justify-between px-6">
          {/* LOGO + TEXT CONTAINER */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src={Logo} alt="ZCS Logo" height={60} width={45} className="cursor-pointer" />
            </Link>
            <div className="flex flex-col font-bold font-montserrat text-sm leading-tight">
              <div>
                <span className="text-[#2297F5]">ZENITH C</span>
                <span className="text-[#F8CD23]">O</span>
                <span className="text-[#2297F5]">RE</span>
              </div>
              <span className="text-[#2297F5]">SOLUTIONS</span>
            </div>
          </div>

          {/* MENU ICON FOR MOBILE */}
          <MenuIcon className="h-8 w-8 md:hidden cursor-pointer" onClick={toggleMenu} />

          {/* NAVIGATION LINKS */}
          <nav className="hidden md:flex gap-10 text-[#032854] items-center text-sm font-montserrat">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-xl shadow-lg md:hidden"
            >
              <motion.nav
                variants={menuVariants}
                className="flex flex-col gap-3 p-4 text-[#032854] text-sm font-montserrat"
              >
                <motion.div variants={menuItemVariants}><Link href="/" onClick={toggleMenu}>Home</Link></motion.div>
                <motion.div variants={menuItemVariants}><Link href="/about" onClick={toggleMenu}>About</Link></motion.div>
                <motion.div variants={menuItemVariants}><Link href="/#services" onClick={toggleMenu}>Services</Link></motion.div>
                <motion.div variants={menuItemVariants}><Link href="/#contact" onClick={toggleMenu}>Contact</Link></motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
