import React, { Component } from 'react';
import {render} from 'react-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className = "row" id = "nav_bar">
        <div className = "col-md-1 btn">
          <img style={{width: 60}, {height: 60}} src={'https://s3.amazonaws.com/cookey/cookey_logo.png'} />
        </div>
        <div className = "col-lg-5">Search Bar</div>
        <div className = "col-lg-2 btn btn-secondary" ><a href="/cookbook">Cook Book</a></div>
        <div className = "col-lg-2 btn btn-secondary">Forum</div>
        <div className = "col-lg-2 btn btn-secondary">Login/Sign Up</div>
      </div>
    );
  }
}

export default NavBar;
