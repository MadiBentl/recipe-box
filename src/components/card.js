import React, {Component} from "react";
import Ingredient from "./ingredient";

class Card extends Component{
//const Card = ({recipe, ingredients}) => {
  render(){
    const recipeIngredients = this.props.ingredients.map((ingredient, i) => {
      return (<Ingredient
        ingredient = {ingredient}
        key = {i}/>
      )
    });
    return (<div>
      <h4>{this.props.recipe.name}</h4>
      <div>{recipeIngredients}</div>
    </div>);
  };
};

export default Card;
