import React, { useEffect, useState } from "react";

const Posts = () => {
  const [Posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        " https://jsonplaceholder.typicode.com/posts ⁠"
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
    <div>
      <h1 className="p-6 max-w-3xl mx-auto">Posts</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={fetchPosts}
      >
        Refresh
      </button>
    </div>
  );
};

export default Posts;
