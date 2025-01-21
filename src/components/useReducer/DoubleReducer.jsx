import React, { useReducer } from "react";

const initialCounterState = { count: 0 };
const initialAuthState = { isAuthenticated: false };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return { isAuthenticated: true };
    case "logout":
      return { isAuthenticated: false };
    default:
      return state;
  }
}

function DoubleReducer() {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    initialCounterState
  );
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  return (
    <div className="p-6 space-y-6 bg-gray-50 text-center items-center">
      <div>
        <h1 className="text-2xl font-bold">Counter: {counterState.count}</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => counterDispatch({ type: "increment" })}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => counterDispatch({ type: "decrement" })}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          Auth: {authState.isAuthenticated ? "Logged In" : "Logged Out"}
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={() => authDispatch({ type: "login" })}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={() => authDispatch({ type: "logout" })}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoubleReducer;
