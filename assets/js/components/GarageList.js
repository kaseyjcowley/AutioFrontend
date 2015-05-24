let React  = require('react');

let GarageListActions = require('../actions/GarageListActions');
let GarageListStore = require('../stores/GarageListStore');

/**
 * Main GarageList node, uses Bootstrap's list-group
 */
let GarageList = React.createClass({

  onHasBeenSearched(searchText) {
    this.setState({
      searchText: searchText
    });
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
        <GarageList.SearchBar />
        <div className="well" style={{margin: '10px 0'}}>Search text entered: <code>{(this.state.searchText) ? this.state.searchText : 'None'}</code></div>
      </div>
    );
  }

});

/**
 * Search bar goodness! When typing in the input, React auto updates the list
 * of vehicles that match that description. First by make, then model.
 */
GarageList.SearchBar = React.createClass({

  mixins: [Reflux.listenTo(GarageListStore, 'onUpdateSearchText')],

  getInitialState() {
    return {
      searchText: ''
    };
  },

  onUpdateSearchText(searchText) {
    this.setState({
      searchText: searchText
    });
  },

  render: function () {
    return (
      <input
        type="text"
        className="form-control"
        value={this.state.searchText}
        onChange={(e) => GarageListActions.updateSearchText(e.target.value)}
        placeholder="Search vehicles..."/>
    );
  }

});

/**
 * Vehicle node for GarageList
 * Displays the data for each vehicle
 */
GarageList.Vehicle = React.createClass({

  render: function () {
  }

});

module.exports = GarageList;
