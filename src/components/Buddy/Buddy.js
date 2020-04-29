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

        if(person.name === "Diana"){
            return(
                <div key={index} className={classes.Buddy}>
                <img src={person.pic} alt={person.name}/>
                <div className={classes.textBackground}/>
                <p className={classes.name}>{person.name}</p>
                <div className={classes.Diana}>
                {muscles}
                </div>
                <h4>Likes</h4>
                <ul>
                    {likes}
                </ul>
                </div>
            )
        }else if(person.muscles.length ===1){
            return(
            <div key={index} className={classes.Buddy}>
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
            </div>
                )
        }else if(person.name === "Barry"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.Barry}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.name === "Clark"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.Clark}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }
        else if(person.name === "Victor"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.Victor}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.name === "Mari"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.Mari}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.muscles.length ===2){
            return(
                <div key={index} className={classes.Buddy}>
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
        }else if(person.name === "John"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.John}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.name === "Shayerya"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.Shayera}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.name === "Billy"){
            return(
            <div key={index} className={classes.Buddy}>
            <img src={person.pic} alt={person.name}/>
            <div className={classes.textBackground}/>
            <p className={classes.name}>{person.name}</p>
            <div className={classes.Billy}>
            {muscles}
            </div>
            <h4>Likes</h4>
            <ul>
                {likes}
            </ul>
            </div>)
        }else if(person.muscles.length === 3){
            return(
                <div key={index} className={classes.Buddy}>
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
        }else{
            return null;
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