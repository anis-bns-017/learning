import React, { useState, useEffect } from "react";

function WindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl font-bold">
        Current Window Width: {windowWidth}px
      </h1>
    </div>
  );
}

export default WindowResize;
