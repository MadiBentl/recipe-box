import React, {Component} from "react";

const Card = ({recipe}) => {

  return (<div>
    <h4>{recipe.name}</h4>
    <h5>{recipe.ingredients}</h5>
  </div>);
};

export default Card;
