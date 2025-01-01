import React, { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return { name: "", email: "" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function FormExample() {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "updateField", field: name, value });
  };

  return (
    <form className="p-6 bg-gray-100 flex flex-col gap-4 max-w-sm mx-auto">
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => dispatch({ type: "reset" })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormExample;
