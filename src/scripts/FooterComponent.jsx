import React from 'react';
import {render} from 'react-dom';


class FooterComp extends React.Component {
  render() {
    return (
      <div className = "row">
        <div className = "col-md-6">CopyRight</div>
        <div className = "col-md-6">Team Info</div>
      </div>
    );
  }
}

export default FooterComp;
