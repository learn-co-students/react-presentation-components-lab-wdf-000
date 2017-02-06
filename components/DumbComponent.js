const React = require('react');

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({ mood });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }

}

module.exports = DumbComponent;
