import React from "react";
import amazon from "../../assets/images/amazon-logo.png";
import klarna from "../../assets/images/klarna-logo.png";
import neteller from "../../assets/images/neteller-logo.png";
import ebay from "../../assets/images/ebay-logo.png";
import mastercard from "../../assets/images/master-card-logo.png";
import stripe from "../../assets/images/stripe-logo.png";
import classes from "./Banner.module.css";

function Banner() {
  const obj = ["amazon", "klarna", "neteller", "ebay", "mastercard"];

  return (
    <div className={classes.banner}>
      <div className={classes.images}>
        {" "}
        <img src={amazon} alt="amazon" />
      </div>
      <div className={classes.images}>
        {" "}
        <img src={ebay} alt="ebay" />
      </div>
      <div className={classes.images}>
        {" "}
        <img src={klarna} alt="klarna" />
      </div>
      <div className={classes.images}>
        {" "}
        <img src={mastercard} alt="mastercard" />
      </div>
      <div className={classes.images}>
        {" "}
        <img src={stripe} alt="stripe" />
      </div>
      <div className={classes.images}>
        {" "}
        <img src={neteller} alt="neteller" />
      </div>
    </div>
  );
}

export default Banner;
