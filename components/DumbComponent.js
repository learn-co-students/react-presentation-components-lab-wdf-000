import React, { Component, PropTypes } from 'react';

class DumbComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {mood:'happy'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    var t = this.state.mood;
    this.setState({
      mood: ( t == 'happy' ? 'sad' : 'happy' ),
    });
  }

  render() {
    return (
      <div onClick={this.handleClick} >
        {this.state.mood}
      </div>
    );
  }
}

 module.exports = DumbComponent;
