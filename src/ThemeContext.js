import React, {useState} from 'react';

export const ThemeContext = React.createContext("dark")

const ThemeProvider = props => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>toogle theme</button>
      {props.children}
    </ThemeContext.Provider>
  )
}

const ThemeConsumer = ThemeContext.Consumer

export {
  ThemeProvider, ThemeContext, ThemeConsumer
}