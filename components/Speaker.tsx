"use client";

import React, { useEffect, useState } from "react";

const images = ["Photo 1", "Photo 2", "Photo 3", "Photo 4", "Photo 5"];

const SpeakerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const displayedImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      {/* Title Text */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-8 text-black-c1">
          Meet Our Speaker
        </h2>
      </div>

      {/* Carousel */}
      <div className="flex justify-center items-center">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out flex flex-col items-center mx-4 ${
              index === 1 ? "scale-125" : "scale-90"
            }`}
          >
            <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded-lg">
              <span className="text-lg font-bold">{image}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerCarousel;
