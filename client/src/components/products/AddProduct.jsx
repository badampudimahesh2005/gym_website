import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../lib/apiClient";


const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        inStock: 0,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

   


    const validateProduct = () => {
      const newErrors = {};
      if (!product.name) newErrors.name = "Product name is required.";
      if (!product.description) newErrors.description = "Description is required.";
      if (!product.price) newErrors.price = "Price is required.";
      if (isNaN(product.price) || product.price <= 0) newErrors.price = "Price must be a positive number.";
      if (!product.image) newErrors.image = "Image URL is required.";
      if (!product.category) newErrors.category = "Category is required.";
      
      return newErrors;
  };


    const handleAddProduct = async () => {
      const validationErrors = validateProduct();
      if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return; // Stop the process if there are validation errors
      }
        try {
            const response= await apiClient.post("/api/products", product,{withCredentials:true});
            navigate("/products");
        } catch (err) {
            console.error("Failed to add product:", err);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-md w-full max-w-xl mt-6 mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Add <span className="text-blue-500">NewProduct</span></h2>
          <div className="flex flex-col items-center justify-center space-y-4">
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1  font-bold">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
              />
              {errors.name && <span className="error text-red-500">{errors.name}</span>}
            </div>
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1 font-bold">Description</label>
              <textarea
              name="description"
              placeholder="Description"
              value={product.description}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600"
                />
              {errors.description && <span className="error text-red-500">{errors.description}</span>}
            </div>
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1 font-bold">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
              />
               {errors.price && <span className="error text-red-500">{errors.price}</span>}
            </div>
      
            <div className="flex flex-col w-2/3">
              <label className="text-gray-300 mb-1 font-bold">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={product.image}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
              />
              {errors.image && <span className="error text-red-500">{errors.image}</span>}
            </div>
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1 font-bold">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={product.category}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
              />
            </div>
      
            <div className="flex flex-col w-2/3">
            <label  className="text-gray-300 mb-1 font-bold">InStock</label>  
               <input
                type="number"
                name="inStock"
                placeholder="instock"
                value={product.inStock}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
              />
              {errors.inStock && <span className="error text-red-500">{errors.inStock}</span>}
            </div>
      
            <button
              onClick={handleAddProduct}
              className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition duration-300"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
      
      
    );
};

export default AddProduct;
