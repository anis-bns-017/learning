import React, { useRef } from "react";
// Here’s how you can use useRef to focus an input element:

function InputFocusExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Use the ref to access the DOM element and focus it
    inputRef.current.focus();
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleFocus}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Focus the Input
      </button>
    </div>
  );
}

export default InputFocusExample;
