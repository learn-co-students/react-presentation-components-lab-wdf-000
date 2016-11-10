const React = require('react')

class DumbComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      mood: "happy"
    };
    this.moodSwing = this.moodSwing.bind(this);
  }


  moodSwing(){
    let newMood;
    this.state.mood === "happy" ? newMood = "sad" : newMood = "happy";
    this.setState({
      mood: newMood
    })
  }

  render(){
    return <div onClick={this.moodSwing}>{this.state.mood}</div>
  }

}

module.exports = DumbComponent
