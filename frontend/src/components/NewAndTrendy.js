import React, { useEffect, useState } from "react";

const NewAndTrendy = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>No posts available. Please add some content!</div>;
  }

  return (
    <div className="new-trendy">
      <h2>New & Trendy</h2>
      <div className="grid">
        {posts.map((post) => (
          <div className="card" key={post._id}>
            <img src="/path-to-your-image.jpg" alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAndTrendy;
