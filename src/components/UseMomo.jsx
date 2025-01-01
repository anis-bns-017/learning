import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [searchTerm, setSearchTerm] = useState("");

  // A large array of items
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

  // Filtered items with useMemo
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-red-800">Learning Use Memo</h1>
        <h1 className="text-xl font-bold mb-6 text-red-800">It is better Hook for filtering data</h1>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Search Items</h1>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        className="px-4 py-2 mb-4 border rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filtered Items */}
      <ul className="w-full max-w-md bg-white rounded shadow">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 border-b last:border-none hover:bg-gray-100"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
}

export default UseMemoHook;
