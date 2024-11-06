

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import apiClient from "../../lib/apiClient";
import { setProducts, setLoading,  } from "../../store/slices/productsSlice";

import { Link } from "react-router-dom";

const Products = () => {

  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
      const fetchProducts = async () => {
          dispatch(setLoading());
          try {
              const response = await apiClient.get("/api/products");
              dispatch(setProducts(response.data));
          } catch (err) {
              console.error("Failed to fetch products:", err);
          }
      };

      fetchProducts();
  }, [dispatch]);

  

//   const handleEditProduct = async (productId, updatedData) => {
//       try {
//           const response = await apiClient.put(`/api/products/${productId}`, updatedData);
//           dispatch(updateProduct(response.data));
//       } catch (err) {
//           console.error("Failed to edit product:", err);
//       }
//   };

//   const handleDeleteProduct = async (productId) => {
//       try {
//           await apiClient.delete(`/api/products/${productId}`);
//           dispatch(removeProduct(productId));
//       } catch (err) {
//           console.error("Failed to delete product:", err);
//       }
//   };


    return (
        <div className="p-8 bg-gradient-to-b from-gray-700 to-black text-white flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
        <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3  gap-6 max-w-6xl mx-auto">
                {status === "loading" && <p className="text-center">Loading products...</p>}
                {status === "failed" && <p className="text-center text-red-500">Error:  Failed to fetch products.</p>}

                {items.map((product) => (
                    <div key={product._id} className=" hover:bg-gray-500/20 rounded-lg shadow-lg p-4 flex flex-col items-center">
                        <img src={product.image} alt={product.name} className="w-52 h-44 object-cover mb-4 rounded hover:scale-110 duration-200" />
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                       <Link to={`/products/${product._id}`}>
                       <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            view details
                        </button>
                       </Link>
                    </div>
                ))}
            </div>
        </div>
       <Link to="/add-product">
       <button className="mt-8  mx-auto bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded w-40">
            Add Product
        </button>
       </Link>
    </div>
    );
  };
  
  export default Products;

 
