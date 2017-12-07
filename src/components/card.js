import React, {Component} from "react";
import Ingredient from "./ingredient";

class Card extends Component{
  constructor(){
    super();
    this.state = {
      childVisible: false,
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
          this.state.childVisible
            ? <div>{recipeIngredients}</div>
            : null
        }

    </div>);

  };
  onClick(clickedRecipe) {
    this.setState({visibleRecipe: clickedRecipe});
    if (clickedRecipe == this.state.visibleRecipe){
      this.setState({childVisible: !this.state.childVisible});
    }
  }
};

export default Card;
