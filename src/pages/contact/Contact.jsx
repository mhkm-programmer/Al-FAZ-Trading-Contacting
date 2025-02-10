import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const Contact = () => {
  const [activeTheme] = useThemeSwitcher();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7b92lcx', // Replace with your service ID
        'template_k6p49ij', // Replace with your template ID
        e.target, // Pass the form as the target
        'wqQwMjjepKRfJ6ah-' // Replace with your user ID (Public Key)
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-semibold text-[#6B4226] mb-4">Contact Us</h1>
        <p className="lg:px-18 text-lg text-gray-600 max-w-2xl mx-auto">
          At LuxeFurnish, we specialize in crafting custom furniture, offering expert upholstery, and providing interior design solutions. Let us help you create spaces that reflect your style and functionality needs.
        </p>
      </motion.div>

      <section className="grid lg:grid-cols-2 gap-8">
        {/* Left Section: Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:h-[500px] h-[350px] w-full mb-8 rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/@25.2698486,51.5399093,19.75z/data=!4m4!3m3!8m2!3d25.2696943!4d51.5400557?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/@25.2698486,51.5399093,19.75z/data=!4m4!3m3!8m2!3d25.2696943!4d51.5400557?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
            className="w-full h-full rounded-lg"
            title="Google Map Location"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Right Section: Contact Information and Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between"
        >
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-4">Contact Information</h2>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">
              <strong>Location:</strong> 26 Zone, 850 Al Mansoura Street, 34 Building, 17 Unit
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:qatarwintrading@gmail.com" className="text-[#8B5A2B] hover:text-[#6B4226]">
              qatarwintrading@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+1234567890" className="text-[#8B5A2B] hover:text-[#6B4226]">
                +1 234 567 890
              </a>
            </p>
            <p className="mb-2">
              <strong>Business Hours:</strong> Saturday - Thursday: 8:00 AM - 1:00 PM & 3:30 PM - 10:00 PM
              <strong>Business Hours:</strong> Friday: 3:30 PM - 10:00 PM
            </p>
            <p className="mb-4">
              <strong>Available for consultations and project inquiries.</strong>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 my-6">
            <a
              href="tel:+97455760872"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
            >
              <FaPhoneAlt size={32} />
            </a>
            <a
              href="https://www.facebook.com/share/17x1p2tygr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/luxefurnish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://wa.me/+97455760872"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#6B4226]"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>

          {/* Contact Form */}
          <p className="text-gray-600 mb-4">
            Fill out the form below, and our team will get back to you as soon as possible. We value your inquiries and will ensure that your needs are addressed promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-gray-600 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-gray-600 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-gray-600 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={` btn-hero w-full bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300 ${
                activeTheme === "dark" ? "dark-mode-text" : ""
              }`}
            >
              Send Message
            </button>
          </form>

          {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;