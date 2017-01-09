const React = require('react');
const ReactDOM = require('react-dom');

class DumbComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick(){
    var result;
    this.state.mood === "happy" ? result = "sad" : result = "happy"
    this.setState({
      mood: result
    })
  }

  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>
    )

  }


}



module.exports = DumbComponent;
