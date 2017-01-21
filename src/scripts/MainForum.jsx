import React from 'react';
import {render} from 'react-dom';

import NavBar from './NavComponent.jsx';


class MainPageForum extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Forum Title</h1>
      </div>
    );
  };
}

render(<MainPageForum/>, document.getElementById('rootForum'));
