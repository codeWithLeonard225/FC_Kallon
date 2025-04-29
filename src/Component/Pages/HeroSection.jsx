import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";

const HeroSection = () => {
  const slides = [
    {
      type: "video",
      src: "/fckallonVideo.mp4",
      title: "Welcome to FC Kallon",
      subtitle: "Motto: ",
    },
    {
      type: "image",
      src: "/kallonbros.jpg",
      title: "Coach Mohamed Kallon",
      subtitle: "Strength, Unity, Victory",
    },
    {
      type: "image",
      src: "/KALLON-FC.jpg",
      title: "Team Line Up",
      subtitle: "The Future of Football in Sierra Leone",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Navbar />
      <section id="home" className="h-screen relative overflow-hidden">
        {/* Background Media */}
        <div className="absolute inset-0 overflow-hidden">
          {slides[currentSlide].type === "video" ? (
            <video
              src={slides[currentSlide].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
            ></div>
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 animate-fadeIn">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6 animate-fadeIn delay-200">
            {slides[currentSlide].subtitle}
          </p>
          <a
            href="#team"
            className="bg-blue-700 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 animate-fadeIn delay-400"
          >
            Meet the Team
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
