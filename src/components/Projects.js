import React from 'react'
import classes from "../styles/Projects.module.css"
const Projects = () => {
  return (
    <div className={classes.gallery_container}>
        <div className={classes.gallery_item}>
            <img src={require("../assets/project_1.png")} />
        </div>
        <div className={classes.gallery_item}>
            <img src={require("../assets/project_2.jpg")} />
        </div>
        <div className={classes.gallery_item}>
            <img src={require("../assets/project_1.png")} />
        </div>
        <div className={classes.gallery_item}>
            <img src={require("../assets/project_1.png")} />
        </div>
        <div className={classes.gallery_item}>
            <img src={require("../assets/project_1.png")} />
        </div>

    </div>
  )
}

export default Projects