import React, { useState } from 'react'
import classes from '../styles/Projects.module.css'
import Modal from './UIElements/Modal'

const ProjectsItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false)

  const onModalShowHandler = () => setShowModal(true)
  const onModalHideHandler = () => setShowModal(false)

  return (
    <>
      <Modal
        show={showModal}
        onCancel={onModalHideHandler}
        header={item.name || 'default header'}
      >
        <div className={classes.modal_container}>
          <div className={`${classes.modal_content} ${classes.modal_intro}`}>
            <img className={classes.modal_image} src={item.imageUrl} alt="" />

            <div className={classes.modal_logo_container}>
              <img
                className={classes.modal_logo}
                src="/assets/git_logo.png"
                alt=""
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.githubUrl}
              >
                Github repo
              </a>
            </div>

            <div className={classes.modal_logo_container}>
              <img
                className={classes.modal_logo}
                src="/assets/preview.jpg"
                alt=""
              />
              <a target="_blank" rel="noopener noreferrer" href={item.LiveUrl}>
                Live demo
              </a>
            </div>

            <div className={classes.modal_tech}>
              <ul>
                {item.stack.map((element, i) => (
                  <li key={i}>{element}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${classes.modal_content} ${classes.modal_about}`}>
            <h2>About project</h2>
            <p>{item.about}</p>
          </div>
        </div>
      </Modal>
      <div onClick={onModalShowHandler} className={classes.gallery_item}>
        <img src={item.imageUrl} alt="" />
      </div>
    </>
  )
}

export default ProjectsItem
