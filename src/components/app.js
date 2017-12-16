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
    this.hidePopup = this.hidePopup.bind(this);
    this.addARecipe = this.addARecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }
  showPopup(){
    this.setState({popupVisible : true});
  }
  hidePopup(){
    this.setState({popupVisible : false});
  }
  addARecipe(recipe){
    var myRecipes = this.state.recipes;
    myRecipes.push(recipe);
    this.setState({'recipes':myRecipes});
  }
  deleteRecipe(recipe){
    var myRecipes = this.state.recipes;
    console.log(myRecipes.indexOf(recipe));
    myRecipes.splice(myRecipes.indexOf(recipe), 1);
    this.setState({recipes: myRecipes});
  }
  updateRecipe(oldRecipe, newRecipe){
    console.log("shit works");
  }
  render(){
    return(
      <div className="app container-fluid">
        <h2> Recipe Box </h2>
        <Box deleteRecipe = {this.deleteRecipe} updateRecipe={this.updateRecipe} recipes = {this.state.recipes}/>
        <button onClick= {this.showPopup}>Add Recipe</button>
        {this.state.popupVisible == true ? <Popup addRecipe={this.addARecipe} hide={this.hidePopup}/> : null}
      </div>
    );
  };
}

export default App;
