import React, {Component} from "react";

class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipe: this.props.recipeName,
      ingredients: this.props.recipeIngredients
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecChange = this.handleRecChange.bind(this);
    this.handleIngChange = this.handleIngChange.bind(this);
  }
  render(){
    return(
      <div className = "popup">
      <form onSubmit={this.handleSubmit}>
        <h3>Edit recipe</h3>
        <h4>Recipe</h4>
        <input
          value={this.props.recipe.name} onChange={this.handleRecChange}
          />
        <h4>Ingredients</h4>
        <input
          value={this.props.recipe.ingredients} onChange={this.handleIngChange}
          /><br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  handleSubmit(){
    event.preventDefault();
    console.log(this.state.recipeName + this.state.recipeIngredients);
    let recipe = {"name": this.state.recipeName, "ingredients": this.state.recipeIngredients.split(',')};
    this.props.addRecipe(recipe);
  }
  handleRecChange(event){
    this.setState({recipe: event.target.value});
  }
  handleIngChange(event){
    this.setState({recipe: event.target.value})
  }
}

export default Edit;
