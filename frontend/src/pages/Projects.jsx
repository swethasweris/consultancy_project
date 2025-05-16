import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// Project data
const projects = [
  {
    id: 1,
    name: "Automated Manufacturing System",
    description: "A fully automated production line for a leading automotive parts manufacturer that increased production efficiency by 35%.",
    client: "Automotive Components Ltd.",
    completionDate: "March 2023",
    category: "Industrial Automation",
    images: [
      { src: "/images/proj-1.jpeg", alt: "Control panel installation", title: "Control Panel Setup" },
      
    ],
    review: "The automated manufacturing system delivered by Vishacatech Engineers exceeded our expectations. The team's expertise in industrial automation and commitment to quality resulted in a system that not only improved our production efficiency but also reduced operational costs significantly.",
    reviewAuthor: "Rajesh Kumar, Production Manager"
  },
  {
    id: 2,
    name: "AI-Powered Robotics",
    description: "An intelligent robotic system for precision material handling in a pharmaceutical manufacturing facility.",
    client: "MediPharm Solutions",
    completionDate: "November 2022",
    category: "Robotics",
    images: [
      { src: "/images/proj-4.jpeg", alt: "Robotic arm installation", title: "Robotic Arm Setup" },
    
    ],
    review: "Vishacatech's AI-powered robotics solution transformed our material handling process. The precision and reliability of the system have been instrumental in maintaining our strict quality standards while improving operational efficiency.",
    reviewAuthor: "Dr. Priya Sharma, Technical Director"
  },
  {
    id: 2,
    name: "AI-Powered Robotics",
    description: "An intelligent robotic system for precision material handling in a pharmaceutical manufacturing facility.",
    client: "MediPharm Solutions",
    completionDate: "November 2022",
    category: "Robotics",
    images: [
      { src: "/images/proj-3.jpeg", alt: "Robotic arm installation", title: "Robotic Arm Setup" },
    
    ],
    review: "Vishacatech's AI-powered robotics solution transformed our material handling process. The precision and reliability of the system have been instrumental in maintaining our strict quality standards while improving operational efficiency.",
    reviewAuthor: "Dr. Priya Sharma, Technical Director"
  },
 
  // Other projects can be added here...
];

