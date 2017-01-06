const React = require('react');
const ReactDOM = require('react-dom');

const DumbComponent = require('./components/DumbComponent');
const DumberComponent = require('./components/DumberComponent');

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={function console(){(alert('hello'))}} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
