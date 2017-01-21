import React from 'react';
import {render} from 'react-dom';

import NavComp from './NavComponent.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class MainPageCookBook extends React.Component {
  render() {
    return (
      <div>
        <NavComp />
        <Recipe />
      </div>
    );
  };
}

class Recipe extends React.Component {
  constructor() {
      super();
      this.state = {
        title: 'Current Recipe'
      };
  }
  render() {
    const ingredients = ['Chile Piquin', 'Tortillas'];
    const ingredientDivs = ingredients.map((ingredient, index) => <li> {ingredient} </li>);

    /* this will eventually come from the props that are parsed in from the databse*/
    return(
      <Tabs onSelect={this.handleSelect} lectedIndex={2}>
        <TabList>
          <Tab>Ingredients</Tab>
          <Tab>Recipes</Tab>
        </TabList>

        <TabPanel>
          <div>Ingredients yo</div>
        </TabPanel>

        <TabPanel>
          <div>
            <div> {this.state.title} </div>
            <ul>{ingredientDivs}</ul>
          </div>
        </TabPanel>

      </Tabs>
    )
  }
}

class Ingredient extends React.Component{

}
render(<MainPageCookBook/>, document.getElementById('rootCookBook'));
