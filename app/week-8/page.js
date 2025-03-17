"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
   
    const cleanedItemName = itemName.split(",")[0].replace(/[^\w\s]/g, "").trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  return (
    <main className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          Shopping List
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex flex-col space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          
          <div className="bg-[#1A202C] p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4 text-purple-300">Meal Ideas</h2>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
