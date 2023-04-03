import { useState, useEffect } from 'react';

// kthen Promise (success, rejected)

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // GET request
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        setError(error.message);
        console.log('error', error.message);
      });
  }, []);

  if (error) {
    <div>Error while fetching...</div>;
  }

  return (
    <>
      <div className="posts-container">
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id} className="post">
                <h1>{post.title}</h1>
                <div>{post.body}</div>
                <div>Created by: {post.userId}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
