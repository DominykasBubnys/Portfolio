import React, { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import classes from "../styles/CardHeader.module.css";

const CardHeader = ({text}) => {

  const {darkTheme} = useContext(ThemeContext);

  return (
    <div className={classes.container}>
      <h1 className={darkTheme ? classes.h1 : classes.h1_bright}>
        {text}
      </h1>
    </div>
  )
}

export default CardHeader