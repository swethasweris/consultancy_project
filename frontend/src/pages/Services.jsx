import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const services = [
  { name: "Automiser Shafts", icon: "⚙️", description: "Precision-machined automiser shafts for industrial automation." },
  { name: "Spindle Lock Nuts", icon: "🔩", description: "High-quality spindle lock nuts for secure fastening." },
  { name: "Pulleys & Sleeves", icon: "🛠️", description: "Durable pulleys and sleeves for smooth power transmission." },
  { name: "Oil Throwers", icon: "🛢️", description: "Designed to prevent oil leakage in high-speed machinery." },
  { name: "Gear Motors", icon: "⚡", description: "High-efficiency gear motors for industrial applications." },
  { name: "High Temp & RPM Belts", icon: "🔥", description: "Heat-resistant belts for extreme conditions." },
  { name: "High Temp Pneumatic Cylinders", icon: "🔧", description: "Reliable pneumatic cylinders for high-temperature operations." },
  { name: "Hammers & Actuators", icon: "🔨", description: "Precision-engineered hammers and actuators for industrial use." },
  { name: "Air Heating Coils (Boiler Side)", icon: "🌡️", description: "Advanced heating coils for efficient boiler performance." },
  { name: "Finned Tubes & Cooler Tubes", icon: "❄️", description: "High-quality tubes for heat exchange applications." },
];

const enterprises = [
  "THE SALEM CO-OPERATIVE MILK PRODUCERS UNION LTD, Tamil Nadu",
  "THE ERODE CO-OPERATIVE MILK PRODUCERS UNION LTD, Tamil Nadu",
  "NANO & BIOTECH INDUSTRIES - SWAB TECHNOLOGY, Delhi",
  "ORIENTAL AQUAMARINE BIOTECH INDUSTRIES",
  "PSG IAS INSTITUTIONS, Coimbatore",
  "PSG INDUSTRIAL INSTITUTE - MEDICAL DEVICES",
  "FAB TECH INDUSTRIES, Coimbatore",
  "RI ABIRAMI ENGINEERING COMPANY, Coimbatore",
  "SRI SAKTHI INDUSTRIES, Tiruchengode",
  "SILVER CROWN INDUSTRIES, Coimbatore"
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-6">
        Our Services
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
        Vishaca Tech Engineers specializes in precision-engineered industrial solutions,
        offering high-quality products and innovative technology for various industries.
      </p>

      {/* Customers Carousel */}
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Our Valuable Customers
      </h2>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        className="w-full max-w-5xl mb-8"
      >
        {enterprises.map((enterprise, index) => (
          <div key={index} className="p-6 bg-black dark:bg-black-800 rounded-lg shadow-xl text-center h-[300px] flex justify-center items-center">
            <h3 className="text-2xl font-semibold text-white">
              {enterprise}
            </h3>
          </div>
        ))}
      </Carousel>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index} 
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-600 flex flex-col items-center transition-all group"
          >
            <span className="text-5xl">{service.icon}</span>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mt-4">
              {service.name}
            </h3>
            {/* Click Me button (Appears on Hover) */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all"
              onClick={() => setSelectedService(service)}
            >
              Click Me
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg text-center"
          >
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              {selectedService.name}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {selectedService.description}
            </p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
