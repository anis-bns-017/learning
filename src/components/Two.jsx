import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ThemedText() {
  const { theme } = useContext(ThemeContext);

  return (
    <p className="text-lg font-semibold text-center">
      The current theme is {" "}
      <span className="font-bold">{theme === "white" ? "White" : "Black"}</span>
      .
    </p>
  );
}

export default ThemedText;
