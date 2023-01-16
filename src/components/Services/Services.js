import React from "react";
import Card from "../../assets/commons/Card/Card";
import classes from "./Services.module.css";
import Print from '@mui/icons-material/Print';
import Home from '@mui/icons-material/Home';
import FilterDrama from '@mui/icons-material/FilterDrama';

function Services() {
  const obj = [
    {
      header: "Office cleaning",
      bgcolour: '#82B5A5',
      icon: <Print fontSize='large' />,
      subject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.",
    },
    {
      header: "Home cleaning",
      bgcolour: '#F8CF61',
      icon: <Home fontSize='large' />,
      subject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.",
    },
    {
      header: "Out door cleaning",
      bgcolour: '#99BBFF',
      icon: <FilterDrama fontSize='large' />,
      subject: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.",
    },
  ];
  return (
    <div className={classes.our_services}>
      <div className={classes.services_banner}>Our services include</div>
      <div className={classes.services_banner_cards}>
      {obj.map((item) => {
        return <Card item={item} />;
      })}
      </div>
      
    </div>
  );
}

export default Services;
