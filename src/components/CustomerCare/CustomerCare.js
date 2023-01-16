import React from "react";
import woman from "../../assets/images/Woman.png";
import classes from "./CustomerCare.module.css";

function CustomerCare() {
  return (
    <div className={classes.customer_care}>
      <div className={classes.customer_care_left}>
        <div className={classes.customer_care_header}>
          Our customer care agents are always ready to help you
        </div>
        <div className={classes.subhead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
          tempor incididunt ut labore dolore magna aliqua ghetu Thank you.
        </div>
        <button className={classes.button_contact_us} >BOOK NOW</button>
      </div>
      <img src={woman} alt="" className={classes.image} ></img>
    </div>
  );
}

export default CustomerCare;
