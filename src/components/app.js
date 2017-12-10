import React, { Component } from 'react';
import Box from "./box";
import Popup from './pop-up';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {recipes: [
      {name: "Pumpkin Pie",
       ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs","Pumpkin Pie Spice", "Pie Crust"]},
      {name: "Spaghetti",
        ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
      {name: "Onion Pie",
        ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
    ],
      popupVisible: false
    };
    this.showPopup = this.showPopup.bind(this);
  }
  showPopup(){
    this.setState({popupVisible : true});
  }
  render(){
    return(
      <div>
        <h2> Recipe Box </h2>
        <Box recipes = {this.state.recipes}/>
        <button onClick= {this.showPopup}>Add Recipe</button>
        {this.state.popupVisible == true ? <Popup/> : null}
      </div>
    );
  };
}

export default App;
