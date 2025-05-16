import { useState, useRef, useEffect } from "react";
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
  const [phoneError, setPhoneError] = useState("");
  
  // Chat assistant states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom of chat when new messages arrive
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  // Common FAQs and responses
  const faqs = {
    'customization': 'We offer various customization options for our products. You can specify your requirements in the customization field of our contact form.',
    'delivery': 'Delivery typically takes depending on the prodct and location. We will provide an estimated delivery date once your order is confirmed.',
    'payment': 'We accept all major credit cards, UPI, and bank transfers.customizton details are sent through mail or WhatsApp.once confirmed payment can be processed based on the product details ',
    'animation': 'we have a working team that does process animation of working models and we can provide you with a video of the working model.',
    'contact': 'You can reach us via phone at 8903688838 or through WhatsApp at the same number. You can also fill out the contact form on this page.you will be replied via email',
    'price': 'Our prices vary based on the product and customization requirements. Please fill contact form with your requirements and we will get back to you with a quote.',
    'warranty': 'We offer a warranty on our products. The duration and terms of the warranty depend on the specific product. Please refer to the product details or contact us for more information.',
    'thanks': 'Thank you for reaching out! We appreciate your interest in our products and will get back to you as soon as possible.',
    'hello': 'Hello! How can I assist you today?',
    'hi': 'Hi there! How can I help you today?',
    'help': 'I am here to help you! Please ask your question or let me know how I can assist you.',
    'product': 'We offer a wide range of products including customised ones. Please specify your interest for more details.',
    'order': 'To place an order, please fill out the contact form with your requirements and we will get back to you with the next steps.',
    'feedback': 'We value your feedback! Please share your thoughts and suggestions with us.',
    'complaint': 'We are sorry to hear that you have a complaint. Please provide us with the details and we will address it as soon as possible.',
    'support': 'For support, please fill out the contact form or reach out to us via phone or WhatsApp.',
    'business': 'For business inquiries, please fill out the contact form with your requirements and we will get back to you.',
    'quote': 'To get a quote, please provide us with the details of your requirements through the contact form.',
    'thank you': 'You are welcome! If you have any more questions, feel free to ask.',
    'bye': 'Goodbye! Have a great day!',
  };

  // Function to handle chat input submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    // Add user message to chat
    setChatMessages([...chatMessages, { sender: 'user', text: userInput }]);
    const userQuestion = userInput.toLowerCase();
    setUserInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Please fill out our contact form or reach out to us directly for more specific information.";
      
      // Check if the question matches any FAQ keywords
      for (const [keyword, response] of Object.entries(faqs)) {
        if (userQuestion.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      // Add bot response to chat
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear phone error when user starts typing again
    if (name === 'phone') {
      setPhoneError("");
    }
    
    setFormData({ ...formData, [name]: value });
  };

  // Phone validation function
  const validatePhone = (phone) => {
    // Indian phone number validation (10 digits, optionally with +91 prefix)
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid Indian mobile number");
      return;
    }
    
    setLoading(true);
    setResponseMessage("");
    
    try {
      const res = await axios.post("https://consultancy-project-backend-cgtf.onrender.com", formData);
      setResponseMessage(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "", customization: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to create WhatsApp link
  const getWhatsAppLink = () => {
    const message = encodeURIComponent("I'd like to inquire about customization for your products.");
    return `https://wa.me/918903688838?text=${message}`;
  };

  return (
    <motion.div 
      className="max-h-screen flex items-center justify-center p-4 pt-16 md:p-6 md:pt-20 bg-gray-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.webp')" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden border-2 border-[#8B2323]">
        {/* Contact Form Section */}
        <div className="md:w-3/5 p-6 ">
          <h2 className="text-2xl font-bold mb-3 text-center text-[#8B2323]">Contact Us</h2>
          <p className="text-center text-gray-600 mb-4 text-sm">
            Fill out the form below to get in touch with us.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B2323] focus:border-[#8B2323]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B2323] focus:border-[#8B2323]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="XXXXXXXXXX"
                className={`w-full p-2 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B2323] focus:border-[#8B2323]`}
              />
              {phoneError && (
                <p className="mt-1 text-sm text-red-600">{phoneError}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="2"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B2323] focus:border-[#8B2323]"
              ></textarea>
            </div>
            <div>
              <label htmlFor="customization" className="block text-sm font-medium text-gray-700 mb-1">Customization Details (if any)</label>
              <textarea
                id="customization"
                name="customization"
                value={formData.customization}
                onChange={handleChange}
                rows="2"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B2323] focus:border-[#8B2323]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8B2323] text-white py-2 px-4 rounded-md hover:bg-[#A52A2A] transition-colors duration-300 font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 text-green-800 rounded-md text-center text-sm">
              {responseMessage}
            </div>
          )}
        </div>
        
        {/* Alternative Contact Methods Section */}
        <div className="md:w-2/5 bg-gray-50 p-6 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#8B2323] mb-3">Alternative Ways to Reach Us</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Need immediate assistance? Contact us directly:
            </p>
          </div>
          
          {/* SMS Info (without button) */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">SMS Us</h4>
              <p className="text-gray-600 text-center">
                Send us a text message at <span className="font-medium">8903688838</span> for quick responses
              </p>
            </div>
          </div>
          
          {/* WhatsApp Option (replacing Email) */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#8B2323] bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">WhatsApp Us</h4>
              <p className="text-gray-600 mb-3 text-center">
                Chat with us directly on WhatsApp
              </p>
              <a
                href={getWhatsAppLink()}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#8B2323] border-2 border-[#8B2323] py-2 px-4 rounded-md hover:bg-[#8B2323] hover:text-white transition-colors duration-300 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp 8903688838
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Assistant */}
      <div className="fixed bottom-5 right-5 z-50">
        {/* Chat Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 rounded-full bg-[#8B2323] text-white flex items-center justify-center shadow-lg hover:bg-[#A52A2A] transition-colors duration-300"
          aria-label="Chat with us"
        >
          {isChatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-[#8B2323] text-white p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8B2323]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-medium">Chat Assistant</h3>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="p-3 h-80 overflow-y-auto bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-2 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-[#8B2323] text-white rounded-tr-none' 
                        : 'bg-white border border-gray-200 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-white border border-gray-200 p-2 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="border-t border-gray-200 p-3 flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#8B2323] focus:border-[#8B2323]"
              />
              <button 
                type="submit"
                className="bg-[#8B2323] text-white p-2 rounded-r-md hover:bg-[#A52A2A] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>

            {/* Quick Questions */}
            <div className="border-t border-gray-200 p-2 bg-gray-50">
              <p className="text-xs text-gray-500 mb-2">Common questions:</p>
              <div className="flex flex-wrap gap-1">
                {Object.keys(faqs).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      const question = `${key}`;
                      setUserInput(question);
                      setChatMessages([...chatMessages, { sender: 'user', text: question }]);
                      
                      // Simulate bot typing
                      setIsTyping(true);
                      setTimeout(() => {
                        setChatMessages(prev => [...prev, { sender: 'bot', text: faqs[key] }]);
                        setIsTyping(false);
                        setUserInput('');
                      }, 1000);
                    }}
                    className="text-xs bg-white border border-gray-200 rounded-full px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
