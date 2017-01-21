import React from 'react';
import {render} from 'react-dom';


class NavBar extends React.Component {
  render() {
    return (
      <div className = "row" id = "nav_bar">
        <div className = "col-lg-1 btn btn-secondary">Logo</div>
        <div className = "col-lg-5">Search Bar</div>
        <div className = "col-lg-2 btn btn-secondary" ><a href="/cookbook">Cook Book</a></div>
        <div className = "col-lg-2 btn btn-secondary">Forum</div>
        <div className = "col-lg-2 btn btn-secondary">Login/Sign Up</div>
      </div>
    );
  }
}

export default NavBar;
