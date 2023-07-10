import React, { useContext } from 'react';
import Task from './Task';
import { TasksContext } from './TasksContext';

const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  console.log('tasks', tasks);
  return (
    <>
      {tasks.length &&
        tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
    </>
  );
};

export default TaskList;
