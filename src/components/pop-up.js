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
  }
  render(){
    return (
      <div className="popup">
      <form>
        <h3>Add a recipe</h3>
        <h4>Recipe</h4>
        <input
          value={this.state.recipeName}
          onChange= {this.handleRecChange}/>
        <h4>Ingredients</h4>
        <input
          value={this.state.recipeIngredients}
          onChange= {this.handleIngChange}/>
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
}


export default Popup;
