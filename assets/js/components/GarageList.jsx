var React = require('React');

var randomInt = function () {
  return Math.floor(Math.random() * 9 + 1);
};

/**
 * Main GarageList node, uses Bootstrap's list-group
 * TODO: this.props.vehicles data from api.autio.local
 *
 * @public
 * @author Kasey C.
 */
var GarageList = React.createClass({
  render: function () {
    return (
      <ul className="list-group">
        {
          this.props.vehicles.map(function (vehicle) {
            return <GarageList.Vehicle key={vehicle.id} vehicle={vehicle}/>
          })
        }
      </ul>
    );
  }
});

/**
 * Vehicle node for GarageList
 * Displays the data for each vehicle
 *
 * @public
 * @author Kasey C.
 */
GarageList.Vehicle = React.createClass({
  render: function () {
    var vehicle = this.props.vehicle;
    var make    = vehicle.links.make;
    var model   = vehicle.links.model;

    return (
      <a className="list-group-item">
        <span className="badge progress-bar-danger">{randomInt()}</span>
        <h4 className="list-group-item-heading">
          {vehicle.year} {make.name} {model.name}
        </h4>

        <p className="list-group-item-text">
          <div><strong>Mileage:</strong> {vehicle.mileage}</div>
          <div><strong>VIN:</strong> {vehicle.vin}</div>
        </p>
      </a>
    );
  }
});

module.exports = GarageList;