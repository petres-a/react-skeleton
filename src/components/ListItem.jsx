var React = require('react');
var PropTypes = React.PropTypes;

var ListItem = React.createClass({

  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }

});

module.exports = ListItem;
