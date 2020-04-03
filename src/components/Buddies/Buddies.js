import React, { Component } from 'react';
import classes from './Buddies.module.css';
import Bruce from '../../images/People/Bruce.jpg';
import Arthur from '../../images/People/Arthur.png';
import Diana from '../../images/People/Diana.jpg';
import Barry from '../../images/People/Barry.jpeg';
import Clark from '../../images/People/Clark.jpg';
import Victor from '../../images/People/Victor.jpg';
import John from '../../images/People/John.jpg';
import Mari from '../../images/People/Mari.jpg';
import Shayera from '../../images/People/Shayerya.jpeg';
import Billy from '../../images/People/Billy.jpg';
import Buddy from '../../components/Buddy/Buddy';

class Buddies extends Component {
    state={ 
        data :[
        {name:"Bruce", muscles:["Abs"],likes:["Brooding", "Alfred"],pic:Bruce},
        {name:"Arthur", muscles:["Lats"],likes:["Beer","Ocean"],pic:Arthur},
        {name:"Diana", muscles:["Legs"],likes:["Tiaras","Honor"],pic:Diana},
        {name:"Barry",muscles:["Legs","Abs"],likes:["Diana","Eating"],pic:Barry},
        {name:"Bruce",muscles:["Chest","Biceps"],likes:["Farms","America"],pic:Clark},
        {name:"Victor", muscles:["Biceps","Lats"],likes:["Computers","Booyah"],pic:Victor},
        {name:"John", muscles:["Chest","Abs","Lats"],likes:["Pizza","Duty"],pic:John},
        {name:"Mari", muscles:["Legs","Biceps"],likes:["Nature","Activism"],pic:Mari},
        {name:"Shayerya", muscles:["Legs","Abs","Biceps"],likes:["Hawks","Helmets"],pic:Shayera},
        {name:"Billy", muscles:["Chest","Biceps","Lats"],likes:["Adulting","Superman"],pic: Billy}],
        potentials: [],
        count: 0,
    }

    

    gatherPeople = () =>{
        let potentials = []
        this.state.data.forEach(element => {
            if(element.muscles.some(item =>this.props.selected.includes(item))){
                potentials.push(element)
            }
        });
        this.setState({
            potentials: potentials,
        })
    }

    nextPerson = () =>{
        let count = this.state.count;
        if(count === this.state.potentials.length -1){
            return false
        }else{
            count += 1;
        this.setState({
          count: count,
        })
        }
    }

    backPerson = () =>{
        let count = this.state.count;
        if(count === 0){
            return false
        }else{
            count -= 1;
        this.setState({
          count: count,
        })
        }
    }
    
    componentDidMount() {
        this.gatherPeople()
    }

    
    render(){
        if(this.state.potentials.length>0){
            return(
                <div>
                <Buddy buddies={this.state.potentials[this.state.count]}/>
                <button onClick={this.backPerson}>Back</button>
                <button onClick={this.nextPerson} >Next</button>
                </div>
            )
        }else{
            return <h1>No muscles chosen</h1>
        }   
    }
    }
export default Buddies;