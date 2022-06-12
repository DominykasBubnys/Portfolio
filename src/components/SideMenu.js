import React from 'react'
import classes from '../styles/SideMenu.module.css'

const SideMenu = () => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.side_menu}>
        <img src="./assets/menu_logo.png" />
      </div> */}
      <div className={classes.content}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/DominykasBubnys"
        >
          <img alt="" src="./assets/side_1.jpg" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/dominykas-bubnys-90ab471ba/"
        >
          <img alt="" src="./assets/side_2.png" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/dominykas-bubnys-90ab471ba/"
        >
          <img alt="" src="./assets/side_3.png" />
        </a>
      </div>
    </div>
  )
}

export default SideMenu
