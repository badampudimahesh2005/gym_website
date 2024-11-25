import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import apiClient from "../lib/apiClient";
import { FaRegEyeSlash,FaRegEye} from "react-icons/fa";
import { setUserData } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

 const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toastStyle ={
    theme:"dark",
    position: "bottom-right",
    hideProgressBar: true,
    closeOnClick: true,
    autoClose: 3000,

  }
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    password: "",
  };

  const [user, setUser] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  
  const handleSignup = async () => {

    //VALIDATION
    if (!user.firstName || !user.lastName || !user.email || !user.password || 
      !user.age || !user.height || !user.weight || !user.gender) {
    toast.error("All fields are mandatory. Please fill all the details.",toastStyle);
    return;
  }
  //Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user.email)) {
    toast.error("Please enter a valid email address.",toastStyle);
    return;
  }

  // Additional validation for age, height, and weight (if needed)
  if (user.age <= 0) {
    toast.error("Please enter a valid age.",toastStyle);
    return;
  }
  if (user.height <= 0) {
    toast.error("Please enter a valid height.",toastStyle);
    return;
  }
  if (user.weight <= 0) {
    toast.error("Please enter a valid weight.",toastStyle);
    return;
  }

    try {
      const response=await apiClient.post('/auth/register', user,{withCredentials:true});

      if(response.data){
      dispatch(setUserData(response.data));
      toast.success("SignUp successful",toastStyle);
      navigate('/');
    }
    } catch (error) {
      toast.error('Error: ' + error.response?.data?.message || 'Registration failed', toastStyle);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-gray-800 p-6">
      <div className="z-10 w-full max-w-lg space-y-8 rounded-lg  p-8 shadow-lg text-white bg-gray-800/50">
        <div className="text-center text-3xl font-bold ">Sign <span className="text-blue-500">Up</span></div>
        <div className="space-y-4">
          <div className="flex gap-4 ">
            <div className="w-1/2">
              <label className="block text-sm font-medium">First Name</label>
              <input
                value={user.firstName}
                onChange={handleChange}
                type="text"
                name="firstName"
                className=" p-2 text-black mt-1 block w-full  rounded-md border-gray-300 shadow-sm  focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                value={user.lastName}
                onChange={handleChange}
                type="text"
                name="lastName"
                className=" p-2 text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Age</label>
              <input
                value={user.age}
                onChange={handleChange}
                type="number"
                name="age"
                className="mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Gender</label>
              <select
                value={user.gender}
                name="gender"
                onChange={handleChange}
                className="mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Other</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Weight</label>
              <input
                value={user.weight}
                onChange={handleChange}
                type="number"
                name="weight"
                className="mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Height</label>
              <input
                value={user.height}
                onChange={handleChange}
                type="number"
                name="height"
                className="mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
              />
            </div>
          </div>
          <label className="block text-sm font-medium">Email address</label>
          <input
            value={user.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
          />
          <label className="block text-sm font-medium">Password</label>
          <div className="relative mt-1">
            <input
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              className="  p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            onClick={handleSignup}
            className="w-full py-2 mt-6 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-semibold"
          >
            Sign up
          </button>
          <div className="pt-6 text-center text-sm">
            Already a user?{" "}
            <Link to="/login" className="text-blue-400">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Signup;