import React from 'react';
import {render} from 'react-dom';
import NavBar from './NavComponent.jsx';

class MainPageCookBook extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <Recipe />
    </div>
    );
  };
}

class Recipe extends React.Component {
  constructor() {
      super();
      this.state = {
        title: 'Current Recipe',
        ingredients: Array(10).fill('ingredient')
      };
  }
  render() {
    var ingredientsDivs = [];
    for (var i = 0; i < this.state.ingredients.length; i++){
      ingredientsDivs.push(<span> {this.state.ingredients[i]}</span>);
    }
    return(
      <div>
    <div> {this.state.title} </div>
    <div> {ingredientsDivs} </div>
  </div>
  )
  }
}

class Ingredient extends React.Component{

}
render(<MainPageCookBook/>, document.getElementById('rootCookBook'));
