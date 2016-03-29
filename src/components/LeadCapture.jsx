var React = require('react');
var PropTypes = React.PropTypes;
var EmailField = require("./EmailField.jsx");
var NameField = require("./NameField.jsx");

var LeadCapture = React.createClass({
  getInitialState: function(){
    return ({errorMessage: "invisible"})
  },

  onClick: function(){
    if (this.refs.fieldEmail.state.valid) {
      this.setState({errorMessage: "invisible"});
      this.refs.fieldEmail.clear();
      this.refs.fieldFirstName.clear();
      alert("all good");
    } else {
      this.setState({errorMessage: "visible errorMessage"});
    }
  },

  render: function() {

    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField ref="fieldFirstName" type="First" />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onClick}>Submit</button>
            <div className={this.state.errorMessage + " text-centered"}>
              <p>Hey, you screwed up!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = LeadCapture;
