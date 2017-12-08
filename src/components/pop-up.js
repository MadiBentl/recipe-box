import React, {Component} from "react";

class Popup extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipeName: '',
      recipeIngredients: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render(){
    return (
      <div className="popup">
      <h3>Add a recipe</h3>
      <h4>Recipe</h4>
      <input
        value={this.state.recipeName}
        onChange= {this.handleChange}/>
      <h4>Ingredients</h4>
      <input
        value={this.state.recipeIngredients}
        onChange= {this.handleChange}/>
      </div>
    );
  }
    handleChange(event) {
      this.setState({recipeName: event.target.value});
    }
}


export default Popup;
