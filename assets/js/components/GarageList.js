var React = require("react");

var randomInt = function (min, max) {
  return Math.floor(Math.random() * max + min);
};

/**
 * Main GarageList node, uses Bootstrap's list-group
 *
 * @author Kasey C.
 */
var GarageList = React.createClass({

  getInitialState: function () {
    return {
      filterText: "",
      renderVehicles: this.props.vehicles
    };
  },

  filterList: function (event) {

    var filterText = event.target.value;
    var vehicles = this.props.vehicles.filter(function (vehicle) {
      var makeName   = vehicle.links.make.name;
      var modelName  = vehicle.links.model.name;

      return makeName.indexOf(filterText) !== -1 || modelName.indexOf(filterText) !== -1;
    });

    this.setState({
      filterText: filterText,
      renderVehicles: vehicles
    });

  },

  render: function () {

    var rows = this.state.renderVehicles.map(function (vehicle) {
      return <GarageList.Vehicle key={vehicle.id} vehicle={vehicle}/>;
    });

    return (
      <div className="col-lg-8">
        <GarageList.SearchBar filterText={this.state.filterText} onUserInput={this.filterList}/>
        <ul className="list-group">
          {rows}
        </ul>
      </div>
    );
  }

});

/**
 * Search bar goodness! When typing in the input, React auto updates the list
 * of vehicles that match that description. First by make, then model.
 *
 * @author Kasey C.
 */
GarageList.SearchBar = React.createClass({

  render: function () {
    return (
      <form>
        <div className="form-group">
          <input type="text"
                 placeholder="Filter vehicles..."
                 className="form-control"
                 value={this.props.filterText}
                 onChange={this.props.onUserInput}/>
        </div>
      </form>
    );
  }

});

/**
 * Vehicle node for GarageList
 * Displays the data for each vehicle
 *
 * @author Kasey C.
 */
GarageList.Vehicle = React.createClass({

  render: function () {
    var vehicle = this.props.vehicle;
    var make    = vehicle.links.make;
    var model   = vehicle.links.model;

    return (
      <a className="list-group-item" href={"/#vehicles/" + vehicle.id}>
        <span className="badge progress-bar-danger">{randomInt(1, 10)}</span>
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
