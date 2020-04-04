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
import whiteArrow from '../../images/navigation/White arrow.png'
import greenTick from '../../images/navigation/green tick.png';
import greyTick from '../../images/navigation/green tick greyed.png';
import redCross from '../../images/navigation/red cross.png';

class Buddies extends Component {
    state={ 
        data :[
        {name:"Bruce", muscles:["Abs"], likes:["Brooding", "Alfred"], yes:false, pic:Bruce},
        {name:"Arthur", muscles:["Lats"], likes:["Beer","Ocean"], yes:false, pic:Arthur},
        {name:"Diana", muscles:["Legs"], likes:["Tiaras","Honor"], yes:false, pic:Diana},
        {name:"Barry", muscles:["Legs","Abs"], likes:["Diana","Eating"], yes:false, pic:Barry},
        {name:"Clark", muscles:["Chest","Biceps"], likes:["Farms","America"], yes:false, pic:Clark},
        {name:"Victor", muscles:["Biceps","Lats"], likes:["Computers","Booyah"], yes:false, pic:Victor},
        {name:"John", muscles:["Chest","Abs","Lats"], likes:["Pizza","Duty"], yes:false, pic:John},
        {name:"Mari", muscles:["Legs","Biceps"], likes:["Nature","Activism"], yes:false, pic:Mari},
        {name:"Shayerya", muscles:["Legs","Abs","Biceps"], likes:["Hawks","Helmets"], yes:false, pic:Shayera},
        {name:"Billy", muscles:["Chest","Biceps","Lats"], likes:["Adulting","Superman"], yes:false, pic: Billy}],
        potentials: [],
        count: 0,
        backGrey: true,
        forwardGrey:false,
    }

    

    gatherPeople = () =>{
        console.log(this.state.data);
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
            this.setState({
                forwardGrey:true,
            })
            return false;
        }else{
            count += 1;
        this.setState({
          count: count,
        })
            if(count === this.state.potentials.length -1){
                this.setState({
                    forwardGrey:true,
                })
            }
            if(count !== 0){
                this.setState({
                    backGrey:false,
                })
            }
        }
}

    backPerson = () =>{
        let count = this.state.count;
        if(count === 0){
            this.setState({
                backGrey:true,
            })
            return false
        }else{
            count -= 1;
        this.setState({
          count: count,
        })
        if(count !== this.state.potentials.length -1){
            this.setState({
                forwardGrey:false,
            })
        }
        if(count === 0){
            this.setState({
                backGrey:true,
            })
        }
        }
    }
    
    componentDidMount() {
        this.gatherPeople()
    }

    tickSelected = () =>{
        const person = this.state.potentials[this.state.count];
        let array = this.state.data;
        if(!person.yes){
            alert("Buddy request sent to " + person.name + "!" );
            const index = this.state.data.findIndex(element => element === person);
            let value = this.state.data[index];
            value.yes = true;
            array[index] = value
            this.setState({
                data : array,
            })
        }else{
            alert("Request to " + person.name + " cancelled");
            const index = this.state.data.findIndex(element => element === person);
            let value = this.state.data[index];
            value.yes = false;
            array[index] = value
            this.setState({
                data : array,
            })
        }
    }
    
    crossSelected = () =>{
        const person = this.state.potentials[this.state.count];
        let array = this.state.data;
        const index = this.state.data.findIndex(element => element === person);
        if(window.confirm("Are you sure you want to remove " + person.name + "?")){
            if(this.state.count === this.state.potentials.length-1){
                this.setState({
                    count: this.state.count-1,
                })
            }
            array.splice(index,1);
        this.setState({
            data: array,
        });
        this.gatherPeople();
        }
    }

    render(){
        if(this.state.potentials.length>0){
            return(
                <div className={classes.Buddies}>
                <Buddy key={this.state.count} buddies={this.state.potentials[this.state.count]}/>
                <br/>

                <img className={this.state.backGrey ? classes.backArrowGrey : classes.backArrow} 
                onClick={this.backPerson} src={whiteArrow} alt="back arrow"/>
                <img className={this.state.forwardGrey ? classes.forwardArrowGrey : classes.forwardArrow} 
                onClick={this.nextPerson} src={whiteArrow} alt="forward_arrow"/>
                <br/>

                <img src={redCross} className={classes.cross} onClick={this.crossSelected} alt="Red cross"/>
                {this.state.potentials[this.state.count].yes ? 
                <img src={greyTick} onClick={this.tickSelected} className={classes.tick} alt="Grey tick"/> 
                :<img src={greenTick} onClick={this.tickSelected} className={classes.tick} alt="Green tick"/>}
                </div>
            )
        }else{
            return <h1>No muscles chosen</h1>
        }   
    }
    }
export default Buddies;