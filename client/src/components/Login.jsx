import React, { useState } from 'react';
import apiClient from '../lib/apiClient';
import { useNavigate } from 'react-router-dom';

import { FaRegEyeSlash,FaRegEye} from "react-icons/fa";
import { setUserData } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import { toastStyle } from '../utils/toastStyle';



const Login = () => {

  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
     email: '', 
     password: '' 
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  
  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await apiClient.post('/auth/login',credentials, {withCredentials: true});
      dispatch(setUserData(response.data));
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userData', JSON.stringify(response.data)); // Store user data  
      toast.success("Login successful",toastStyle);
      navigate('/');
    } catch (error) {
      toast.error('Login failed: ' + error.response?.data?.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-gray-800 p-6">
      <div className="z-10 w-full max-w-lg space-y-8 rounded-lg p-8 shadow-lg text-white bg-gray-800/50">
        <div className="text-center text-3xl font-bold">
          Log <span className="text-blue-500">In</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Email Input */}
          <div className="flex flex-col w-2/3">
            <label  className="text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleInputChange}
              className="p-2 rounded-lg focus:outline-none text-black bg-white "
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col w-2/3 relative">
            <label htmlFor="password" className="text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleInputChange}
              className="p-2 rounded-lg focus:outline-none  bg-white text-black "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-10 text-gray-500 hover:text-gray-300"
            >
              {showPassword ?<FaRegEye />:<FaRegEyeSlash /> }
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
