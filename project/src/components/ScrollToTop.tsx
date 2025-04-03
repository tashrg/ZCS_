"use client";  // Ensures the component is only used on the client side

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  useEffect(() => {
    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Initial check in case page is already scrolled on mount
    toggleVisibility();
    
    // Add event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  
  // Scroll to top function - this is triggered when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTop}
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5,11 L10,6 L15,11" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M10,6 L10,15" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;