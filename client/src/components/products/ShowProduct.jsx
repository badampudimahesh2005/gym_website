import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/slices/cartSlice";


const ShowProduct = () => {
    const { id } = useParams(); // Get the product ID from the route parameters using hook useParams
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
        }));
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

    if (!product) return <div>Loading...</div>;

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
                   
                    <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition mr-4">Add to Cart</button>
                   
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
