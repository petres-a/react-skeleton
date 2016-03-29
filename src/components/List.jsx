var React = require('react');
var ListItem = require("./ListItem.jsx")
var PropTypes = React.PropTypes;
var HTTP = require('../services/http-service');

var List = React.createClass({
  getInitialState: function() {
    return ({ingredients: []});
  },

  componentWillMount: function(){
    HTTP.get("/ingredients")
    .then(function(data){
      console.log(data);
      this.setState({ingredients: data});
    }.bind(this));
  },

  render: function() {
    var listItems = this.state.ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
