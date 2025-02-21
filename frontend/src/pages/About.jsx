import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-900 dark:text-gray-100"
    >
      {/* Title */}
      <motion.h1 id="about-us"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 text-center tracking-wide"
      >
        About VishacaTech Engineers
      </motion.h1>

      {/* Introduction */}
      <motion.p id="about-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-10"
      >
        We, VishacaTech Engineers, Coimbatore, are a proprietorship firm and a growing company with GST & MSME registration. With 30 years of technical expertise, we specialize in providing engineering solutions, concept prototyping, manufacturing, and trading.
      </motion.p>

      {/* Objective Section */}
      <motion.div id="opbjective"
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition duration-500 hover:shadow-2xl max-w-4xl w-full text-center"
      >
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">🏆 Our Objective</h3>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 text-left inline-block">
          <li>Quality Products</li>
          <li>On-time Delivery</li>
          <li>Customer Satisfaction</li>
          <li>Achieve Higher Goals - Engineering & Commercials</li>
        </ul>
      </motion.div>

      {/* Additional Information Sections */}
      <div className="mt-12 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center" id="choose-us">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition duration-500 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">📌 Why Choose Us?</h3>
          <p className="text-gray-600 dark:text-gray-300">
            With a strong foundation in engineering, innovation, and problem-solving, we strive to deliver the best quality solutions that meet industry standards.
          </p>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition duration-500 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">🌍 Our Expertise</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We specialize in a wide range of engineering solutions, including precision manufacturing, prototyping, and product development.
          </p>
        </motion.div>
      </div>

      {/* About the Founder Section */}
      <motion.div id="founder"
        whileHover={{ scale: 1.05 }}
        className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition duration-500 hover:shadow-2xl max-w-4xl w-full text-center"
      >
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">👤 About the Founder</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Mr. [Founder Name], a visionary entrepreneur with 30+ years of expertise in precision engineering and industrial automation, founded VishacaTech Engineers with a mission to deliver excellence. His leadership, innovation, and commitment to quality drive our company forward.
        </p>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 text-center text-gray-700 dark:text-gray-300"
      >
        <p className="text-lg">Driven by Excellence, Committed to Quality.</p>
      </motion.div>
    </motion.div>
  );
}
