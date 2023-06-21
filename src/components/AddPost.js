import React, { useEffect, useState } from 'react';

const AddPost = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.post) { // null
      props.editPost(title, body);
    } else {
      props.addPost(title, body);
    }
    setTitle('');
    setBody('');
  };

  useEffect(() => {
    if (props.post) {
      setTitle(props.post.title);
      setBody(props.post.body);
    }
  }, [props.post]);

  return (
    <div className="form-wrapper">
      <form className="add-post-form">
        <h3>Add new post</h3>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="title">Body</label>
          <textarea
            value={body}
            onChange={(evt) => setBody(evt.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
