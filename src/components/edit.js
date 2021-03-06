import React, {Component} from "react";

class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipe: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join(",")
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecChange = this.handleRecChange.bind(this);
    this.handleIngChange = this.handleIngChange.bind(this);
  }
  render(){
    return(
      <div className = "popup">
      {console.log(this.state.recipe + " " + this.state.ingredients)}
      <form onSubmit={this.handleSubmit}>
        <h3>Edit recipe</h3>
        <h4>Recipe</h4>
        <input
          defaultValue={this.props.recipe.name} onChange={this.handleRecChange}
          />
        <h4>Ingredients</h4>
        <input
          defaultValue={this.props.recipe.ingredients} onChange={this.handleIngChange}
          /><br/>
        <input type="submit" value="Submit" /><button onClick={this.props.hide}>Close</button>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.recipe + " " + this.state.ingredients);
    let recipe = {"name": this.state.recipe, "ingredients": this.state.ingredients.split(",")};
    this.props.updateRecipe(this.props.recipe, recipe);
    this.props.hide();
  }
  handleRecChange(event){
    this.setState({recipe: event.target.value});
  }
  handleIngChange(event){
    this.setState({ingredients: event.target.value})
  }
}

export default Edit;
