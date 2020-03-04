import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/Logo.png'

const Header = () =>{
    return(
        <div className={classes.header}>
            <header>
                <img className={classes.logo} src={logo} alt="Gym buddy logo"/>
            </header>
        </div>
    );
};

export default Header;