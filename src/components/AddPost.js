import React, { useState } from 'react';

const AddPost = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addPost(title, body);
    setTitle('');
    setBody('');
  };

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
