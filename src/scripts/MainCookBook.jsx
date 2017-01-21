import React from 'react';
import {render} from 'react-dom';

import NavBar from './NavComponent.jsx';


class MainPageCookBook extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  };
}

render(<MainPageCookBook/>, document.getElementById('rootCookBook'));
