import React, {Component} from "react";
import Ingredient from "./ingredient";
import Edit from "./edit";

class Card extends Component{
  constructor(){
    super();
    this.state = {
      visibleRecipe: null,
      edit: false
    }
    this.hideEdit = this.hideEdit.bind(this);

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
            ? <div><h5>Ingredients</h5>{recipeIngredients}<button onClick={() => this.deleteMe(this.props.recipe)}>Delete</button><button onClick={()=> this.displayEdit(this.props.recipe)}>Edit</button></div>
            : null
        }
        {this.state.edit == true ? <Edit updateRecipe={this.props.updateRecipe} hide={this.hideEdit} recipe={this.props.recipe}/> : null}


    </div>);

  };
  deleteMe(recipe){
    this.props.deleteRecipe(recipe);
    console.log(recipe);
  }
  displayEdit(recipe){
    this.setState({edit:true});
  }
  hideEdit(){
    this.setState({edit:false});
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
