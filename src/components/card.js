import React, {Component} from "react";
import Ingredient from "./ingredient";

class Card extends Component{
  constructor(){
    super();
    this.state = {
      childVisible: false
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
      <h4 onClick={() => this.onClick()}>{this.props.recipe.name}</h4>
      {
          this.state.childVisible
            ? <div>{recipeIngredients}</div>
            : null
        }

    </div>);

  };
  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
};

export default Card;
