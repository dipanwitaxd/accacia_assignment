import React from "react";
import classes from "./Card.module.css";

function Card({ item }) {
  return (
    <div className={classes.card_outer}>
      <div
        className={classes.circle}
        style={{ backgroundColor: item.bgcolour }}
      >
        {" "}
        <div className={classes.icon}  >{item.icon}</div>
      </div>
      <div className={classes.card}>
        <div className={classes.header}>{item.header}</div>
        <div className={classes.subject}>{item.subject}</div>
      </div>
    </div>
  );
}

export default Card;
