import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    const newTodo = {
      id: uuidv4(),
      title,
      dueDate: format(new Date(dueDate), 'yyyy-MM-dd'),
      priority,
    };
    addTodo(newTodo);
    setTitle('');
    setDueDate('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task Title" 
        className="border p-2 rounded mr-2"
      />
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        className="border p-2 rounded mr-2"
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)} 
        className="border p-2 rounded mr-2"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Todo</button>
    </form>
  );
};

export default AddTodo;
