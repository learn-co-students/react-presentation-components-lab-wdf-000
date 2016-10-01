import React from 'react';

var DumbComponent = React.createClass({
  getInitialState: function() {
    return {mood: 'happy'}
  },
  handleClick: function() {
    var newMood = ((this.state.mood == 'happy') ? 'sad' : 'happy');
    this.setState({
      mood: newMood
    })
  },
  render: function() {
    return (
      <div onClick={this.handleClick}> 
        {this.state.mood}
      </div>
    );
  }

});

module.exports = DumbComponent;
