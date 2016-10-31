const React = require('react')

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    };
    this.handleMoodSwing = this.handleMoodSwing.bind(this)
  }

  handleMoodSwing() {
  	if (this.state.mood == 'happy') {
	  	this.setState({
	  		mood: 'sad'
	  	});
	  } else {
	  	this.setState({
	  		mood: 'happy'
	  	})
	  }
  }

  render() {
    return (
    <div onClick={this.handleMoodSwing}>
    <p>{this.state.mood}</p> 
    </div>  
    )
  }
}

module.exports = DumbComponent;