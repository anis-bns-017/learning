import React, { useState, useEffect, useCallback } from "react";

const API_KEY = "YOUR_API_KEY"; // Replace this with your OpenWeatherMap API key

function AmazingTool() {
  // To-Do State
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Notes State
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes || "";
  });

  // Weather State
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Dhaka"); // Default city
  const [loading, setLoading] = useState(false);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  // Fetch Weather Data
  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
          city: data.name,
        });
      } else {
        setWeather(null);
        console.log("City not found!");
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
    setLoading(false);
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  // Add Task
  const addTask = useCallback((task) => {
    if (task.trim() !== "") {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), text: task, completed: false },
      ]);
    }
  }, []);

  // Toggle Task Completion
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Delete Task
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Enhanced Productivity Tool
      </h1>

      {/* Weather Widget */}
      <div className="w-full max-w-lg bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Live Weather</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 border border-gray-300 p-2 rounded mr-2"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : weather ? (
          <div>
            <p className="text-lg font-bold">{weather.city}</p>
            <p className="text-sm text-gray-500">
              {weather.description.charAt(0).toUpperCase() +
                weather.description.slice(1)}
            </p>
            <p className="text-2xl font-bold">{weather.temperature}°C</p>
          </div>
        ) : (
          <p className="text-gray-600">Weather data unavailable</p>
        )}
      </div>

      {/* To-Do List */}
      <div className="w-full max-w-lg bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
        <div className="flex mb-4">
          <input
            type="text"
            id="new-task"
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 p-2 rounded mr-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <button
            onClick={() => {
              const input = document.getElementById("new-task");
              addTask(input.value);
              input.value = "";
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-2 rounded ${
                task.completed ? "bg-green-100 line-through" : "bg-gray-100"
              }`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className="cursor-pointer flex-1"
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Notes Section */}
      <div className="w-full max-w-lg bg-white shadow rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your notes here..."
          rows="5"
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
      </div>
    </div>
  );
}

export default AmazingTool;
