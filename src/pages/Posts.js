import { useState, useEffect } from 'react';
import AddPost from '../components/AddPost';

// kthen Promise (success, rejected)
// async, await
// swagger

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts') // GET request
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        setError(error.message);
        console.log('error', error.message);
      });
  };

  const addNewPost = (title, body) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // PUT, DELETE
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([data, ...posts]);
      });
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setPosts(posts.filter((post) => post.id !== id));
          console.log('eshte fshi');
          // DElete post
        } else {
          setError('This operation');
          console.log('Nuk eshte fshi');
        }
      })
      .catch();
  };

  if (error) {
    <div>Error while fetching...</div>;
  }

  return (
    <>
      <AddPost addPost={addNewPost} />
      <div className="posts-container">
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id} className="post">
                <h1>{post.title}</h1>
                <div>{post.body}</div>
                <div>Created by: {post.userId}</div>
                <button type="button" onClick={() => deletePost(post.id)}>
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
