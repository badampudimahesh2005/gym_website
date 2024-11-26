
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useSelector,useDispatch } from "react-redux";
import { logoutUser } from "../store/slices/userSlice";
import {Link , useNavigate } from "react-router-dom";
import apiClient from "../lib/apiClient";
import { toast } from "react-toastify";
import { toastStyle } from "../utils/toastStyle";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user,isAdmin,isAuthenticated} = useSelector((state) => state.user);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

 const handleLogout = async () => {
  try{
    const response = await apiClient.get("/auth/logout");
    dispatch(logoutUser());
    sessionStorage.removeItem('isAuthenticated');
    toast.success("logout successful",toastStyle);

    navigate("/login");
    

  }catch(error){
    toast.error(error);
    }

 }
  return (
    <nav className="bg-gray-900 text-white py-3 px-10 shadow-lg border-b-2 border-blue-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
       <Link to="/">
       <div className="flex items-center justify-center space-x-2">
          <img src={logo} alt="Gym Logo" className="h-24 w-44" />
        </div>
       </Link>

       
        {/* Navigation Links */}
      <div className="container mx-auto  flex justify-center space-x-10">
        
        <Link to="/plans" className="hover:text-blue-500 hover:font-bold  transition  text-xl">Plans</Link>
        <Link to="/products" className="hover:text-blue-500 hover:font-bold  transition  text-xl">Products</Link>
        <Link to="/coach" className="hover:text-blue-500 hover:font-bold transition  text-xl">Coach</Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-bold  transition  text-xl">About Us</Link>
        {user && !isAdmin && (<Link to="/profile" className="hover:text-blue-500 transition hover:font-bold   text-xl">Profile</Link>)}
      {user && isAdmin && (<Link to="/admin/dashboard" className="hover:text-blue-500 transition hover:font-bold   text-xl">Dashboard</Link>)}

      </div>

        {/* Buttons and Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {user ? ( 
             <>
             <p>{user.email}</p>
             <button onClick={handleLogout} className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
             Logout
           </button>
             </>
           
        ) : ( 
       
         <>
         <Link to="/login">
       <button className="border border-white text-white px-4 py-1 rounded-lg hover:bg-white hover:text-gray-900 transition">
         Login
       </button>
       </Link>

         <Link to="/register">
       <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition">
         Register
       </button>
       </Link>
        </>  
        )
         }

      {user && !isAdmin && (
         <>
          <FiHeart className="text-xl hover:text-blue-500 transition cursor-pointer" />
          <Link to="/cart" className="text-xl hover:text-blue-500 transition cursor-pointer relative">
       
          <FiShoppingBag />
          <span className="absolute top-0 left-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalQuantity}
                </span>
          </Link>


          </>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
