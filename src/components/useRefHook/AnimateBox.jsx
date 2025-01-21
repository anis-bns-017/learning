import React, { useRef } from "react";

const AnimateBox = () => {
  const boxRef = useRef(null);

  const moveRight = () => {
    if (boxRef.current) {
      boxRef.current.style.transform = "translateX(900px)";
      boxRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  };

  return (
    <div className="p-4">
      <div
        ref={boxRef}
        className="w-16 h-16 bg-blue-500 rounded"
      ></div>
      <button
        onClick={moveRight}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Move Right
      </button>
    </div>
  );
};

export default AnimateBox;
