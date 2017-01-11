const React = require('react');

class DumbComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render(){
    return(
      <div onClick={this.clickHandler}>
        {this.state.mood}
      </div>
    )
  }
}

module.exports = DumbComponent
