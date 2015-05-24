let alt = require('../alt');

let GarageListActions = require('../actions/GarageListActions');
let data = require('../data/GarageList');

class GarageListStore {

  constructor() {
    this.searchText = '';
    this.vehicles = data;

    this.bindListeners({
      handleSearchVehicles: GarageListActions.SEARCH_VEHICLES
    });
  }

  handleSearchVehicles(searchText) {
    this.searchText = searchText;

    if (searchText === '') {
      this.vehicles = data;
      return;
    }

    this.vehicles = this.vehicles.filter((vehicle) => {
      let make = vehicle.make.toLowerCase();
      let model = vehicle.model.toLowerCase();

      return make.indexOf(searchText) !== -1 || model.indexOf(searchText) !== -1;
    });
  }

}

module.exports = alt.createStore(GarageListStore, 'GarageListStore');
