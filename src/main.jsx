var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var Routes = require("./Routes.jsx");

ReactDOM.render(Routes, document.getElementById("main"));
ReactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
