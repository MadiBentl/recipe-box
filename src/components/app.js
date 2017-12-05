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
  render(){
    return(
      <div>
        <Box/>
        <p>Hello</p>
      </div>
    );
  };
}

export default App;
