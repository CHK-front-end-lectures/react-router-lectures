import React from 'react';
import SubChildComponent from './SubChildComponent';

const ChildComponent = (props) => {
  return (
    <>
      <div>ChildComponent</div>
      <SubChildComponent />
    </>
  );
};

export default ChildComponent;
