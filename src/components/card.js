import React, {Component} from "react";
import Ingredient from "./ingredient";

const Card = ({recipe, ingredients}) => {
  return (<div>
    <h4>{recipe.name}</h4>
    <h5>{ingredients}</h5>
  </div>);
};

export default Card;
