import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-2 rounded-md font-medium text-lg transition ${
        theme === "white"
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-white text-black hover:bg-gray-200"
      }`}
    >
      {theme === "white" ? "Switch to Black Theme" : "Switch to White Theme"}
    </button>
  );
}

export default ThemeToggleButton;
