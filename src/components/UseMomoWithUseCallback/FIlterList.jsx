import React, { useState, useMemo, useCallback } from "react";
import ItemList from "./ItemList";

function FilteredList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);

  const items = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "Redux",
    "Express",
    "MongoDB",
    "Vue",
    "Angular",
    "Next.js",
    "Svelte",
  ];

  // Memoized filtered items
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  // Memoized callback for logging an item
  const handleItemClick = useCallback((item) => {
    console.log(`Item clicked: ${item}`);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-700">
        Learning UseMemo with useCallback
      </h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Optimized Item List
      </h1>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        className="px-4 py-2 mb-4 border rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Count Example */}
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Increment Count: {count}
      </button>

      {/* Child Component */}
      <ItemList items={filteredItems} onItemClick={handleItemClick} />
    </div>
  );
}

export default FilteredList;
