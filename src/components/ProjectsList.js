import React from 'react'
import classes from "../styles/Projects.module.css"
import ProjectsData from './ProjectsData'
import ProjectsItem from './ProjectsItem'

const ProjectsList = () => {
  return (
    <div className={classes.gallery_container}>
        
        {
            ProjectsData.map((project, i) => (      
                <ProjectsItem key={i} item={project} />
            ))
        }


    </div>
  )
}

export default ProjectsList