import React from 'react';
import personFront from '../../images/muscles/front_of_person.png'
import classes from './Muscles.module.css'


const Muscles = props =>{
    return(
        <div className={classes.Person}>
            <img
            src={personFront} 
            alt="Front facing person muscles" />
        </div>
    )
}

export default Muscles;