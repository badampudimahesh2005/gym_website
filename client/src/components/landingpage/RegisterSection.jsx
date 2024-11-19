// src/landing-page/RegisterSection.jsx
import React from "react";
import front5 from "./front-images/front4.jpg"; 

const RegisterSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative text-white"
      style={{ backgroundImage: `url(${front5})` }}
    >
      {/* Overlay for darkening the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg px-6">
        <h2 className="text-4xl font-bold mb-4">Register Now to Get More Details</h2>
        <p className="text-xl mb-6">Where Health, Beauty, and Fitness Meet</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default RegisterSection;
