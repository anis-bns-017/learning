import React from 'react';

const FilterTodos = ({ filter, setFilter }) => {
  return (
    <select 
      value={filter} 
      onChange={(e) => setFilter(e.target.value)} 
      className="border p-2 rounded mb-4"
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default FilterTodos;
