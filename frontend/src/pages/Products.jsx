
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Product categories for the sidebar
const categories = [
  "All Products",
  "Critical Machined Items",
  "Gasket and Rings",
  "Gears",
  "Machined Items",
  "Non Metallic Items",
  "PP and Acrylic Tanks",
  "SS316 Fabrication Items"
];
// Products array with categories
const products = [
  { 
    name: "Spindle lock nuts", 
    category: "Critical Machined Items",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.53.38_2b8a2650.jpg",
      
    ],
    description: "High-efficiency industrial boilers and equipment designed for maximum performance and energy savings. Our boilers are built with premium materials and advanced technology to ensure longevity and reliability in demanding industrial environments."
  },
  { 
    name: "mini hole nuts", 
    category: "Critical Machined Items",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.53.39_eadc3dc2.jpg",
      
    ],
    description: "Precision biomedical instruments for healthcare facilities and research laboratories. Our instruments are calibrated to the highest standards, providing accurate measurements and reliable performance for critical medical applications."
  },
  { 
    name: "industrial lock", 
    category: "Critical Machined Items",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.53.40_5cf8e26a.jpg",
      
    ],
    description: "Specialized chemicals for biotechnology applications and water treatment solutions. Our chemical formulations are developed by expert chemists to meet specific industry requirements while maintaining environmental compliance."
  },
  { 
    name: "Fitted locks", 
    category: "Critical Machined Items",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.53.40_8f920d53.jpg",
      
    ],
    description: "State-of-the-art food processing equipment designed for efficiency and hygiene. Our machines incorporate the latest technology to optimize production processes while maintaining food safety standards."
  },
  { 
    name: "tighter", 
    category: "Critical Machined Items",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.53.41_46e88617.jpg",
      
    ],
    description: "Comprehensive automation solutions to streamline industrial processes and increase productivity. Our systems integrate seamlessly with existing infrastructure to provide intelligent control and monitoring capabilities."
  },
  { 
    name: "machine rings", 
    category: "Gasket and Rings",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.24.54_c98c2f6d.jpg",
      
    ],
    description: "Comprehensive automation solutions to streamline industrial processes and increase productivity. Our systems integrate seamlessly with existing infrastructure to provide intelligent control and monitoring capabilities."
  },
  { 
    name: "medium size rings", 
    category: "Gasket and Rings",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.24.57_9a1bc9c9.jpg",
      
    ],
    description: "Comprehensive automation solutions to streamline industrial processes and increase productivity. Our systems integrate seamlessly with existing infrastructure to provide intelligent control and monitoring capabilities."
  },
  { 
    name: "100 mm gaskets", 
    category: "Gasket and Rings",
    images: [
      "/images/WhatsApp Image 2025-04-09 at 23.45.19_f85d6abc.jpg",
      
    ],
    description: "Comprehensive automation solutions to streamline industrial processes and increase productivity. Our systems integrate seamlessly with existing infrastructure to provide intelligent control and monitoring capabilities."
  },
  { 
    name: "pipe gears", 
    category: "Gears",
    images: [
      "/images/IMG-20250409-WA0003.jpg",
      
    ],
    description: "Innovative energy management systems and renewable energy technologies. Our solutions help businesses reduce their carbon footprint while optimizing energy consumption and reducing operational costs."
  },
  { 
    name: "Mini gears", 
    category: "Gears",
    images: [
      "/images/IMG-20250409-WA0004.jpg",
      
    ],
    description: "Innovative energy management systems and renewable energy technologies. Our solutions help businesses reduce their carbon footprint while optimizing energy consumption and reducing operational costs."
  },
  { 
    name: "Long gears", 
    category: "Gears",
    images: [
      "/images/IMG-20250409-WA0005.jpg",
      
    ],
    description: "Innovative energy management systems and renewable energy technologies. Our solutions help businesses reduce their carbon footprint while optimizing energy consumption and reducing operational costs."
  },
  
  
  { 
    name: "Industrial Heating Systems", 
    category: "Machined Items",
    images: [
      "/images/ahc7.png",
      
    ],
    description: "Advanced industrial heating systems designed for various manufacturing processes. Our heating solutions provide precise temperature control and energy efficiency for optimal production outcomes."
  },
  { 
    name: "Laboratory Equipment", 
    category: "PP and Acrylic Tanks",
    images: [
      "/images/ahc8.png",
      
    ],
    description: "High-precision laboratory equipment for research and quality control applications. Our instruments are designed to meet the exacting standards required in modern scientific and industrial laboratories."
  },
  { 
    name: "Water Treatment Systems", 
    category: "SS316 Fabrication Items",
    images: [
      "/images/ahc9.png",
      
    ],
    description: "Comprehensive water treatment solutions for industrial and municipal applications. Our systems effectively remove contaminants and ensure water quality meets or exceeds regulatory requirements."
  },
 
  { 
    name: "Control Systems", 
    category: "Gasket and Rings",
    images: [
      "/images/ahc11.png",
      
    ],
    description: "Sophisticated control systems for industrial automation and process management. Our solutions provide real-time monitoring and precise control capabilities to optimize operations and ensure product quality."
  },
  { 
    name: "Sustainable Technologies", 
    category: "Gasket and Rings",
    images: [
      "/images/ahc12.png",
      
    ],
    description: "Environmentally friendly technologies designed to reduce resource consumption and minimize environmental impact. Our sustainable solutions help businesses meet their environmental goals while maintaining operational efficiency."
  },
];

