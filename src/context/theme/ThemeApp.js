import React from 'react';
import ThemeProvider from './ThemeContext';
import ThemeContainer from './ThemeContainer';

const ThemeApp = () => {
  return (
    <ThemeProvider>
      <ThemeContainer />
    </ThemeProvider>
  );
};

export default ThemeApp;
