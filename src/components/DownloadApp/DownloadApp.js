import React from "react";
import classes from "./DownloadApp.module.css";
import iphone from "../../assets/images/iPhone.png";
import googleplay from "../../assets/images/googleplay.png"

function DownloadApp() {
  return (
    <div className={classes.download_app}>
      <div className={classes.left}>
        <div className={classes.left_head}>
          Download the Clean Cruiz App on playstore and get 10% discount
        </div>
        <div className={classes.left_subhead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.{" "}
        </div>
        <img src={googleplay} alt=''className={classes.googleplay} ></img>
      </div>
      <div className={classes.download_image}>
        <img src={iphone} alt="phone" />
      </div>
    </div>
  );
}

export default DownloadApp;
