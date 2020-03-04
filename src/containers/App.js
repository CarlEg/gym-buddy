import React, { Component } from 'react';
import classes from './App.module.css';
import Header from '../components/header/header'
import BottomButtons from '../components/Footer/BottomButtons'

class App extends Component {

  state = {
    homeSelected: true,
    muscleSelected: false,
    messageSelected: false,
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

  componentDidMount() {
    document.body.style.backgroundColor =  'rgb(252, 217, 204)';
}

  render(){
    return (
      <div className={classes.app}>
        <div className={classes.background}>
       <Header/>
       <BottomButtons homeTrue={this.state.homeSelected}
       muscleTrue={this.state.muscleSelected} 
       messageTrue={this.state.messageSelected}
       homePressed={this.homeSelected}
       musclePressed={this.muscleSelected}
       messagePressed={this.messageSelected}
       />
       </div>
      </div>
    );
  }
}

export default App;
