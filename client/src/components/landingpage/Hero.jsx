// src/components/Hero.js
import React, { useEffect, useState } from "react";
import front1 from "./front-images/front7.jpg";
import front2 from "./front-images/front2.jpg";
import front3 from "./front-images/front3.jpg";

const slides = [
  {
    image: front1,
    title: "BE MIGHTY",
    subtitle: "TRAINING HARD",
    tagline: "SHAPE YOUR BODY",
    buttonText: "GET INFO",
  },
  {
    image: front2,
    title: "GET STRONG",
    subtitle: "BUILD MUSCLE",
    tagline: "POWER YOUR LIFE",
    buttonText: "LEARN MORE",
  },
  {
    image: front3,
    title: "STAY FIT",
    subtitle: "STAY HEALTHY",
    tagline: "ACHIEVE YOUR GOALS",
    buttonText: "JOIN US",
  },
];

const Hero = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // Change slide every 5 seconds
  
      return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);
  
    const currentSlide = slides[currentSlideIndex];
  
    return (
      <div
        className="relative h-screen bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <p className="text-white text-lg tracking-widest mb-2">
            {currentSlide.tagline}
          </p>
          <h1 className="text-6xl font-bold text-white mb-4">
            {currentSlide.title.split(" ")[0]}{" "}
            <span className="text-blue-600">
              {currentSlide.title.split(" ")[1]}
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-white">{currentSlide.subtitle}</h2>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition-colors">
            {currentSlide.buttonText}
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  