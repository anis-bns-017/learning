import { useRef, useState } from "react";
// Storing Mutable Data Without Causing Re-Renders
function CounterExample() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // Updates the ref, but doesn't trigger a re-render
    console.log(`Count: ${countRef.current}`);
  };

  const forceRender = () => {
    setRenderCount((prev) => prev + 1); // Forces a re-render
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-red-800">Learning UseRef</h1>
      <p className="text-lg font-medium">Ref Count: {countRef.current}</p>
      <p className="text-lg font-medium">Render Count: {renderCount}</p>

      <div className="mt-4 flex gap-4">
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment Ref Count
        </button>
        <button
          onClick={forceRender}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Force Render
        </button>
      </div>
    </div>
  );
}

export default CounterExample;
