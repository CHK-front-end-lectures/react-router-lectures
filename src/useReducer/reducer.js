export function reducer(state, action) {
  switch (action.type) {
    case 'increment_counter': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'changed_name': {
      return {
        ...state,
        name: action.newName,
      };
    }
    default: {
      return {
        counter: 0,
      };
    }
  }
}

export const initialState = { counter: 0, name: 'Egzon' };
