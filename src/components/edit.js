import React, {Component} from "react";

class Edit extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div className = "Edit">
      <form onSubmit={this.handleSubmit}>
        <h3>Edit recipe</h3>
        <h4>Recipe</h4>
        <input
          value={this.props.recipeName}
          />
        <h4>Ingredients</h4>
        <input
          value={this.props.recipeIngredients}
          /><br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  handleSubmit(){
    console.log("submitted");
  }
}

export default Edit;
