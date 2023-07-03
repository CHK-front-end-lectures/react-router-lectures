import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
      {tasks &&
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onChangeTask={onChangeTask}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
    </>
  );
};

export default TaskList;
