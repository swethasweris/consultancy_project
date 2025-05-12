import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import logo from "../assets/lg.png";
import qroCertificate from "../assets/certificate.jpg";

const TEXTS = ["Precision Engineering", "Industrial Excellence", "Innovative Solutions", "Automation Experts", "Manufacturing Precision"];

// Enhanced brownish-red color theme
const THEME = {
  primary: "#8B2323", // Deep brownish red
  secondary: "#A52A2A", // Medium brownish red
  tertiary: "#CD5C5C", // Lighter brownish red
  light: "#FFFFFF", // White
  accent: "#D2B48C", // Tan/light brown
  dark: "#2D2D2D", // Dark gray for text
  lightBg: "#F9F9F9", // Light background
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => (prev + 1) % TEXTS.length), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-white text-gray-800 transition-all duration-300">
      {/* Hero Section - Fixed background image and responsive layout */}
      <div 
        className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4 sm:px-6 py-12 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <motion.div
          className="relative z-10 text-gray-800 bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-3xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="Vishacatech Engineers Logo" className="w-48 h-32 sm:w-60 sm:h-40 mb-4 mx-auto object-contain" />
          <h1 className="text-3xl sm:text-5xl font-bold mt-2 text-[#8B2323] mb-3">Vishacatech Engineers</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2323] mb-3">{TEXTS[index]}</h2>
          <div className="mt-2 text-lg sm:text-xl font-semibold text-gray-800 h-8">
            <Typewriter options={{
              strings: [
                "Engineering Excellence Since 2010",
                "Precision in Every Component",
                "Your Vision, Our Engineering Expertise"
              ],
              autoStart: true,
              loop: true,
              delay: 75
            }} />
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
            Empowering industries with cutting-edge precision machining, fabrication, and automation solutions that drive operational excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <motion.button
              className="px-6 sm:px-8 py-3 bg-[#8B2323] text-white rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#A52A2A] transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/products")}
            >
              Explore Our Solutions
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-3 bg-white text-[#8B2323] border-2 border-[#8B2323] rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-gray-50 transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
            >
              Request a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Key Offerings Section - Improved responsive grid */}
      <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Premium Engineering Services</h3>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            We deliver comprehensive engineering solutions tailored to meet the most demanding industrial requirements with precision and reliability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-t-[#8B2323]"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl mb-6">
                <i className="fas fa-cogs"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Precision Machining</h4>
              <p className="text-gray-600 leading-relaxed">
                High-quality precision components manufactured with tolerances up to 0.001mm using advanced CNC technology and rigorous quality control processes.
              </p>
              <motion.button
                className="mt-6 px-6 py-2 text-[#8B2323] border border-[#8B2323] rounded-full text-sm font-semibold hover:bg-[#8B2323] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/services")}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className="p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-t-[#8B2323]"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl mb-6">
                <i className="fas fa-robot"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Industrial Automation</h4>
              <p className="text-gray-600 leading-relaxed">
                Innovative automation solutions that streamline manufacturing processes, reduce operational costs, and increase productivity with smart integration.
              </p>
              <motion.button
                className="mt-6 px-6 py-2 text-[#8B2323] border border-[#8B2323] rounded-full text-sm font-semibold hover:bg-[#8B2323] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/services")}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className="p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-t-[#8B2323]"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl mb-6">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Custom Engineering</h4>
              <p className="text-gray-600 leading-relaxed">
                Tailored engineering solutions designed to meet unique industrial challenges with comprehensive technical support and innovative problem-solving.
              </p>
              <motion.button
                className="mt-6 px-6 py-2 text-[#8B2323] border border-[#8B2323] rounded-full text-sm font-semibold hover:bg-[#8B2323] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/services")}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Fixed grid for small screens */}
      <div className="bg-[#F9F9F9] py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323] text-center">Why Choose Vishacatech</h3>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8 sm:mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-[#8B2323] text-2xl"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Superior Quality</h4>
              <p className="text-gray-600">ISO 9001:2015 certified processes ensuring the highest standards in every project.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-[#8B2323] text-2xl"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Advanced Technology</h4>
              <p className="text-gray-600">State-of-the-art machinery and software for precision manufacturing.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users-cog text-[#8B2323] text-2xl"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Expert Team</h4>
              <p className="text-gray-600">Highly skilled engineers with decades of combined industry experience.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-[#8B2323] text-2xl"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Timely Delivery</h4>
              <p className="text-gray-600">Reliable project management ensuring on-time completion and deployment.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action - Improved mobile layout */}
      <div className="bg-[#8B2323] py-12 sm:py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Transform Your Operations?</h3>
          <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white opacity-90 mb-6 sm:mb-8">
            Contact our team of experts today to discuss your requirements and explore our innovative engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="px-6 sm:px-8 py-3 bg-white text-[#8B2323] rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
            >
              Request a Quote
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-white hover:text-[#8B2323] transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/services")}
            >
              Our Services
            </motion.button>
          </div>
        </div>
      </div>

            {/* Achievements Section - Fixed height issues */}
            <motion.section
        id="achievements"
        className="flex flex-col items-center justify-center py-16 sm:py-20 bg-white text-gray-800 text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Our Achievements</h2>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 sm:mb-16 text-gray-700">
            With over a decade of experience, we've established ourselves as leaders in delivering innovative engineering solutions that drive industrial excellence.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-5xl mx-auto">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl font-bold mb-4">500+</div>
              <p className="text-gray-700 font-medium">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl font-bold mb-4">98%</div>
              <p className="text-gray-700 font-medium">Client Satisfaction</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl font-bold mb-4">12+</div>
              <p className="text-gray-700 font-medium">Years of Excellence</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl sm:text-5xl font-bold mb-4">50+</div>
              <p className="text-gray-700 font-medium">Industry Partners</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quality Certification Section - Improved responsive layout */}
      <motion.section
        id="qroproof"
        className="py-16 sm:py-20 bg-[#F9F9F9] text-gray-800 px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 px-0 sm:px-6 text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Quality Certification</h2>
              <div className="w-24 h-1 bg-[#8B2323] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg sm:text-xl mb-8 text-gray-700 leading-relaxed">
                Our commitment to excellence is recognized through the ISO 9001:2015 Quality Management System certification.  
                This accreditation demonstrates our dedication to delivering high-quality manufacturing and fabrication solutions that meet international standards.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-semibold mb-4 text-[#8B2323]">Our Quality Commitment</h4>
                <ul className="text-left text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <span className="text-[#8B2323] mr-3 text-lg">✓</span> Rigorous quality control at every production stage
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#8B2323] mr-3 text-lg">✓</span> Continuous improvement methodology
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#8B2323] mr-3 text-lg">✓</span> Adherence to international manufacturing standards
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#8B2323] mr-3 text-lg">✓</span> Regular quality audits and process optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#8B2323] mr-3 text-lg">✓</span> Comprehensive documentation and traceability
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#8B2323] opacity-10 transform rotate-3 rounded-lg"></div>
                <img 
                  src={qroCertificate}
                  alt="ISO 9001:2015 Certificate"
                  className="max-w-full sm:max-w-md w-full rounded-lg shadow-lg border-4 border-white relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Founder Section - Fixed image display and responsive layout */}
      <motion.section
        id="founder"
        className="py-16 sm:py-20 bg-white text-gray-800 px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Founder Image */}
            <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#8B2323] opacity-10 transform scale-110"></div>
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-[#8B2323] shadow-xl">
                  {/* Placeholder until actual image is available */}
                  <div className="text-5xl sm:text-6xl text-[#8B2323]">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-50 sm:w-50 h-50 sm:h-50 bg-[#8B2323] rounded-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-medium">PROPRIETOR</div>
                    <div className="text-base sm:text-xl font-bold">GAJANDRAMANI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="lg:w-1/2 px-0 sm:px-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Meet Our PROPRIETOR</h2>
              <div className="w-24 h-1 bg-[#8B2323] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg sm:text-xl mb-6 text-gray-700 leading-relaxed">
                Dr. Gajendramani, the visionary behind <span className="font-semibold">Vishacatech Engineers</span>, has been a pioneer in precision machining and industrial automation for over two decades.
              </p>
              <p className="text-base sm:text-lg mb-8 text-gray-600 leading-relaxed">
                With a Ph.D. in Mechanical Engineering and extensive industry experience, Dr. Gajendramani has led innovations in manufacturing technologies and established Vishacatech as a trusted name in the engineering sector. His commitment to excellence and customer satisfaction drives our company's vision.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
                <div className="bg-[#8B2323] bg-opacity-10 px-3 sm:px-4 py-2 rounded-full">
                  <span className="text-white text-sm sm:text-base font-medium">Ph.D. in Mechanical Engineering</span>
                </div>
                <div className="bg-[#8B2323] bg-opacity-10 px-3 sm:px-4 py-2 rounded-full">
                  <span className="text-white text-sm sm:text-base font-medium">20+ Years Experience</span>
                </div>
                <div className="bg-[#8B2323] bg-opacity-10 px-3 sm:px-4 py-2 rounded-full">
                  <span className="text-white text-sm sm:text-base font-medium">Industry Innovator</span>
                </div>
              </div>
              <motion.button
                className="px-6 sm:px-8 py-3 bg-[#8B2323] text-white rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#A52A2A] transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/about")}
              >
                Learn More About Our Team
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section - Improved responsive grid */}
      <motion.section
        id="testimonials"
        className="py-16 sm:py-20 bg-[#F9F9F9] text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 sm:mb-16 text-gray-700">
            Our clients' success is our success. Here's what some of our valued partners have to say about working with Vishacatech Engineers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#8B2323] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Vishacatech Engineers delivered exceptional quality machined parts that exceeded our specifications. Their attention to detail and technical expertise have made them our preferred manufacturing partner."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-[#8B2323]">SALEM MILK PRODUCERS</div>
                  
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#8B2323] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "The automation solution provided by Vishacatech increased our production efficiency by 40%. Their expertise in industrial automation and commitment to project timelines are truly remarkable."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-[#8B2323]">ERODE MILK PRODUCERS</div>
                  
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg relative"
              whileHover={{ y: -10 }}
            >
                           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#8B2323] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Working with Vishacatech on our custom design project was a seamless experience. Their team's technical knowledge, problem-solving abilities, and responsive communication made complex challenges manageable."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-[#8B2323]">SWAB TECHNOLOGIES</div>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve - Improved grid for mobile */}
      <motion.section
        id="industries"
        className="py-16 sm:py-20 bg-white text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Industries We Serve</h2>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 sm:mb-16 text-gray-700">
            Our engineering expertise spans across multiple industries, providing specialized solutions tailored to each sector's unique requirements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">🏭</span>
              </div>
              
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Precision components and assembly solutions</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">⚙️</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Automotive</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Critical components with superior durability</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">🔬</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Medical</h3>
              <p className="text-gray-600 text-xs sm:text-sm">High-precision medical device components</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">🔋</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Energy</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Reliable components for power generation</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">✈️</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Aerospace</h3>
              <p className="text-gray-600 text-xs sm:text-sm">High-performance aerospace components</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">🚜</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Agriculture</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Durable equipment and automation systems</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">🏗️</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Construction</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Specialized tools and equipment solutions</p>
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#8B2323] text-2xl sm:text-4xl">🔌</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Electronics</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Precision components for electronic systems</p>
            </motion.div>
          </div>
          
          <motion.button
            className="mt-10 sm:mt-12 px-6 sm:px-8 py-3 bg-[#8B2323] text-white rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#A52A2A] transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/industries")}
          >
            Explore Industry Solutions
          </motion.button>
        </div>
      </motion.section>

      {/* Our Process Section - Improved mobile timeline */}
      <motion.section
        id="process"
        className="py-16 sm:py-20 bg-[#F9F9F9] text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#8B2323]">Our Engineering Process</h2>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 sm:mb-16 text-gray-700">
            We follow a systematic approach to deliver exceptional results, ensuring quality and precision at every stage.
          </p>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#8B2323] transform -translate-x-1/2"></div>
            
            {/* Step 1 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-center mb-12 sm:mb-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3">Consultation & Requirements</h3>
                <p className="text-gray-700">We begin by understanding your specific needs, challenges, and objectives through detailed consultations.</p>
              </div>
              <div className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B2323] flex items-center justify-center text-white text-lg sm:text-xl font-bold">1</div>
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-center mb-12 sm:mb-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/2 md:pr-12 text-center md:text-right md:hidden">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3">Design & Engineering</h3>
                <p className="text-gray-700">Our expert engineers develop detailed designs and technical specifications tailored to your requirements.</p>
              </div>
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B2323] flex items-center justify-center text-white text-lg sm:text-xl font-bold">2</div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3 hidden md:block">Design & Engineering</h3>
                <p className="text-gray-700 hidden md:block">Our expert engineers develop detailed designs and technical specifications tailored to your requirements.</p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-center mb-12 sm:mb-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3">Prototyping & Testing</h3>
                <p className="text-gray-700">We create prototypes and conduct rigorous testing to ensure functionality, quality, and performance.</p>
              </div>
              <div className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B2323] flex items-center justify-center text-white text-lg sm:text-xl font-bold">3</div>
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-center mb-12 sm:mb-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                            <div className="md:w-1/2 md:pr-12 text-center md:text-right md:hidden">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3">Production & Quality Control</h3>
                <p className="text-gray-700">Our state-of-the-art facilities manufacture your components with precision, backed by comprehensive quality checks.</p>
              </div>
              <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B2323] flex items-center justify-center text-white text-lg sm:text-xl font-bold">4</div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3 hidden md:block">Production & Quality Control</h3>
                <p className="text-gray-700 hidden md:block">Our state-of-the-art facilities manufacture your components with precision, backed by comprehensive quality checks.</p>
              </div>
            </motion.div>
            
            {/* Step 5 */}
            <motion.div 
              className="relative flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B2323] mb-3">Delivery & Support</h3>
                <p className="text-gray-700">We ensure timely delivery and provide ongoing technical support to ensure optimal performance.</p>
              </div>
              <div className="z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B2323] flex items-center justify-center text-white text-lg sm:text-xl font-bold">5</div>
              <div className="md:w-1/2 md:pl-12"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section - Improved responsive grid */}
      <div className="bg-[#8B2323] py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Elevate Your Engineering Solutions?</h3>
          <p className="mt-2 max-w-3xl mx-auto text-base sm:text-xl text-white opacity-90 mb-8 sm:mb-10 leading-relaxed">
            Partner with Vishacatech Engineers for precision, quality, and innovation that drives your business forward. Let's transform your engineering challenges into opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.button
              className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#8B2323] rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
            >
              Request a Consultation
            </motion.button>
            <motion.button
              className="px-6 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:bg-white hover:text-[#8B2323] transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/products")}
            >
              Explore Our Solutions
            </motion.button>
          </div>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-white">
              <div className="text-3xl sm:text-4xl mb-2"><i className="fas fa-map-marker-alt"></i></div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Visit Us</h4>
              <p className="opacity-80">39/A RAJA ANNAMALAI ROAD , SAIBABA COLONY , COIMBATORE - 641 011</p>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl mb-2"><i className="fas fa-phone"></i></div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h4>
              <p className="opacity-80">+91 73977 44944 </p>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl mb-2"><i className="fas fa-envelope"></i></div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h4>
              <p className="opacity-80">vishacatechengineers@gmail.com</p>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl mb-2"><i className="fas fa-clock"></i></div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Working Hours</h4>
              <p className="opacity-80">Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-12 flex justify-center space-x-6">
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl sm:text-2xl hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl sm:text-2xl hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl sm:text-2xl hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl sm:text-2xl hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


