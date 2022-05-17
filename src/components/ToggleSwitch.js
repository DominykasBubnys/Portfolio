import React, { useContext } from 'react'
import classes from "../styles/ToggleSwitch.module.css"
import { ThemeContext } from './Context/ThemeContext';

const ToggleSwitch = () => {

  const theme = useContext(ThemeContext);

  const onToggleTheme = () => {
    theme.toggleTheme()
  }

  return (
    <label  className={classes.switch}>
        <input type="checkbox" onClick={onToggleTheme}/>
        <span className={classes.slider} />
    </label>
  )
}

export default ToggleSwitch