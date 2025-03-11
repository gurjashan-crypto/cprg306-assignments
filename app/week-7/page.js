"use client";

import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import itemsData from './items.json'; 

const Page = () => {
  
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
     
      <h1 className="text-4xl font-bold text-black-600 mb-8">Shopping List</h1>

      
      <div className="w-half max-w-lg p-6 bg-white rounded-lg shadow-lg mb-8">
        <NewItem onAddItem={handleAddItem} />
      </div>

      
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Page;
