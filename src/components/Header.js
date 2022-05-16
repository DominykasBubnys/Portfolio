import React from 'react'
import classes from "../styles/Header.module.css";
import ToggleSwitch from './ToggleSwitch';


const Header = () => {


  return (
    <div className={classes.container}>
      <ToggleSwitch />
    </div>
  )
}

export default Header