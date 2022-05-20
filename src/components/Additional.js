import React, { useContext } from 'react'
import classes from "../styles/Additional.module.css";
import { ThemeContext } from './Context/ThemeContext';

const Additional = (props) => {

    const {darkTheme} = useContext(ThemeContext);

  return (
    <div className={classes.container}>

        <ul className={darkTheme ? classes.stack_container : classes.stack_container_bright}>

            <li>ReactJS</li>
            <li>ReactNative</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>NoSQL</li>
            <li>Express</li>
            
        </ul>

        <div className={darkTheme ? classes.certificates_container : classes.certificates_container_bright}>

            <div className={darkTheme ? classes.image_container : classes.image_container_bright}>
                <img src={"./assets/certificate_1.jpg"} alt="" />
                <h5>Certificated at 2022 - 02</h5>
            </div>

            <div className={darkTheme ? classes.image_container : classes.image_container_bright}>
                <img src={"./assets/certificate_1.jpg"} alt="" />
                <h5>Certificated at 2022 - 05</h5>
            </div>

            <div className={darkTheme ? classes.image_container : classes.image_container_bright}>
                <img src={"./assets/certificate_3.png"} alt="" />
                <h5>In process! Started at 2021-11</h5>
            </div>

            <div className={darkTheme ? classes.image_container : classes.image_container_bright}>
                <img src={"./assets/certificate_4.jpg"} alt="" />
                <h5>In process! Started at 2020 - 09</h5>
            </div>

        </div>

    </div>
  )
}

export default Additional