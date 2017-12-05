import React, { Component } from 'react';
import Box from "./box";

const recipes = [
  {name: "Pumpkin Pie",
   ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs","Pumpkin Pie Spice", "Pie Crust"]},
  {name: "Spaghetti",
    ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
  {name: "Onion Pie",
    ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
];

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
    ]};
  }
  render(){
    return(
      <div>
        <h2> Recipe Box </h2>
        <Box/>
        <button>Add Recipe</button>
      </div>
    );
  };
}

export default App;
