import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Importing a spinner component

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myData = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    console.log(myData);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader color="#000" loading={loading} size={100} />
          <p className="ml-4">Loading...</p>
        </div>
      ) : (
        <ul className="list-disc pl-5">
          {data.slice(0, 10).map((post) => (
            <li key={post.id} className="text-gray-700">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