export default function VtepProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === "All Products") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // Reset to first image when opening product details
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
      );
    }
  };

  const openLightbox = (productIndex, imageIndex) => {
    // Calculate the absolute index for the lightbox
    const product = filteredProducts[productIndex];
    const allProductsIndex = products.findIndex(p => p.name === product.name);
    
    let absoluteIndex = 0;
    for (let i = 0; i < allProductsIndex; i++) {
      absoluteIndex += products[i].images.length;
    }
    absoluteIndex += imageIndex;
    
    setLightboxIndex(absoluteIndex);
  };

  // Flatten all images for the lightbox
  const allImages = products.flatMap(product => product.images);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

   // Function to download product information as PDF
   const downloadProductBrochure = () => {
    if (!selectedProduct) return;
    
    const doc = new jsPDF();
    
    // Add company logo or header
    doc.setFontSize(22);
    doc.setTextColor(139, 69, 19); // #8B4513 in RGB
    doc.text("VTEP Engineering", 105, 20, { align: "center" });
    
    // Add product name
    doc.setFontSize(18);
    doc.text(selectedProduct.name, 105, 40, { align: "center" });
    
    // Add category
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Category: ${selectedProduct.category}`, 105, 50, { align: "center" });
    
    // Add horizontal line
    doc.setDrawColor(222, 184, 135); // #DEB887 in RGB
    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);
    
    // Add description title
    doc.setFontSize(14);
    doc.setTextColor(139, 69, 19); // #8B4513 in RGB
    doc.text("Product Description", 20, 65);
    
    // Add description text with word wrapping
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const splitDescription = doc.splitTextToSize(selectedProduct.description, 170);
    doc.text(splitDescription, 20, 75);
    
    // Add specifications
    const yPos = 75 + (splitDescription.length * 7);
    doc.setFontSize(14);
    doc.setTextColor(139, 69, 19); // #8B4513 in RGB
    doc.text("Technical Specifications", 20, yPos);
    
    // Add specification items
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("• High-quality materials for durability", 25, yPos + 10);
    doc.text("• Precision engineering for optimal performance", 25, yPos + 20);
    doc.text("• Compliant with industry standards", 25, yPos + 30);
    doc.text("• Available in custom configurations", 25, yPos + 40);
    
    // Add contact information
    doc.setFontSize(14);
    doc.setTextColor(139, 69, 19); // #8B4513 in RGB
    doc.text("Contact Information", 20, yPos + 60);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("For more information about this product, please contact:", 20, yPos + 70);
    doc.text("Email: vishacatechengineers@gmail.com", 20, yPos + 80);
    doc.text("Phone: +91  73977 44944", 20, yPos + 90);
    doc.text("Website: vishacatech.com", 20, yPos + 100);
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("© VTEP Engineering. All rights reserved.", 105, 280, { align: "center" });
    
    // Try to add product image if available
    if (selectedProduct.images && selectedProduct.images.length > 0) {
      // We'll need to load the image first
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = selectedProduct.images[currentImageIndex];
      
      img.onload = function() {
        try {
          // Create a canvas to draw the image
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          
          // Set canvas dimensions
          const imgWidth = 100;
          const imgHeight = 100;
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          
          // Draw image on canvas
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
          const imageYPosition = yPos + 120;
          
          const imgData = canvas.toDataURL("image/jpeg", 0.8);
      doc.addImage(imgData, "JPEG", 105 - (imgWidth/2), imageYPosition, imgWidth, imgHeight);
      
      // Add a caption below the image
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Product Image", 105, imageYPosition + imgHeight + 10, { align: "center" });
          // Save the PDF
          doc.save(`${selectedProduct.name.replace(/\s+/g, '_')}_brochure.pdf`);
        } catch (error) {
          console.error("Error adding image to PDF:", error);
          // Save PDF without image if there's an error
          doc.save(`${selectedProduct.name.replace(/\s+/g, '_')}_brochure.pdf`);
        }
      };
      
      img.onerror = function() {
        console.error("Error loading image");
        // Save PDF without image if there's an error
        doc.save(`${selectedProduct.name.replace(/\s+/g, '_')}_brochure.pdf`);
      };
    } else {
      // Save PDF without image
      doc.save(`${selectedProduct.name.replace(/\s+/g, '_')}_brochure.pdf`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-[#8B4513] text-white p-2 rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Navigation */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-40 w-64 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <div className="p-5 h-full">
          <h2 className="text-xl font-bold text-[#8B4513] mb-6">
            Product Categories
          </h2>
          <nav className="h-full">
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-[#F5DEB3] text-[#8B4513] font-medium'
                        : 'text-gray-700 hover:bg-[#FFF8DC]'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      if (window.innerWidth < 768) {
                        setIsSidebarOpen(false);
                      }
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-4 md:p-8 md:ml-0">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mt-8 mb-4">
          {selectedCategory}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl text-center mb-8 px-4">
          Explore our range of cutting-edge engineering products.
        </p>

        {/* Product List */}
        {filteredProducts.length > 0 ? (
          <div className="w-full max-w-5xl">
            <div className="space-y-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-[#DEB887]"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#A0522D] mb-4">
                        {product.category}
                      </p>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {product.description}
                      </p>
                      <button
                        onClick={() => openProductDetails(product)}
                        className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-medium py-2 px-4 rounded-md transition duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700">No products found</h3>
            <p className="text-gray-500 mt-2">We couldn't find any products in this category.</p>
          </div>
        )}
      </div>

      {/* Product Details Modal with Image Gallery */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#8B4513]">
                    {selectedProduct.name}
                    </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Category: {selectedProduct.category}
                  </p>
                </div>
                <button 
                  onClick={closeProductDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  {/* Image Gallery with Navigation Arrows */}
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={selectedProduct.images[currentImageIndex]} 
                      alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-auto object-cover cursor-pointer"
                      onClick={() => {
                        const productIndex = filteredProducts.findIndex(p => p.name === selectedProduct.name);
                        openLightbox(productIndex, currentImageIndex);
                      }}
                    />
                    
                    {/* Left Arrow */}
                    <button 
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-r-lg transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {/* Right Arrow */}
                    <button 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-l-lg transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                      {currentImageIndex + 1} / {selectedProduct.images.length}
                    </div>
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div className="flex mt-3 space-x-2 overflow-x-auto pb-2">
                    {selectedProduct.images.map((image, idx) => (
                      <div 
                        key={idx}
                        className={`w-16 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${
                          idx === currentImageIndex ? 'border-[#8B4513]' : 'border-transparent'
                        }`}
                        onClick={() => setCurrentImageIndex(idx)}
                      >
                        <img 
                          src={image} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-2 italic">Click image to view in fullscreen</p>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-700">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                
                
                <button 
                  className="bg-[#F5DEB3] hover:bg-[#DEB887] text-[#8B4513] font-bold py-2 px-4 rounded transition duration-300 flex items-center"
                  onClick={downloadProductBrochure}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Brochure
                </button>
              </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Technical Specifications</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>High-quality materials for durability</li>
                        <li>Precision engineering for optimal performance</li>
                        <li>Compliant with industry standards</li>
                        <li>Available in custom configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Fullscreen Image View */}
      {lightboxIndex !== null && (
        <Lightbox
          slides={allImages.map((src) => ({ src }))}
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
        />
      )}

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

