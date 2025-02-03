import { FaBuilding, FaEnvelope, FaFacebook, FaHandshake, FaInstagram, FaPhone, FaTools, FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const AboutUs = () => {
  const companyImages = [
    "https://via.placeholder.com/400", // Replace with actual image URLs
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Al-FWZ Trading & Contracting</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Leading the industry with excellence in trading and contracting solutions. Our commitment to quality, innovation, and client satisfaction sets us apart.
        </p>
      </div>

      {/* Company Mission, Vision, and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12 px-4">
        {[{
          icon: <FaBuilding className="text-blue-900 text-4xl mx-auto mb-4" />, 
          title: "Our Mission", 
          description: "To deliver superior trading and contracting services that meet the highest industry standards, ensuring client satisfaction."
        }, {
          icon: <FaHandshake className="text-blue-900 text-4xl mx-auto mb-4" />, 
          title: "Our Vision", 
          description: "To be the preferred partner in the industry, recognized for excellence, reliability, and sustainable growth."
        }, {
          icon: <FaTools className="text-blue-900 text-4xl mx-auto mb-4" />, 
          title: "Our Values", 
          description: "Integrity, quality, innovation, and customer-centricity drive our business approach."
        }].map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Services Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Expertise</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We specialize in a wide range of trading and contracting services, ensuring top-quality solutions for our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-4">
        {["Construction", "Trading Solutions", "Consultancy"].map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">
              {service === "Construction" ? "We provide comprehensive construction services, delivering high-quality projects on time and within budget." :
              service === "Trading Solutions" ? "Offering a variety of trading solutions, from materials procurement to supply chain management." :
              "Expert consulting services to help clients optimize their projects and maximize efficiency."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="mt-12 px-4">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">Our Projects & Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companyImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Let's collaborate and build something exceptional together. Reach out to us today.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:info@alfwz.com" className="text-blue-900 hover:text-blue-600 flex items-center gap-2">
            <FaEnvelope size={24} /> info@alfwz.com
          </a>
          <a href="tel:+97412345678" className="text-blue-900 hover:text-blue-600 flex items-center gap-2">
            <FaPhone size={24} /> +974 1234 5678
          </a>
          <a href="https://www.instagram.com/alfwz_trading" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 flex items-center gap-2">
            <FaInstagram size={24} /> Instagram
          </a>
          <a href="https://www.facebook.com/alfwztrading" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 flex items-center gap-2">
            <FaFacebook size={24} /> Facebook
          </a>
          <a href="https://wa.me/97412345678" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 flex items-center gap-2">
            <FaWhatsapp size={24} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
