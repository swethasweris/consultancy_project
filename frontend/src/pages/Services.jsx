import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Service categories with their respective services
const serviceCategories = [
  {
    name: "Food Industries",
    icon: "🏭",
    image: "./images/foodindustry.jpg",
    description: "Precision-engineered components for food processing and manufacturing industries.",
    services: [
      {
        name: "Automiser Shafts",
        icon: "⚙️",
        description: "Precision-machined automiser shafts for industrial automation. Our shafts are manufactured to the highest standards, ensuring optimal performance and longevity in demanding food processing environments.",
        image: "./images/automisersaft.jpg"
      },
      {
        name: "Spindle Lock Nuts",
        icon: "🔩",
        description: "High-quality spindle lock nuts for secure fastening. Designed for precision applications in food processing equipment, our lock nuts provide reliable performance even under high stress and vibration conditions.",
        image: "./images/spindlelocknuts.jpg"
      },
      {
        name: "Pulleys & Sleeves",
        icon: "🛠️",
        description: "Durable pulleys and sleeves for smooth power transmission. Engineered for minimal friction and maximum efficiency, our products ensure reliable operation in various food industry applications.",
        image: "./images/pulleysandsleeves.jpg"
      },
      {
        name: "Oil Throwers",
        icon: "🛢️",
        description: "Designed to prevent oil leakage in high-speed machinery. Our oil throwers provide effective sealing solutions that extend equipment life and reduce maintenance costs in food processing facilities.",
        image: "./images/oilthrowers.jpg"
      },
      {
        name: "Gear Motors",
        icon: "⚡",
        description: "High-efficiency gear motors for food industry applications. Our motors deliver consistent torque and speed control, making them ideal for a wide range of food processing operations.",
        image:"./images/gearmotors.jpg"
      },
      {
        name: "High Temp & RPM Belts",
        icon: "🔥",
        description: "Heat-resistant belts for extreme conditions. Engineered to withstand high temperatures and speeds, our belts ensure reliable power transmission in the most demanding food processing environments.",
        image: "./images/rpmbelt.jpg"
      },
      {
        name: "High Temp Pneumatic Cylinders",
        icon: "🔧",
        description: "Reliable pneumatic cylinders for high-temperature operations. Our cylinders maintain performance integrity even in extreme heat, making them ideal for specialized food industry applications.",
        image: "./images/pneumaticcylinaders.jpg"
      },
      {
        name: "Hammers & Actuators",
        icon: "🔨",
        description: "Precision-engineered hammers and actuators for food industry use. Our products deliver consistent force and precise control for food manufacturing and automation applications.",
        image: "./images/acutators.jpg"
      }
    ]
  },
  {
    name: "Boiler Industries",
    icon: "🔥",
    image: "./images/boilerinsudtries.jpg",
    description: "High-performance components for industrial boilers and heating systems.",
    services: [
      {
        name: "Air Heating Coils (Boiler Side)",
        icon: "🌡️",
        description: "Advanced heating coils for efficient boiler performance. Our coils maximize heat transfer while minimizing energy consumption, contributing to more sustainable industrial operations.",
        image: "./images/airheatingcoil.jpg"
      },
      {
        name: "Finned Tubes",
        icon: "❄️",
        description: "High-quality finned tubes for heat exchange applications. Our tubes are designed for optimal thermal efficiency in industrial heating systems and boilers.",
        image: "./images/finnedtubes.jpg"
      },
      {
        name: "Cooler Tubes",
        icon: "❄️",
        description: "Specialized cooler tubes for industrial applications. Engineered for maximum heat dissipation and durability in demanding environments.",
        image: "./images/coolertubes.jpg"
      },
      {
        name: "Fabrications",
        icon: "🔧",
        description: "Custom fabrication services for boiler components. Our precision manufacturing ensures perfect fit and function for your specific requirements.",
        image: "./images/fabrications.jpg"
      },
      {
        name: "Boiler Steam PR Lines",
        icon: "♨️",
        description: "High-pressure steam lines for industrial boilers. Engineered for safety and efficiency in demanding high-temperature environments.",
        image: "./images/boilerprlines.jpg"
      },
      {
        name: "SS Fittings",
        icon: "🔩",
        description: "Premium stainless steel fittings for boiler systems. Corrosion-resistant and designed for long-term reliability in high-pressure applications.",
        image: "./images/ssfittings.jpg"
      }
    ]
  },
  {
    name: "Aqua and Biotech Chemical Industries",
    icon: "🧪",
    image: "./images/aquabiotank.jpg",
    description: "Specialized equipment for aquaculture, biotechnology, and chemical processing.",
    services: [
      {
        name: "FRP Tanks & Vessels",
        icon: "🧫",
        description: "Fiber-reinforced plastic tanks and vessels for chemical storage and processing. Resistant to corrosion and designed for long-term durability with hazardous materials.",
        image: "./images/frpank.jpg"
      },
      {
        name: "Customised SS Nanoparticle Mixtures",
        icon: "🔬",
        description: "Stainless steel systems for nanoparticle processing with precise temperature controls. Our equipment enables consistent production of specialized materials for research and industry.",
        image: "./images/nanoss.jpg"
      },
      {
        name: "Mixer Units with Temperature Control",
        icon: "🌡️",
        description: "Advanced mixing systems with precise temperature regulation. Ideal for sensitive chemical processes requiring exact environmental conditions.",
        image: "./images/mixerunit.webp"
      },
      {
        name: "Round & Rectangular Tanks",
        icon: "⚗️",
        description: "Custom-designed tanks in various configurations for biotech and chemical applications. Available in different materials to suit specific chemical compatibility requirements.",
        image: "./images/roundrectangletanks.jpg"
      },
      {
        name: "Nano Bubble Reactors",
        icon: "💧",
        description: "Cutting-edge reactors for nano bubble generation and application. Our systems enable advanced water treatment, aquaculture, and biotech research applications.",
        image: "./images/nanobubble.jpg"
      }
    ]
  },
  {
    name: "Biomedical Industries",
    icon: "🩺",
    image: "./images/biomedical.jpg",
    description: "Precision components for medical devices and biomedical research equipment.",
    services: [
      {
        name: "Biomedical Components",
        icon: "🧬",
        description: "Precision-engineered components for medical devices and research equipment. Manufactured to meet strict medical industry standards and regulatory requirements.",
        image: "./images/biomedicalcomponents.jpg"
      },
      {
        name: "Medical Device Parts",
        icon: "⚕️",
        description: "Custom parts for medical devices with precise tolerances. Our components are manufactured in clean environments to ensure suitability for medical applications.",
        image: "./images/medicalparts.avif"
      },
      {
        name: "Laboratory Equipment Components",
        icon: "🔬",
        description: "Specialized parts for laboratory and research equipment. Designed for precision, reliability, and compatibility with sensitive research environments.",
        image: "./images/labequip.jpg"
      },
      {
        name: "Biomedical Research Tools",
        icon: "🧪",
        description: "Custom tools and equipment for biomedical research. Engineered to meet the specific needs of research institutions and medical laboratories.",
        image: "./images/researchtools.jpg"
      }
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#8B2323] mb-6"
      >
        Our Services
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 max-w-2xl text-center mb-12"
      >
        Vishaca Tech Engineers specializes in precision-engineered industrial solutions,
        offering high-quality products and innovative technology for various industries.
      </motion.p>

      {/* Industry Categories Section */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#A52A2A] mb-8"
      >
        Our Industry Solutions
      </motion.h2>

      {/* Category Tabs */}
      <div className="w-full max-w-6xl mb-8 flex flex-wrap justify-center gap-4">
        {serviceCategories.map((category, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                      ${activeCategory === index
                        ? 'bg-[#8B2323] text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 border border-[#8B2323] hover:bg-[#F9F9F9]'}`}
            onClick={() => setActiveCategory(index)}
          >
            <span className="text-xl">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Category Description */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mb-12 bg-white p-6 rounded-xl shadow-md border border-gray-200"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 h-64 overflow-hidden rounded-lg">
            <img
              src={serviceCategories[activeCategory].image}
              alt={serviceCategories[activeCategory].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-[#8B2323] mb-4 flex items-center gap-2">
              <span className="text-3xl">{serviceCategories[activeCategory].icon}</span>
              {serviceCategories[activeCategory].name}
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              {serviceCategories[activeCategory].description}
            </p>
            <button
              className="px-6 py-2 bg-[#8B2323] hover:bg-[#A52A2A] text-white rounded-lg
                        transition-colors duration-300 transform hover:scale-105"
              onClick={() => setSelectedCategory(serviceCategories[activeCategory])}
            >
              View All Solutions
            </button>
          </div>
        </div>
      </motion.div>

      {/* Services Grid for Active Category */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {serviceCategories[activeCategory].services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h3 className="text-xl font-bold text-[#8B2323]">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-700 mb-6 line-clamp-3">
                {service.description}
              </p>
              <button
                className="w-full px-4 py-2 bg-[#8B2323] hover:bg-[#A52A2A] text-white rounded-lg
                          transition-colors duration-300 transform hover:scale-105"
                onClick={() => setSelectedService(service)}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-[#8B2323] text-2xl"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-24 h-24 flex items-center justify-center text-5xl bg-[#8B2323] bg-opacity-10 rounded-full mb-4 md:mb-0 md:mr-6">
                {selectedService.icon}
              </div>
              <h2 className="text-3xl font-bold text-[#8B2323]">
                {selectedService.name}
              </h2>
            </div>
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {selectedService.description}
            </p>
            
            <div className="flex justify-end">
              <button
                className="px-6 py-3 bg-[#8B2323] hover:bg-[#A52A2A] text-white rounded-lg transition-colors duration-300"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal for Category Details */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-xl shadow-2xl max-w-5xl w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-[#8B2323] text-2xl"
              onClick={() => setSelectedCategory(null)}
            >
              ×
            </button>
            
            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 flex items-center justify-center text-4xl bg-[#8B2323] bg-opacity-10 rounded-full mb-4">
                {selectedCategory.icon}
              </div>
              <h2 className="text-3xl font-bold text-[#8B2323] text-center">
                {selectedCategory.name} Solutions
              </h2>
              <p className="text-gray-600 text-center mt-2 max-w-2xl">
                {selectedCategory.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCategory.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-bold text-[#8B2323]">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                className="px-6 py-3 bg-[#8B2323] hover:bg-[#A52A2A] text-white rounded-lg transition-colors duration-300"
                onClick={() => setSelectedCategory(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Service Process Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mb-16"
      >
        <h2 className="text-3xl font-bold text-[#8B2323] mb-8 text-center">
          Our Service Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center relative border border-gray-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#8B2323] text-white flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center text-4xl text-[#8B2323]">
              🔍
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Consultation
            </h3>
            <p className="text-gray-600">
              We begin with a thorough consultation to understand your specific requirements and challenges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center relative border border-gray-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#8B2323] text-white flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center text-4xl text-[#8B2323]">
              📝
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Design
            </h3>
            <p className="text-gray-600">
              Our engineers create detailed designs and specifications tailored to your needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center relative border border-gray-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#8B2323] text-white flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center text-4xl text-[#8B2323]">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Manufacturing
            </h3>
            <p className="text-gray-600">
              We produce your components using precision engineering and quality materials.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center relative border border-gray-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#8B2323] text-white flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center text-4xl text-[#8B2323]">
              ✅
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Delivery & Support
            </h3>
            <p className="text-gray-600">
              We deliver on time and provide ongoing technical support for all our products.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="w-full max-w-6xl bg-[#8B2323] rounded-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Project?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Contact our team of experts today to learn how our precision-engineered solutions can benefit your business.
        </p>
        <button className="px-8 py-3 bg-white text-[#8B2323] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-md">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
 
