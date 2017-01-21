import React from 'react';
import {render} from 'react-dom';

import NavComp from './NavComponent.jsx';
import SearchComp from './SearchComponent.jsx';
import FooterComp from './FooterComponent.jsx';


class MainPage extends React.Component {
  render() {
    return (
      <div className = "main">
        <NavComp />
        <SearchComp />
        <FooterComp />
      </div>
    );
  };
}

render(<MainPage/>, document.getElementById('root'));
