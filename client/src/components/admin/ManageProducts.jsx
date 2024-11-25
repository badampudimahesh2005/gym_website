import { useEffect, useState } from "react";
import apiClient from "../../lib/apiClient";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";


const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/api/admin/products", {withCredentials:true});
      setProducts(response.data);

    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleDeleteProduct = async(id)=>{
    try {
      const response = await apiClient.delete(`/api/products/${id}`);
      fetchProducts();  
  } catch (error) {
      console.error("Failed to delete product:", error);
  }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  
    return (

      <div>
        {/* Add Product Component */}
        <AddProduct onProductAdded={fetchProducts} />

        <h2 className="text-xl font-bold mb-4">Products</h2>
        
        <div className="overflow-auto max-h-72">
          <table className="min-w-full bg-white border rounded">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Stock</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{product.name} </td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.inStock}</td>
                  <td className="p-4 text-center space-x-2">
                    <Link to={`/update-product/${product._id}`}>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
                      Edit
                    </button>
                    </Link>
                    <button onClick={()=>{handleDeleteProduct(product._id)}} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500">
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

export default ManageProducts;