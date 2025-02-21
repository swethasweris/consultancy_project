import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    customization: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await axios.post("http://localhost:5000/send-email", formData);
      setResponseMessage(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "", customization: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Fill out the form below to get in touch with us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required 
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />

          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          ></textarea>

          <textarea name="customization" value={formData.customization} onChange={handleChange} placeholder="Customization Details (if any)"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          ></textarea>

          <button type="submit" disabled={loading} 
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && (
          <p className="text-center mt-4 text-green-600 dark:text-green-400">{responseMessage}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
