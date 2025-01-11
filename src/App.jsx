import React from "react";
import GraphViews from "./components/barchart/BarChart";
import FilteredList from "./components/UseMomoWithUseCallback/FIlterList";
import Timer from "./components/useRefHook/Times";

const App = () => {
  return (
    <>
      <FilteredList />
      <Timer />
      <GraphViews />
    </>
  );
};

export default App;
