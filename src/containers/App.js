import React, { Component } from 'react';
import classes from './App.module.css';
import Header from '../components/header/header';
import BottomButtons from '../components/Footer/BottomButtons';
import Time from '../components/Time/Time'
import Muscles from '../components/Muscles/Muscles'



class App extends Component {

  state = {
    homeSelected: false,
    muscleSelected: true,
    messageSelected: false,
    selectedDate: Date.now(),
    back: false,
    // chest: false,
    // abs:false,
    // legs: false,
    // biceps:false,
    // lats:false,
    muscles:{
      chest: false,
      abs: false,
      legs: false,
      biceps: false,
      lats: false,},
    selected:[],
    arrayIsEmpty:true,
    
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

  chestSelected = () =>{
    let array = this.state.selected
    this.setState({
      muscles:{
        chest:!this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    })
    if(!this.state.muscles.chest){
      array.push("Chest")
      this.setState({
        selected: array
      })
    }else{
      const target = array.indexOf("Chest")
      array.splice(target,1)
    }
    this.checkSelected()
  }

  absSelected = () =>{
    let array = this.state.selected
    this.setState({
      muscles:{
        chest:this.state.muscles.chest,
        abs: !this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    })
    if(!this.state.muscles.abs){
      array.push("Abs")
      this.setState({
        selected: array
      })
    }else{
      const target = array.indexOf("Abs")
      array.splice(target,1)
    }
  }

  legsSelected = () =>{
    let array = this.state.selected
    this.setState({
      muscles:{
        chest:this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: !this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    })
    if(!this.state.muscles.legs){
      array.push("Legs")
      this.setState({
        selected: array
      })
    }else{
      const target = array.indexOf("Legs")
      array.splice(target,1)
    }
  }

  bicepsSelected = () =>{
    let array = this.state.selected;
    this.setState({
      muscles:{
        chest: this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: !this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    });
    if(!this.state.muscles.biceps){
      array.push("Biceps")
      this.setState({
        selected: array
      })
    }else{
      const target = array.indexOf("Biceps")
      array.splice(target,1)
    }
  }

  latsSelected = () =>{
    let array = this.state.selected;
    this.setState({
      muscles:{
        chest: this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: !this.state.muscles.lats,
      }
    });
    if(!this.state.muscles.lats){
      array.push("Lats");
      this.setState({
        selected: array
      });
    }else{
      const target = array.indexOf("Lats");
      array.splice(target,1);
    }
  }

  backSelected = () =>{
    this.setState({
      back: true,
    })
  }

  frontSelected = () =>{
    this.setState({
      back:false,
    })
  }

  checkSelected = () =>{
    if(this.state.selected.length>0){
      this.setState({
        arrayIsEmpty:false,
      });
    }else{
      this.setState({
        arrayIsEmpty:true,
      });
    }
  }

  render(){
    let screen = null

    if(this.state.homeSelected){  //If home is selected screen is home
      screen=(
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
      );}
    if(this.state.muscleSelected){  //if muscle is selected screen is muscle
      screen=(
        <div className={classes.app}>
         <Header muscleScreen={this.state.muscleSelected} goHome={this.homeSelected} />

         <Muscles muscles={this.state.muscles} 
         chestSelect={this.chestSelected} 
         absSelect={this.absSelected}
         legsSelect={this.legsSelected}
         bicepsSelect={this.bicepsSelected}
         latsSelect={this.latsSelected} 
         backSelect={this.backSelected} 
         back ={this.state.back} 
         frontSelect={this.frontSelected} 
         selected={this.state.selected} 
         checkEmpty={this.state.arrayIsEmpty} />

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
    return screen
  }
}

export default App;
