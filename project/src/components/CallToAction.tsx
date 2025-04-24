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
  const cardsRef = useRef(null); // Reference for cards section

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

  // Function to show the form with specific type and scroll to the form
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
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Wait for animation to start
    }
  };

  // Function to handle card clicks - scroll to cards on mobile
  const handleCardClick = (type: string) => {
    if (isMobile) {
      // First scroll to the cards section
      if (cardsRef.current) {
        (cardsRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Then open the form after a brief delay
      setTimeout(() => {
        openForm(type);
      }, 400);
    } else {
      // Desktop behavior remains the same
      openForm(type);
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
    <div className="relative overflow-hidden bg-white min-h-auto flex flex-col">
      <div className={`flex ${isMobile ? 'flex-col' : 'h-full'} relative`}>
        {/* Main content container */}
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
            className="relative font-montserrat py-10 flex items-center h-auto bg-white"
          >
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                transition={{ duration: 0.8 }}
                className="mb-2"
              >
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-block mb-1">
                  Transform Your Business
                </span>
              </motion.div>
              
              <motion.h2
              className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 relative"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              >
              Elevate your Digital Presence
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg max-w-2xl mx-auto mt-2 mb-6 text-gray-600 font-montserrat px-2 md:px-4"
              >
                Join the digital revolution with Zenith Core Solutions. We help 
                businesses navigate the complexities of modern technology and 
                emerge stronger than ever before.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-3"
              >
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold text-sm flex items-center justify-center transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200"
                  onClick={() => isMobile ? handleCardClick("contact") : openForm("contact")}
                >
                  Get Started <span className="ml-2" aria-hidden="true">→</span>
                </button>
                <button
                  className="bg-transparent hover:bg-gray-100 text-blue-600 py-2 px-6 rounded-lg font-bold text-sm flex items-center justify-center border border-blue-200 transition-all"
                  onClick={() => isMobile ? handleCardClick("consultation") : openForm("consultation")}
                >
                  Free Consultation
                </button>
              </motion.div>
            </div>
          </section>

          {/* Info Cards Section - Moved reference here for scrolling */}
          <section ref={cardsRef} className="py-8 px-4 bg-gray-50" id="info-cards">
            <div className="container mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl font-bold text-center text-gray-800 mb-6"
              >
                How We Can Help
              </motion.h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                {/* Card 1 */}
                <motion.div 
                  className="flex-1 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  onClick={() => handleCardClick("demo")}
                >
                  <div className="bg-blue-50 p-2 rounded-lg inline-block mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-3 text-sm">See our solutions in action with a personalized demo tailored to your business needs.</p>
                  <div 
                    className="text-blue-600 font-medium flex items-center text-sm group-hover:text-blue-800"
                    aria-label="Book a demo now"
                  >
                    Book Now <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div 
                  className="flex-1 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  onClick={() => handleCardClick("consultation")}
                >
                  <div className="bg-blue-50 p-2 rounded-lg inline-block mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Free Consultation</h3>
                  <p className="text-gray-600 mb-3 text-sm">Get expert advice on your technology needs and discover tailored solutions.</p>
                  <div 
                    className="text-blue-600 font-medium flex items-center text-sm group-hover:text-blue-800"
                    aria-label="Learn more about free consultation"
                  >
                    Learn More <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </motion.div>
                
                {/* Card 3 */}
                <motion.div 
                  className="flex-1 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  onClick={() => handleCardClick("contact")}
                >
                  <div className="bg-blue-50 p-2 rounded-lg inline-block mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Quick Start Guide</h3>
                  <p className="text-gray-600 mb-3 text-sm">Explore our resources to get started quickly with our suite of solutions.</p>
                  <div 
                    className="text-blue-600 font-medium flex items-center text-sm group-hover:text-blue-800"
                    aria-label="Access quick start guide"
                  >
                    Access Guide <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
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
                className="w-full bg-white text-gray-800 border-t border-gray-200 shadow-lg"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeInOut"
                }}
              >
                {/* Form container for mobile */}
                <div className="p-4 flex flex-col w-full"> 
                  <div className="flex justify-between items-center mb-3 w-full"> 
                    <h2 className="text-lg font-bold text-gray-800">{getFormTitle()}</h2>
                    <button 
                      className="text-gray-400 hover:text-gray-800 text-xl bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                      onClick={closeForm}
                      aria-label="Close form"
                    >
                      ×
                    </button>
                  </div>
                  
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-6 flex flex-col items-center justify-center w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-green-100 p-3 rounded-full mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        Success!
                      </h3>
                      <p className="text-gray-600 mb-3">{getSuccessMessage()}</p>
                      <button
                        onClick={closeForm}
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold transition-colors"
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
                      <div className="flex-1 overflow-y-auto space-y-3 pr-2 max-h-80">
                        {renderFormContent(formType, emailError)}
                      </div>
                      
                      {/* Submit button container */}
                      <div className="pt-3 mt-3 border-t border-gray-200">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold text-sm transition-colors shadow-md hover:shadow-lg"
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="flex items-center justify-center">
                              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                              Submitting...
                            </span>
                          ) : formType === "demo" 
                            ? "Schedule Demo" 
                            : formType === "consultation" 
                              ? "Request Consultation" 
                              : "Submit"}
                        </button>
                        <p className="text-center text-gray-500 text-xs mt-2">
                          We respect your privacy and will never share your information.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            ) : (
              // Desktop form - slides in from right with full height
              <motion.div 
                className="w-full md:w-2/5 bg-white text-gray-800 border-l border-gray-200 shadow-xl flex-shrink-0 flex flex-col"
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
                <div className="p-6 flex flex-col h-full"> 
                  <div className="flex justify-between items-center mb-4"> 
                    <div>
                      <span className="text-blue-600 text-xs font-medium">{formType === "demo" ? "Request a" : formType === "consultation" ? "Book a" : "Send us a"}</span>
                      <h2 className="text-xl font-bold text-gray-800">{getFormTitle()}</h2>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-gray-800 text-xl bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                      onClick={closeForm}
                      aria-label="Close form"
                    >
                      ×
                    </button>
                  </div>
                  
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-8 flex flex-col items-center justify-center flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-green-100 p-4 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Success!
                      </h3>
                      <p className="text-gray-600 mb-4">{getSuccessMessage()}</p>
                      <button
                        onClick={closeForm}
                        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold transition-colors"
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
                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold text-sm transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="flex items-center justify-center">
                              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                              Submitting...
                            </span>
                          ) : formType === "demo" 
                            ? "Schedule Demo" 
                            : formType === "consultation" 
                              ? "Request Consultation" 
                              : "Submit"}
                        </button>
                        <p className="text-center text-gray-500 text-xs mt-3">
                          We respect your privacy and will never share your information.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
      {/* Clean white background for footer connection */}
      <div className="bg-white"></div>
    </div>
  );
};

