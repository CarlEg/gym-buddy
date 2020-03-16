import React, { Component } from 'react';
import classes from './App.module.css';
import Header from '../components/header/header';
import BottomButtons from '../components/Footer/BottomButtons';
import Time from '../components/Time/Time'



class App extends Component {

  state = {
    homeSelected: true,
    muscleSelected: false,
    messageSelected: false,
    selectedDate: Date.now(),
    
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
    return (
      <div className={classes.app}>
       <Header/>
       <Time 
       value={this.state.selectedDate}
       whenChange={this.handleDateChange}
       />
       <button className={classes.muscleButton}>Choose <br/> Muscles</button>
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
}

export default App;
