import React, { useState } from 'react';

function TaskManager() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
      {/* <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} /> */}
    </div>
  );
}

export default TaskManager;
