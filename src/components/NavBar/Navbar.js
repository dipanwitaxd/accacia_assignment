import React from 'react'
import logo from '../../assets/images/Vector.png';
import classes from './Navbar.module.css'
import Dehaze from '@mui/icons-material/Dehaze';

function Navbar() {

    const menubar = [
        {
            name: 'MENU',
            routing: '',
        },
        {
            name: 'ABOUT US',
            routing: '',
        },
        {
            name: 'SERVICE',
            routing: '',
        },
        {
            name: 'CONTACT',
            routing: '',
        },
    ]
  return (
    <div className={classes.navbar}>
        <div className={classes.logo_left}>
            <img src={logo} alt='logo'></img>
        </div>
        <div className={classes.right_nav}>
            {menubar.map((item)=> {
                return <div>{item.name}</div>
            })}
            <div><button className={classes.login_button} >LOGIN</button></div>
        </div>
        <div className={classes.right_nav_mobile} >
            <button className={classes.bar_button} ><Dehaze style={{color: '#F36B7F'}} /></button> 
        </div>
    </div>
  )
}

export default Navbar