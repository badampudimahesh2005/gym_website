// src/components/WorkoutPlans.jsx
import React from 'react';
import image from '../assets/loading-image.png';

const plans = [
  {
    title: "Ultimate 30-Day Fitness",
    description: "30 Days of Intense Fitness Program by Mike Thurston",
    details: "Build Muscle | Female, Male | 3 weeks",
    buttonText: "View Details",
    imgSrc: image,
  },
  {
    title: "Iron Every Day",
    description: "4 Weeks Muscle Building Program by Peter Adams",
    details: "Build Muscle | Male | 4 weeks",
    buttonText: "View Details",
    imgSrc: image,
  },
  {
    title: "Stronger Than Yesterday",
    description: "4 Weeks Muscle Building Program by Diana Peter",
    details: "Lose Fat | Male | 5 weeks",
    buttonText: "View Details",
    imgSrc: image,
  },
];

const WorkoutPlans = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Workout Plans</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xs">
            <img src={plan.imgSrc} alt={plan.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-red-500">{plan.description}</p>
              <p className="text-sm mt-2">{plan.details}</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
