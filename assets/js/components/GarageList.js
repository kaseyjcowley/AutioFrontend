var React = require("react");
var _     = require("lodash");

var randomInt = function (min, max) {
  return Math.floor(Math.random() * max + min);
};

/**
 * Main GarageList node, uses Bootstrap's list-group
 */
var GarageList = React.createClass({

  getInitialState: function () {
    return {
      filterText: "",
      filteredVehicles: []
    };
  },

  filterList: function (event) {

    var filterText       = event.target.value;
    var filteredVehicles = _.filter(this.props.vehicleModels, function (vehicleModel) {
      var vehicle   = vehicleModel.attributes;
      var makeName  = vehicle.links.make.name;
      var modelName = vehicle.links.model.name;

      return makeName.indexOf(filterText) !== -1 || modelName.indexOf(filterText) !== -1;
    });

    this.setState({
      filterText: filterText,
      filteredVehicles: filteredVehicles
    });

  },

  getVehiclesToDisplay: function () {
    var vehicles = this.state.filteredVehicles.length !== 0 ? this.state.filteredVehicles : this.props.vehicleModels;

    return _.map(vehicles, function (vehicle) {
      return <GarageList.Vehicle key={vehicle.id} vehicle={vehicle.attributes}/>;
    });
  },

  render: function () {
    return (
      <div className="col-lg-8">
        <GarageList.SearchBar filterText={this.state.filterText} onUserInput={this.filterList}/>
        <ul className="list-group">
          {this.getVehiclesToDisplay()}
        </ul>
      </div>
    );
  }

});

/**
 * Search bar goodness! When typing in the input, React auto updates the list
 * of vehicles that match that description. First by make, then model.
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
