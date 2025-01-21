import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "clear":
      return [];
    default:
      throw new Error("Unknown action type");
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "add", text });
      setText("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex space-x-4 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          className="border border-gray-300 p-2"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Add
        </button>
        <button
          onClick={() => dispatch({ type: "clear" })}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Clear All
        </button>
      </div>
      <ul className="list-disc">
        {state.map((todo) => (
          <li key={todo.id} className="text-gray-700">
            {todo.text}
            <button
              onClick={() => dispatch({ type: "remove", id: todo.id })}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
