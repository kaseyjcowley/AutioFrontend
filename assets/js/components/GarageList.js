var React    = require('react');
//var _        = require('lodash');

/**
 * Main GarageList node, uses Bootstrap's list-group
 */
var GarageList = React.createClass({

  propTypes: {
  },

  getInitialState: function () {
    return {};
  },

  render: function () {
  }

});

/**
 * Search bar goodness! When typing in the input, React auto updates the list
 * of vehicles that match that description. First by make, then model.
 */
GarageList.SearchBar = React.createClass({

  render: function () {
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
