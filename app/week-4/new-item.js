"use client";
import { useState } from "react";

export default function Newtem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg w-64 border border-gray-200">
            <p className="text-3xl font-bold text-gray-800 mb-4">{quantity}</p>
            <div className="flex gap-4">
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className={`px-5 py-2 font-bold rounded-lg shadow-md transition duration-300 
                        ${quantity === 20 ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                                          : "bg-green-500 hover:bg-green-400 active:bg-green-600 text-white"}`}
                >
                    +
                </button>
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className={`px-5 py-2 font-bold rounded-lg shadow-md transition duration-300 
                        ${quantity === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                                         : "bg-red-500 hover:bg-red-400 active:bg-red-600 text-white"}`}
                >
                    -
                </button>
            </div>
        </div>
    );
}
