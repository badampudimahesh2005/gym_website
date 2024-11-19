// src/components/SuccessModal.jsx
import React from 'react';

const SuccessPayment = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 scale-100 opacity-100">
                <h2 className="text-2xl font-bold text-center text-green-600">Payment Successful!</h2>
                <p className="mt-2 text-center text-gray-700">
                    Thank you for your purchase! Your order has been placed successfully.
                </p>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPayment;