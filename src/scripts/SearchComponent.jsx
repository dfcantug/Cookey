import React from 'react';
import {render} from 'react-dom';

const divStyle = {
    border: 0 + 'none',
    height: 50 + 'px',
    fontSize: 30 + 'px',
    color: '#' + 777,
    marginTop: 20 + 'px',
    marginBottom: 50 + 'px',
    padding: 6 + 'px ' + 105 + 'px ' + 6 + 'px ' + 35 + 'px',
    WebkitBorderRadius: 70 + 'px',
    MozBorderRadius: 70 + 'px',
    borderRadius: 70 + 'px',
    textShadow: 0 + 'px ' + 2 + 'px ' + 2 + 'px ' + 'rgba(0, 0, 0, 0.3)',
    WebkitTransition: 'all 0.7s ease 0s',
    MozTransition: 'all 0.7s ease 0s',
    OTransition: 'all 0.7s ease 0s',
    transition: 'all 0.7s ease 0s'
};


class SearchComp extends React.Component {
  render() {
    return (
      <div className = "row">
        <div class="column">
					<div class="search">
            <center>
            <form method="get" action="/search" id="search">
             <input name="q" type="text" size="50" placeholder="Search..." style = {divStyle}></input>
            </form>
            </center>
					</div>
				</div>
      </div>
    );
  }
}

export default SearchComp;
