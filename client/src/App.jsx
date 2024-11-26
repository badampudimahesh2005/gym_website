
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import LandingPage from "./components/landingpage/LandingPage";
import Products from "./components/products/Products";
import About from "./components/About";
import Coach from "./components/Coach";
import WorkoutPlans from "./components/WorkoutPlans";
import Footer from "./components/Footer";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowProduct from "./components/products/ShowProduct";
import Cart from "./components/cart/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import { setUserData } from '../src/store/slices/userSlice';
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn =  useSelector((state) => state.user.isAuthenticated);
  const {isAdmin} = useSelector((state) => state.user);

  
  const dispatch = useDispatch();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const ProtectedRoute = () => {
   const { isAuthenticated } = useSelector((state) => state.user);
    return isAuthenticated ? <Outlet />: <Navigate  to="/login" />;
  };

  
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  
    if (isAuthenticated) {
      const userData = sessionStorage.getItem('userData');
      if (userData) {
       
        dispatch(setUserData(JSON.parse(userData))); // Dispatch action to set user data in Redux
      }
    }
  }, [dispatch]);


  return (
    <div className="App">
    <ToastContainer />

      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Router>
        <Navbar />
        <Routes>

          {/* unauthorized routes */}
          {
            !isLoggedIn && (
              <>
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </>
            )
          }

          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/about" element={<About />} />

          

          {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/register" element={<Navigate to="/" />} />
          <Route path="/login" element={<Navigate to="/" />} />


          {!isAdmin ? (
            <>
            <Route path="/admin/dashboard" element={<Navigate to="/" />} />
            <Route path="/add-product" element={<Navigate to="/" />} />
            <Route path="/update-product/:id" element={<Navigate to="/" />} />
            <Route path="/products/:id" element={<ShowProduct />} />
            <Route path="/products" element={<Products />} />
           <Route path="/cart" element={<Cart />} />
            <Route path="/plans" element={<WorkoutPlans />} />
            </>) : (
              <>
           <Route path="/add-product" element={<AddProduct />} />
           <Route path="/admin/dashboard" element={<AdminDashboard />} />
           <Route path="/update-product/:id" element={<UpdateProduct />} />
           <Route path="/products/:id" element={<ShowProduct />} />
           <Route path="/products" element={<Products />} />
           <Route path="/plans" element={<WorkoutPlans />} />

              </>
            )

          }


          </Route>


        

        </Routes>
        <Footer />
      </Router>
      )}
    </div>
  );
}

export default App;
