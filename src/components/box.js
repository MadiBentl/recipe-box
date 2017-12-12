import React, {Component} from "react";
import Card from "./card";

class Box extends Component {
  constructor(props){
    super(props);
  }
  createRecipes(){
    return this.props.recipes.map((recipe, i) => {
    return (<Card
      key = {i}
      recipe={recipe}
      ingredients = {recipe.ingredients}
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
