"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Define TypeScript interfaces for the component props
interface MobileFormContentProps {
  formType: string;
  emailError: string;
  loading: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("contact"); // "contact", "demo", or "consultation"
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  // Check if the screen is mobile size and get window height
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowHeight(window.innerHeight);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    // Email validation
    if (!email || !email.match(/^[^\s@]+@gmail\.com$/)) {
      setEmailError("Only Gmail addresses are allowed.");
      return;
    }

    setEmailError("");
    setLoading(true);

    try {
      // Add form type to the submission
      const response = await axios.post("http://localhost:3000/contact", {
        name: formData.get("name"),
        email,
        subject: formData.get("subject"),
        message: formData.get("message"),
        formType: formType,
        // For demo form only
        companySize: formData.get("companySize"),
        preferredDate: formData.get("preferredDate"),
        preferredTime: formData.get("preferredTime"),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        // Reset form
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling here if needed
    } finally {
      setLoading(false);
    }
  };

  // Function to show the form with specific type
  const openForm = (type: string) => {
    setFormType(type);
    setShowForm(true);
    setIsSubmitted(false);
    setEmailError("");
    
    // For mobile, we want to scroll to the form after a short delay
    if (isMobile) {
      setTimeout(() => {
        // Find the form element and scroll to it smoothly
        const formElement = document.getElementById("mobile-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Wait for animation to start
    }
  };

  // Function to close the form
  const closeForm = () => {
    setShowForm(false);
    setEmailError("");
  };

  // Form title based on type
  const getFormTitle = () => {
    switch (formType) {
      case "demo":
        return "Schedule a Demo";
      case "consultation":
        return "Free Consultation";
      default:
        return "Contact Us";
    }
  };

  // Success message based on form type
  const getSuccessMessage = () => {
    switch (formType) {
      case "demo":
        return "Your demo request has been sent. We'll be in touch soon!";
      case "consultation":
        return "Your consultation request has been sent. We'll be in touch soon!";
      default:
        return "Your message has been sent. Thank You!";
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#a6c2dd] to-[#b7ccdd] min-h-auto flex flex-col">
      <div className={`flex ${isMobile ? 'flex-col' : 'h-full'} relative`}>
        {/* Main content container that slides */}
        <motion.div
          animate={{ 
            width: showForm && !isMobile ? ["100%", "60%"] : "100%",
            opacity: showForm && !isMobile ? [1, 0.8] : 1
          }}
          transition={{ 
            type: "spring", 
            damping: 30, 
            stiffness: 300 
          }}
          className={`${isMobile ? 'w-full' : 'flex-shrink-0 h-full'}`}
        >
          {/* Main Call to Action Section */}
          <section
            id="contact" 
            ref={sectionRef} 
            className="relative font-montserrat py-12 text-[#2297F5] flex items-center h-auto"
          >
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-montserrat font-bold mb-4"
              >
                Transform Your Business Today
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg max-w-2xl mx-auto mb-6 font-montserrat text-[#032854]"
              >
                Join the digital revolution with Zenith Core Solutions. We help 
                businesses navigate the complexities of modern technology and 
                emerge stronger.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#F8CD23] hover:bg-[#EAB308] text-[#010D3E] py-2 px-6 rounded-md font-bold text-base inline-flex items-center"
                onClick={() => openForm("contact")}
              >
                Get Started <span className="ml-2" aria-hidden="true">→</span>
              </motion.button>
            </div>
          </section>

          {/* Info Cards Section */}
          <section className="py-8 px-4">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Card 1 */}
                <motion.div 
                  className="flex-1 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-lg font-bold text-[#010D3E] mb-2">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-3 text-sm">See our solutions in action with a personalized demo</p>
                  <button 
                    className="text-blue-500 font-medium flex items-center text-sm"
                    onClick={() => openForm("demo")}
                    aria-label="Book a demo now"
                  >
                    Book Now <span className="ml-2" aria-hidden="true">→</span>
                  </button>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div 
                  className="flex-1 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h3 className="text-lg font-bold text-[#010D3E] mb-2">Free Consultation</h3>
                  <p className="text-gray-600 mb-3 text-sm">Get expert advice on your technology needs</p>
                  <button 
                    className="text-blue-500 font-medium flex items-center text-sm"
                    onClick={() => openForm("consultation")}
                    aria-label="Learn more about free consultation"
                  >
                    Learn More <span className="ml-2" aria-hidden="true">→</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
        
        {/* Form section - slides in from right on desktop, slides down on mobile */}
        <AnimatePresence>
          {showForm && (
            isMobile ? (
              // Mobile form - slides down from top with auto height
              <motion.div 
                id="mobile-form"
                className="w-full bg-[#2297F5] text-white"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                {/* Form container for mobile - now matching desktop structure */}
                <div className="p-4 flex flex-col w-full"> 
                  <div className="flex justify-between items-center mb-3 w-full"> 
                    <h2 className="text-lg font-bold">{getFormTitle()}</h2>
                    <button 
                      className="text-white hover:text-gray-300 text-xl"
                      onClick={closeForm}
                      aria-label="Close form"
                    >
                      ×
                    </button>
                  </div>
                  
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-4 flex flex-col items-center justify-center w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-lg font-bold mb-2">
                        {getSuccessMessage()}
                      </h3>
                      <button
                        onClick={closeForm}
                        className="mt-3 bg-[#F8CD23] hover:bg-[#EAB308] text-[#010D3E] py-1.5 px-3 rounded-md font-bold text-sm"
                        aria-label="Close form after submission"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <form 
                      className="flex flex-col h-full"
                      onSubmit={handleSubmit}
                    >
                      {/* Scrollable form content - matching desktop */}
                      <div className="flex-1 overflow-y-auto space-y-3 pr-2 max-h-96">
                        {renderFormContent(formType, emailError)}
                      </div>
                      
                      {/* Submit button container - fixed at bottom like desktop */}
                      <div className="pt-3 mt-3 border-t border-gray-700">
                        <button
                          type="submit"
                          className="w-full bg-[#F8CD23] hover:bg-[#EAB308] text-[#010D3E] py-2 px-3 rounded-md font-bold text-sm"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : formType === "demo" 
                            ? "Schedule Demo" 
                            : formType === "consultation" 
                              ? "Request Consultation" 
                              : "Submit"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            ) : (
              // Desktop form - slides in from right with full height
              <motion.div 
                className="w-full md:w-2/5 bg-[#032854] text-white flex-shrink-0 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ 
                  type: "spring", 
                  damping: 30, 
                  stiffness: 300 
                }}
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0, 
                  height: '100%',
                  overflowY: 'auto'
                }}
              >
                {/* Form container for desktop */}
                <div className="p-4 flex flex-col h-full"> 
                  <div className="flex justify-between items-center mb-3"> 
                    <h2 className="text-lg font-bold">{getFormTitle()}</h2>
                    <button 
                      className="text-white hover:text-gray-300 text-xl"
                      onClick={closeForm}
                      aria-label="Close form"
                    >
                      ×
                    </button>
                  </div>
                  
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-4 flex flex-col items-center justify-center flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-lg font-bold mb-2">
                        {getSuccessMessage()}
                      </h3>
                      <button
                        onClick={closeForm}
                        className="mt-3 bg-[#F8CD23] hover:bg-[#EAB308] text-[#010D3E] py-1.5 px-3 rounded-md font-bold text-sm"
                        aria-label="Close form after submission"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <form 
                      className="flex flex-col h-full"
                      onSubmit={handleSubmit}
                    >
                      {/* Scrollable form content */}
                      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                        {renderFormContent(formType, emailError)}
                      </div>
                      
                      {/* Submit button container - fixed at bottom */}
                      <div className="pt-3 mt-3 border-t border-gray-700">
                        <button
                          type="submit"
                          className="w-full bg-[#F8CD23] hover:bg-[#EAB308] text-[#010D3E] py-2 px-3 rounded-md font-bold text-sm"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : formType === "demo" 
                            ? "Schedule Demo" 
                            : formType === "consultation" 
                              ? "Request Consultation" 
                              : "Submit"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
      {/* Smooth gradient transition to footer - maintaining connection to footer's colors */}
      <div className="bg-gradient-to-r from-[#a6c2dd] to-[#b7ccdd]"></div>
    </div>
  );
};

// Helper function to render the form content based on form type
const renderFormContent = (formType: string, emailError: string) => {
  switch (formType) {
    case "contact":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2 w-full">
            <div className="w-full">
              <label htmlFor="name" className="block text-xs font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-xs font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full mt-1 p-1.5 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-900 text-xs`}
                placeholder="youremail@gmail.com"
                aria-describedby={emailError ? "email-error" : undefined}
              />
              {emailError && (
                <p id="email-error" className="text-red-500 text-xs mt-0.5">{emailError}</p>
              )}
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="block text-xs font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
              placeholder="Enter the subject (optional)"
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block text-xs font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs h-20"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
      );
    case "consultation":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2 w-full">
            <div className="w-full">
              <label htmlFor="name" className="block text-xs font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-xs font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full mt-1 p-1.5 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-900 text-xs`}
                placeholder="youremail@gmail.com"
                aria-describedby={emailError ? "email-error-consult" : undefined}
              />
              {emailError && (
                <p id="email-error-consult" className="text-red-500 text-xs mt-0.5">{emailError}</p>
              )}
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="block text-xs font-medium">
              Consultation Topic
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
              placeholder="Consultation about..."
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block text-xs font-medium">
              What would you like consultation on?
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs h-20"
              placeholder="Describe your business challenges or needs..."
            ></textarea>
          </div>
        </div>
      );
    case "demo":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2 w-full">
            <div className="w-full">
              <label htmlFor="name" className="block text-xs font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-xs font-medium">
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full mt-1 p-1.5 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-900 text-xs`}
                placeholder="youremail@gmail.com"
                aria-describedby={emailError ? "email-error-demo" : undefined}
              />
              {emailError && (
                <p id="email-error-demo" className="text-red-500 text-xs mt-0.5">{emailError}</p>
              )}
            </div>
          </div>
          
          <div className="w-full">
            <label htmlFor="companySize" className="block text-xs font-medium">
              Company Size
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <div className="w-full">
              <label htmlFor="preferredDate" className="block text-xs font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="w-full">
              <label htmlFor="preferredTime" className="block text-xs font-medium">
                Preferred Time
              </label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                required
                className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
              />
            </div>
          </div>
          
          <div className="w-full">
            <label htmlFor="subject" className="block text-xs font-medium">
              Demo Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs"
              placeholder="Demo request for..."
            />
          </div>
          
          <div className="w-full">
            <label htmlFor="message" className="block text-xs font-medium">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-1 p-1.5 border border-gray-300 rounded-md text-gray-900 text-xs h-16"
              placeholder="Tell us about your needs for this demo..."
            ></textarea>
          </div>
        </div>
      );
    default:
      return null;
  }
};