
"use client";
import React, { useState } from 'react';
import Item from './item'; 
import items from './items.json'; 

const ItemList = () => {
  
  const [sortBy, setSortBy] = useState("name");

  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); 
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category); 
    }
    return 0;
  });

  return (
    <main>
      
      <div>
        <button
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "lightgreen" : "white" }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "lightgreen" : "white" }}
        >
          Sort by Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id} 
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </main>
  );
};

export default ItemList;
