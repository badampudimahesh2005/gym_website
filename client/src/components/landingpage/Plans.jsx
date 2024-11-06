// src/landing-page/Plans.jsx
import React from "react";

const Plans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$20/month",
      features: ["Access to gym", "Free water", "1 personal training session"],
    },
    {
      title: "Elite Monthly",
      price: "$50/month",
      features: ["Access to gym", "Free water", "Unlimited personal training", "Access to group classes"],
    },
    {
      title: "Elite Yearly",
      price: "$500/year",
      features: ["Access to gym", "Free water", "Unlimited personal training", "Access to group classes", "Yearly discount"],
    },
  ];

  return (
    <div className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold mb-10 text-white">Our Plans</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-full md:w-1/3 max-w-sm hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 ">{plan.title}</h3>
            <p className="text-3xl font-bold mb-6 text-blue-500">{plan.price}</p>
            <ul className=" mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 mb-2">
                  <span className="text-blue-500">&#10003;</span> {/* Checkmark icon */}
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500text-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
