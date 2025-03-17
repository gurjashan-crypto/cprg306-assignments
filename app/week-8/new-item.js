"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: crypto.randomUUID(), // Generate unique ID
      name,
      category,
      quantity,
    };

    onAddItem(item); // Correctly calling the prop function

    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <div className="flex justify-center items-center py-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-8 rounded-xl shadow-2xl w-[380px] bg-[#1e293b] hover:bg-[#334155] transition duration-300"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Add New Item</h2>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          required
          className="w-full p-3 mb-4 text-gray-800 bg-white border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center w-[160px] bg-white p-2 rounded-md justify-between">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-md disabled:bg-gray-300 hover:bg-gray-400 transition duration-200"
            >
              -
            </button>
            <span className="text-black font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              +
            </button>
          </div>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 w-[160px] text-gray-800 bg-white border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Produce">Produce</option>
            <option value="Meat">Meat</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
