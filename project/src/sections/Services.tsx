"use client"; 
import React, { useRef } from "react"; 
import { motion, useInView, useScroll, useTransform } from "framer-motion"; 
import Link from "next/link";  

export const Services = () => {   
  const ref = useRef(null);   
  const sectionRef = useRef(null);    

  const itemVariants = {     
    hidden: {        
      opacity: 0,        
      x: -50      
    },     
    visible: {        
      opacity: 1,        
      x: 0,       
      transition: {         
        duration: 0.5       
      }     
    }   
  };    

  return (     
    <section        
      ref={sectionRef}        
      id="services"        
      className="min-h-screen pt-1 pb-14 md:pt-0 md:pb-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE,_100%)] overflow-hidden"     
    >       
      <div className="container">           
        <motion.h2                
          initial={{ opacity: 0, x: -50 }}               
          whileInView={{ opacity: 1, x: 0 }}               
          viewport={{ once: true }}               
          transition={{ duration: 0.8, ease: "easeOut" }}               
          className="section-title mt-5 text-6xl font-montserrat font-bold text-[#032854]"           
        >             
          Our Services           
        </motion.h2>           
        <p className="section-description mt-5 text-xl text-center font-openSans">             
          Our expertise spans cutting-edge software development, intuitive digital experiences, and AI-driven innovations, ensuring your business stays ahead in an ever-evolving digital landscape.           
        </p>              
        {/* Grid Layout */}         
        <motion.div           
          initial={{ opacity: 0, x: -50 }}           
          whileInView={{ opacity: 1, x: 0 }}           
          viewport={{ once: true }}           
          transition={{ duration: 0.8, ease: "easeOut" }}           
          className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12" // Added mt-12 for margin-top
        >           
          {[           
            "Customer Software Development",           
            "Website Development & Web Design",           
            "Web Application Development",           
            "Mobile Application Development",           
            "AI/ML Engineering (Coming Soon)",           
            "Software Integration Services",           
            "UI/UX Design Prototyping",           
            "Information Technology Consultation",           
            "Automation and Workflow Optimization",           
            "Agentic AI (Coming Soon)"                    
          ].map((service, index) => (           
            <motion.div             
              key={index}             
              variants={itemVariants}             
              whileHover={{                
                scale: 1.05,                
                boxShadow: "0 10px 20px rgba(3, 40, 84, 0.3)"             
              }}             
              transition={{                
                type: "spring",                
                stiffness: 300,                
                damping: 10              
              }}             
              className={`               
                border                
                bg-[#032854]                
                text-white                
                md:rounded-lg                
                p-10                
                text-center                
                font-medium                
                w-80                
                h-35                
                flex                
                items-center                
                justify-center               
                transition-all                
                duration-300                
                ease-in-out               
                ${index === 9 ? 'md:col-span-1 md:col-start-2' : ''}             
              `}           
            >             
              {service}           
            </motion.div>         
          ))}         
        </motion.div>       
      </div>     
    </section>   
  ); 
};