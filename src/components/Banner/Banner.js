import React from 'react'
import amazon from '../../assets/images/amazon-logo.png'
import klarna from '../../assets/images/klarna-logo.png'
import neteller from '../../assets/images/neteller-logo.png'
import ebay from '../../assets/images/ebay-logo.png'
import mastercard from '../../assets/images/master-card-logo.png'
import stripe from '../../assets/images/stripe-logo.png'
import classes from './Banner.module.css'

function Banner() {
  
    const obj = ['amazon','klarna','neteller','ebay','mastercard']

  return (
    <div className={classes.banner} >
        <img src={amazon} alt='amazon' />
        <img src={ebay} alt='ebay' />
        <img src={klarna} alt='klarna' />
        <img src={mastercard} alt='mastercard' />
        <img src={stripe} alt='stripe' />
        <img src={neteller} alt='neteller' />
    </div>
  )
}

export default Banner