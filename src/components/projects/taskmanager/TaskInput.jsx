import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    if (taskName.trim() === '' || taskCategory.trim() === '') {
      alert('Please fill out all fields before adding a task.');
      return;
    }

    // Create a new task object
    const newTask = {
      name: taskName,
      category: taskCategory,
    };

    addTask(newTask); // Pass the new task to the parent function
    setTaskName(''); // Clear the input fields
    setTaskCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <div className="mb-4">
        <label htmlFor="taskName" className="block font-medium mb-2">
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter task name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="taskCategory" className="block font-medium mb-2">
          Task Category
        </label>
        <input
          type="text"
          id="taskCategory"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter task category"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
