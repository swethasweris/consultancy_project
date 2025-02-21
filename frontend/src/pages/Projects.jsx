import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Sample project data (Replace with actual images & descriptions)
const projects = [
  { name: "Automated Manufacturing System", image: "/images/ahc1.png" },
  { name: "AI-Powered Robotics", image: "/images/ahc1.png" },
  { name: "Renewable Energy Plant", image: "/images/ahc1.png" },
  { name: "Industrial IoT Solutions", image: "/images/ahc1.png" },
  { name: "Smart Automation System", image: "/images/ahc1.png" },
  { name: "Biomedical Equipment Design", image: "/images/ahc1.png" },
];

export default function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Our Projects
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
        Explore some of the innovative projects successfully executed by Vishaca Tech Engineers.
      </p>

      {/* Masonry Grid for Projects */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white text-xl font-semibold">{project.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox for Fullscreen Image View */}
      {lightboxIndex !== null && (
        <Lightbox
          slides={projects.map((p) => ({ src: p.image }))}
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
        />
      )}
    </div>
  );
}
