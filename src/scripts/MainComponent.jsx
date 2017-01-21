import React from 'react';
import {render} from 'react-dom';

import NavBar from './NavComponent.jsx';

class MainPage extends React.Component {
  render() {
    return (
      <NavBar />
    );
  };
}

render(<MainPage/>, document.getElementById('root'));
