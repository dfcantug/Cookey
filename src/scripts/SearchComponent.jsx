import React from 'react';
import {render} from 'react-dom';

const searchStyle = {
    border: 0 + 'none',
    height: 50 + 'px',
    fontSize: 30 + 'px',
    color: '#' + 777,
    marginTop: 180 + 'px',
    marginLeft: 140 + 'px',
    padding: 6 + 'px ' + 105 + 'px ' + 6 + 'px ' + 35 + 'px',
    WebkitBorderRadius: 70 + 'px',
    MozBorderRadius: 70 + 'px',
    borderRadius: 70 + 'px',
    WebkitTransition: 'all 0.7s ease 0s',
    MozTransition: 'all 0.7s ease 0s',
    OTransition: 'all 0.7s ease 0s',
    transition: 'all 0.7s ease 0s',
    position: 'absolute'
};

const imgStyle = {
  opacity: 0.5,
  width: 1200 + 'px',
  height: 600 + 'px',
  borderRadius: 10 + 'px',
  position: 'relative',
  top: -75 + 'px',
  left: -10 + 'px',
  zIndex: -1
};


class SearchComp extends React.Component {
  render() {
    return (
      <div className = "row">
        <center>
        <form method="get" action="/search" id="search">
         <input name="q" type="text" size="50" placeholder="Search for recipes..." style = {searchStyle}></input>
         <img style={imgStyle} src={'http://videos2.healthination.com/HN_BB_05_EasyCooking_ProRes_739/HN_BB_05_EasyCooking_ProRes_739-img_1280x720.jpg'} />
        </form>
      </center>
      </div>
    );
  }
}

export default SearchComp;
