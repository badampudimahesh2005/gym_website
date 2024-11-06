

import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg border-b-2 border-blue-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
       <Link to="/">
       <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Gym Logo" className="h-8" />
          <span className="text-xl font-bold text-blue-500">GYM</span>
        </div>
       </Link>

        {/* Search Bar */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 mx-0 md:mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons and Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="border border-white text-white px-4 py-1 rounded-lg hover:bg-white hover:text-gray-900 transition">
            Sign in
          </button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition">
            Register
          </button>
          <FiHeart className="text-xl hover:text-blue-500 transition cursor-pointer" />
          <Link to="/cart" className="text-xl hover:text-blue-500 transition cursor-pointer relative">
          <FiShoppingBag  />
          <span className="absolute top-0 left-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalQuantity}
                </span>

          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto mt-4 flex justify-center space-x-6">
        
        <Link to="/plans" className="hover:text-blue-500 transition">Plans</Link>
        <Link to="/products" className="hover:text-blue-500 transition">Products</Link>
        <Link to="/coach" className="hover:text-blue-500 transition">Coach</Link>
        <Link to="/about" className="hover:text-blue-500 transition">About Us</Link>

      </div>
    </nav>
  );
};

export default Navbar;
