import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
  ];

  const handleScroll = (id, path) => {
    if (location.pathname !== path) {
      navigate(`${path}#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsDropdownOpen(false);
    setIsHomeDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-900 dark:to-gray-800 shadow-lg fixed w-full top-0 left-0 z-50">
      <h1 className="text-2xl font-extrabold text-white tracking-wide">Vishaca Tech</h1>

      <div className="space-x-6 flex items-center">
        {/* Home Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              navigate("/home"); // Navigate to Home
              setIsHomeDropdownOpen(!isHomeDropdownOpen);
            }}
            className={`relative text-white font-semibold uppercase tracking-wide transition duration-300 
              ${location.pathname === "/home" ? "underline text-yellow-300" : "hover:text-yellow-300"}
            `}
          >
            Home
          </button>

          {isHomeDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              {homeSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id, "/home")}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {["Services", "Products", "Projects", "Contact", "Animation"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={`relative text-white font-semibold uppercase tracking-wide transition duration-300 
              ${location.pathname === `/${item.toLowerCase()}` ? "underline text-yellow-300" : "hover:text-yellow-300"}
            `}
          >
            {item}
          </Link>
        ))}

        {/* About Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              navigate("/about");
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className={`relative text-white font-semibold uppercase tracking-wide transition duration-300 
              ${location.pathname.startsWith("/about") ? "underline text-yellow-300" : "hover:text-yellow-300"}
            `}
          >
            About
          </button>

          {isDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {aboutSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id, "/about")}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:scale-110 transition-transform duration-300"
      >
        {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-800 text-xl" />}
      </button>
    </nav>
  );
}
