const React  = require('react');
const Radium = require('Radium');
const mui    = require('material-ui');

const ChildContextMixin = require('../mixins/ChildContextMixin');

const List        = mui.List;
const ListItem    = mui.ListItem;
const ListDivider = mui.ListDivider;
const Paper       = mui.Paper;
const Avatar      = mui.Avatar;
const TextField   = mui.TextField;

const GarageListActions = require('../actions/GarageListActions');
const GarageListStore   = require('../stores/GarageListStore');

const styles = {
  searchBar: {
    marginBottom: '10px'
  }
};

/**
 * Main GarageList node, uses Bootstrap's list-group
 */
const GarageList = React.createClass({

  propTypes: {
  },

  mixins: [ChildContextMixin],

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
    let {
      searchText,
      vehicles
    } = this.state;

    return (
      <div className="col-sm-6">
        <GarageList.SearchBar searchText={searchText} />

        <Paper>
          <List>
            {vehicles.map((vehicle, index) => {

              const {
                make,
                model
              } = vehicle.links;

              return (
                <div>
                  <ListItem
                    key={`${vehicle.year}_${make.name}_${make.model}`}
                    primaryText={
                      <h2>{`${vehicle.year} ${make.name} ${model.name}`}</h2>
                    }
                    secondaryText={
                      <p>
                        <div><strong>VIN:</strong> {vehicle.vin}</div>
                        <div><strong>Mileage:</strong> {vehicle.mileage}</div>
                      </p>
                    }
                    leftAvatar={
                      <Avatar>{make.name[0]}</Avatar>
                    }
                  />
                  {(index < (vehicles.length - 1))
                    ? <ListDivider />
                    : null}
                </div>
              );

            })}
          </List>
        </Paper>
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
      <TextField
        hintText="Search vehicles..."
        value={this.props.searchText}
        onChange={(e) => GarageListActions.searchVehicles(e.target.value)}
        style={styles.searchBar}
        fullWidth={true}
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

module.exports = Radium(GarageList);
