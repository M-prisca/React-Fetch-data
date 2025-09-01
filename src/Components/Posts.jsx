import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <button
          className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={fetchPosts}
        >
          Refresh
        </button>
      </div>

      {!loading && posts.length > 0 && (
        <ul className="space-y-4">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
