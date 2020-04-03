import React from 'react';
import classes from './Buddy.module.css';


const Buddy = props =>{
    const data = [props.buddies];

    // const muscles = data[0].muscles.map((muscle, index)=>{
    //     return(
    //         <div className={classes.muscleList1}>
    //         <h2 key={index}>{muscle}</h2>
    //         </div>
    //     )
    // })

    const buddy = data.map((person,index) =>{
        const likes = person.likes.map((like, index) =>{
            return(
                <li key={index}> <span>{like}</span></li>
            )
        })
        
        const muscles = person.muscles.map((muscles, index) =>{
            return(
                <h2 key={index}>{muscles}</h2>
            )
        })

        if(person.muscles.length ===1){
            return(
            <div className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.muscleList1}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.muscles.length ===2){
            return(
                <div className={classes.Buddy}>
                <img src={person.pic} alt={person.name}/>
                <div className={classes.textBackground}/>
                <p className={classes.name}>{person.name}</p>
                <div className={classes.muscleList2}>
                {muscles}
                 </div>
                <h4>Likes</h4>
                <ul>
                    {likes}
                </ul>
                </div>)
        }else if(person.muscles.length === 3){
            return(
                <div className={classes.Buddy}>
                <img src={person.pic} alt={person.name}/>
                <div className={classes.textBackground}/>
                <p className={classes.name}>{person.name}</p>
                <div className={classes.muscleList3}>
                {muscles}
                 </div>
                <h4>Likes</h4>
                <ul>
                    {likes}
                </ul>
                </div>)
        }
    })

    // const buddy =(
    //     <div className={classes.Buddy}>
    //     <img src={data[0].pic} alt="Bruce"/>
    //     <div className={classes.textBackground}/>
    //     <p className={classes.name}>{data[0].name}</p>
    //     {muscles}
    //     <h4>Likes</h4>
    //     <ul>
    //         {likes}
    //     </ul>
    //     </div>
    // )

    return buddy

}

export default Buddy;