import React, { useReducer } from "react";

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unhandle action Type: ${action.type}`);
  }
}

function CounterForReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-red-900">Learning Reducer to solve complex state</h1>
      <h1 className="text-2xl font-bold">Count: {state.count}</h1>
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterForReducer;
