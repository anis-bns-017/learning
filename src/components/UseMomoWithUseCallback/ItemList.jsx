import React from "react";

function ItemList({ items, onItemClick }) {
  return (
    <ul className="w-full max-w-md bg-white rounded shadow">
      {items.length > 0 ? (
        items.map((item, index) => (
          <li
            key={index}
            onClick={() => onItemClick(item)}
            className="px-4 py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-500">No results found</li>
      )}
    </ul>
  );
}

export default ItemList;
