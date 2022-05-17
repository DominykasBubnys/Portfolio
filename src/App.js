import React, { useCallback, useState } from "react";
import classes from "./styles/App.module.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Projects from "./components/Projects";
import {ThemeContext} from "./components/Context/ThemeContext";
import Additional from "./components/Additional";

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setDarkTheme(!darkTheme)
  }, [darkTheme])

  return <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
    <div className={darkTheme ? classes.container_dark : classes.container}>
      <Header />
      <Intro />

      <Card name="Projects">
        <Projects />
      </Card>

      <Card name={`Tech stack & certificates`}>
        <Additional />
      </Card>

    </div>
  </ThemeContext.Provider>;
};

export default App;
