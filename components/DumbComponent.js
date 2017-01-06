const React = require('react');
const ReactDOM = require('react-dom');

class DumbComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
 module.exports = DumbComponent;
