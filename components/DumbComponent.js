const React = require('react')

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.handleMoodSwing = this.handleMoodSwing.bind(this)
    this.state = {
      mood: 'happy'
    };
  }

  handleMoodSwing(){
    const m = this.state.mood
    this.setState({
      mood: (m === 'happy' ? 'sad' : 'happy')
    })
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

