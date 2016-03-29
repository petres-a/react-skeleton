var React = require('react');
var PropTypes = React.PropTypes;
var validator = require('email-validator');

var EmailField = React.createClass({

  getInitialState: function(){
    return {
      valid: true,
      value: ""
    }
  },

  onChange: function(e){
    var newValue = e.target.value

    if (!validator.validate(newValue)){
      this.setState({valid: false, value: newValue});
    } else {
      this.setState({valid: true, value: newValue});
    }
  },

  clear: function(){
    this.setState({valid: true, value: ""});
  },

  render: function() {

    var hasError = this.state.valid ? {color: "black"} : {color: "blue"};
    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return (
      <div className={formClass} style={hasError}>
        <input className="form-control" style={hasError} onChange={this.onChange} placeholder="Email" value={this.state.value}/>
      </div>
    );
  }

});

module.exports = EmailField;
