import React, { useContext } from 'react'
import CardHeader from './CardHeader'
import classes from '../styles/Intro.module.css'
import { ThemeContext } from './Context/ThemeContext'

const Intro = () => {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className={classes.container}>
      <CardHeader text="About me" />
      <p className={darkTheme ? classes.paragraph : classes.paragraph_bright}>
        I am enthusiastic full-stack web developer with solid understanding of
        typeScript, JavaScript, ReactNative, React, NodeJS, NoSQL technologies.
        With software development, there is always something new to discover.
        Designing a program that is truly helpful to the user is my ultimate
        goal and passion on every project, and I am delighted by the every
        opportunity to apply my knowledge and gain more experience
      </p>
    </div>
  )
}

export default Intro
