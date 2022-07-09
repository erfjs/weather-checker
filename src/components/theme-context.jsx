import React from 'react';
import PropTypes from 'prop-types';


export const ThemeContext = React.createContext();

export const ThemeProvider = ({  children }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem('color')||'dark');
  
  
  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);
    localStorage.setItem('color', rawTheme);
  };

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
