let React  = require('react');

let GarageListActions = require('../actions/GarageListActions');
let GarageListStore = require('../stores/GarageListStore');

/**
 * Main GarageList node, uses Bootstrap's list-group
 */
let GarageList = React.createClass({

  propTypes: {
  },

  getInitialState() {
    return GarageListStore.getState();
  },

  componentDidMount() {
    GarageListStore.listen(this.onStoreChange);
  },

  componentWillUnmount() {
    GarageListStore.unlisten(this.onStoreChange);
  },

  onStoreChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <div className="col-sm-6">
        <GarageList.SearchBar searchText={this.state.searchText} />
        <div style={{marginTop: 10}}>
          <div className="list-group">
            {this.state.vehicles.map((vehicle) =>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h4>
            </a>
            )}
          </div>
        </div>
      </div>
    );
  }

});

/**
 * Search bar goodness! When typing in the input, React auto updates the list
 * of vehicles that match that description. First by make, then model.
 */
GarageList.SearchBar = React.createClass({

  propTypes: {
    searchText: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      searchText: ''
    };
  },

  render() {
    return (
      <input
        type="text"
        className="form-control"
        value={this.props.searchText}
        onChange={(e) => GarageListActions.searchVehicles(e.target.value)}
        placeholder="Search vehicles..."
        />
    );
  }

});

/**
 * Vehicle node for GarageList
 * Displays the data for each vehicle
 */
GarageList.Vehicle = React.createClass({

  render() {
  }

});

module.exports = GarageList;
