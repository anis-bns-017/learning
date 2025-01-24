import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className={`flex justify-between m-3 items-center border-b p-2 ${todo.priority === 'high' ? 'bg-red-100' : todo.priority === 'medium' ? 'bg-yellow-100' : ''}`}>
      <div>
        <h2 className="font-bold">{todo.title}</h2>
        <p>Due: {todo.dueDate}</p>
        <p>Priority: {todo.priority}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
    </li>
  );
};

export default TodoItem;
