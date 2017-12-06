import React, {Component} from "react";
import Card from "./card";

const Box = ({recipes}) => {
    console.log({recipes});
    var x = -1;
    const recipeCards = recipes.map((recipe, i) => {
      return (<Card
        key = {i}
        recipe={recipe}
        ingredients = {recipe.ingredients}
        />
      )
    });
    return (<div className = "box">
      {recipeCards}
    </div>);
}
export default Box;
