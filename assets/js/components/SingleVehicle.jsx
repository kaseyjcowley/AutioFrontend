var React = require('react');

// TODO: Redesign dis b&*%$

var SingleVehicle = React.createClass({

  render: function () {
    var vehicle = this.props.vehicle;
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