import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext';

const AddTask = () => {
  const dispatch = useContext(TasksDispatchContext);
  const [text, setText] = useState('');

  const handleAddTask = () => {
    dispatch({
      type: 'add_task',
      newTask: {
        id: nextId++,
        text: text,
        done: false,
      },
    });
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button onClick={handleAddTask}>Submit</button>
    </>
  );
};

let nextId = 3;

export default AddTask;
