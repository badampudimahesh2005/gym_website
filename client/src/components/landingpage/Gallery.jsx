// src/landing-page/ImageGallery.jsx
import React from "react";
import img1 from "./front-images/front1.jpg";
import img2 from "./front-images/front1.jpg";
import img3 from "./front-images/front1.jpg";
import img4 from "./front-images/front1.jpg";
import img5 from "./front-images/front1.jpg";
import img6 from "./front-images/front1.jpg";
import img7 from "./front-images/front1.jpg";
import img8 from "./front-images/front1.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <h2 className="text-center text-4xl font-bold text-white py-8">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden h-full"
            style={{
              gridRow: index % 3 === 0 ? "span 2" : "span 1", // Different row spans for varied sizes
              gridColumn: index % 4 === 0 ? "span 2" : "span 1", // Different column spans for varied sizes
            }}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
