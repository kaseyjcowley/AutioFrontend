let alt = require('../alt');

let GarageListActions = require('../actions/GarageListActions');
let data = require('../data/GarageList');

class GarageListStore {

  constructor() {
    this.searchText = '';
    this.vehicles = data;

    this.bindActions(GarageListActions);
  }

  onSearchVehicles(searchText) {
    this.searchText = searchText;

    if (searchText === '') {
      this.vehicles = data;
      return;
    }

    this.vehicles = this.vehicles.filter(vehicle => {
      let {
        make,
        model
      } = vehicle.links;

      make = make.name.toLowerCase();
      model = model.name.toLowerCase();

      return make.includes(searchText) || model.includes(searchText);
    });
  }

}

module.exports = alt.createStore(GarageListStore, 'GarageListStore');