export default function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open project details
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to open lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      {/* Title Section */}
      <motion.section
        className="w-full bg-[#8B2323] text-white py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Project Reviews</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Explore our successful project implementations and see how we've helped our clients achieve their engineering goals with precision and excellence.
          </p>
        </div>
      </motion.section>

      {/* Project Review Gallery - Achievement Style */}
      <motion.section
        className="py-16 px-4 w-full bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#8B2323] text-center">Project Process</h2>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700 text-center">
            Our engineering excellence is showcased through these successful project implementations. Each image represents our commitment to quality and precision.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => openLightbox(0)}
            >
              <img 
                src="/images/planning-phase.jpg" 
                alt="Project Review 1" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B2323] bg-opacity-80 text-white p-3">
                <h3 className="font-semibold">Project Phase 1</h3>
                <p className="text-sm">Initial Setup & Planning</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => openLightbox(1)}
            >
              <img 
                src="/images/assembly.jpg" 
                alt="Project Review 2" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B2323] bg-opacity-80 text-white p-3">
                <h3 className="font-semibold">Project Phase 2</h3>
                <p className="text-sm">Component Assembly</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => openLightbox(2)}
            >
              <img 
                src="/images/testing.webp" 
                alt="Project Review 3" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B2323] bg-opacity-80 text-white p-3">
                <h3 className="font-semibold">Project Phase 3</h3>
                <p className="text-sm">Testing & Calibration</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => openLightbox(3)}
            >
              <img 
                src="/images/implementation.png" 
                alt="Project Review 4" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B2323] bg-opacity-80 text-white p-3">
                <h3 className="font-semibold">Project Phase 4</h3>
                <p className="text-sm">Final Implementation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Metrics - Achievement Style */}
      <motion.section
        className="py-16 px-4 w-full bg-[#F9F9F9]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#8B2323] text-center">Project Success Metrics</h2>
          <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700 text-center">
            Our projects have consistently delivered exceptional results for our clients, driving efficiency and innovation across industries.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl font-bold mb-4">35%</div>
              <p className="text-gray-700 font-medium">Average Efficiency Increase</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl font-bold mb-4">98%</div>
              <p className="text-gray-700 font-medium">Client Satisfaction Rate</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl font-bold mb-4">40+</div>
              <p className="text-gray-700 font-medium">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <div className="text-[#8B2323] text-4xl font-bold mb-4">28%</div>
              <p className="text-gray-700 font-medium">Average Cost Reduction</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects List */}
      {!selectedProject && (
        <motion.section
          className="py-16 px-4 w-full bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-[#8B2323] text-center">Our Featured Projects Reviews</h2>
            <div className="w-24 h-1 bg-[#8B2323] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700 text-center">
              Explore our portfolio of successful projects that showcase our engineering expertise and commitment to excellence.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.images[0].src}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xl font-semibold px-4 text-center">View Project Details</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-[#8B2323] mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500">{project.category}</span>
                      <span className="text-xs font-medium text-gray-500">{project.completionDate}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Selected Project Details */}
      {selectedProject && (
        <motion.section
          className="py-16 px-4 w-full bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto">
            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row">
                {/* Project Main Image */}
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img
                    src={selectedProject.images[0].src}
                    alt={selectedProject.images[0].alt}
                    className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                    onClick={() => {
                      setLightboxIndex(0);
                      setLightboxOpen(true);
                    }}
                  />
                  
                  {/* Project Image Gallery */}
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {selectedProject.images.map((image, idx) => (
                      <img
                                                key={idx}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-20 object-cover rounded-md shadow-sm cursor-pointer hover:opacity-80 transition"
                        onClick={() => {
                          setLightboxIndex(idx);
                          setLightboxOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold text-[#8B2323] mb-4">
                    {selectedProject.name}
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">
                      {selectedProject.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800">Client</h4>
                        <p className="text-gray-600">{selectedProject.client}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Completion Date</h4>
                        <p className="text-gray-600">{selectedProject.completionDate}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Category</h4>
                        <p className="text-gray-600">{selectedProject.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client Review */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#8B2323]">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Review</h3>
                    <p className="text-gray-600 italic mb-2">"{selectedProject.review}"</p>
                    <p className="text-right text-sm font-medium text-[#8B2323]">- {selectedProject.reviewAuthor}</p>
                  </div>
                  
                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                  >
                    ← Back to All Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Call to Action */}
      <motion.section
        className="py-16 px-4 w-full bg-[#8B2323] text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Contact our team of experts today to discuss your engineering requirements and explore how we can help you achieve your goals.
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-[#8B2323] rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = '/contact'}
          >
            Request a Consultation
          </motion.button>
        </div>
      </motion.section>

      {/* Lightbox for Project Review Images */}
      <Lightbox
        slides={[
          { src: "/images/proj-1.jpg", alt: "Project Phase 1", title: "Initial Setup & Planning" },
          { src: "/images/proj-2.jpg", alt: "Project Phase 2", title: "Component Assembly" },
          { src: "/images/proj-3.jpg", alt: "Project Phase 3", title: "Testing & Calibration" },
          { src: "/images/proj-4.jpg", alt: "Project Phase 4", title: "Final Implementation" }
        ]}
        open={lightboxOpen && !selectedProject}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex || 0}
        plugins={[Thumbnails, Zoom, Captions]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center"
        }}
      />

      {/* Lightbox for Selected Project Images */}
      {selectedProject && (
        <Lightbox
          slides={selectedProject.images.map((img) => ({ 
            src: img.src,
            alt: img.alt,
            title: img.title
          }))}
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex || 0}
          plugins={[Thumbnails, Zoom, Captions]}
          thumbnails={{
            position: "bottom",
            width: 120,
            height: 80
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2
          }}
          captions={{
            showToggle: true,
            descriptionTextAlign: "center"
          }}
        />
      )}
    </div>
  );
}
