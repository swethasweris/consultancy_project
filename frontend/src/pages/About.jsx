import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white"
    >
      {/* Hero Section */}
      <motion.div 
        className="w-full max-w-6xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 id="about-us"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-6xl font-extrabold text-[#8B2323] dark:text-[#8B2323] mb-4 text-center tracking-wide"
        >
          About VishacaTech Engineers
        </motion.h1>
        
        <motion.div className="w-24 h-1 bg-[#8B2323] dark:bg-[#8B2323] mx-auto mb-8"></motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-black dark:text-gray-800 text-center leading-relaxed"
        >
          Established in Coimbatore, VishacaTech Engineers is a premier proprietorship firm with GST & MSME registration, 
          bringing 30 years of technical expertise to the engineering solutions industry.
        </motion.p>
      </motion.div>

      {/* Company Overview Section */}
      <motion.div 
        className="w-full max-w-6xl mb-16 bg-white dark:bg-white p-10 rounded-xl shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-6">Our Company</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-black dark:text-black leading-relaxed mb-4">
              At VishacaTech Engineers, we pride ourselves on delivering exceptional engineering solutions that combine innovation with precision. 
              Our comprehensive services span concept prototyping, precision manufacturing, and specialized trading of engineering components.
            </p>
            <p className="text-black dark:text-black leading-relaxed mb-4">
              With a state-of-the-art facility equipped with cutting-edge technology, we have positioned ourselves as a trusted partner for businesses 
              seeking reliable engineering solutions across various industrial sectors.
            </p>
            <p className="text-black dark:text-black leading-relaxed">
              Our team of highly skilled engineers and technicians brings decades of combined experience, ensuring that every project 
              meets the highest standards of quality and performance.
            </p>
          </div>
          
          <div className="bg-[#8B2323] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white dark:text-white mb-4">Company Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-2">✓</span>
                <span className="text-white dark:text-white">30+ years of industry expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-2">✓</span>
                <span className="text-white dark:text-white">GST & MSME registered business</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-2">✓</span>
                <span className="text-white dark:text-white">Advanced manufacturing capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-2">✓</span>
                <span className="text-white dark:text-white">End-to-end engineering solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-2">✓</span>
                <span className="text-white dark:text-white">Customized product development</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-2">✓</span>
                <span className="text-white dark:text-white">Commitment to innovation and quality</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="w-full max-w-6xl mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-[#8B2323] p-8 rounded-xl shadow-lg transition duration-300"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white dark:bg-white rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white">Our Mission</h3>
          </div>
          <p className="text-white dark:text-white leading-relaxed">
            To deliver innovative engineering solutions that exceed client expectations through technical excellence, 
            quality craftsmanship, and unwavering commitment to customer satisfaction. We strive to be at the forefront 
            of technological advancement while maintaining the highest standards of integrity and reliability.
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-white p-8 rounded-xl shadow-lg transition duration-300 border border-[#8B2323]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B2323] dark:text-[#8B2323]">Our Vision</h3>
          </div>
          <p className="text-black dark:text-black leading-relaxed">
            To be recognized as a leading engineering solutions provider in India, known for our innovation, 
            technical expertise, and ability to solve complex engineering challenges. We aim to expand our 
            capabilities and market presence while fostering a culture of continuous improvement and sustainable growth.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <motion.div id="core-values"
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-6xl mb-16 bg-white dark:bg-white p-10 rounded-xl shadow-lg border border-[#8B2323]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-6 text-center">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#F5F5F5] dark:bg-[#F5F5F5] rounded-lg text-center border border-[#8B2323]">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#8B2323] mb-2">Excellence</h3>
            <p className="text-black dark:text-black">
              We pursue excellence in everything we do, from design and manufacturing to customer service and support.
            </p>
          </div>
          
          <div className="p-6 bg-[#F5F5F5] dark:bg-[#F5F5F5] rounded-lg text-center border border-[#8B2323]">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#8B2323] mb-2">Innovation</h3>
            <p className="text-black dark:text-black">
              We embrace innovation and creative problem-solving to develop cutting-edge solutions for our clients.
            </p>
          </div>
          
          <div className="p-6 bg-[#F5F5F5] dark:bg-[#F5F5F5] rounded-lg text-center border border-[#8B2323]">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#8B2323] mb-2">Integrity</h3>
            <p className="text-black dark:text-black">
              We conduct our business with the highest level of integrity, transparency, and ethical standards.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Objective Section */}
      <motion.div id="objective"
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-6xl mb-16 bg-white dark:bg-white p-10 rounded-xl shadow-lg border border-[#8B2323]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-6 text-center">Our Objectives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F5F5F5] dark:bg-[#F5F5F5] p-6 rounded-lg border border-[#8B2323]">
            <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#8B2323] mb-4">Business Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#8B2323] dark:text-[#8B2323] mr-3">✓</span>
                <span className="text-black dark:text-black">Deliver premium quality products that exceed industry standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B2323] dark:text-[#8B2323] mr-3">✓</span>
                <span className="text-black dark:text-black">Ensure on-time delivery through efficient project management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B2323] dark:text-[#8B2323] mr-3">✓</span>
                <span className="text-black dark:text-black">Achieve 100% customer satisfaction through exceptional service</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B2323] dark:text-[#8B2323] mr-3">✓</span>
                <span className="text-black dark:text-black">Continuously improve our processes and capabilities</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#8B2323] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white dark:text-white mb-4">Strategic Goals</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-3">✓</span>
                <span className="text-white dark:text-white">Expand our market presence across India and beyond</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-3">✓</span>
                <span className="text-white dark:text-white">Invest in advanced technologies to enhance our capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-3">✓</span>
                <span className="text-white dark:text-white">Develop sustainable engineering solutions for the future</span>
              </li>
              <li className="flex items-start">
                <span className="text-white dark:text-white mr-3">✓</span>
                <span className="text-white dark:text-white">Build long-term partnerships with clients and suppliers</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
        
      {/* Services & Expertise Section */}
      <motion.div 
        className="w-full max-w-6xl mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-8 text-center">Our Services & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="w-14 h-14 bg-white dark:bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Precision Engineering</h3>
            <p className="text-white dark:text-white">
              Our precision engineering services include CNC machining, tool design, and fabrication of complex components with tight tolerances for various industries.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="w-14 h-14 bg-white dark:bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Concept Prototyping</h3>
            <p className="text-white dark:text-white">
              We transform ideas into reality through our comprehensive prototyping services, helping clients validate designs before full-scale production.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="w-14 h-14 bg-white dark:bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Industrial Automation</h3>
            <p className="text-white dark:text-white">
              Our automation solutions help businesses improve efficiency, reduce costs, and enhance product quality through advanced control systems.
            </p>
          </motion.div>
        </div>
      </motion.div>
        
      {/* About the Founder Section */}
      <motion.div id="founder"
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-6xl mb-16 bg-white dark:bg-white p-10 rounded-xl shadow-lg border border-[#8B2323]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <div className="w-48 h-48 bg-[#8B2323] dark:bg-[#8B2323] rounded-full mx-auto overflow-hidden">
              {/* Placeholder for founder image */}
              <div className="w-full h-full bg-[#8B2323] dark:bg-[#8B2323] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-4">About the PROPRIETOR</h2>
            <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#8B2323] mb-3">DR.GAJENDRAMANI</h3>
            <p className="text-black dark:text-black leading-relaxed mb-4">
              With over 30 years of experience in precision engineering and industrial automation, DR.GAJENDRAMANI founded VishacaTech Engineers with a vision to deliver world-class engineering solutions to businesses across India.
            </p>
            <p className="text-black dark:text-black leading-relaxed mb-4">
              His extensive background includes leadership roles at prominent engineering firms, where he developed expertise in manufacturing processes, quality control, and business management. His innovative approach to engineering challenges has earned him recognition in the industry.
            </p>
            <p className="text-black dark:text-black leading-relaxed">
              Under his leadership, VishacaTech Engineers has grown from a small workshop to a comprehensive engineering solutions provider, serving clients across multiple industries with a commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </motion.div>
        
      {/* Why Choose Us Section */}
      <motion.div id="choose-us"
        className="w-full max-w-6xl mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-8 text-center">Why Choose VishacaTech Engineers?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-white dark:bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Technical Expertise</h3>
                <p className="text-white dark:text-white">
                  Our team brings 30+ years of technical expertise across various engineering disciplines, ensuring that your projects are handled by seasoned professionals.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-white dark:bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Cutting-Edge Technology</h3>
                <p className="text-white dark:text-white">
                  We invest in the latest manufacturing technologies and software to deliver solutions that meet the highest standards of precision and efficiency.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-white dark:bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Customer-Centric Approach</h3>
                <p className="text-white dark:text-white">
                  We prioritize understanding your unique requirements and challenges to deliver tailored solutions that address your specific needs.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-[#8B2323] p-6 rounded-xl shadow-lg transition duration-300"
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-white dark:bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Quality Assurance</h3>
                <p className="text-white dark:text-white">
                  Our rigorous quality control processes ensure that every product and service we deliver meets or exceeds industry standards and client expectations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Industries We Serve */}
      <motion.div 
        className="w-full max-w-6xl mb-16 bg-white dark:bg-white p-10 rounded-xl shadow-lg border border-[#8B2323]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-6 text-center">Industries We Serve</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Manufacturing</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Energy</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Automotive</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Aerospace</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Electronics</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Medical</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Construction</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-1">Technology</h3>
          </div>
        </div>
      </motion.div>

      {/* Certifications & Recognitions */}
      <motion.div 
        className="w-full max-w-6xl mb-16 bg-white dark:bg-white p-10 rounded-xl shadow-lg border border-[#8B2323]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-[#8B2323] dark:text-[#8B2323] mb-6 text-center">Certifications & Recognitions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F5F5F5] dark:bg-[#F5F5F5] p-6 rounded-lg text-center border border-[#8B2323]">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-2">ISO 9001:2015</h3>
            <p className="text-black dark:text-black">
              Certified for Quality Management Systems, ensuring consistent quality in all our processes and deliverables.
            </p>
          </div>
          
          <div className="bg-[#8B2323] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-white dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B2323] dark:text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white dark:text-white mb-2">MSME Registered</h3>
            <p className="text-white dark:text-white">
              Recognized by the Ministry of Micro, Small & Medium Enterprises, Government of India.
            </p>
          </div>
          
          <div className="bg-[#F5F5F5] dark:bg-[#F5F5F5] p-6 rounded-lg text-center border border-[#8B2323]">
            <div className="w-16 h-16 bg-[#8B2323] dark:bg-[#8B2323] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#8B2323] mb-2">Excellence Award</h3>
            <p className="text-black dark:text-black">
              Recognized for outstanding contributions to engineering innovation and manufacturing excellence.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="w-full max-w-6xl mb-16 bg-gradient-to-r from-[#8B2323] to-[#6B1A1A] dark:from-[#8B2323] dark:to-[#6B1A1A] p-10 rounded-xl shadow-lg text-white text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
          Let's collaborate to bring your engineering vision to life. Our team is ready to provide the expertise and solutions you need.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-[#8B2323] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Contact Us Today
        </a>
      </motion.div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-8 mb-12 text-center"
      >
        <p className="text-xl italic text-[#8B2323] dark:text-[#8B2323]">
          "Driven by Excellence, Committed to Quality, Inspired by Innovation."
        </p>
      </motion.div>
    </motion.div>
  );
}
