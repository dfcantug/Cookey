import React from 'react';
import {render} from 'react-dom';

const divStyle = {
    backgroundImage: 'url(search-dark.png) noRepeat' + 10 + 'px' + 6 + 'px' + '#' + 444,
    border: 0 + 'none',
    font: 'bold' +  12 + 'px Arial,Helvetica,Sans-serif',
    color: '#' + 777,
    padding: 6 + 'px' + 15 + 'px' + 6 + 'px' + 35 + 'px',
    WebkitBorderRadius: 20 + 'px',
    MozBorderRadius: 20 + 'px',
    borderRadius: 20 + 'px',
    textShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    /*WebkitBoxShadow: '0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) inset',
    MozBoxShadow: '0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) inset',
    boxShadow: '0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) inset',
    WebkitTransition: all 0.7s ease 0s;
    -moz-transition: all 0.7s ease 0s;
    -o-transition: all 0.7s ease 0s;
    transition: all 0.7s ease 0s; */

};


class SearchComp extends React.Component {
  render() {
    return (
      <div className = "row">
        <div className = "col-md-6">Search Bar</div>
        <div class="column">
					<div id="sb-search" class="sb-search">
            <form method="get" action="/search" id="search">
             <input name="q" type="text" size="40" placeholder="Search..." style = {divStyle}></input>
            </form>
					</div>
				</div>
      </div>
    );
  }
}

export default SearchComp;
