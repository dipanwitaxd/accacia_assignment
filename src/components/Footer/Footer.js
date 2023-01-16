import React from 'react'
import Vectorfooter from '../../assets/images/Vectorfooter.png'
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer} >
        <img src={Vectorfooter} alt=''></img>
        <div className={classes.copyright} >Copyright 2018-2020 Clean Cruiz - All rights reserved.</div>
    </div>
  )
}

export default Footer