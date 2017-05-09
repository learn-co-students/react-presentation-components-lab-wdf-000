const React = require('react')


class DumbComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        mood: "happy"
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      const component = this
      if(this.state.mood === "happy") {
        component.setState({mood: "sad"})
      } else {
        component.setState({mood: "happy"})
      }
    }


    render() {
      return (
        <div className="dumbOne" onClick={this.handleClick}>
          {this.state.mood}
        </div>
      )
    }

}


module.exports = DumbComponent;
