import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import { clearCart } from '../../store/slices/cartSlice';
import { toast } from 'react-toastify';
import { toastStyle } from '../../utils/toastStyle';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
    const dispatch = useDispatch();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
    };
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success('Cart cleared successfully!', toastStyle);
    }

   

    return (
        <div className="min-h-screen bg-black text-white p-8 flex justify-center">
            <div className="flex flex-col md:flex-row  w-full max-w-5xl">
                {/* Left Side - Cart Items */}
                
                <div className={`${cartItems.length == 0? "md:w-full":"md:w-2/3"} mr-6 bg-gray-800 p-6 rounded-lg shadow-lg mb-10 w-full `}>

               {cartItems.length > 0 && (
                <div className='flex justify-between items-center'>
                <h2 className="text-xl font-bold mb-4">Total Products in Cart: {cartItems.length}</h2>
               <button onClick={handleClearCart} className='text-white bg-red-600/75  rounded-md p-2 m-4'>clear cart</button> 
                </div>
               )}

                   <ItemCard items={cartItems} />
                   {cartItems.length === 0 && <>
                   <p className="text-center text-2xl mt-6 font-bold text-blue-500">No items in cart </p>
                   <p className='text-center text-2xl '>Add some items to cart </p>
                   
                   </>}

                </div>


                {/* Right Side - Order Summary */}

              {cartItems.length > 0 &&  (  <div className=" w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg h-2/3">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="text-lg mb-2">
                        <span>Subtotal</span>
                        <span className="float-right">${calculateTotal()}</span>
                    </div>
                    <div className="text-lg mb-2">
                        <span>Shipping + Tax</span>
                        <span className="float-right text-blue-500 ">Calculate shipping</span>
                    </div>
                    <div className="text-lg mb-4">
                        <span>Coupon Code</span>
                        <span className="float-right text-blue-500 ">Add coupon code</span>
                    </div>
                    <div className="text-xl font-bold mb-6">
                        <span>Total</span>
                        <span className="float-right">${calculateTotal()}</span>
                    </div>
                    <button className="w-full bg-blue-500 py-2 rounded-lg font-semibold text-white hover:bg-blue-600">Pay</button>
                    <Link  to="/products">
                    <p className="text-center mt-4 text-sm text-blue-500 underline">or Continue Shopping</p>

                    </Link>
                </div>)}

            </div>
        </div>
    );
};

export default CartPage;