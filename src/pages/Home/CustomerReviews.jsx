import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quote: "Al-FWZ exceeded my expectations with their professional and timely service.",
      name: "Ahmed Al-Ansari",
      title: "Business Owner, Doha",
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote: "Their expertise in interior design transformed our office into a modern masterpiece.",
      name: "Noor Fatima",
      title: "HR Manager, Qatar Tech Solutions",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote: "Reliable, efficient, and high-quality services. Highly recommend Al-FWZ.",
      name: "Mohammed Khalifa",
      title: "CEO, Khalifa Enterprises",
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote: "Top-notch craftsmanship and excellent attention to detail!",
      name: "Sara Ibrahim",
      title: "Entrepreneur, Doha",
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-6 space-y-6 rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-20 h-20 rounded-full dark:bg-gray-500"
      />
      <blockquote className="max-w-lg text-lg italic font-medium text-center">
        "{review.quote}"
      </blockquote>
      <div className="text-center dark:text-gray-400">
        <p className="font-bold">{review.name}</p>
        <p>{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="p-6">
      <div className="container max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          infinite
          animationDuration={1000}
          disableButtonsControls
          disableDotsControls={false}
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
