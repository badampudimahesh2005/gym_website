import React from 'react'
import { useNavigate } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toastStyle } from "../../utils/toastStyle";
import { toast } from "react-toastify";

const UpdateProduct = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        inStock: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setProduct({ ...product, inStock: e.target.checked });
    };

    useEffect(() => {
        // Fetch product details from backend
        const fetchProduct = async () => {
            try {
                const response = await apiClient.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };

        fetchProduct();
    }, [id]);


        const handleUpdate = async () => {
            try {
                const response = await apiClient.put(`/api/products/${id}`, product);
                toast.success("Product updated successfully!", toastStyle);
                navigate(`/products/${id}`);
            } catch (err) {
                toast.error("Failed to update product:", err);
            }
        };
    
    return (
        <div className="flex items-center justify-center  bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-md w-full max-w-xl mt-6 mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Update<span className="text-blue-500">Product</span></h2>
          <div className="flex flex-col items-center justify-center space-y-4">
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600"
              />
            </div>
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1">Description</label>
              <textarea
              name="description"
              placeholder="Description"
              value={product.description}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600"
                />
             
            </div>
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600"
              />
            </div>
      
            <div className="flex flex-col w-2/3">
              <label className="text-gray-300 mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={product.image}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600"
              />
            </div>
      
            <div className="flex flex-col w-2/3">
              <label  className="text-gray-300 mb-1">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={product.category}
                onChange={handleInputChange}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-600"
              />
            </div>
      
            <div className="flex items-center w-2/3 space-x-2 text-gray-300">
              <input
                type="checkbox"
                name="inStock"
                checked={product.inStock}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-green-500 border-gray-600"
              />
              <label>In Stock</label>
            </div>
      
            <button
              onClick={handleUpdate}
              className="px-4 py-2 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition duration-300"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
      
    );
}


export default UpdateProduct



