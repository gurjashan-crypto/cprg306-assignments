import Item from "./item.js";
import { useState } from "react";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div className="bg-[#1f2937] p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <label htmlFor="sort" className="text-white text-lg font-semibold">
          Sort by:
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 focus:outline-none ${
              sortBy === "name"
                ? "bg-[#F97316] shadow-md"
                : "bg-[#C2410C] hover:bg-[#F97316]"
            }`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 focus:outline-none ${
              sortBy === "category"
                ? "bg-[#F97316] shadow-md"
                : "bg-[#C2410C] hover:bg-[#F97316]"
            }`}
          >
            Category
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
