import React, {Component} from "react";
import Card from "./card";

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {currentRecipe: null};
    this.selectRecipe = this.selectRecipe.bind(this);
  }
  selectRecipe(recipe){
    this.setState({currentRecipe: recipe});
  }
  createRecipes(){
    return this.props.recipes.map((recipe, i) => {
    return (<Card
      key = {i}
      recipe={recipe}
      ingredients = {recipe.ingredients}
      selectRec={this.selectRecipe}
      currentRec={this.state.currentRecipe}
      deleteRecipe={this.props.deleteRecipe}
      updateRecipe={this.props.updateRecipe}
      />  );
    });
  }
  render(){
    return (<div className = "box">
      {this.createRecipes()}
    </div>);
  }
}
export default Box;
