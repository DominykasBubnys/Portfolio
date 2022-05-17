import React from 'react'
import CardHeader from './CardHeader'
import classes from "../styles/Card.module.css"

const Card = (props) => {
  return (
    <div className={classes.card}>
      <CardHeader text={props.name} />
      {props.children}
      <CardHeader text={""} />
    </div>
  )
}

export default Card