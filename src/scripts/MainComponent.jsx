import React from 'react';
import {render} from 'react-dom';

import NavBar from './NavComponent.jsx';
import SearchComp from './SearchComponent.jsx';
import FooterComp from './FooterComponent.jsx';


class MainPage extends React.Component {
  render() {
    return (
      <div className = "main">
        <NavBar />
        <SearchComp />
        <FooterComp />
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
}

class Ingredient extends React.Component{

}

render(<MainPage/>, document.getElementById('root'));
