import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
  const value = useContext(ThemeContext);
  const { theme, dispatch } = value;

  const handleClick = () => {
    if (theme.darkTheme === false) {
      // setTheme({ ...theme, darkTheme: true });
      dispatch({ type: 'dark' });
    } else {
      // setTheme({ ...theme, darkTheme: false });
      dispatch({ type: 'light' });
    }
  };
  return (
    <button onClick={handleClick}>
      Toggle to {theme.darkTheme === false ? 'dark mode' : 'light mode'}
    </button>
  );
};

export default ThemeButton;
