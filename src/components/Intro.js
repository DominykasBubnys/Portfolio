import React, { useContext } from 'react'
import CardHeader from './CardHeader'
import classes from "../styles/Intro.module.css"
import { ThemeContext } from './Context/ThemeContext'

const Intro = () => {
  const {darkTheme} = useContext(ThemeContext);
  
  return (
    <div className={classes.container}>
        <CardHeader text="About me" />
        <p className={darkTheme ? classes.paragraph : classes.paragraph_bright}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </p>
    </div>
  )
}

export default Intro