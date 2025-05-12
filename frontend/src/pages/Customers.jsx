import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Combined list of customers and suppliers
const partners = [
  {
    type: "Customer",
    name: "THE SALEM CO-OPERATIVE MILK PRODUCERS UNION LTD, Tamil Nadu",
    industry: "Food & Dairy",
    description: "Leading dairy cooperative focused on milk processing and distribution."
  },
  {
    type: "Customer",
    name: "THE ERODE CO-OPERATIVE MILK PRODUCERS UNION LTD, Tamil Nadu",
    industry: "Food & Dairy",
    description: "Regional dairy cooperative specializing in milk products and processing."
  },
  {
    type: "Customer",
    name: "NANO & BIOTECH INDUSTRIES - SWAB TECHNOLOGY, Delhi",
    industry: "Biotechnology",
    description: "Innovative biotech company developing advanced swab technologies."
  },
  {
    type: "Customer",
    name: "ORIENTAL AQUAMARINE BIOTECH INDUSTRIES",
    industry: "Aqua & Biotech",
    description: "Specializes in aquaculture and biotechnology solutions."
  },
  {
    type: "Customer",
    name: "PSG IAS INSTITUTIONS, Coimbatore",
    industry: "Education",
    description: "Premier educational institution focused on engineering and technology."
  },
  {
    type: "Customer",
    name: "PSG INDUSTRIAL INSTITUTE - MEDICAL DEVICES",
    industry: "Medical",
    description: "Develops cutting-edge medical devices and healthcare solutions."
  },
  {
    type: "Customer",
    name: "FAB TECH INDUSTRIES, Coimbatore",
    industry: "Manufacturing",
    description: "Specializes in fabrication and technical manufacturing solutions."
  },
  {
    type: "Customer",
    name: "RI ABIRAMI ENGINEERING COMPANY, Coimbatore",
    industry: "Engineering",
    description: "Provides comprehensive engineering services and solutions."
  },
  {
    type: "Customer",
    name: "SRI SAKTHI INDUSTRIES, Tiruchengode",
    industry: "Manufacturing",
    description: "Manufactures precision components for various industries."
  },
  {
    type: "Customer",
    name: "SILVER CROWN INDUSTRIES, Coimbatore",
    industry: "Manufacturing",
    description: "Specializes in high-quality industrial manufacturing."
  },
  {
    type: "Supplier",
    name: "SEW EURO DRIVES, Chennai",
    industry: "Motors & Drives",
    description: "Leading supplier of industrial motors and drive systems."
  },
  {
    type: "Supplier",
    name: "STARK MOTORS",
    industry: "Motors & Automation",
    description: "Provides advanced motor solutions and automation components."
  },
  {
    type: "Supplier",
    name: "SHANTHANALAKSHIMI METALS, Coimbatore",
    industry: "Metal Manufacturing",
    description: "Supplies high-quality metal components and materials."
  },
  {
    type: "Supplier",
    name: "RAM METALS, Coimbatore",
    industry: "Metal Manufacturing",
    description: "Specializes in custom metal fabrication and supply."
  },
  {
    type: "Supplier",
    name: "RJ STEELS, Coimbatore",
    industry: "Steel Manufacturing",
    description: "Premium steel supplier for industrial applications."
  },
  {
    type: "Supplier",
    name: "J ENGINEERING, Coimbatore",
    industry: "Engineering Services",
    description: "Provides specialized engineering services and components."
  },
  {
    type: "Supplier",
    name: "GHANSYAM PLAST INDUSTRIES, Coimbatore",
    industry: "Plastic Manufacturing",
    description: "Manufactures custom plastic components for industrial use."
  },
  {
    type: "Supplier",
    name: "SEAL ENGINEERING, Coimbatore",
    industry: "Engineering Services",
    description: "Specializes in sealing solutions and engineering services."
  },
  {
    type: "Supplier",
    name: "METALTUBES & PIPES, Chennai",
    industry: "Metal Products",
    description: "Supplies industrial metal tubes and pipes for various applications."
  },
  {
    type: "Supplier",
    name: "PETROCHIMICAL EQUIPEMENTS CO, Chennai",
    industry: "Petrochemical",
    description: "Provides specialized equipment for the petrochemical industry."
  }
];

