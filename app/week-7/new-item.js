"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-8 rounded-lg shadow-xl bg-white w-full max-w-lg mx-auto"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add a New Item</h2>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          required
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        
        <div className="flex items-center justify-between w-full mb-6">
      
          <div className="flex items-center space-x-4 bg-gray-100 px-6 py-3 rounded-md">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
            >
              −
            </button>
            <span className="text-xl font-semibold text-gray-700">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(Math.min(20, quantity + 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              +
            </button>
          </div>

          
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            <option value="produce">Produce</option>
            <option value="meat">Meat</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
