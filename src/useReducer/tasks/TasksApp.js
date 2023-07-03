import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { reducer, initialState } from './tasksReducer';

const TasksApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = (text) => {
    dispatch({
      type: 'add_task',
      newTask: {
        id: nextId++,
        text: text,
        done: false,
      },
    });
  };

  const handleChangeTask = (task) => {
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
    dispatch({ type: 'change_task', task: task });
  };

  const handleDeleteTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    dispatch({ type: 'delete_task', id: id });
  };
  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={state.tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

let nextId = 3;

export default TasksApp;
