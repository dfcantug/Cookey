import React from 'react';
import {render} from 'react-dom';

import NavBar from './NavComponent.jsx';

class MainPageLogin extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Login Title</h1>
      </div>
    );
  };
}

render(<MainPageLogin/>, document.getElementById('rootLogin'));
