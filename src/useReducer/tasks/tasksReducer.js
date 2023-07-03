export function reducer(state, action) {
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
  ]
};
