var React    = require("react");
var Backbone = require("backbone");

// TODO: Redesign dis b&*%$

var SingleVehicle = React.createClass({

  propTypes: {
    vehicleModel: React.PropTypes.instanceOf(Backbone.Model).isRequired
  },

  render: function () {
    var vehicle = this.props.vehicleModel.attributes;
    var make    = vehicle.links.make;
    var model   = vehicle.links.model;

    return (
      <div className="jumbotron clearfix">
        <img src="http://lorempixel.com/200/200/transport" className="img-thumbnail pull-left"/>
        <h3>{vehicle.year} {make.name} {model.name}</h3>
      </div>
    );
  }

});

module.exports = SingleVehicle;
