// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b to-black from-gray-900 text-white py-10 ">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to helping you reach your fitness goals with world-class trainers and
              tailored workout plans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="m-10 text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/workout-plans" className="hover:text-blue-500 transition-colors">Workout Plans</a></li>
              <li><a href="/products" className="hover:text-blue-500 transition-colors">Products</a></li>
              <li><a href="/coach" className="hover:text-blue-500 transition-colors">Coaches</a></li>
              <li><a href="/about-us" className="hover:text-blue-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Fitness Street, Wellness City, USA</p>
            <p className="text-gray-400 mt-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400 mt-2">Email: info@fitnessworld.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6">
          © {new Date().getFullYear()} Fitness World. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
