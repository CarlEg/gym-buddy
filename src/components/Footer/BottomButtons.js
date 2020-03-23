import React from 'react';
import classes from './BottomButtons.module.css'
import homeIcon from '../../images/navigation/home.png'
import homeBlack from '../../images/navigation/homeBlack.png'
import muscleIcon from '../../images/navigation/muscleWhite.png'
import muscleBlack from '../../images/navigation/muscle.png'
import messageIcon from '../../images/navigation/messageWhite.png'
import messageBlack from '../../images/navigation/messageFilled.png'

const Footer = (props) =>{

    let btns

    if(props.homeTrue){
        btns =
            <div className={classes.BottomButtons}>
                <button className={classes.salmon}>
                    <img src={homeBlack}
                        alt="Home button"/>
                </button>
                <div className={classes.divider}/>
                <button onClick={props.musclePressed}>
                    <img src={muscleIcon}
                        alt="Muscle Button"/>
                </button>
                <div className={classes.divider}/>
                <button onClick={props.messagePressed}>
                    <img src={messageIcon}
                        alt="Message Button"/>
                </button>
            </div>
        
    }else if(props.muscleTrue){
        btns =
            <div className={classes.BottomButtons}>
                <button onClick={props.homePressed}>
                    <img src={homeIcon}
                        alt="Home button"/>
                </button>
                <div className={classes.divider}/>
                <button className={classes.salmon}>
                    <img src={muscleBlack}
                        alt="Muscle Button"/>
                </button>
                <div className={classes.divider}/>
                <button onClick={props.messagePressed}>
                    <img src={messageIcon}
                        alt="Message Button"/>
                </button>
            </div>
    }else if(props.messageTrue){
        btns =
            <div className={classes.BottomButtons}>
                <button onClick={props.homePressed}>
                    <img src={homeIcon}
                        alt="Home button"/>
                </button>
                <div className={classes.divider}/>
                <button onClick={props.musclePressed}>
                    <img src={muscleIcon}
                        alt="Muscle Button"/>
                </button>
                <div className={classes.divider}/>
                <button className={classes.salmon}>
                    <img src={messageBlack}
                        alt="Message Button"/>
                </button>
            </div>
    }
    return btns
}
export default Footer