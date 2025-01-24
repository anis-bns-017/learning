import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import FilterTodos from "./FilterTodos";
import TodoList from "./TodoList";
import SearchTodos from "./SearchTodos";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Load todos from local storage on mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on selected filter and search term
  const filteredTodos = todos.filter((todo) => {
    const matchesFilter = filter === "all" || todo.priority === filter;
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <FilterTodos filter={filter} setFilter={setFilter} />
      <SearchTodos searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
