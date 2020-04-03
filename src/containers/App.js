import React, { Component } from 'react';
import classes from './App.module.css';
import Header from '../components/header/header';
import BottomButtons from '../components/Footer/BottomButtons';
import Time from '../components/Time/Time'
import Muscles from '../components/Muscles/Muscles'
import PresetButton from '../components/PresetButton/PresetButton';
import Buddies from '../components/Buddies/Buddies'



class App extends Component {

  state = {
    homeSelected: true,
    muscleSelected: false,
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
    isPresetEmpty:true,
    presets:[],
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
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Chest")
      array.splice(target,1)
      this.checkSelected()
    }
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
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Abs")
      array.splice(target,1)
      this.checkSelected()
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
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Legs")
      array.splice(target,1)
      this.checkSelected()
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
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Biceps")
      array.splice(target,1)
      this.checkSelected()
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
        arrayIsEmpty: false,
        selected: array
      });
    }else{
      const target = array.indexOf("Lats");
      array.splice(target,1);
      this.checkSelected()
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

  checkElement = () =>{
    const array = this.state.presets
    let i;
    for(i=0; i<=array.length; i++){
      if(array[i] === undefined){
        return i
      }
    }
  }

  

  savePreset = () =>{
    const muscles = this.state.muscles
    let preset = [];
    if(muscles.abs){
      preset.push("Abs")
    }
    if(muscles.biceps){
      preset.push("Biceps")
    }
    if(muscles.chest){
      preset.push("Chest")
    }
    if(muscles.lats){
      preset.push("Lats")
    }
    if(muscles.legs){
      preset.push("Legs")
    }
    let array = this.state.presets;
    let i;
    let flag = false;
    if(this.state.isPresetEmpty){
      array.push(preset)
      this.setState({
        presets: array
      });
      this.setState({isPresetEmpty:false})
    }else {
      for(i=0; flag===false && i<array.length; i++){
        if(JSON.stringify(array[i])===JSON.stringify(preset)){
          flag = true;
        }
       }
       if(!flag){
        array.push(preset)
        this.setState({
          presets: array
        });
      } 
    }
    
  }

  presetClicked = (index) =>{
    let i;
    const array = this.state.presets[index]
    let muscles = this.state.muscles
    let chosen =[];
    muscles.abs =false;
    muscles.biceps=false
    muscles.chest = false
    muscles.legs = false
    muscles.lats = false
    console.log(this.state.selected)
    for(i=0; i<array.length; i++){
      if(array[i]==="Abs"){
        muscles.abs = true;
        chosen.push("Abs");
      }else if(array[i]==="Biceps"){
        muscles.biceps = true;
        chosen.push("Biceps");
      }else if(array[i]==="Chest"){
        muscles.chest = true;
        chosen.push("Chest")
      }else if(array[i]==="Legs"){
        muscles.legs = true;
        chosen.push("Legs")
      }else if(array[i]==="Lats"){
        muscles.lats = true;
        chosen.push("Lats")
      }
    }
    this.setState({
      muscles:muscles,
      homeSelected: false,
      muscleSelected: true,
      messageSelected: false,
      selected:chosen,
    })
  }

  findClicked = () =>{
    this.setState({
      messageSelected:true,
    })
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
         <br></br>
         <br></br>
         <PresetButton presets={this.state.presets}
         isPresetEmpty={this.state.isPresetEmpty}
         clicked={this.presetClicked}/>

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
         checkEmpty={this.state.arrayIsEmpty}
         savePreset={this.savePreset} 
         findClicked={this.findClicked}/>

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
    if(this.state.messageSelected){
      screen=(
      <div className={classes.app}>
      <Header muscleScreen={this.state.muscleSelected} goHome={this.homeSelected} />

        <Buddies selected={this.state.selected}/>

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
