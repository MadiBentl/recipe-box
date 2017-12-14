import React, {Component} from "react";
import Ingredient from "./ingredient";

class Card extends Component{
  constructor(){
    super();
    this.state = {
      visibleRecipe: null
    }

  }
  render(){
    const recipeIngredients = this.props.ingredients.map((ingredient, i) => {
      return (<Ingredient
        ingredient = {ingredient}
        key = {i}/>
      )
    });
    return (<div>
      <div onClick={() => this.onClick(this.props.recipe.name)} className = "card">
        <h4>{this.props.recipe.name}</h4>
        </div>
      {
          this.state.visibleRecipe == this.props.recipe.name
            ? <div>{recipeIngredients}<button onClick={() => this.deleteMe(this.props.recipe)}>Delete</button></div>
            : null
        }


    </div>);

  };
  deleteMe(recipe){
    this.props.deleteRecipe(recipe);
    console.log(recipe);
  }
  onClick(clickedRecipe) {
    this.props.selectRec(clickedRecipe);
    if (this.state.visibleRecipe != clickedRecipe){
      this.setState({visibleRecipe: clickedRecipe});
    }
    else{
      this.setState({visibleRecipe: null});
    }
  }
};

export default Card;
