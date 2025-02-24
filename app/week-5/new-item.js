"use client";

import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleQuantityChange = (action) => {
    if (action === "increment" && quantity < 20) {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert(`Error: Quantity cannot be ${action === "increment" ? "greater than 20" : "less than 1"}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, category, quantity };

    alert(`Added item: ${name}, Category: ${category}, Quantity: ${quantity}`);
    console.log(item);

    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-8 rounded-xl shadow-2xl w-[350px] bg-white"
      >
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
          className="w-full p-3 mb-6 text-gray-800 bg-gray-200 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl w-[160px] justify-between">
            <button
              type="button"
              onClick={() => handleQuantityChange("decrement")}
              disabled={quantity === 1}
              className="w-10 h-10 flex items-center justify-center bg-red-400 text-white rounded-full disabled:bg-gray-300"
            >
              -
            </button>
            <span className="text-l font-semibold text-gray-800">{quantity}</span>
            <button
              type="button"
              onClick={() => handleQuantityChange("increment")}
              disabled={quantity === 20}
              className="w-10 h-10 flex items-center justify-center bg-green-400 text-white rounded-full"
            >
              +
            </button>
          </div>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 w-[200px] text-gray-800 bg-gray-200 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          className="w-full p-4 text-white bg-blue-600 rounded-l hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}




