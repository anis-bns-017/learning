import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: Example (not needed for fetch)
    return () => console.log("Component unmounted or effect re-run");
  }, []); // Runs only once on mount

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User List</h1>

      {loading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : (
        <ul className="bg-white p-6 rounded-lg shadow-md w-96">
          {users.map((user) => (
            <li
              key={user.id}
              className="border-b border-gray-200 py-2 text-gray-50 last:border-b-0 p-3 bg-slate-500 rounded-md"
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchUsers;
