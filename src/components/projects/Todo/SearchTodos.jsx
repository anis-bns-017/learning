import React from 'react';

const SearchTodos = ({ searchTerm, setSearchTerm }) => {
  return (
    <input 
      type="text" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      placeholder="Search tasks..." 
      className="border p-2 rounded mb-4 w-full"
    />
  );
};

export default SearchTodos;
