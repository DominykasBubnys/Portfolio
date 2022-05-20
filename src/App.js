import React, { useCallback, useState } from "react";
import classes from "./styles/App.module.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Card from "./components/Card";
import ProjectsList from "./components/ProjectsList";
import {ThemeContext} from "./components/Context/ThemeContext";
import Additional from "./components/Additional";
import "./styles/global.css"

const App = () => {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    setDarkTheme(!darkTheme)
  }, [darkTheme])

  return <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
    <div className={darkTheme ? classes.container_dark : classes.container}>
      <Header />
      <Intro />

      <Card name="Projects">
        <ProjectsList />
      </Card>

      <Card name={`Tech stack & certificates`}>
        <Additional />
      </Card>

    </div>
  </ThemeContext.Provider>;
};

export default App;
