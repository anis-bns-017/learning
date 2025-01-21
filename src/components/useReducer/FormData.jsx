import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

function reducer(state, action) { 
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "updateField", field: name, value });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Form</h1>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
        className="border border-gray-300 p-2 mb-4 w-64"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
        className="border border-gray-300 p-2 mb-4 w-64"
      />
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Reset
      </button>
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {state.name}
        </p>
        <p>
          <strong>Email:</strong> {state.email}
        </p>
      </div>
    </div>
  );
}

export default Form;
