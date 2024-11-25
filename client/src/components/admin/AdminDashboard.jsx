import React, { useState } from "react";
import ManageUsers from "./ManageUsers";
import ManageProducts from "./ManageProducts";
import AddAdmin from "./AddAdmin";


const AdminDashboard= () => {
  const [activeTab, setActiveTab] = useState("manageUsers");

  return (
    <div className=" h-screen  flex  bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold bg-gray-900 text-center">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <button
            onClick={() => setActiveTab("manageUsers")}
            className={`w-full text-left px-4 py-2 rounded ${
              activeTab === "manageUsers"
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
          >
            Manage Users
          </button>

          <button
          onClick={() => setActiveTab("manageProducts")}
          className={`w-full text-left px-4 py-2 rounded ${
            activeTab === "manageProducts"
              ? "bg-blue-600"
                : "hover:bg-gray-700"
          }`}
        >
          Manage Products
        </button>

        <button
          onClick={() => setActiveTab("addAdmin")}
          className={`w-full text-left px-4 py-2 rounded ${ 
            activeTab === "addAdmin"
              ? "bg-blue-600"
                : "hover:bg-gray-700"
          }`}
        >
          Add Admin
        </button>

          
          
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-4 py-2 rounded ${
              activeTab === "settings"
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
          >
            Settings
          </button>
        </nav>
        <div className="p-4 border-t border-gray-700 text-center">
          <button className="w-full bg-red-600 px-4 py-2 rounded hover:bg-red-500">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "manageUsers" && <ManageUsers/>}
        {activeTab === "settings" && <Settings />}
        {activeTab === "manageProducts" && <ManageProducts />}
        {activeTab === "addAdmin" && <AddAdmin />}
      </main>
    </div>
  );
};



const Settings = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <p>Settings content goes here...</p>
  </div>
);

export default AdminDashboard;
