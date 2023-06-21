import { useState, useEffect } from 'react';
import AddPost from '../components/AddPost';

// kthen Promise (success, rejected)
// async, await
// swagger

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  // const getPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts') // GET request
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       console.log('error', error.message);
  //     });
  // };

  const getPosts = async () => {
    try {
      let response = await fetch('https://jsonplaceholde.typicode.com/posts'); // null
      let data = await response.json();
      setPosts(data);
    } catch {
      setError(error.message);
      console.log('eshte ekzekutu ne catch', error.message);
    } finally {
      alert('Ekzekutimi perfundoj');
    }

    // fetch('https://jsonplaceholder.typicode.com/posts') // GET request
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     console.log('error', error.message);
    //   });
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

  const editPost = (title, body) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${activePost.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: activePost.id,
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setPosts(
          posts.map((post) => {
            if (post.id === activePost.id) {
              return {
                id: data.id,
                title: data.title,
                body: data.body,
                userId: data.userId,
              };
            } else {
              return post;
            }
          })
        );
      });
    setActivePost(null);
  };

  if (error) {
    <div>Error while fetching...</div>;
  }

  return (
    <>
      <AddPost addPost={addNewPost} editPost={editPost} post={activePost} />
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
                <button type="button" onClick={() => setActivePost(post)}>
                  Edit
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
