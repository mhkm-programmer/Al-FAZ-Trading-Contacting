import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
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
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Contact Us</h1>
        <p className="lg:px-18 text-lg text-gray-600">
          At AL-FWZ Trading and Contracting, we specialize in providing custom furniture, expert upholstery, and interior design solutions. Our team is dedicated to helping you create spaces that reflect your style and functionality needs.
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1477.664232353121!2d90.41860391161788!3d23.730451619137614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684651400539!5m2!1sen!2sbd"
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="mb-6 text-gray-700">
            <p className="mb-2">
              <strong>Location:</strong> Souq al Haraj, Shop No. 283, Main Road, Najma, Doha, Qatar
            </p>
            <p className="mb-2">
              <strong>Zone:</strong> Zone 26, Street 850, Building 34, Unit 17
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:mhkm.abraham@gmail.com" className="text-blue-600 hover:text-blue-800">
                mhkm.abraham@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+88096961174037" className="text-blue-600 hover:text-blue-800">
                +88096961174037
              </a>
            </p>
            <p className="mb-2">
              <strong>Business Hours:</strong> Sunday - Thursday: 9:00 AM - 6:00 PM
            </p>
            <p className="mb-4">
              <strong>Available for consultations and project inquiries.</strong>
            </p>
          </div>

          <div className="flex gap-6 my-6">
  <a
    href="tel:+88096961174037"
    className="text-blue-600 hover:text-blue-800"
  >
    <FaPhoneAlt size={32} />
  </a>
  <a
    href="https://www.facebook.com/mhkm.programmer"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800"
  >
    <FaFacebook size={32} />
  </a>
  <a
    href="https://www.instagram.com/mhkm.programmer/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:text-pink-800"
  >
    <FaInstagram size={32} />
  </a>
  <a
    href="https://wa.me/88096961174037"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 hover:text-green-800"
  >
    <FaWhatsapp size={32} />
  </a>
</div>

          <p className="text-gray-600 mb-4">
            Fill out the form below and our team will get back to you as soon as possible. We value your inquiries and will ensure that your needs are addressed promptly.
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
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
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
