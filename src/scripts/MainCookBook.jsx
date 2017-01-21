import React from 'react';
import {render} from 'react-dom';

import NavComp from './NavComponent.jsx';


class MainPageCookBook extends React.Component {
  render() {
    return (
      <div>
        <NavComp />
      </div>
    );
  };
}

render(<MainPageCookBook/>, document.getElementById('rootCookBook'));
