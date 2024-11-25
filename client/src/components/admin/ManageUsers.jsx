

import React, { useEffect, useState } from "react";
import apiClient from "../../lib/apiClient";
import { toastStyle } from "../../utils/toastStyle";
import { toast } from "react-toastify";


const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    height: "",
    gender: "Male",
    weight: "",
    isAdmin: false,
  });

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get("/api/admin/users", {withCredentials:true});
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const {firstName, lastName, email, password, age, height,  weight} = newUser;
    if(!firstName || !lastName || !email || !password || !age || !height || !weight) {
      toast.error("Please fill in all fields", toastStyle);
      return;
     } 

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email)) {
       toast.error("Please enter a valid email address.",toastStyle);
       return;
     }
     
    try {
      await apiClient.post("/api/admin/users", newUser);
      fetchUsers(); // Refresh the user list
      toast.success("user added successfully", toastStyle);
      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        height: "",
        gender: "Male",
        weight: "",
        isAdmin: false
        });
    } catch (err) {
      toast.error("Error adding user", err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await apiClient.delete(`/api/admin/users/${userId}`,{withCredentials:true});
      fetchUsers(); // Refresh the user list
      toast.success("User deleted successfully", toastStyle);
    } catch (err) {
      toast.error("Error deleting user", err);
    }
  };

  

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
         <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      <form onSubmit={handleAddUser} className="mb-6">
        {/* Add user form */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
            className="p-2 border"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
            className="p-2 border"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="p-2 border"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            className="p-2 border"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            className="p-2 border"
            required
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={newUser.height}
            onChange={(e) => setNewUser({ ...newUser, height: e.target.value })}
            className="p-2 border"
            required
          />
          <select
            value={newUser.gender}
            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            className="p-2 border"
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            placeholder="Weight (kg)"
            value={newUser.weight}
            onChange={(e) => setNewUser({ ...newUser, weight: e.target.value })}
            className="p-2 border"
            required
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={newUser.isAdmin}
              onChange={(e) => setNewUser({ ...newUser, isAdmin: e.target.checked })}
            />
            <span>Admin</span>
          </label>
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded font-bold">
          Add User
        </button>
      </form>

      {/* Users Table */}
    <div className="overflow-auto max-h-80">
    <table className="min-w-full bg-white border rounded">
    <thead className="bg-gray-800 text-white">
             <tr>
               <th className="p-4 text-left">Name</th>
               <th className="p-4 text-left">Email</th>
               <th className="p-4 text-left">Role</th>
               <th className="p-4 text-center">Actions</th>
             </tr>
          </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              <td className=" p-4">{`${user.firstName} ${user.lastName}`}</td>
              <td className=" p-4">{user.email}</td>
              <td className=" p-4">{user.isAdmin ? "Admin" : "User"}</td>
              <td className=" p-4 text-center space-x-2">
             
                <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageUsers;
