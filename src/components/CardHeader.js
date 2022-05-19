import React, { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import classes from "../styles/CardHeader.module.css";

const CardHeader = ({text}) => {

    const {darkTheme} = useContext(ThemeContext);
    console.log("dartheme: ", darkTheme)

  return (
    <div className={classes.container}>
        <h1 className={classes.h1}>
            {text}
        </h1>
    </div>
  )
}

export default CardHeader