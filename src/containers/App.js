import React, { Component } from 'react';
import classes from './App.module.css';
import Header from '../components/header/header';
import BottomButtons from '../components/Footer/BottomButtons';
import Time from '../components/Time/Time'
import Muscles from '../components/Muscles/Muscles'



class App extends Component {

  state = {
    homeSelected: true,
    muscleSelected: false,
    messageSelected: false,
    selectedDate: Date.now(),
    chest: false,
    abs:false,
    legs: false,
    biceps:false,
    lats:false,
    muscles:[
      this.chest,
      this.abs,
      this.legs,
      this.biceps,
      this.lats,]
    
  }

  homeSelected = () =>{
    if(this.state.homeSelected){
      console.log('Home already selected')
    }else{
      this.setState({
        homeSelected: true,
        muscleSelected: false,
        messageSelected: false,
      })
    }
  }

  muscleSelected = () =>{
    if(this.state.muscleSelected){
      console.log('Muscle already selected')
    }else{
      this.setState({
        homeSelected: false,
        muscleSelected: true,
        messageSelected: false,
      })
    }
  }

  messageSelected = () =>{
    if(this.state.messageSelected){
      console.log('Message already selected')
    }else{
      this.setState({
        homeSelected: false,
        muscleSelected: false,
        messageSelected: true,
      })
    }
  }

  handleDateChange = date =>{
    this.setState({
      selectedDate:date,
    });
  }

  componentDidMount() {
    document.body.style.backgroundColor =  '#F7F5EF';
}

  render(){
    console.log(this.state.selectedDate)
    if(this.state.homeSelected){
      return (
        <div className={classes.app}>

         <Header/>

         <Time 
         value={this.state.selectedDate}
         whenChange={this.handleDateChange}
         />

         <button onClick={this.muscleSelected} className={classes.muscleButton}>Choose <br/> Muscles</button>

         <BottomButtons homeTrue={this.state.homeSelected}
         muscleTrue={this.state.muscleSelected} 
         messageTrue={this.state.messageSelected}
         homePressed={this.homeSelected}
         musclePressed={this.muscleSelected}
         messagePressed={this.messageSelected}
         />

        </div>
      );
    }
    if(this.state.muscleSelected){
      return(
        <div className={classes.app}>

         <Header/>

         <Muscles muscles={this.state.muscles} />

         <BottomButtons homeTrue={this.state.homeSelected}
         muscleTrue={this.state.muscleSelected} 
         messageTrue={this.state.messageSelected}
         homePressed={this.homeSelected}
         musclePressed={this.muscleSelected}
         messagePressed={this.messageSelected}
         />

        </div>
      )
    }
  }
}

export default App;
