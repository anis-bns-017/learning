import { useState, useEffect, useRef } from "react";
// Use useRef to store the previous value of a state variable:
function PreviousStateExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // Update the ref after each render
  });

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <p className="text-lg font-medium">Current Count: {count}</p>
      <p className="text-lg font-medium text-gray-600">
        Previous Count: {prevCountRef.current}
      </p>
      <button 
        onClick={() => setCount((prev) => prev + 1)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment Count
      </button>
    </div>
  );
}

export default PreviousStateExample;
