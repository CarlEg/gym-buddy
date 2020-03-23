import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/Logo.png'
import backArrow from '../../images/navigation/White arrow.png'

const Header = (props) =>{
    let header = null;
    if(props.muscleScreen){
        header =(
            <div className={classes.header}>
            <header>
                <img className={classes.logoWithArrow} src={logo} alt="Gym buddy logo"/>
                <img className={classes.arrow} onClick={props.goHome} src={backArrow} alt="Back arrow" />
            </header>
        </div>
        )
    }else{
        header =(
            <div className={classes.header}>
            <header>
                <img className={classes.logo} src={logo} alt="Gym buddy logo"/>
            </header>
        </div>
        )
    }
    return(
        header
    );
};

export default Header;