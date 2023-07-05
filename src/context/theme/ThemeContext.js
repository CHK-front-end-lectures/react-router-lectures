import { createContext, useReducer, useState } from 'react';

export const ThemeContext = createContext();

const initialState = {
  darkTheme: false
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'light': {
      return {
        darkTheme: false,
      };
    }
    case 'dark': {
      return {
        darkTheme: true,
      };
    }
    default:
      return initialState;
  }
};

const ThemeProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState);
  // const [theme, setTheme] = useState(initialState);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
