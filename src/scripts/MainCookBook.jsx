import React from 'react';
import {render} from 'react-dom';


class MainPageCookBook extends React.Component {
  render() {
    return (
      <div> CookBook Title</div>
    );
  };
}

render(<MainPageCookBook/>, document.getElementById('rootCookBook'));
