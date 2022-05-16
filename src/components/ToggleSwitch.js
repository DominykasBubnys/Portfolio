import React from 'react'
import classes from "../styles/ToggleSwitch.module.css"

const ToggleSwitch = () => {



  return (
    <label className={classes.switch}>
        <input type="checkbox" />
        <span className={classes.slider} />
    </label>
  )
}

export default ToggleSwitch