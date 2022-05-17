import React from 'react'
import CardHeader from './CardHeader'
import classes from "../styles/Card.module.css"

const Card = (props) => {
  return (
    <div className={classes.card}>
      <CardHeader text="Projects" />
      {props.children}
      <CardHeader text={""} />
    </div>
  )
}

export default Card