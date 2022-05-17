import React, { useCallback, useState } from "react";
import classes from "./styles/App.module.css";
import Header from "./components/Header";
import {ThemeContext} from "./components/Context/ThemeContext";

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setDarkTheme(!darkTheme)
  }, [darkTheme])

  return <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
    <div className={darkTheme ? classes.container_dark : classes.container}>
      < Header />
    
    </div>
  </ThemeContext.Provider>;
};

export default App;
