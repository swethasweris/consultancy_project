import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const products = [
  { name: "Boilers & Industrial Equipment", image: "/images/ahc1.png" },
  { name: "Biomedical Instruments", image: "/images/ahc2.png" },
  { name: "Biotech & Aqua Chemicals", image: "/images/ahc3.png" },
  { name: "Food Processing Machines", image: "/images/ahc4.png" },
  { name: "Automation Systems", image: "/images/ahc5.png" },
  { name: "Energy Solutions", image: "/images/ahc6.png" },
  { name: "Boilers & Industrial Equipment", image: "/images/ahc7.png" },
  { name: "Biomedical Instruments", image: "/images/ahc8.png" },
  { name: "Biotech & Aqua Chemicals", image: "/images/ahc9.png" },
  { name: "Food Processing Machines", image: "/images/ahc10.png" },
  { name: "Automation Systems", image: "/images/ahc11.png" },
  { name: "Energy Solutions", image: "/images/ahc12.png" },
];

export default function Products() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
        Our Products
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
        Explore our range of cutting-edge engineering products.
      </p>

      {/* Masonry Grid for Images */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white text-xl font-semibold">{product.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox for Fullscreen Image View */}
      {lightboxIndex !== null && (
        <Lightbox
          slides={products.map((p) => ({ src: p.image }))}
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
        />
      )}
    </div>
  );
}