// Industry icons mapping using Font Awesome
const industryIcons = {
  "Food & Dairy": "fa-cheese",
  "Biotechnology": "fa-microscope",
  "Aqua & Biotech": "fa-water",
  "Education": "fa-graduation-cap",
  "Medical": "fa-stethoscope",
  "Manufacturing": "fa-industry",
  "Engineering": "fa-cogs",
  "Motors & Drives": "fa-bolt",
  "Motors & Automation": "fa-robot",
  "Metal Manufacturing": "fa-hammer",
  "Steel Manufacturing": "fa-cubes",
  "Engineering Services": "fa-tools",
  "Plastic Manufacturing": "fa-recycle",
  "Metal Products": "fa-stream",
  "Petrochemical": "fa-oil-can"
};

export default function Customers() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [highlightedIndustries, setHighlightedIndustries] = useState([]);
  const [networkView, setNetworkView] = useState(false);
  const navigate = useNavigate();
  
  // Filter partners based on active tab and search term
  const filteredPartners = partners.filter(partner => {
    const matchesTab = activeTab === "all" || partner.type.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          partner.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = highlightedIndustries.length === 0 || 
                           highlightedIndustries.includes(partner.industry);
    return matchesTab && matchesSearch && matchesIndustry;
  });

  // Get unique industries
  const industries = [...new Set(partners.map(partner => partner.industry))];
  
  // Get featured customers for the rotating showcase
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const customers = partners.filter(partner => partner.type === "Customer");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % customers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [customers.length]);

  // Toggle industry filter
  const toggleIndustry = (industry) => {
    if (highlightedIndustries.includes(industry)) {
      setHighlightedIndustries(prev => prev.filter(i => i !== industry));
    } else {
      setHighlightedIndustries(prev => [...prev, industry]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl"
      >
        {/* Hero Section */}
        <div className="relative w-full h-80 mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-[#8B2323] to-[#A52A2A]">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full flex flex-wrap justify-center items-center">
              {partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="text-white text-opacity-30 text-xs m-2 whitespace-nowrap overflow-hidden"
                  style={{
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: Math.random() * 0.5 + 0.2
                  }}
                >
                  {partner.name.split(' ')[0]}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Business Network
            </h1>
            <p className="text-xl text-white/90 max-w-xl">
              Discover the trusted partners that help us deliver exceptional products and services to our valued customers.
            </p>
          </div>
        </div>

        {/* Featured Customer Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#8B2323] mb-8 text-center">
            Featured Partners
          </h2>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
           
          </motion.div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-md p-1 flex">
            <button
              onClick={() => setNetworkView(false)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                !networkView ? 'bg-[#8B2323] text-white' : 'text-gray-700'
              }`}
            >
              <i className="fas fa-list-ul mr-2"></i>
              List View
            </button>
            <button
              onClick={() => setNetworkView(true)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                networkView ? 'bg-[#8B2323] text-white' : 'text-gray-700'
              }`}
            >
              <i className="fas fa-project-diagram mr-2"></i>
              Network View
            </button>
          </div>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                                ${activeTab === "all"
                  ? 'bg-[#8B2323] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-[#8B2323] hover:bg-[#8B2323]/10'}`}
            >
              All Partners
            </button>
            <button
              onClick={() => setActiveTab("customer")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${activeTab === "customer"
                  ? 'bg-[#8B2323] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-[#8B2323] hover:bg-[#8B2323]/10'}`}
            >
              Customers
            </button>
            <button
              onClick={() => setActiveTab("supplier")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${activeTab === "supplier"
                  ? 'bg-[#8B2323] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-[#8B2323] hover:bg-[#8B2323]/10'}`}
            >
              Suppliers
            </button>
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search partners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-gray-300
                        bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8B2323]"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Industry Filter Pills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter by Industry:</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, idx) => (
              <button
                key={idx}
                onClick={() => toggleIndustry(industry)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  highlightedIndustries.includes(industry)
                    ? 'bg-[#8B2323] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`fas ${industryIcons[industry] || 'fa-building'} mr-1`}></i>
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Network View */}
        {networkView ? (
          <div className="mb-16 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#8B2323] mb-6 text-center">
              Business Network Visualization
            </h2>
            
            <div className="relative h-[600px] bg-gray-50 rounded-lg overflow-hidden">
              {/* Central Node - Vishacatech */}
              <div className="absolute top-1/2 left-1/2 bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-[#8B2323] flex items-center justify-center text-white shadow-lg z-20 relative">
                  <div className="text-center">
                    <i className="fas fa-building text-2xl mb-1"></i>
                    <div className="font-bold">Vishacatech</div>
                    <div className="text-xs">Engineers</div>
                  </div>
                </div>
                
                {/* Connection Lines */}
                <div className="absolute inset-0 w-32 h-32">
                  {filteredPartners.map((partner, idx) => {
                    const angle = (idx * (360 / filteredPartners.length)) * (Math.PI / 180);
                    const x = Math.cos(angle) * 180;
                    const y = Math.sin(angle) * 180;
                    
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 0.5, delay: idx * 0.03 }}
                        className={`absolute top-1/2 left-1/2 w-[1px] bg-${partner.type === "Customer" ? "[#8B2323]" : "[#A52A2A]"} z-10`}
                        style={{
                          height: '180px',
                          transformOrigin: 'top',
                          transform: `rotate(${angle * (180 / Math.PI)}deg)`
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* Partner Nodes */}
              {filteredPartners.map((partner, idx) => {
                const angle = (idx * (360 / filteredPartners.length)) * (Math.PI / 180);
                const radius = 220;
                const x = Math.cos(angle) * radius + 50;
                const y = Math.sin(angle) * radius + 50;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="absolute cursor-pointer"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setSelectedPartner(partner)}
                  >
                    <div className={`w-16 h-16 rounded-full ${
                      partner.type === "Customer" ? "bg-[#8B2323]/20" : "bg-[#A52A2A]/20"
                    } flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}>
                      <div className="text-center">
                        <i className={`fas ${industryIcons[partner.industry] || 'fa-building'} ${
                          partner.type === "Customer" ? "text-[#8B2323]" : "text-[#A52A2A]"
                        }`}></i>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap">
                      <div className={`text-xs font-semibold ${
                        partner.type === "Customer" ? "text-[#8B2323]" : "text-[#A52A2A]"
                      }`}>
                        {partner.name.split(',')[0]}
                      </div>
                      <div className="text-[10px] text-gray-500">{partner.industry}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-[#8B2323]/20 mr-2"></div>
                <span className="text-sm text-gray-700">Customers</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-[#A52A2A]/20 mr-2"></div>
                <span className="text-sm text-gray-700">Suppliers</span>
              </div>
            </div>
          </div>
        ) : (
          /* List View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 cursor-pointer"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className={`h-16 ${
                  partner.type === "Customer" 
                    ? "bg-gradient-to-r from-[#8B2323]/20 to-[#8B2323]/5" 
                    : "bg-gradient-to-r from-[#A52A2A]/20 to-[#A52A2A]/5"
                } flex items-center justify-center`}>
                  <i className={`fas ${industryIcons[partner.industry] || 'fa-building'} text-3xl ${
                    partner.type === "Customer" ? "text-[#8B2323]" : "text-[#A52A2A]"
                  }`}></i>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      partner.type === "Customer"
                        ? "bg-[#8B2323]/10 text-[#8B2323]"
                        : "bg-[#A52A2A]/10 text-[#A52A2A]"
                    }`}>
                      {partner.type}
                    </span>
                    <span className="text-sm text-gray-500">{partner.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Partner Detail Modal */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className={`h-32 ${
                selectedPartner.type === "Customer" 
                  ? "bg-gradient-to-r from-[#8B2323] to-[#8B2323]/80" 
                  : "bg-gradient-to-r from-[#A52A2A] to-[#A52A2A]/80"
              } relative`}>
                <button 
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setSelectedPartner(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                <div className="absolute -bottom-10 left-8">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <i className={`fas ${industryIcons[selectedPartner.industry] || 'fa-building'} text-4xl ${
                      selectedPartner.type === "Customer" ? "text-[#8B2323]" : "text-[#A52A2A]"
                    }`}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-8 pt-14">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedPartner.type === "Customer"
                        ? "bg-[#8B2323]/10 text-[#8B2323]"
                        : "bg-[#A52A2A]/10 text-[#A52A2A]"
                    }`}>
                      {selectedPartner.type}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">
                      {selectedPartner.name}
                    </h2>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {selectedPartner.industry}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                  <p className="text-gray-600">
                    {selectedPartner.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Partnership Details</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Partnership Type</div>
                        <div className="font-medium text-gray-800">
                          {selectedPartner.type === "Customer" ? "Client Relationship" : "Supply Chain Partner"}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Industry Focus</div>
                        <div className="font-medium text-gray-800">{selectedPartner.industry}</div>
                        </div>
                        <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium text-gray-800">
                          {selectedPartner.name.includes(',') ? selectedPartner.name.split(',')[1].trim() : 'Tamil Nadu, India'}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Relationship Since</div>
                        <div className="font-medium text-gray-800">2018</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Collaboration Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.type === "Customer" ? (
                      <>
                        <span className="px-3 py-1 bg-[#8B2323]/10 text-[#8B2323] rounded-full text-sm">Precision Engineering</span>
                        <span className="px-3 py-1 bg-[#8B2323]/10 text-[#8B2323] rounded-full text-sm">Custom Solutions</span>
                        <span className="px-3 py-1 bg-[#8B2323]/10 text-[#8B2323] rounded-full text-sm">Technical Support</span>
                      </>
                    ) : (
                      <>
                        <span className="px-3 py-1 bg-[#A52A2A]/10 text-[#A52A2A] rounded-full text-sm">Material Supply</span>
                        <span className="px-3 py-1 bg-[#A52A2A]/10 text-[#A52A2A] rounded-full text-sm">Component Manufacturing</span>
                        <span className="px-3 py-1 bg-[#A52A2A]/10 text-[#A52A2A] rounded-full text-sm">Quality Assurance</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <button 
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setSelectedPartner(null)}
                  >
                    Close
                  </button>
                  
                  <button 
                    className={`px-4 py-2 rounded-lg text-white ${
                      selectedPartner.type === "Customer" ? "bg-[#8B2323]" : "bg-[#A52A2A]"
                    } hover:opacity-90 transition-opacity`}
                    onClick={() => {
                      setSelectedPartner(null);
                      navigate("/contact");
                    }}
                  >
                    Contact About {selectedPartner.type === "Customer" ? "Services" : "Partnership"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Industry Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#8B2323] mb-8 text-center">
            Industry Breakdown
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Industry Reach</h3>
                <p className="text-gray-600 mb-6">
                  Vishacatech Engineers has established strong partnerships across various industries, providing specialized engineering solutions tailored to each sector's unique requirements.
                </p>
                
                <div className="space-y-4">
                  {Object.entries(
                    partners.reduce((acc, partner) => {
                      acc[partner.industry] = (acc[partner.industry] || 0) + 1;
                      return acc;
                    }, {})
                  )
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 5)
                    .map(([industry, count], idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#8B2323]/10 flex items-center justify-center mr-3">
                          <i className={`fas ${industryIcons[industry] || 'fa-building'} text-[#8B2323]`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-gray-800">{industry}</span>
                            <span className="text-sm text-gray-500">{count} partners</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#8B2323] h-2 rounded-full" 
                              style={{ width: `${(count / partners.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Partner Distribution</h3>
                
                <div className="flex items-center justify-center h-64">
                  <div className="relative w-48 h-48">
                    {/* Donut chart visualization */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#8B2323"
                        strokeWidth="20"
                        strokeDasharray={`${(customers.length / partners.length) * 251.2} 251.2`}
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#A52A2A"
                        strokeWidth="20"
                        strokeDasharray={`${(partners.filter(p => p.type === "Supplier").length / partners.length) * 251.2} 251.2`}
                        strokeDashoffset={`-${(customers.length / partners.length) * 251.2}`}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">{partners.length}</div>
                        <div className="text-sm text-gray-500">Total Partners</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-around mt-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#8B2323] mr-2"></div>
                      <span className="text-sm text-gray-700">Customers</span>
                    </div>
                    <div className="text-2xl font-bold text-[#8B2323]">{customers.length}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#A52A2A] mr-2"></div>
                      <span className="text-sm text-gray-700">Suppliers</span>
                    </div>
                    <div className="text-2xl font-bold text-[#A52A2A]">
                      {partners.filter(p => p.type === "Supplier").length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between mb-16 border border-gray-200">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Interested in becoming our partner?
            </h2>
            <p className="text-gray-600">
              Join our network of trusted businesses and grow together with us.
            </p>
          </div>
          <button 
            className="px-8 py-3 bg-[#8B2323] hover:bg-[#A52A2A] text-white rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
            onClick={() => navigate("/contact")}
          >
            Contact Us Today
          </button>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#8B2323] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                How can I become a partner with Vishacatech?
              </h3>
              <p className="text-gray-600">
                To become a partner, please reach out to our business development team through our contact page. We'll schedule a meeting to discuss potential collaboration opportunities and how we can work together.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                What types of businesses do you typically partner with?
              </h3>
              <p className="text-gray-600">
                We partner with a diverse range of businesses across various industries, including manufacturing, biotechnology, food processing, education, and more. We value partners who share our commitment to quality and innovation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Do you offer exclusive partnerships?
              </h3>
              <p className="text-gray-600">
                Yes, we do offer exclusive partnership arrangements in certain cases. These are evaluated on a case-by-case basis depending on the industry, market reach, and strategic alignment between our organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#8B2323] rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Network</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Whether you're looking to become a customer, supplier, or strategic partner, we're interested in exploring how we can create value together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 bg-white text-[#8B2323] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-md"
              onClick={() => navigate("/contact")}
            >
              Become a Partner
            </button>
            <button 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#8B2323] transition-colors duration-300 transform hover:scale-105 shadow-md"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
