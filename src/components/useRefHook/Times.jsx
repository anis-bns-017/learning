import React, { useState, useRef } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple timers
    timerRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setCount(0); // Reset the timer count
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Timer By using UseRef</h1>
      <h1 className="text-2xl font-bold text-center">Timer: {count}s</h1>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