// Helper function to render the form content based on form type
const renderFormContent = (formType: string, emailError: string) => {
  const inputClasses = "w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const errorClasses = "text-red-500 text-xs mt-1";

  switch (formType) {
    case "contact":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            <div className="w-full">
              <label htmlFor="name" className={labelClasses}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClasses}
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className={labelClasses}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`${inputClasses} ${emailError ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="youremail@gmail.com"
                aria-describedby={emailError ? "email-error" : undefined}
              />
              {emailError && (
                <p id="email-error" className={errorClasses}>{emailError}</p>
              )}
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="subject" className={labelClasses}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={inputClasses}
              placeholder="How can we help you?"
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={`${inputClasses} h-24`}
              placeholder="Tell us about your needs..."
            ></textarea>
          </div>
        </div>
      );
    case "consultation":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            <div className="w-full">
              <label htmlFor="name" className={labelClasses}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClasses}
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className={labelClasses}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`${inputClasses} ${emailError ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="youremail@gmail.com"
                aria-describedby={emailError ? "email-error-consult" : undefined}
              />
              {emailError && (
                <p id="email-error-consult" className={errorClasses}>{emailError}</p>
              )}
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="subject" className={labelClasses}>
              Consultation Topic
            </label>
            <select
              id="subject"
              name="subject"
              className={inputClasses}
            >
              <option value="">Select a topic</option>
              <option value="Digital Transformation">Digital Transformation</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="message" className={labelClasses}>
              What would you like consultation on?
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={`${inputClasses} h-24`}
              placeholder="Describe your business challenges or needs..."
            ></textarea>
          </div>
          <div className="w-full bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-blue-800">
              Our consultations typically last 30 minutes and are conducted via video call. Our team will contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        </div>
      );
    case "demo":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            <div className="w-full">
              <label htmlFor="name" className={labelClasses}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClasses}
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className={labelClasses}>
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`${inputClasses} ${emailError ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="youremail@gmail.com"
                aria-describedby={emailError ? "email-error-demo" : undefined}
              />
              {emailError && (
                <p id="email-error-demo" className={errorClasses}>{emailError}</p>
              )}
            </div>
            </div>
          
          <div className="w-full">
            <label htmlFor="companySize" className={labelClasses}>
              Company Size
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              className={inputClasses}
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="w-full">
              <label htmlFor="preferredDate" className={labelClasses}>
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                className={inputClasses}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="w-full">
              <label htmlFor="preferredTime" className={labelClasses}>
                Preferred Time
              </label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                required
                className={inputClasses}
              />
            </div>
          </div>
          
          <div className="w-full">
            <label htmlFor="subject" className={labelClasses}>
              What product are you interested in?
            </label>
            <select
              id="subject"
              name="subject"
              className={inputClasses}
            >
              <option value="">Select a product</option>
              <option value="Enterprise Solution">Enterprise Solution</option>
              <option value="Cloud Platform">Cloud Platform</option>
              <option value="Data Analytics Suite">Data Analytics Suite</option>
              <option value="Security Framework">Security Framework</option>
              <option value="All Products">All Products</option>
            </select>
          </div>
          
          <div className="w-full">
            <label htmlFor="message" className={labelClasses}>
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              className={`${inputClasses} h-16`}
              placeholder="Tell us about your specific needs for this demo..."
            ></textarea>
          </div>
          
          <div className="w-full bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-blue-800">
              <span className="font-medium">What to expect:</span> Our demo sessions typically last 45-60 minutes and include a Q&A section.
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};