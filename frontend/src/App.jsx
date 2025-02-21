import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Animation from "./pages/Animation";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark"); // ✅ Ensure it applies to <html>
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html").classList.remove("dark"); // ✅ Remove when not in dark mode
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen transition-all duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </div>
    </Router>
  );
}
