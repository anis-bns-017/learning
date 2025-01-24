import React from 'react';

const TaskList = ({ tasks, setTasks }) => {
  // Handle drag start
  const handleDragStart = (event, taskIndex) => {
    event.dataTransfer.setData('taskIndex', taskIndex); // Store the task index being dragged
  };

  // Allow drop by preventing default behavior
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle drop and reorder tasks
  const handleDrop = (event, dropIndex) => {
    const draggedTaskIndex = event.dataTransfer.getData('taskIndex');
    const newTasks = [...tasks];
    const [draggedTask] = newTasks.splice(draggedTaskIndex, 1); // Remove the dragged task
    newTasks.splice(dropIndex, 0, draggedTask); // Insert at new position
    setTasks(newTasks); // Update the state
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add a task to get started!</p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
            className="p-4 border mb-2 rounded shadow-md bg-white cursor-move"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{task.name}</p>
                <p className="text-gray-600">{task.category}</p>
              </div>
              <button
                onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
