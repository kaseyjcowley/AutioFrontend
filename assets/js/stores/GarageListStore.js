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
      let links = vehicle.links;
      let make = links.make.name.toLowerCase();
      let model = links.model.name.toLowerCase();

      return make.indexOf(searchText) !== -1 || model.indexOf(searchText) !== -1;
    });
  }

}

module.exports = alt.createStore(GarageListStore, 'GarageListStore');
