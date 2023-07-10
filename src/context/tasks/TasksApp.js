import AddTask from './AddTask';
import TaskList from './TaskList';
import TasksProvider from './TasksContext';

const TasksApp = () => {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
};

export default TasksApp;
