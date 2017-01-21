import React from 'react';
import {render} from 'react-dom';


class FooterComp extends React.Component {
  render() {
    return (
      <div className = "row" style = {{textAlign: 'center'}}>
        <div className = "col-md-4">© Cookey 2017</div>
        <div className = "col-md-4">GitHub</div>
        <div className = "col-md-4">Mikael, David, Joe, Carlos</div>
      </div>
    );
  }
}

export default FooterComp;
