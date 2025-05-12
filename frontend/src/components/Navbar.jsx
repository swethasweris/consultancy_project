import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaTools, 
  FaHome, 
  FaBoxOpen, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaInfoCircle,
  FaLaptopCode
} from "react-icons/fa";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCustomersDropdownOpen, setIsCustomersDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply light theme to document body and html
  useEffect(() => {
    // Remove any existing theme classes to start fresh
    document.documentElement.classList.remove('dark', 'light');
    document.body.classList.remove('dark', 'light', 'bg-gray-900', 'bg-white', 'text-white', 'text-gray-800');
    
    // Apply light theme classes
    document.documentElement.classList.add('light');
    document.body.classList.add('light');
    document.body.classList.add('bg-white');
    document.body.classList.add('text-gray-800');
    
    // Force all main content areas to use light theme
    const mainElements = document.querySelectorAll('main, div[class*="bg-"], section');
    mainElements.forEach(el => {
      el.classList.remove('bg-gray-900', 'text-white');
      el.classList.add('bg-white', 'text-gray-800');
    });
  }, []);

  const aboutSections = [
    { label: "About Us", id: "about-us" },
    { label: "Objective", id: "objective" },
    { label: "Choose Us", id: "choose-us" },
    { label: "Founder", id: "founder" },
  ];

  const homeSections = [
    { label: "Achievements", id: "achievements" },
    { label: "QRO proof", id: "qroproof" },
    { label: "Founder", id: "founder" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Industries", id: "industries" },
  ];

  const servicesSections = [
    { label: "Precision Machining", id: "precision-machining" },
    { label: "Industrial Automation", id: "industrial-automation" },
    { label: "Custom Design", id: "custom-design" },
    { label: "Maintenance", id: "maintenance" },
  ];

  const customersSections = [
    { label: "Testimonials", id: "testimonials" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Industries Served", id: "industries" },
  ];

  const handleScroll = (id, path) => {
    if (location.pathname !== path) {
      navigate(`${path}#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    // Close all dropdowns
    setIsDropdownOpen(false);
    setIsHomeDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsCustomersDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
      setIsHomeDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsCustomersDropdownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Prevent dropdown from closing when clicking inside it
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  // Navigation items with icons
  const navItems = [
    { name: "Products", path: "/products", icon: <FaBoxOpen className="mr-1" /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram className="mr-1" /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope className="mr-1" /> },
    { name: "Animation", path: "/animation", icon: <FaLaptopCode className="mr-1" /> },
  ];

  return (
    <nav 
      className={`flex justify-between items-center p-4 fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg" 
          : "bg-gradient-to-r from-white to-gray-100 border-b border-[#8B2323]/20"
      }`}
    >
      {/* Logo/Company Name */}
      <div 
        className="flex items-center cursor-pointer" 
        onClick={() => navigate("/home")}
      >
        <h1 className="text-2xl font-extrabold tracking-wide text-[#8B2323]">
          Vishaca Tech
        </h1>
      </div>

      <div className="space-x-4 md:space-x-6 flex items-center">
        {/* Home Dropdown */}
        <div className="relative" onClick={handleDropdownClick}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/home"); // Navigate to Home
              setIsHomeDropdownOpen(!isHomeDropdownOpen);
              setIsDropdownOpen(false);
              setIsServicesDropdownOpen(false);
              setIsCustomersDropdownOpen(false);
            }}
            className={`relative font-semibold uppercase tracking-wide transition duration-300 flex items-center ${
              location.pathname === "/home" ? "text-[#8B2323] underline" : "text-gray-800 hover:text-[#8B2323]"
            }`}
          >
            <FaHome className="mr-1" /> Home
          </button>

          {isHomeDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-44 rounded-lg shadow-lg overflow-hidden bg-white"
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              {homeSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id, "/home")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#8B2323] hover:text-white transition text-gray-800"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div className="relative" onClick={handleDropdownClick}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/services");
              setIsServicesDropdownOpen(!isServicesDropdownOpen);
              setIsHomeDropdownOpen(false);
              setIsDropdownOpen(false);
              setIsCustomersDropdownOpen(false);
            }}
            className={`relative font-semibold uppercase tracking-wide transition duration-300 flex items-center ${
              location.pathname === "/services" ? "text-[#8B2323] underline" : "text-gray-800 hover:text-[#8B2323]"
            }`}
          >
            <FaTools className="mr-1" /> Services
          </button>

          {isServicesDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-52 rounded-lg shadow-lg overflow-hidden bg-white"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              {servicesSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id, "/services")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#8B2323] hover:text-white transition text-gray-800"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Customers Dropdown */}
        <div className="relative" onClick={handleDropdownClick}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/customers");
              setIsCustomersDropdownOpen(!isCustomersDropdownOpen);
              setIsHomeDropdownOpen(false);
              setIsServicesDropdownOpen(false);
              setIsDropdownOpen(false);
            }}
            className={`relative font-semibold uppercase tracking-wide transition duration-300 flex items-center ${
              location.pathname === "/customers" ? "text-[#8B2323] underline" : "text-gray-800 hover:text-[#8B2323]"
            }`}
          >
            <FaUser className="mr-1" /> Customers
          </button>

          {isCustomersDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-44 rounded-lg shadow-lg overflow-hidden bg-white"
              onMouseEnter={() => setIsCustomersDropdownOpen(true)}
              onMouseLeave={() => setIsCustomersDropdownOpen(false)}
            >
              {customersSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id, "/customers")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#8B2323] hover:text-white transition text-gray-800"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Regular Navigation Links with Icons */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`relative font-semibold uppercase tracking-wide transition duration-300 flex items-center ${
              location.pathname === item.path ? "text-[#8B2323] underline" : "text-gray-800 hover:text-[#8B2323]"
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}

        {/* About Dropdown */}
        <div className="relative" onClick={handleDropdownClick}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/about");
              setIsDropdownOpen(!isDropdownOpen);
              setIsHomeDropdownOpen(false);
              setIsServicesDropdownOpen(false);
              setIsCustomersDropdownOpen(false);
            }}
            className={`relative font-semibold uppercase tracking-wide transition duration-300 flex items-center ${
              location.pathname.startsWith("/about") ? "text-[#8B2323] underline" : "text-gray-800 hover:text-[#8B2323]"
            }`}
          >
            <FaInfoCircle className="mr-1" /> About
          </button>

          {isDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-44 rounded-lg shadow-lg overflow-hidden bg-white"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {aboutSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id, "/about")}
                  className="block w-full text-left px-4 py-2 hover:bg-[#8B2323] hover:text-white transition text-gray-800"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
