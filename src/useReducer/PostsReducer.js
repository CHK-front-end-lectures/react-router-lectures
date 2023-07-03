import { useState, useEffect, useReducer } from 'react';
import { client } from '../axios/client';
import AddPost from '../components/AddPost';
import { initialState, reducer } from './postReducer';

const PostsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState([]);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      let response = await client.get('');
      dispatch({ type: 'get_posts', data: response.data });
    } catch (error) {
      setError(error.message);
    }
  };

  const addNewPost = async (title, body) => {
    let response = await client.post('', {
      title: title,
      body: body,
      userId: Math.random(),
    });
    dispatch({ type: 'add_post', data: response.data });
  };

  const deletePost = async (id) => {
    let response = await client.delete(`/${id}`);
    if (response.status === 200) {
      dispatch({ type: 'delete_post', id: id }); // action.id
    } else {
      setError(`This operation couldn't resolve!`);
    }
  };

  const editPost = async (title, body) => {
    let response = await client.put(`/${activePost.id}`, {
      id: activePost.id,
      title: title,
      body: body,
      userId: 1,
    });
    dispatch({ type: 'edit_post', data: response.data });
    setActivePost(null);
  };

  if (error) {
    <div>Error while fetching...</div>;
  }

  return (
    <>
      <AddPost addPost={addNewPost} editPost={editPost} post={activePost} />
      <div className="posts-container">
        {state.posts &&
          state.posts.map((post) => {
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

export default PostsReducer;
