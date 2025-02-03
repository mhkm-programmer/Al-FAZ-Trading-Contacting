import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

import Slider from "react-slick";
import Typed from "react-typed";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";

const HeroSlider = () => {
  const [activeTheme] = useThemeSwitcher();
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "https://8upload.com/image/679ab81322a48/IMG-20250113-WA0033.jpg",
    "https://8upload.com/image/679abe281ed2b/office-furniture__1_.jpg",
    "https://8upload.com/image/679ab8ae708ea/IMG-20250112-WA0458.jpg",
    "https://8upload.com/image/679abd057b34e/1-d9398590-min-768x512__1_.jpg",
    "https://8upload.com/image/679abd2e7fd99/61545f46eb42c40020cbb6c2_America__1_.jpg",
   
  ];

  return (
    <div
      className={`max-w-screen-xl mx-auto gap-x-10 items-center justify-between overflow-hidden pt-4 md:flex md:px-8 ${
        activeTheme === "dark" ? "text-white" : ""
      }`}
    >
      {/* Left Section */}
      <div
        className={`flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl ${
          activeTheme === "dark" ? "dark:bg-primary-dark" : "bg-secondary-light"
        }`}
      >
        {/* Hero Text Section */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl text-teal-600 font-medium">
            {/* <Typed
                 strings={[
      "Your One-Stop Furniture Solution",
      "Expert Upholstery Services",
      "Elegant Interior Design Services"
    ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            /> */}
            Furniture, Upholstery & Interior Design Solutions
          </h1>
          <h2 className="text-xl md:text-xl text-red-600 ">
  Transforming Spaces with Style and Comfort
</h2>
         <p className="text-base md:text-lg text-gray-700">
  At Al-FWZ Trading and Contracting, we specialize in selling high-quality furniture, offering expert upholstery services, and creating stunning interior designs. Let us bring elegance and functionality to your home or office.
</p>
        </div>

        {/* Action Buttons */}
        <div>
          {!showOptions && (
            <button
              className={`btn-hero text-black ${
                activeTheme === "dark" ? "dark-mode-text" : ""
              }`}
              onClick={handleShowOptions}
            >
              Shop or Book Appointment Now
            </button>
          )}

          {showOptions && (
            <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              {/* Buy from Shop */}
              <a
                href="https://www.google.com/maps?q=25.276987,51.520008"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center  text-black transition"
              >
                <FaMapMarkerAlt className="mr-2" />
                Buy from Shop
              </a>

              {/* Book an Appointment */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center text-black  transition"
              >
                <FaWhatsapp className="mr-2" />
                Book an Appointment
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right Section (Carousel) */}
      <div className="flex-none justify-center items-center lg:pt-12 mt-14 md:mt-0 md:max-w-xl w-full">
        <Slider {...sliderSettings}>
          {/* {images.map((src, index) => (
            <div key={index} className="flex justify-center">
            <img
  src={src}
  className="w-full h-auto justify-center items-center object-cover rounded-md"
  alt={`Slide ${index + 1}`}
/> */}
{images.map((src, index) => (
  <div key={index} className=" flex justify-center items-center overflow-hidden">
    <img
      src={src}
      className="w-full  object-cover rounded-md" // Fixed height with aspect ratio maintaining
      alt={`Slide ${index + 1}`}
    />
 

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;

