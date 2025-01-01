import React, { useReducer } from "react";

// 1. Define the initial state
const initialState = { count: 0 };

// 2. Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-800">Use Reducer Hook</h1>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter</h1>

      {/* Display Count */}
      <p className="text-2xl font-semibold mb-4">Count: {state.count}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
