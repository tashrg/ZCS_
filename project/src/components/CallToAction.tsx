"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { motion, useInView } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email.endsWith("@gmail.com")) {
      setEmailError("Only Gmail addresses are allowed.");
      return;
    }

    setEmailError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/contact", {
        name: formData.get("name"),
        email,
        subject: formData.get("subject"),
        message: formData.get("message"),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden font-montserrat pt-8 pb-8">
      {/* Background Wipe Effect (Triggered on Scroll) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#a6c2dd]/30 to-[#b7ccdd] z-0"
        initial={{ height: "0%" }}
        animate={isInView ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left space-y-6">
          <h2 className="text-5xl font-extrabold text-[#010D3E] leading-tight">
            Are you interested?
          </h2>
          <p className="text-xl text-[#4A4A4A] leading-relaxed">
            Make your technology creative
          </p>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 bg-[#032854] text-white p-8 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Your message has been sent. Thank You!
              </h3>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
                  placeholder="youremail@gmail.com"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
                  placeholder="Enter the subject (optional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F8CD23] hover:bg-[#EAB308] text-[#010D3E] py-2 px-4 rounded-md font-bold"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
