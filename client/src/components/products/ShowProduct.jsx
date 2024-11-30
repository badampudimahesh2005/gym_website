import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toastStyle } from "../../utils/toastStyle";
import { toast } from "react-toastify";

import loadingGif from "./images/loading.gif";


const ShowProduct = () => {
    const { id } = useParams(); // Get the product ID from the route parameters using hook useParams
    const [product, setProduct] = useState(null);
    const {isAdmin} = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 4 seconds
        }, 3000); 

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addItemToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
        }));
        toast.success("Product added to cart successfully", toastStyle);
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


    const handleDelete = async () => {
        try {
            const response = await apiClient.delete(`/api/products/${id}`);
            toast.success("product deleted successfully",toastStyle);
            navigate("/products");
        
        } catch (error) {
            toast.error("Failed to delete product:", error);
        }
    };

    if (loading) return (
    <div className="bg-black h-screen flex justify-center items-center">
        <div className=" w-[500px]  mx-auto">
    <img src={loadingGif} alt="loadin-image" className=" mx-auto md:w-full  object-cover object-center rounded-lg" />
    </div>
        </div>
   );

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white p-8">
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg flex">
                {/* Image Section */}
                <div className="mr-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg shadow-lg max-w-xs"
                    />
                </div>
                {/* Details Section */}
                <div>
                    {/* <span className="bg-orange-500 text-white px-3 py-1 rounded-lg font-semibold text-sm">New In</span> */}
                    <h2 className="text-3xl font-bold mt-4 mb-2">{product.name}</h2>
                    <p className="text-2xl text-blue-400 mb-4">Price: ${product.price}</p>
                    <p className="mb-4">{product.description}</p>
                    <ul className="list-none space-y-2 mb-4 text-gray-300">
                        <li>✔️ Brand Authorized</li>
                        <li>✔️ Free and Fast Delivery</li>
                    </ul>
                    {/* Quantity and Add to Cart */}
                   
                   {!isAdmin && (
                    <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition mr-4">Add to Cart</button>
                   )}
                    {isAdmin && (
                        <>
                     <Link to={`/update-product/${id}`} >
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition mr-4">Edit</button>
                    </Link>
                     <button onClick={handleDelete} className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition mr-4">Delete</button>

                        </>
                    )}
                    <div className="mt-6 space-y-2 text-sm text-gray-300">
                        <p>🚚 Free Shipping + returns</p>
                        <p>💬 24/7 Customer Support</p>
                        <p>📦 Prime check before you buy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
