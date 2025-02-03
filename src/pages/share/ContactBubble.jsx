import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import Draggable from "react-draggable";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Draggable>
    <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full text-white bg-green-500 hover:bg-green-600 shadow-lg transition duration-300"
      >
        <FaWhatsapp size={isMobile ? 24 : 30} />
      </a>

      {/* Phone */}
      <a
        href="tel:+1234567890"
        className="p-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-lg transition duration-300"
      >
        <FaPhoneAlt size={isMobile ? 24 : 30} />
      </a>

      {/* Email */}
      <a
        href="mailto:your-email@example.com"
        className="p-4 rounded-full text-white bg-red-500 hover:bg-red-600 shadow-lg transition duration-300"
      >
        <FaEnvelope size={isMobile ? 24 : 30} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full text-white bg-pink-500 hover:bg-pink-600 shadow-lg transition duration-300"
      >
        <FaInstagram size={isMobile ? 24 : 30} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full text-white bg-blue-700 hover:bg-blue-800 shadow-lg transition duration-300"
      >
        <FaFacebook size={isMobile ? 24 : 30} />
      </a>
    </div>
    </Draggable>
  );
};

export default ContactBubble;
