import React, { useState } from "react";
import apiClient from "../../lib/apiClient";
import { toastStyle } from "../../utils/toastStyle";
import { toast } from "react-toastify";

const AddProduct = ({ onProductAdded }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        inStock: '',
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


    const handleAddProduct = async (e) => {
    
      const validationErrors = validateProduct();
      if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return; // Stop the process if there are validation errors
      }
        try {
            const response= await apiClient.post("/api/products", product,{withCredentials:true});
            onProductAdded();
            toast.success('Product added successfully', toastStyle);
            setProduct(
              {
                name: '',
                description: '',
                price: '',
                image: '',
                category: '',
                inStock: '',
              }
            )
        } catch (err) {
            console.error("Failed to add product:", err);
        }
    };

    return (
        <div className="">
        <h1 className="text-2xl font-bold mb-4 ">Manage Products</h1>
      
        <div  className="mb-6">
          {/* Add product form */}
          <div className="grid grid-cols-2 gap-4">
            
           <div>
           <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleInputChange}
              className="p-2 border w-full"
              required
            />
            {errors.name && <span className="error text-red-500">{errors.name}</span>}
           </div>
            
            <div>
            <textarea
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={handleInputChange}
              className="p-2 border w-full"
              required
            />
            {errors.description && <span className="error text-red-500">{errors.description}</span>}
            </div>

           <div>
           <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleInputChange}
              className="p-2 border w-full"
              required
            />
            {errors.price && <span className="error text-red-500">{errors.price}</span>}
           </div>
            
            <div>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={product.image}
              onChange={handleInputChange}
              className="p-2 border w-full"
              required
            />
            {errors.image && <span className="error text-red-500">{errors.image}</span>}
            </div>
           
           <div>
           <input
              type="text"
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleInputChange}
              className="p-2 border w-full"
            />
           </div>
           
           <div>
           <input
              type="number"
              name="inStock"
              placeholder="In Stock"
              value={product.inStock}
              onChange={handleInputChange}
              className="p-2 border w-full"
              required
            />
            {errors.inStock && <span className="error text-red-500">{errors.inStock}</span>}
           </div>
          </div>
          <button onClick={handleAddProduct} className="mt-4 p-2 bg-blue-500 text-white font-bold rounded">
            Add NewProduct
          </button>
        </div>
      </div>
      
    );
};

export default AddProduct;
