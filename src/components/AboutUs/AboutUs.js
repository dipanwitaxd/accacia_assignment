import React from 'react'
import human from '../../assets/images/Illustration_1.png'
import classes from './AboutUs.module.css'

function AboutUs() {
  return (
    <div className={classes.aboutus}>
        <div className={classes.aboutus_left}>
            <div className={classes.aboutus_heading}>Let us handle your next cleaning</div>
            <div className={classes.aboutus_subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.</div>
            <button className={classes.button_aboutus} >BOOK NOW</button>
        </div>
        <div>
            <img src={human} alt='' className={classes.image} />
        </div>
    </div>
  )
}

export default AboutUs