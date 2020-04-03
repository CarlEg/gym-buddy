import React from 'react';
import personFront from '../../images/muscles/front_of_person.png'
import chest from '../../images/muscles/chest.png'
import abs from '../../images/muscles/abs.png'
import legs from '../../images/muscles/legs.png'
import biceps from '../../images/muscles/biceps.png'
import wholeBody from '../../images/muscles/wholeFrontBody.png'
import back from '../../images/muscles/back.png'

import chestAbs from '../../images/muscles/absAndChest.png'
import chestBiceps from '../../images/muscles/chestAndBiceps.png'
import chestLegs from '../../images/muscles/chestAndLegs.png'
import chestAbsBiceps from '../../images/muscles/absBicepsChest.png'
import chestAbsLegs from '../../images/muscles/absChestLegs.png'
import chestBicepsLegs from '../../images/muscles/chestBicepsLegs.png'

import absBicepsLegs from '../../images/muscles/absBicepsLegs.png'
import absBiceps from '../../images/muscles/absBiceps.png'
import absLegs from '../../images/muscles/absLegs.png'

import bicepsLegs from '../../images/muscles/bicepsLegs.png'

import lats from '../../images/muscles/lats.png'

import classes from './Muscles.module.css'


const Muscles = props =>{
    const selectedMuscles = props.muscles;
    let image = personFront;
    let screen = null;
    let array = props.selected.sort()

    switch (true) {
        case props.back:
        image = back
        break;
        case selectedMuscles.chest:
        //if chest is true
            if(selectedMuscles.abs && selectedMuscles.biceps && selectedMuscles.legs){
                //whole front body
                image = wholeBody;
                break;
            }else if(selectedMuscles.abs && selectedMuscles.biceps){
                //chest,abs,biceps
                image = chestAbsBiceps;
                break;
            }else if(selectedMuscles.abs && selectedMuscles.legs){
                //chest,abs,legs
                image = chestAbsLegs;
                break;
            }else if(selectedMuscles.biceps && selectedMuscles.legs){
                //chest,abs,legs
                image = chestBicepsLegs;
                break;
            }else if(selectedMuscles.abs){
                //chest,abs
                image = chestAbs;
                break;
            }else if(selectedMuscles.biceps){
                //chest,biceps
                image = chestBiceps;
                break;
            }else if(selectedMuscles.legs){
                //chest,legs
                image = chestLegs;
                break;
            }
            else{
                //chest
                image = chest;
                break;
            }
        case selectedMuscles.abs:
            if(selectedMuscles.biceps && selectedMuscles.legs){
                //abs,biceps,legs
                image = absBicepsLegs;
                break;
            }
            else if(selectedMuscles.biceps){
                //abs,biceps
                image = absBiceps;
                break;
            }else if(selectedMuscles.legs){
                //abs,legs
                image = absLegs;
                break;
            }
            else{
                //abs
                image = abs;
                break;
            }
        case selectedMuscles.biceps:
        //if biceps true
            if(selectedMuscles.legs){
                //biceps,legs
                image = bicepsLegs;
                break;
            }else{
                //biceps
                image = biceps;
                break;
            }
        case selectedMuscles.legs:
            //legs
            image = legs;
            break;
        default:
            break;
    }
    
    switch (true) {
        case props.back:
            //lats
            if(selectedMuscles.lats){
                image = lats
            }
            
            break;
    
        default:
            break;
    }

    if(props.back){
        screen =(
            <div >
            <button className={classes.latsR} onClick={props.latsSelect} />
            <button className={classes.latsL} onClick={props.latsSelect} />
            </div>
        )
    }else{
        screen=(
            <div >
            <button className={classes.chest} onClick={props.chestSelect} />
            <button className={classes.abs} onClick={props.absSelect} />
            <button className={classes.legsL} onClick={props.legsSelect} />
            <button className={classes.legsR} onClick={props.legsSelect} />
            <button className={classes.bicepsL} onClick={props.bicepsSelect} />
            <button className={classes.bicepsR} onClick={props.bicepsSelect} />
    </div>
    )
    }

    return(
        <div className={classes.Person}>
            <button className={props.back ? classes.front : classes.frontClicked} 
            onClick={props.frontSelect}>Front Muscles</button>
            <button className={props.back ? classes.backClicked : classes.back} 
            onClick={props.backSelect}>Back Muscles</button>
            {props.checkEmpty ? null: <p>{array.join(" ")}</p>}
            <img
            src={image} 
            alt="Front facing person muscles" />
            {screen}
            {<button className={props.checkEmpty ? classes.presetGrey: classes.preset} 
            onClick={props.checkEmpty ? null : props.savePreset} >
            Save Muscles</button>}
            {<button className={props.checkEmpty ? classes.findGrey: classes.find} 
            onClick={props.checkEmpty ? null : props.findClicked} >
            Find buddy</button>}
        </div>
        )
}

export default Muscles;