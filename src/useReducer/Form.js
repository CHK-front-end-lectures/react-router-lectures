import React, { useReducer } from 'react';
import { reducer, initialState } from './reducer';

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'increment_counter' });
  };
  const handleChangeName = (evt) => {
    dispatch({ type: 'changed_name', newName: evt.target.value });
  };
  return (
    <>
      <input type="text" value={state.name} onChange={handleChangeName} />
      <button onClick={handleIncrement}>Increment</button>
      <div>The number is: {state.counter}</div>
      <div>The name is: {state.name}</div>
    </>
  );
};

export default Form;
