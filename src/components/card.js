import React, {Component} from "react";
import Ingredient from "./ingredient";

const Card = ({recipe, ingredients}) => {
  const recipeIngredients = ingredients.map((ingredient) => {
    return (<Ingredient
      ingredient = {ingredient}/>
    )
  });
  return (<div>
    <h4>{recipe.name}</h4>
    <div>{recipeIngredients}</div>
  </div>);
};

export default Card;
