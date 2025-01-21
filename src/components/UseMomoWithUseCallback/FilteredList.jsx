import React, { useState, useMemo } from "react";

const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function FilteredListWithUseMemo() {
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    return data.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
        className="border border-gray-300 p-2 mb-4 rounded"
      />
      <ul className="list-disc">
        {filteredData.slice(0, 10).map((item) => (
          <li key={item} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredListWithUseMemo;
