// src/components/LoadingScreen.js
import React, { useEffect } from "react";
import loadingImage from "../assets/loading-image.png";
const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    // Simulate a loading time (e.g., 3 seconds)
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={loadingImage} // Use your preferred loading image path here
          alt="Loading"
          className="object-cover opacity-70 h-screen w-full"
         
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-extrabold tracking-widest animate-slide">
            <span className="text-white">GY</span>
            <span className="text-orange-500">M</span>
          </h1>
        </div>
      </div>

      <style>
        {`
          /* Slide-in animation for the text */
          @keyframes slideIn {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(0); opacity: 1; }
          }

          .animate-slide {
            animation: slideIn 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
