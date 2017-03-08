const React = require('react');

class DumbComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'happy'
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render() {
    return(
      <div onClick={this.onClick}>
        {this.state.mood}
      </div>
    )
  }
}

module.exports = DumbComponent;
