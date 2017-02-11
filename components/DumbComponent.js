const React = require('react');

class DumbComponent extends React.Component {
  constructor(){
    super();
    this.state ={
      mood: "happy",
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    const change = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({
      mood: change
    })

  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }

}

module.exports = DumbComponent;