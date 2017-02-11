const React = require('react');

function DumberComponent(props) {
  return (
    <div onClick={props.handleClick}>
      <p>"I am just happy"</p>
    </div>

  );
}

module.exports = DumberComponent;