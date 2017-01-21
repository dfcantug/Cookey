import React from 'react';
import {render} from 'react-dom';


class NavBar extends React.Component {
  render() {
    return (
      <div className = "row" id = "nav_bar">
        <div className = "col-md-1">Logo</div>
        <div className = "col-md-7">Search Bar</div>
        <div className = "col-md-1">CookBook</div>
        <div className = "col-md-1">Forum</div>
        <div className = "col-md-1">Login</div>
        <div className = "col-md-1">Sign Up</div>
      </div>
    );
  }
}

export default NavBar;
