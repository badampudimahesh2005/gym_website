import React, { useState } from "react";
import apiClient from "../../lib/apiClient";
import {toast} from 'react-toastify';
import { toastStyle } from "../../utils/toastStyle";

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    height: "",
    gender: "",
    weight: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const response = await apiClient.post("/api/admin/add-admin", formData,{withCredentials:true});
      toast.success(response.data.message,toastStyle);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        height: "",
        gender: "",
        weight: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating admin.",toastStyle);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">Add AdminUser</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="number"
            name="height"
            placeholder="Height"
            value={formData.height}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className=" p-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold"
        >
          Add Admin
        </button>
      </form>
     
    </div>
  );
};

export default AddAdmin;
