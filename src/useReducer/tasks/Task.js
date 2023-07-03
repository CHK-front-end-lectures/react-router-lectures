import { useState } from 'react';

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="task">
      <input type="checkbox" checked={task.done} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={task.text}
            onChange={(evt) => {
              onChangeTask({
                ...task,
                text: evt.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <div>{task.text}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
