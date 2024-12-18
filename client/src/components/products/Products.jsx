

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import apiClient from "../../lib/apiClient";
import { setProducts, setLoading,  } from "../../store/slices/productsSlice";

import { Link } from "react-router-dom";

import image2 from "./images/image2.png"

const Products = () => {

  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
      const fetchProducts = async () => {
          dispatch(setLoading());
          try {
              const response = await apiClient.get("/api/products", {withCredentials:true});
              dispatch(setProducts(response.data));
          } catch (err) {
              toast.error("Failed to fetch products:", err);
          }
      };

      fetchProducts();
  }, [dispatch]);

  





    return (
        <div className=" w-full">
        <div className=" mx-auto ">

              {/* Banner Section */}
        <div className="relative flex flex-col items-center justify-center h-[70vh] space-y-5 bg-gradient-to-b from-gray-700 to-black overflow-hidden">
          <h1 className="text-white mt-12 text-4xl md:text-5xl lg:text-6xl">Products</h1>
         
          <img
            src={image2}
            className="absolute w-[200px] md:w-[350px] lg:w-[400px] xl:w-[600px] right-[-50px]"
            alt="Banner"
          />
         
          <img
            src={image2}
            className="absolute w-[200px] md:w-[350px] lg:w-[400px] xl:w-[600px] left-[-50px] transform scale-x-[-1]"
            alt="Banner Mirror"
          />
        </div>



           <div className="bg-black">
           <div className="grid grid-cols-2 md:grid-cols-4  gap-6 mx-auto max-w-6xl py-10">
                {status === "loading" && <p className="text-center">Loading products...</p>}
                {status === "failed" && <p className="text-center text-red-500">Error:  Failed to fetch products.</p>}

                {items.map((product) => (
                    <div key={product._id} className=" hover:bg-gray-500/20 rounded-lg shadow-lg  flex flex-col items-center">
                        <img src={product.image} alt={product.name} className="w-48 h-48 object-fill mb-4 rounded hover:scale-110 duration-200" />
                        <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
                       <Link to={`/products/${product._id}`}>
                       <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 m-2 rounded">
                            view details
                        </button>
                       </Link>
                    </div>
                ))}
            </div>
           </div>
        </div>
      
    </div>
    );
  };
  
  export default Products;

 
