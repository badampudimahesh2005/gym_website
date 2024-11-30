import React, { useState } from "react";
import apiClient from "../lib/apiClient";
import {toast} from "react-toastify";
import {toastStyle} from "../utils/toastStyle";
const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/api/send-email", formData);
      if (response.data.success) {
        toast.success("Email sent successfully", toastStyle);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send email", toastStyle);}
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 to-black text-white ">
      <div className="">
      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          About<span className="text-white"> Us</span> 
        </h1>
        <p className="text-lg text-center leading-relaxed">
          Welcome to Power fitness! we are committed to providing you with the
          best fitness experience. Our team of experienced trainers will help
          you achieve your fitness goals. We offer a wide range of fitness
          programs to suit your needs. Contact us today to learn more about our
          services.

        </p>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-gray-800/20 shadow-lg rounded-lg max-w-4xl mx-auto px-8 py-10 ">
  <h2 className="text-3xl font-semibold text-center text-white mb-6">
    Get in Touch
  </h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Name Input */}
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
        required
      />
    </div>

    {/* Email Input */}
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
        required
      />
    </div>

    {/* Message Input */}
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        className="w-full border border-gray-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
        required
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="text-center">
      <button
        type="submit"
        className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  </form>
</section>
<div className="h-52">

</div>
    </div>
    </div>
  );
};

export default About;
