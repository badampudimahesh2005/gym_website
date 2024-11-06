// src/landing-page/WhyChooseUs.jsx
import React from "react";

const features = [
  { title: "Personal Trainers", description: "Expert trainers for guidance.", icon: "🏋️‍♂️" },
  { title: "Modern Equipment", description: "Top-of-the-line fitness gear.", icon: "🏆" },
  { title: "Flexible Schedules", description: "Work out on your time.", icon: "⏰" },
  { title: "Nutrition Plans", description: "Customized diet for results.", icon: "🥗" },
];

const Features = () => {
  return (
    <div className="py-12 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-6xl my-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-10 rounded-lg text-center text-white hover:bg-blue-500/50 transform transition duration-300 ease-in-out hover:scale-105"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
