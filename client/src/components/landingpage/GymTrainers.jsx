


// src/components/GymTrainer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import trainer1 from "./front-images/front2.jpg";


const trainers = [
  {
    name: "Nick Fury",
    role: "Gym Trainer",
    imgSrc: trainer1, // Replace with your image path
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Anna Scott",
    role: "Fitness Trainer",
    imgSrc: trainer1, // Replace with your image path
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Sarah Doe",
    role: "Yoga Instructor",
    imgSrc: trainer1, // Replace with your image path
    social: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
];

const GymTrainer = () => {
  return (
    <div className="p-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Trainers</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="relative max-w-xs border-2 border-blue-500 rounded-lg overflow-hidden group"
          >
            <img
              src={trainer.imgSrc}
              alt={trainer.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-semibold">{trainer.name}</h3>
              <p className="text-gray-400">{trainer.role}</p>
              <div className="flex gap-4 mt-2">
                {trainer.social.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl hover:text-blue-600 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymTrainer;
