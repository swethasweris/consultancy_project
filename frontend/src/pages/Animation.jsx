import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function Animation() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
 
  const navigate = useNavigate();

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-white flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B2323] to-[#CD5C5C]">
              Process Animation Services
            </span>
          </h1>
         
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
         
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visualize your industrial processes with our cutting-edge 3D animations. We transform complex engineering
            concepts into clear, engaging visual experiences that enhance understanding and communication.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          {/* Service Overview */}
          <motion.div
            variants={itemVariants}
            className="bg-[#8B2323] rounded-2xl shadow-xl overflow-hidden mb-16 border border-[#8B2323]/20"
          >
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-6">
                Bringing Engineering Processes to Life
              </h2>
             
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                At Vishacatech Engineers, we specialize in creating detailed process animations that illustrate
                the functionality, benefits, and technical aspects of industrial machinery and systems. Our animations
                serve as powerful tools for training, marketing, presentations, and technical documentation.
              </p>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#8B2323]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#8B2323] mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Enhanced understanding of complex processes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Improved client communication and engagement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Effective training and educational resources</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Compelling marketing and sales materials</span>
                    </li>
                  </ul>
                </div>
               
                <div className="bg-[#8B2323]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#8B2323] mb-3">Applications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Manufacturing process visualization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Equipment operation demonstrations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Assembly and maintenance instructions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#8B2323] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Safety procedure illustrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Animations */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-8 text-center"
          >
            Our Process Animation Portfolio
          </motion.h2>
         
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Animation 1 */}
            <div className="bg-[#8B2323] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 border border-[#8B2323]/20">
              <div className="relative aspect-w-16 aspect-h-5 overflow-hidden">
                {/* Actual video player */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B2323]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold">Automated Assembly Line Animation</h3>
                  </div>
                </div>
              </div>
              <video
                className="w-full h-100 object-cover"
                controls
              >
                <source src="/images/VID-20250409-WA0003.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Automated Assembly Line</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive animation of our automated assembly line system, highlighting efficiency improvements and quality control measures.
                </p>
                <button className="px-4 py-2 bg-[#8B2323] text-white rounded-lg hover:bg-[#A52A2A] transition-colors">
                  View Animation
                </button>
              </div>
            </div>

            {/* Animation 2 */}
            <div className=" rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 border border-[#8B2323]/20">
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                {/* Actual video player */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B2323]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold">Automated Assembly Line Animation</h3>
                  </div>
                </div>
              </div>
              <video
                className="w-full h-100 object-cover"
                controls
              >
                <source src="/images/VID-20250410-WA0033.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Automated Assembly Line</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive animation of our automated assembly line system, highlighting efficiency improvements and quality control measures.
                </p>
                <button className="px-4 py-2 bg-[#8B2323] text-white rounded-lg hover:bg-[#A52A2A] transition-colors">
                  View Animation
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Process Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="bg-[#8B2323] rounded-2xl shadow-xl overflow-hidden mb-16 border border-[#8B2323]/20"
        >
          <div className="p-8 md:p-10">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-6"
            >
              Our Animation Development Process
            </motion.h2>
           
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B2323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#8B2323]">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-3">Requirements Analysis</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We begin by understanding your specific needs, target audience, and the key processes that need to be visualized.
                </p>
              </div>
             
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B2323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#8B2323]">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-3">Storyboarding</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our team creates detailed storyboards outlining each sequence of the animation to ensure alignment with your vision.
                </p>
              </div>
             
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B2323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#8B2323]">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-3">3D Modeling</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We develop precise 3D models of your equipment, components, and systems with attention to technical accuracy.
                </p>
              </div>
             
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B2323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#8B2323]">4</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-3">Animation Development</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our animators bring the models to life, creating fluid motion sequences that accurately represent your processes.
                </p>
              </div>
             
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B2323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#8B2323]">5</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-3">Rendering & Post-Production</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We apply high-quality rendering, lighting, and post-production effects to create a professional finished product.
                </p>
              </div>
             
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B2323]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#8B2323]">6</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-3">Review & Delivery</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  After your review and approval, we deliver the final animation in your preferred format for immediate use.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
       
        {/* Animation Types */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-8 text-center"
          >
            Types of Process Animations We Create
          </motion.h2>
         
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-lg border border-[#8B2323]/20">
              <div className="w-12 h-12 bg-[#8B2323]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Machinery Operation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Detailed animations showing how specific machinery and equipment operate, highlighting key components and functions.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-lg border border-[#8B2323]/20">
              <div className="w-12 h-12 bg-[#8B2323]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Manufacturing Processes</h3>
              <p className="text-gray-700 dark:text-gray-300">
                End-to-end visualizations of manufacturing processes, from raw materials to finished products, with all intermediate steps.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-lg border border-[#8B2323]/20">
              <div className="w-12 h-12 bg-[#8B2323]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Assembly Instructions</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Step-by-step assembly and disassembly animations that serve as visual guides for technicians and maintenance personnel.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-lg border border-[#8B2323]/20">
              <div className="w-12 h-12 bg-[#8B2323]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Safety Procedures</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Animations illustrating proper safety protocols, emergency procedures, and potential hazards in industrial environments.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-lg border border-[#8B2323]/20">
              <div className="w-12 h-12 bg-[#8B2323]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">Product Benefits</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Marketing-focused animations that highlight the unique features, advantages, and applications of your products.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-lg border border-[#8B2323]/20">
              <div className="w-12 h-12 bg-[#8B2323]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">System Integration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Animations showing how different systems and components work together in integrated industrial environments.
              </p>
            </div>
          </motion.div>
        </motion.div>
       
        {/* FAQ Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-[#8B2323] dark:text-[#CD5C5C] mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
         
          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-md border border-[#8B2323]/20">
              <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">How long does it take to create a process animation?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Depending on complexity, most process animations take 2-4 weeks from initial consultation to final delivery. Complex projects with multiple systems may require additional time.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-md border border-[#8B2323]/20">
              <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">What information do you need to create an accurate animation?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We typically require technical specifications, CAD files if available, process documentation, and access to subject matter experts who can explain the operational details.
              </p>
            </div>
           
            <div className="bg-[#8B2323] p-6 rounded-xl shadow-md border border-[#8B2323]/20">
              <h3 className="text-lg font-semibold text-[#8B2323] dark:text-[#CD5C5C] mb-2">In what formats can I receive the final animation?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We deliver animations in various formats including MP4, MOV, AVI, and interactive formats for web integration. We can also provide specialized formats for specific applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
       
        {/* Call to Action */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="bg-[#8B2323] text-white p-8 md:p-12 rounded-2xl text-center"
        >
                    <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Bring Your Processes to Life?
          </motion.h2>
         
          <motion.p
            variants={itemVariants}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss how our process animation services can help you communicate complex industrial concepts with clarity and impact.
          </motion.p>
         
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-[#8B2323] rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
              onClick={() => navigate("/contact")}
            >
              Request a Consultation
            </motion.button>
            
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}


