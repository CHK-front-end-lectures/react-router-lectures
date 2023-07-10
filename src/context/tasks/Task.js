import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext';

const Task = ({ task }) => {
  const { dispatch } = useContext(TasksDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeTask = () => {
    dispatch({ type: 'change_task', task: task });
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'delete_task', id: task.id });
  };

  const toggleToSaveMode = () => {
    setIsEditing(false);
  };

  const toggleToEditMode = () => {
    setIsEditing(true);
  };

  return (
    <div className="task">
      <input type="checkbox" checked={task.done} />
      {isEditing ? (
        <>
          <input type="text" value={task.text} onChange={handleChangeTask} />
          <button onClick={toggleToSaveMode}>Save</button>
        </>
      ) : (
        <>
          <div>{task.text}</div>
          <button onClick={toggleToEditMode}>Edit</button>
        </>
      )}
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
