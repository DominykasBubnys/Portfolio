import React from 'react'
import classes from "../styles/Additional.module.css";


const Additional = (props) => {
  return (
    <div className={classes.container}>

        <ul className={classes.stack_container}>
            <li>ReactJS</li>
            <li>ReactNative</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>NoSQL</li>
            <li>Express</li>
        </ul>

        <div className={classes.certificates_container}>

            <div className={classes.image_container}>
                <img src={"./assets/certificate_1.jpg"} alt="" />
                <h5>Certificated at 2022 - 02</h5>
            </div>
            <div className={classes.image_container}>
                <img src={"./assets/certificate_1.jpg"} alt="" />
                <h5>Certificated at 2022 - 05</h5>
            </div>
            <div className={classes.image_container}>
                <img src={"./assets/certificate_3.png"} alt="" />
                <h5>In process! Started at 2021-11</h5>
            </div>
            <div className={classes.image_container}>
                <img src={"./assets/certificate_4.jpg"} alt="" />
                <h5>In process! Started at 2020 - 09</h5>
            </div>


        </div>

    </div>
  )
}

export default Additional