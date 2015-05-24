let alt = require('../alt');

let GarageListActions = {
  searchVehicles(searchText) {
    this.dispatch(searchText);
  }
};

module.exports = alt.createActions(GarageListActions);
