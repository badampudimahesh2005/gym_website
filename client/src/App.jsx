
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



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowProduct from "./components/products/ShowProduct";
import Cart from "./components/Cart";
import Signup from "./components/Signup";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Router>
        <Navbar />
        <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products/:id" element={<ShowProduct />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<WorkoutPlans />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Signup />} />

        </Routes>
        <Footer />
      </Router>
      )}
    </div>
  );
}

export default App;
