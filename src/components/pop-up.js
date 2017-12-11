import React, {Component} from "react";

class Popup extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipeName: '',
      recipeIngredients: ''
    };
    this.handleRecChange = this.handleRecChange.bind(this);
    this.handleIngChange = this.handleIngChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return (
       //add extra div to add grey to popped up modal
      <div className="popup">
      <form onSubmit={this.handleSubmit}>
        <h3>Add a recipe</h3>
        <h4>Recipe</h4>
        <input
          value={this.state.recipeName}
          onChange= {this.handleRecChange}/>
        <h4>Ingredients</h4>
        <input
          value={this.state.recipeIngredients}
          onChange= {this.handleIngChange}/><br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
    handleRecChange(event) {
      this.setState({recipeName: event.target.value});
    }
    handleIngChange(event) {
      this.setState({recipeIngredients: event.target.value});
    }
    handleSubmit(event){
      event.preventDefault();
      console.log(this.state.recipeName + this.state.recipeIngredients);
      let recipe = {"name": this.state.recipeName, "ingredients": this.state.recipeIngredients.split(',')};
      this.props.addRecipe(recipe);
    }
}


export default Popup;
