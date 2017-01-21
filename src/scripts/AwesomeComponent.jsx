import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className="row">
            <div className="col-md-4">
                  <div id="count2">
                    Likes : <span>{this.state.likesCount}</span>
                    <div><button onClick={this.onLike}>Like Me</button></div>
                  </div>
            </div>
            <div className="col-md-4">
                  <span id="bitch">HELL FUCKING YEAH</span>
            </div>
      </div>


    );
  }

}

export default AwesomeComponent;
