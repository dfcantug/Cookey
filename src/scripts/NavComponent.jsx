import React from 'react';
import {render} from 'react-dom';


class NavBar extends React.Component {
  render() {
    return (
      <div className = "row" id = "nav_bar">
        <div className = "col-md-1 btn btn-secondary">Logo</div>
        <div className = "col-md-8">Search Bar</div>
        <div className = "col-md-1 btn btn-secondary" ><a href="/cookbook">Cook Book</a></div>
        <div className = "col-md-1 btn btn-secondary">Forum</div>
        <div className = "col-md-1 btn btn-secondary">Login/Sign Up</div>
      </div>
    );
  }
}

export default NavBar;
