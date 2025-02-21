import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import qroCertificate from "../assets/certificate.jpg";

const TEXTS = ["Innovative", "Creative", "Solving Challenges", "Machinery Power", "Automation"];

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => (prev + 1) % TEXTS.length), 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white transition-all duration-300">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-6 py-12">
        <motion.div
          className="relative z-10 text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="Logo" className="w-200 h-72 mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mt-2 animate-fade-in">{TEXTS[index]}</h2>
          <div className="mt-4 text-xl md:text-2xl">
            <Typewriter options={{ strings: ["Values to Challenges"], autoStart: true, loop: true, delay: 75 }} />
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            We specialize in precision machining, industrial automation, and custom-designed solutions for various industries.
          </p>
          <div className="mt-6 flex space-x-6">
           
          <motion.button
  className="px-6 py-3 bg-green-500 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition-all mx-auto block"
  whileHover={{ scale: 1.1 }}
  onClick={() => navigate("/products")}
>
  Explore
</motion.button>

          </div>
        </motion.div>
      </div>

      {/* Key Offerings Section */}
      <div className="bg-gray-800 py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">What We Offer</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold mb-2">Precision Machining</h4>
            <p>High-quality precision components for industrial applications.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold mb-2">Industrial Automation</h4>
            <p>Innovative solutions to streamline manufacturing processes.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold mb-2">Custom Design</h4>
            <p>Tailored solutions to meet unique industrial needs.</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-700 py-12 text-center">
        <h3 className="text-3xl font-semibold">Get Started with Us</h3>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Contact us today to discuss your requirements and explore our innovative solutions.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all"
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </motion.button>
      </div>
    


      {/* Sections with IDs */}
      <motion.section
        id="achievements"
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-white text-center px-6 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-6">Our Achievements</h2>
        <p className="text-xl max-w-3xl">
          We have over a decade of experience delivering innovative solutions.
        </p>
      </motion.section>

      <motion.section
  id="qroproof"
  className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-center lg:text-left px-6 py-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="lg:w-1/2 px-6">
    <h2 className="text-5xl font-bold mb-6">Quality Certification</h2>
    <p className="text-xl mb-6">
      Our commitment to excellence is recognized through the ISO 9001:2015 Quality Management System certification.  
      This accreditation demonstrates our dedication to delivering high-quality manufacturing and fabrication solutions.
    </p>
  </div>

  <div className="lg:w-1/2 flex justify-center">
    <img 
      src={qroCertificate}
      alt="ISO 9001:2015 Certificate"
      className="max-w-md w-full rounded-lg shadow-lg"
    />
  </div>
</motion.section>



<motion.section
  id="founder"
  className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-center lg:text-left px-6 py-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  {/* Founder Image */}
  <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
    <img 
      //src={founderImage}  // Make sure to replace this with the actual image source
      alt="Dr. Gajendramani - Founder"
      className="w-80 h-80 rounded-full shadow-lg object-cover"
    />
  </div>

  {/* Founder Info */}
  <div className="lg:w-1/2 px-6">
    <h2 className="text-5xl font-bold mb-6">Meet Our Founder</h2>
    <p className="text-xl mb-6">
      Dr. Gajendramani, the visionary behind **Vishacatech Engineers**, has been a pioneer in precision machining and automation.  
      With a relentless pursuit of excellence, he has led innovations in manufacturing and fabrication technologies,  
      making Vishacatech a trusted name in the industry.
    </p>
    <motion.button
      className="px-6 py-3 bg-blue-500 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
      whileHover={{ scale: 1.1 }}
      onClick={() => navigate("/about")} // Ensure your routing is set up correctly
    >
      Know More
    </motion.button>
  </div>
</motion.section>

    </div>
  );
};

export default Home;
