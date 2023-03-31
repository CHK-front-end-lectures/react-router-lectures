import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div>Error</div>
      <p>404 page</p>
      <div>
        <a href="/">Back to home</a>
      </div>
      <Link to="/">Back to home with Link component</Link>
    </>
  );
};

export default Error;
