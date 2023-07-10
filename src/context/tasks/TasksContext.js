import { createContext, useReducer } from 'react';

export const TasksContext = createContext();
export const TasksDispatchContext = createContext();

export const initialState = {
  tasks: [
    {
      id: 0,
      text: 'Visit Museum',
      done: true,
    },
    {
      id: 1,
      text: 'Visit Museum 2',
      done: false,
    },
    {
      id: 2,
      text: 'Visit Museum 3',
      done: false,
    },
  ],
};

export function tasksReducer(state, action) {
  switch (action.type) {
    case 'add_task': {
      return {
        ...state,
        tasks: [...state.tasks, action.newTask],
      };
    }
    case 'change_task': {
      return {
        ...state,
        tasks: state.tasks.map((newTask) => {
          if (newTask.id === action.task.id) {
            return action.task;
          } else {
            return newTask;
          }
        }),
      };
    }
    case 'delete_task': {
      return {
        ...state,
        tasks: state.tasks.filter((deleteTask) => deleteTask.id !== action.id),
      };
    }
    default: {
      return initialState;
    }
  }
}

const TasksProvider = (props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {props.children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
