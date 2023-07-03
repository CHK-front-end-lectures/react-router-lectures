import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button onClick={() => onAddTask(text)}>Submit</button>
    </>
  );
};

export default AddTask;
