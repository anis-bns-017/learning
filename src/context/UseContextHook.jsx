import React, { useContext } from "react";
import { GlobalContext } from "./Index";

const UseContextHook = () => {
  const getContextValue = useContext(GlobalContext);
  console.log(getContextValue);

  return (
    <div>
      <p>Use Context</p>
      <button>Change Theme</button>
    </div>
  );
};

export default UseContextHook;
