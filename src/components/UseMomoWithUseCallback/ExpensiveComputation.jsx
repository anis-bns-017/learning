import React, { useState, useMemo } from "react";

function ExpensiveComputation() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Performing expensive calculation...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += num;
    }
    return total;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      <h2 className="mb-4 text-gray-600">Result: {memoizedValue}</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Increment Count
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
  );
}

export default ExpensiveComputation;
