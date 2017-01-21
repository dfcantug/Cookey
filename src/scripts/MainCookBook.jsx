import React from 'react';
import {render} from 'react-dom';
<<<<<<< HEAD

import NavComp from './NavComponent.jsx';
=======
import NavBar from './NavComponent.jsx';
>>>>>>> 900d7c35ee3fd53811e4c88661c11f22229d9a5c

class MainPageCookBook extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <NavComp />
      </div>
=======
      <NavBar />
      <Recipe />
    </div>
>>>>>>> 900d7c35ee3fd53811e4c88661c11f22229d9a5c
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
