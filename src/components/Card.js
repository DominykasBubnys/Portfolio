import React, { useContext } from 'react'
import CardHeader from './CardHeader'
import classes from "../styles/Card.module.css"
import { ThemeContext } from './Context/ThemeContext'

const Card = (props) => {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <div className={darkTheme ? classes.card : classes.card_bright}>
      <CardHeader text={props.name} />
      {props.children}
      <CardHeader text={""} />
    </div>
  )
}

export default Card